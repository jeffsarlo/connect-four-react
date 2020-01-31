import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Banner from './components-main/Banner'
import ScorePlayerOne from './components-main/ScorePlayerOne'
import ScorePlayerTwo from './components-main/ScorePlayerTwo'
import Gameboard from './components-main/Gameboard'
import LeftLight from './components-main/LeftLight'
import RightLight from './components-main/RightLight'
import StartNewButton from './components-main/StartNewButton'
import PlayerButton from './components-main/PlayerButton'
import VideoScreen from './components-main/VideoScreen'
import AddPlayers from './components-route/AddPlayers'
import './css/App.css'

class App extends Component {

  state = {
    gameBoard: [],
    playerOne: 'Player 1',
    playerTwo: 'Player 2',
    playerTurn: true,
    banner: 'Connect',
    bannerClass: 'screen',
    leftLightClass: 'leftLight',
    rightLightClass: 'rightLight',
    videoScreen: "",
    playerOneWins: 0,
    playerTwoWins: 0,
    winner: false,
  }


  // create game board
  createBoards = () => {
    const createBoard = []

    for (let i = 0; i < 6; i++) {
      createBoard[i] = []
      for (let j = 0; j < 7; j++) {
        createBoard[i].push(
          {key:[i]+[j], className:'black', player: null}
        )
      }
    }
    this.setState({
      gameBoard: createBoard
    })
  }

  // button handler
  handleClick = (e) => {
    if (e.target.innerText === 'NEW GAME') {
      this.startNewGame()
    }
    if (e.target.innerText === 'NEW PLAYER') {
      this.addNewPlayer()
    }
  }

