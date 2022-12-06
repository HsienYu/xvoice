import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import Search from './components/Search';
import request from 'superagent';
import './styles/app.css';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&limit=500&offset=4&api_key=M8cFvVmjOfY6u1fQuCInxgjVInis0gvT`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }
  render() {
    return (
      <div>
        <Search onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

