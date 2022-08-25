
import {NavBar} from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Banner />
        <Skills />
    </div>
  );
}

export default App;
