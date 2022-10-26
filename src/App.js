import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: /(?:)/,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      })
      .catch((err) => console.log(err));
  }

  searchFilter = (e) => {
    const pattern = new RegExp(e.target.value, "i");

    this.setState(() => {
      return { search: pattern };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((filter) => {
      return this.state.search.test(filter.name);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          myFn={this.searchFilter}
          placeholder={"Search Monsters"}
          className={"monsters-search-box"}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
