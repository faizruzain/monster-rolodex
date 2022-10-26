import { Component } from "react";

import "./card.style.css";

class Card extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${monsters.id}?set=set2&size=180x180`}
          alt={`monster ${monsters.name}`}
        />
        <h4>{monsters.name}</h4>
        <h5>{monsters.email}</h5>
      </div>
    );
  }
}

export default Card;
