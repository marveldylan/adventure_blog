import './App.css';
import Nav from './components/Nav';
import Home from  './components/Home';
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="blogpost/:id" element={<PostDetails /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
