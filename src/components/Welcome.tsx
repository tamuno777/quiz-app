import React, {useContext } from 'react'
import { QuizContext } from '../Context/Context'


function Welcome() {
    const {gamestate ,setGamestate} = useContext(QuizContext)
  return (
    <div className='mt-5 welcome'>
       <div className='text-center' style={{display:"flex",flexDirection:"column"}}>
       <h1 className='text-center mb-5 mt-3'>
       Welcome
       </h1>
       <p className='tp my-5'>Lorem ipsum dolor sit amet  consectetur, adipisicing elit. Inventore, enim.</p>


            <button onClick={() => {
                setGamestate("quiz")
            }} >
                    Start Quiz
            </button>
       </div>
    </div>
  )
}

export default Welcome