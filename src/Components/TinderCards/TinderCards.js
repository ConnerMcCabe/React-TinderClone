import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "alberta",
      url: "https://i.kym-cdn.com/photos/images/original/001/316/888/f81.jpeg"
    },
    {
      name: "cotswald",
      url:
        "https://g.foolcdn.com/editorial/images/553815/line-on-chart-falling-stock-down.jpg"
    }
  ]);

  return (
    <div>
      <h1>test Cards</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;

//not great way of pushing to array in react
//const people = [];
//people.push('alberta', 'cotswald')
//push to array in React
//setPeople([...people, 'alberta', 'cotswald])
