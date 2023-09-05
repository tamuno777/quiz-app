import { useContext } from "react"
import { QuizContext } from "../Context/Context"
import { questions } from "../Questions/questions"

function End() {

  const {  score} = useContext(QuizContext)

  return (
    <div className="quiz">
      {score < questions.length/2 ? (
        <h1>Try again abi you want me to call you olodo  </h1>
            ):(
        <h1> WELDONE , you have sense </h1>         
   )}
      
      
      <h3>your final score is {score} / {questions.length}</h3>
    </div>
  )
}

export default End