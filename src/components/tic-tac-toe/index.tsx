import { useEffect, useState } from "react";
import "./style.css";

interface ISquare {
	value: string;
	handleClick: () => void;
	isWinning: boolean;
}

function Square({ value, handleClick, isWinning }: ISquare) {
	return (
		<button
			className="square"
			onClick={handleClick}
			style={{
				color: isWinning ? "red" : "black",
			}}
		>
			{value}
		</button>
	);
}

export default function TicTacToe() {
	const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
	const [isXTurn, setIsXTurn] = useState<boolean>(true);
	const [status, setStatus] = useState<string>("");
	const [winningPositions, setWinningPositions] = useState<number[]>(Array(3));

	function handleClick(getCurrentSquare: number) {
		let cpySquares: string[] = [...squares];

		if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

		cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
		setIsXTurn(!isXTurn);
		setSquares(cpySquares);
	}

	function getWinner(squares: string[]) {
		const winningPatterns: number[][] = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
			[0, 3, 6],
			[1, 4, 7],
		];

		for (let i = 0; i < winningPatterns.length; i++) {
			const [x, y, z] = winningPatterns[i];

			if (
				squares[x] &&
				squares[x] === squares[y] &&
				squares[x] === squares[z]
			) {
				setWinningPositions(winningPatterns[i]);
				return squares[x];
			}
		}
		return null;
	}

	function handleRestart() {
		setSquares(Array(9).fill(""));
		setIsXTurn(true);
		setWinningPositions(Array(3));
	}

	useEffect(() => {
		if (!getWinner(squares) && squares.every((item) => item !== "")) {
			setStatus("This is a draw! Please restart the game");
		} else if (getWinner(squares)) {
			setStatus(`Winner is ${getWinner(squares)}`);
		} else {
			setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
		}
	}, [squares, isXTurn]);

	return (
		<div className="tic-tac-toe-container">
			<div className="row">
				<Square
					handleClick={() => handleClick(0)}
					value={squares[0]}
					isWinning={winningPositions.includes(0)}
				/>
				<Square
					handleClick={() => handleClick(1)}
					value={squares[1]}
					isWinning={winningPositions.includes(1)}
				/>
				<Square
					handleClick={() => handleClick(2)}
					value={squares[2]}
					isWinning={winningPositions.includes(2)}
				/>
			</div>
			<div className="row">
				<Square
					handleClick={() => handleClick(3)}
					value={squares[3]}
					isWinning={winningPositions.includes(3)}
				/>
				<Square
					handleClick={() => handleClick(4)}
					value={squares[4]}
					isWinning={winningPositions.includes(4)}
				/>
				<Square
					handleClick={() => handleClick(5)}
					value={squares[5]}
					isWinning={winningPositions.includes(5)}
				/>
			</div>
			<div className="row">
				<Square
					handleClick={() => handleClick(6)}
					value={squares[6]}
					isWinning={winningPositions.includes(6)}
				/>
				<Square
					handleClick={() => handleClick(7)}
					value={squares[7]}
					isWinning={winningPositions.includes(7)}
				/>
				<Square
					handleClick={() => handleClick(8)}
					value={squares[8]}
					isWinning={winningPositions.includes(8)}
				/>
			</div>
			<h1>{status}</h1>
			<button onClick={handleRestart}>Restart</button>
		</div>
	);
}
