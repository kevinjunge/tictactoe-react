class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  render(){
    consst winner = calculateWinner(current.squares);
    let status;
    if(winner){
      status = 'Winner: '+winner;
    }else{
      status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
    }
    return(
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol></ol>
        </div>
      </div>
    )
  }
}
