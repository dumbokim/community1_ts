import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import Writings from './pages/Writings';
import Free from './pages/Free';
import School from './pages/School';
import Honey from './pages/Honey';
import ViewRank from './pages/ViewRank';
import LikeRank from './pages/LikeRank';
import CommentRank from './pages/CommentRank';
import Secret from './pages/Secret';
import ILike from './pages/ILike';

function App() {
  return (
    <div className="App">
      <p>With TypeScript</p>
      <Router>
        <Route path='/' exact render={(props) => <Main />} />
        <Route path='/writings' exact render={(props) => <Writings />} />
        <Route path='/free' exact render={(props) => <Free />} />
        <Route path='/school' exact render={(props) => <School />} />
        <Route path='/honey' exact render={(props) => <Honey />} />
        <Route path='/view-rank' exact render={(props) => <ViewRank />} />
        <Route path='/like-rank' exact render={(props) => <LikeRank />} />
        <Route path='/comment-rank' exact render={(props) => <CommentRank />} />
        <Route path='/secret' exact render={(props) => <Secret />} />
        <Route path='/i-like' exact render={(props) => <ILike />} />

      </Router>
        
    </div>
  );
}

export default App;
