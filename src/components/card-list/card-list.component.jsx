import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((eachMonster) => {
          return <Card key={eachMonster.id} monsters={eachMonster} />;
        })}
      </div>
    );
  }
}

export default CardList;
