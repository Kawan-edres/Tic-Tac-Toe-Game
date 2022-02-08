import "./App.css";
import { useState,useEffect } from "react";

import Square from "./Components/Square"
import {Patterns} from './Components/Patterns'

function App() {

  const [board,setBoard]=useState(["","","","","","","","",""])
  const [player,setPlayer]=useState("O");
  const [result,setResult]=useState({winner:"none" , state:"none"})

  useEffect(()=>{
    checkWin(); 
    checkIfTie();

    if(player=="X"){
     setPlayer("O");
    }
     else{
     setPlayer("X");
     }
  },[board]);

  useEffect(()=>{
    if(result.state!="none"){
      alert(`Game Finished: ${result.winner}`)
      restartGame();

    }


  },[result])

  const chooseSquare=(square)=>{
   setBoard(
     board.map((val,index)=>{
       if(index==square && val==""){
         return player;
       }

       return val;
     })
     );

     
  }

  const checkWin=()=>{
    Patterns.forEach((currentPattern)=>{
      const firstPlayer=board[currentPattern[0]];
      console.log(firstPlayer);
      if(firstPlayer=="")return;
      let foundWinnerPattern=true;
      currentPattern.forEach((idx)=>
      {
          if(board[idx]!=firstPlayer){
            foundWinnerPattern=false;
          }
      })
      if(foundWinnerPattern){
        setResult({winner:player ,state:"won"})
      }
      
    })
  }

  const checkIfTie=()=>{
    let filled=true;
    board.forEach((square)=>{
      if(square==""){
        filled=false;
      }
    })
    if(filled){
      setResult({winner:"No one Won the game",state:"Tie"})
    }
  }

  const restartGame=()=>{

    setBoard(["","","","","","","","",""])
    setPlayer("X")

  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-[35rem] w-[35rem] bg-black border-2 border-black flex flex-col">
        <div className="row">
          <Square val={board[0]} chooseSquare={()=>{chooseSquare(0)}} />
          <Square val={board[1]} chooseSquare={()=>{chooseSquare(1)}} />
          <Square val={board[2]} chooseSquare={()=>{chooseSquare(2)}} />

        </div>
        <div className="flex-[33%] flex flex-row border-black border">
          <Square val={board[3]} chooseSquare={()=>{chooseSquare(3)}} />
          <Square val={board[4]} chooseSquare={()=>{chooseSquare(4)}} />
          <Square val={board[5]} chooseSquare={()=>{chooseSquare(5)}} />
        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={()=>{chooseSquare(6)}} />
          <Square val={board[7]} chooseSquare={()=>{chooseSquare(7)}} />
          <Square val={board[8]} chooseSquare={()=>{chooseSquare(8)}} />

        </div>
      </div>
    </div>
  );
}

export default App;
