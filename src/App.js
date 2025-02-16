// import logo from './logo.svg';
import './App.css';
import Header from './Headers';
import Mains from './Mains';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Mains/>
      
          {/* {process.env.REACT_APP_PUBLIC_KEY} */}
      
      </header>
    </div>
  );
}

export default App;
