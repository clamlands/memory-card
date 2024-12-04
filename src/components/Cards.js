import React, { useEffect } from "react";

export default function Cards(props) {
  const {
    level,
    setLevel,
    cardNum,
    setCardNum,
    currentScore,
    setCurrentScore,
    bestScore,
    setBestScore,
    levelArray,
    setLevelArray,
  } = props;

  // run on first render and on level change
  // makes an array full of booelan false. One for each card in the level
  useEffect(() => {
    createLevelArray();
  }, [level]);

  const createLevelArray = () => {
    const tempArray = [];
    for (let i = 0; i <= cardNum - 1; i++) {
      tempArray.push(false);
    }
    setLevelArray(tempArray);
  };

  //Fisher-Yates Shuffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const symbolArray = [
    "🖉",
    "👓",
    "🕭",
    "🕮",
    "🕯",
    "🕿",
    "📬",
    "⌛",
    "☠",
    "💣",
    "❄",
    "☯",
    "⌘",
    "✰",
    "🕑",
    "🕆",
    "🏱",
    "☹",
    "🖎",
    "🖮",
  ];

  /*
  const symbolArray = [
    "🖉 1",
    "👓 2",
    "🕭3",
    "🕮4",
    "🕯5",
    "🕿6",
    "📬7",
    "⌛8",
    "☠9",
    "💣10",
    "❄11",
    "☯12",
    "⌘13",
    "✰14",
    "🕑15",
    "🕆16",
    "🏱17",
    "☹18",
    "🖎19",
    "🖮20",
  ];
  */

  // cardArray is a randomly shuffled array used in the JSX return
  const tempCardArray = [];
  for (let i = 0; i <= cardNum - 1; i++) {
    tempCardArray.push(symbolArray[i]);
  }
  const cardArray = shuffle(tempCardArray);

  // if that number has already been clicked, the game starts over
  // if the number hasn't been clicked yet, set the value to true, then reshuffle the numbers
  const cardClick = (card) => {
    let index = symbolArray.indexOf(card);
    if (levelArray[index] === false) {
      const tempArray = levelArray;
      tempArray[index] = true;
      setLevelArray(tempArray);
      setCurrentScore(currentScore + 1);
      if (currentScore >= bestScore) {
        setBestScore(currentScore + 1);
      }
    } else {
      // gameover
      if (level === 1) {
        createLevelArray();
      }
      setLevel(1);
      setCardNum(5);
      setCurrentScore(0);
      return;
    }
    // check if all the cards have been selected yet
    // if this was the last card then you go to the next level
    if (!levelArray.includes(false)) {
      if (level === 5) {
        setLevel(1);
        setCardNum(5);
        setCurrentScore(0);
        return;
      }
      setLevel(level + 1);
      if (level === 1) {
        setCardNum(8);
      } else if (level === 2) {
        setCardNum(12);
      } else if (level === 3) {
        setCardNum(15);
      } else {
        setCardNum(20);
      }
    }
  };

  return (
    <div className="cards">
      {cardArray.map((card, i) => {
        return (
          <div key={i} className="card" onClick={() => cardClick(card)}>
            {card}
          </div>
        );
      })}
    </div>
  );
}

//current issue is that I'm passing in the index to the cardClick function. This isn't keeping track
//of the image itself, it's just that location.
