import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Play from './pages/Play';
import Profile from './pages/Profile';

function App() {
  const location = useLocation();
  const isPlayPage = location.pathname === '/play';
  const [tries, setTries] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  console.log("correct answers:",correctAnswers)
  console.log("tries:", tries)


  return (
    <>
      {!isPlayPage && <Link to="/play">START LEARNING</Link>}
      

      <Routes>
        {/* <Route path="/" element={<HomeScreen/>}/> */}
        <Route 
        path="/play" 
        element={<Play setTries={setTries} setCorrectAnswers={setCorrectAnswers}/>}
        />
        <Route 
        path="/profile"
        element={<Profile/>}
        />
      </Routes> 
    </>
  );
}

export default App;