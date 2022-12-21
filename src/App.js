import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddResourceItem from './components/AddUserItem';
import PageNotFound from './components/PageNotFound';
import LoginForm from './components/LoginForm';

function App() {
  return (
  <Router>
    <div className="App">
        <Routes>
          <Route exact path="/resource-management-portal" element={<Home />} />
          <Route exact path="/resource-management-portal/add-resource" element={<AddResourceItem/>}/>
          <Route exact path="/resource-management-portal/login" element={<LoginForm/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  </Router>

  );
}

export default App;
