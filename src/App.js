import React, { Component } from 'react';
import './App.css';

import Loadable from 'react-loadable';

const Feeds = Loadable({
	loader: () => import('./feeds/Feeds'),
	loading: () => <div>loading .... </div>
});



class App extends Component {
	state = { showFeeds: false }

  render() {
    return (
      <div className="App">
				base index file -----

				<div style={{ margin: '50 10' }}>
					<button onClick={() => this.setState({ showFeeds: true })} > show feeds </button>
				</div>

				<div>
					{this.state.showFeeds && <Feeds />}
				</div>
      </div>
    );
  }
}

export default App;
