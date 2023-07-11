import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Games from './components/Games';
import Activities from './components/Activities';
import Counselling from './components/Counselling';
// import Terms from './components/Terms';

function App() {
  return (
    <div className="App">
     <Home />
     <Header />
     <Games />
     <Activities/>
     <Counselling/>
     {/* <Terms/> */}
    </div>
  );
}

export default App;
