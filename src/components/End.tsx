import { useContext } from "react"
import { QuizContext } from "../Context/Context"
import { questions } from "../Questions/questions"

function End() {

  const {  score} = useContext(QuizContext)

  return (
    <div>
      <h1>WELDONE </h1>
      <h3>your final score is {score} / {questions.length}</h3>
    </div>
  )
}

export default End