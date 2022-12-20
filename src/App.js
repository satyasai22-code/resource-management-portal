import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddResourceItem from './components/AddUserItem';

function App() {
  return (
  <Router>
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resource/add" element={<AddResourceItem/>}/>
        </Routes>
    </div>
  </Router>

  );
}

export default App;
