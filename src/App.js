
import { NavBar } from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Connect } from './components/Connect'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><NavBar /><Banner /><Skills /></>}></Route>
          <Route path="/connect" element={<Connect />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
