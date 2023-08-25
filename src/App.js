import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const  App =()=> {
  const pageSize=5;
  const [progress,setProgress]=useState(0);
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />}/>
          <Route exact path='/buisness' element={<News setProgress={setProgress} key="buisness" pageSize={pageSize} country="in" category="buisness" />}/>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}/>
          <Route exact path='/health' element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health" />}/>
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />}/>
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />}/>
          <Route exact path='/general' element={<News setProgress={setProgress}  key="general"  pageSize={pageSize} country="in" category="general" />}/>
        </Routes>
        </Router>

      </div>
    )
}
export default App;
//this is a class based component
//in class based components the manangement of methods is quiet easy 