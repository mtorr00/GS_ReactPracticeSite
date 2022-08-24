
import {NavBar} from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner'

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Banner />
    </div>
  );
}

export default App;
