import { useState, useEffect} from 'react';
import './App.css';

//create a function that returns a path(url)
//checks to see what the node env is(dev,staging, whatver), and builds a url path from that

function url(path){
  return process.env.NODE_ENV === "development"?
  `http://localhost:3333${path}`: path
};

function App() {
  const [ data, setData ]=useState("hello bubblegum, from app state ");
  useEffect(()=>{
    fetch(url("/api/"))
      .then(res=>{
        return res.json()
      }).then(apiData=>{
        setData(apiData.data)
      }).catch(error=>{
        console.log("busted, idk")
      })
  },[])
 


  return (
    <div className="App">
      <header className="App-header">
        API DATA: {data}
      </header>
    </div>
  );
}

export default App;
