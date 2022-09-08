import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail' element={<Detail/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;


