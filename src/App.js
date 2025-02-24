// import logo from './logo.svg';
import './App.css';
import Header from './Headers';
import Mains from './Mains';
import {useState} from 'react';



function App() {
  const[title,setTitle]=useState("chef Claude");
  const [loading,setLoading]=useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title} loading={loading}/>
        <Mains title={title} 
        setTitle={setTitle}
         loading={loading}
          setLoading={setLoading}
          />
      
          {/* {process.env.REACT_APP_PUBLIC_KEY} */}
      
      </header>
    </div>
  );
}

export default App;
