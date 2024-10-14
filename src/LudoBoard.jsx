import { useState } from "react";
import "./App.css";
import ludoImage from './ludo.png';

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });
    let [arr, SetArr] = useState(["no moves"]);

    let updateBlue = () => {
        SetArr((prevArr) => [...prevArr, "blue moves"]);
        setMoves((prevMoves) => ({
            ...prevMoves,
            blue: prevMoves.blue + 1
        }));
    };

    let updateYellow = () => {
        SetArr((prevArr) => [...prevArr, "yellow moves"]);
        setMoves((prevMoves) => ({
            ...prevMoves,
            yellow: prevMoves.yellow + 1
        }));
    };

    let updateGreen = () => {
        SetArr((prevArr) => [...prevArr, "green moves"]);
        setMoves((prevMoves) => ({
            ...prevMoves,
            green: prevMoves.green + 1
        }));
    };

    let updateRed = () => {
        SetArr((prevArr) => [...prevArr, "red moves"]);
        setMoves((prevMoves) => ({
            ...prevMoves,
            red: prevMoves.red + 1
        }));
    };

    return (
        <div style={{ 
            backgroundImage: `url(${ludoImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh', 
            width: '100vw', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white',
        }}>
            <h1>Game Begins!</h1>
            <h2>{arr.join(", ")}</h2>
            <div className="board">
                <h3>Blue moves = {moves.blue}</h3>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <h3>Yellow moves = {moves.yellow}</h3>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <h3>Green moves = {moves.green}</h3>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
                <h3>Red moves = {moves.red}</h3>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
