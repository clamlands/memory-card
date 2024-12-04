import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [cardNum, setCardNum] = useState(5);
  const [levelArray, setLevelArray] = useState([]);

  return (
    <div className="container">
      <h1 className="center">Memory Cards!</h1>
      <div className="header">
        <div className="score">
          <div>Current score: {currentScore}</div>
          <div>Best score: {bestScore}</div>
          <div>Level: {level}</div>
        </div>
      </div>
      <h2 className="center">Don't click the same object twice!</h2>
      <Cards
        level={level}
        setLevel={setLevel}
        cardNum={cardNum}
        setCardNum={setCardNum}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        levelArray={levelArray}
        setLevelArray={setLevelArray}
      />
    </div>
  );
}

/*
state:
current score
best score
keep track of whether each card has been clicked yet
keep track of what level you are on. Level 1 there are 5 cards. If level 1 is completed then you go to level 2

5, 10, 15, 25, 35, 50. If you hit 50, you win 
1 = 5
2 = 10
3 = 15
4 = 25
5 = 35
6 = 50

just use numbers instead of any images

function that displays all the cards in random order (invoked when function mounts)

create an array of objects that have both the number and a boolean of whether it has been clicked yet

*/

/*
Currenct Objective:
Get the game working with just one level
Gotta get the cards displaying
Need to get the array of objects set up correctly. num and clicked properties

*/
