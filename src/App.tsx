import { useState,useContext } from 'react'

import './App.css'
import Welcome from './components/Welcome'
import Quizroom from './components/Quizroom'
import End from './components/End'
import { QuizContext } from './Context/Context'

function App() {
  const [gamestate, setGamestate] = useState<string>("welcome")
  const [score, setscore] = useState<number>(0)

  return (
    <>
    <div className='app'>
    <h1 > QUIZ APP</h1>
    <QuizContext.Provider value={{gamestate,setGamestate,score,setscore}}>
    {gamestate === "welcome" && <Welcome/>}
     {gamestate === "quiz" && <Quizroom/>}
     {gamestate === "end" && <End/>}

    </QuizContext.Provider>
     
    </div>
     
    </>
  )
}

export default App
