import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import StreamList from './component/streams/StreamList';
import StreamCreate from './component/streams/StreamCreate';
import StreamDelete from './component/streams/StreamDelete';
import StreamShow from './component/streams/StreamShow';
import StreamEdit from './component/streams/StreamEdit';
import Header from './component/Header';
import history from './history';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
