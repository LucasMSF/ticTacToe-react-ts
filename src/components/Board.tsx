import React, { Component } from 'react'
import Square from './Square'

type Props = {}

type State = {
    squares: string[],
    xIsNext: boolean
}

class Board extends Component<Props, State> {
    state: State

    constructor(props: Props) {
        super(props);

        this.state = {
            squares: Array(9).fill(''),
            xIsNext: true
        }

    }

    renderSquare(i: any) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => { this.handleClick(i) }}
        />;
    }

    handleClick(i: any) {
        const squares = this.state.squares.slice();
        if(this.calculateWinner(squares) || squares[i]) return false

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const winner: string | null = this.calculateWinner(this.state.squares);
        const status: string = winner ? `Winner is ${winner}!` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board