  // new player names
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    })
  }

  // submit new players
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      videoScreen: "Let's Play!"
    })

  }

  // start new game
  startNewGame = () => {
    this.setState({
      playerTurn: null,
      banner: 'Connect',
      bannerClass: 'screen',
      leftLightClass: 'leftLight',
      rightLightClass: 'rightLight',
      videoScreen: 'Good Luck!',
      winner: false
    })
    this.createBoards()
    this.randomNumber()
  }

  // winner handler
  winnerHandler = (player, time) => {
    this.videoScreen(player + ' won!')
    this.winnerBanner(player)
    this.sideLights(player, time)
    this.scoreBoard(player)

  }

  // choose first player
  randomNumber = () => {
    const ranNum = Math.floor(Math.random() * 2)
    const { playerOne } = this.state
    const { playerTwo } = this.state

    if (ranNum === 0){
      this.playerTurn = true
      this.videoScreen(playerOne + ' goes first!')
      this.sideLights(playerOne, 3000)
    } else if (ranNum === 1) {
        this.playerTurn = false
        this.videoScreen(playerTwo + ' goes first!')
        this.sideLights(playerTwo, 3000)
    }
    this.setState({
      playerTurn: this.playerTurn
    })
  }

  // player move
  playerMove = (e) => {
    const board = [...this.state.gameBoard]
    const { playerTurn } = this.state
    const { playerOne } = this.state
    const { playerTwo } = this.state
    const cell = e.target

    if (!this.state.winner) {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (cell.innerText === board[i][j].key &&
              board[i][j].player === null &&
              playerTurn === true) {
                board[i][j].className = 'red'
                board[i][j].player = playerOne
                this.videoScreen(playerTwo + "'s turn")
                this.checkForWinner(playerOne)
          } else if (cell.innerText === board[i][j].key &&
                 board[i][j].player === null &&
                 playerTurn === false) {
                   board[i][j].className = 'blue'
                   board[i][j].player = playerTwo
                   this.videoScreen(playerOne + "'s turn")
                   this.checkForWinner(playerTwo)
            }
            this.setState({
              gameBoard: board,
              playerTurn: !playerTurn
            })
        }
      }
    }
  }

  // check winner
  checkForWinner = (lastMove) => {
    const { gameBoard } = this.state
    const rows = gameBoard.length
    const cols = gameBoard[0].length
    let player = lastMove

    // horizontal Check
    for (let i = 0; i < rows; i++ ) {
      for (let j = 0; j < cols-3; j++) {
        if (gameBoard[i][j].player === player && gameBoard[i][j+1].player === player &&
            gameBoard[i][j+2].player === player && gameBoard[i][j+3].player === player) {
            this.setState({
              winner: true
            })
              this.videoScreen(player)
              this.winnerHandler(player, 10000)
            return true
        }
      }
    }
    // vertical Check
    for (let i = 0; i < rows-3 ; i++ ){
      for (let j = 0; j < cols; j++) {
        if (gameBoard[i][j].player === player && gameBoard[i+1][j].player === player &&
            gameBoard[i+2][j].player === player && gameBoard[i+3][j].player === player) {
            this.setState({
              winner: true
            })
            this.videoScreen(player)
            this.winnerHandler(player, 10000)
            return true
        }
      }
    }
    // ascending diagonal check
    for (let i = 3; i < rows; i++){
      for (let j = 0; j < cols-3; j++){
        if (gameBoard[i][j].player === player && gameBoard[i-1][j+1].player === player &&
            gameBoard[i-2][j+2].player === player && gameBoard[i-3][j+3].player === player) {
            this.setState({
              winner: true
            })
            this.videoScreen(player)
            this.winnerHandler(player, 10000)
            return true
        }
      }
    }
    // descending Diagonal Check
    for (let i = 3; i < rows; i++){
      for (let j = 3; j < cols; j++){
        if (gameBoard[i][j].player === player && gameBoard[i-1][j-1].player === player &&
            gameBoard[i-2][j-2].player === player && gameBoard[i-3][j-3].player === player) {
            this.setState({
              winner: true
            })
            this.videoScreen(player)
            this.winnerHandler(player, 10000)
            return true
        }
      }
    }
    return false
  }

  // banner winner
  winnerBanner = () => {
    this.setState({
      banner: 'WINNER!',
      bannerClass: 'screen + winner'
    })
    setTimeout(() => {
      this.setState({
        banner: 'Connect',
        bannerClass: 'screen'
      })
    },10000)}

  // scoreboard
  scoreBoard = (player) => {
    const { playerOne } = this.state
    const { playerTwo } = this.state

    if (player === playerOne) {
      this.setState((prevState, props) => {
        return {
          playerOneWins: prevState.playerOneWins + 1
        }
      })
    } else if (player === playerTwo) {
      this.setState((prevState, props) => {
        return {
          playerTwoWins: prevState.playerTwoWins + 1
        }
      })
    }
  }

  // side lights
  sideLights = (player, time) => {
    const { playerOne } = this.state
    const { playerTwo } = this.state

    if (player === playerOne) {
      this.setState({
        leftLightClass: 'leftLight + blinkL'
      })
      setTimeout(() => {
        this.setState({
          leftLightClass: 'leftLight'
        })
      },time)
    }
    if (player === playerTwo) {
      this.setState({
        rightLightClass: 'rightLight + blinkR'
      })
      setTimeout(() => {
        this.setState({
          rightLightClass: 'rightLight'
        })
      },time)
    }
  }

  // video diplays messages
  videoScreen = (message) => {
    this.setState({
      videoScreen: message
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Route
              path="/addplayers"
              render={ () => <AddPlayers
                title="Add New Players"
                playerOne={ this.state.playerOne }
                playerTwo={ this.state.playerTwo }
                handleChange={ this.handleChange }
                handleSubmit={ this.handleSubmit }
              /> }
            />
            <div className="header">
              <Banner
                title={ this.state.banner }
                class={ this.state.bannerClass }
                winnerBanner={this.winnerBanner}
              />
            </div>
            <div className="body">
              <ScorePlayerOne
                title={ this.state.playerOne}
                wins={ this.state.playerOneWins }
              />
              <LeftLight
                leftLight={ this.leftLight }
                class={ this.state.leftLightClass }
              />
              <Gameboard
                gameBoard={ this.state.gameBoard }
                playerMove={ this.playerMove }
              />
              <RightLight
                rightLight={ this.rightLight }
                class={ this.state.rightLightClass }
              />
              <ScorePlayerTwo
                title={ this.state.playerTwo }
                wins={ this.state.playerTwoWins }
              />
            </div>
            <div className="footer">
              <StartNewButton
                title="NEW GAME"
                handleClick={ this.handleClick }
              />
              <VideoScreen title={ this.state.videoScreen } />
              <PlayerButton
                title="PLAYERS"
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
