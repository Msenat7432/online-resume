import {useState} from "react"
import Top from './Components/Top/Top';
import Intro from './Components/Intro/Intro'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'
import './App.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
	return <div className='app'>
        <Top menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
   
       <Intro/>
       <Portfolio/>
       <Contact/>

  

      
    </div>
  </div>;

}

export default App;
