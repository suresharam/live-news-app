import React from 'react';
import BusinessNews from './components/news/BusinessNews';
import TechnologNews from './components/news/TechnologyArticles'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import SportsNews from './components/news/SportsNews';
import EntertainmentNews from './components/news/EntertainmentNews';
import GeneralNews from './components/news/GeneralNews';
import HealthNews from './components/news/HealthNews';
import ScienceNews from './components/news/ScienceNews';
import Search from './components/news/Search';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <div className>
          <h1>News</h1>
        </div>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item" id="1">
              <Link className="nav-link" to="/business" > Business </Link>
            </li>
            <li className="nav-item" id="2">
              <Link className="nav-link" to="/entertainment" > Entertainment </Link>
            </li>
            <li className="nav-item" id="3">
              <Link className="nav-link" to="/general" > General </Link>
            </li>
            <li className="nav-item" id="4">
              <Link className="nav-link" to="/health" > Health </Link>
            </li>
            <li className="nav-item" id="6">
              <Link class="nav-link" to="/science" > Science </Link>
            </li>
            <li className="nav-item" id="7">
              <Link className="nav-link" to="/sports" > Sports </Link>
            </li>
            <li className="nav-item" id="8">
              <Link className="nav-link" to="/technology" > Technology </Link>
            </li>
            <li className="nav-item" id="9">
              <Link className="nav-link" to="/search" > Search </Link>
            </li>
          </ul>

          <Route path="/business" component={BusinessNews} />
          <Route path="/entertainment" component={EntertainmentNews} />
          <Route path="/general" component={GeneralNews} />
          <Route path="/health" component={HealthNews} />
          <Route path="/science" component={ScienceNews} />
          <Route path="/sports" component={SportsNews} />
          <Route path="/technology" component={TechnologNews} />
          <Route path="/search" component={Search} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
