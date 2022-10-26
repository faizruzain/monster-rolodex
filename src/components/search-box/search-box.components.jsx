import { Component } from 'react';
import '../search-box/search-box.style.css'

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
        className= {`search-box ${this.props.className}`}
        type='text'
        placeholder={this.props.placeholder}
        onChange={this.props.myFn}
        />
      </div>
    )
  }
}

export default SearchBox;