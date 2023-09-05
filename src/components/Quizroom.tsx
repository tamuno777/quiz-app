import React, {useState, useContext} from 'react'
import { questions } from '../Questions/questions'
import { QuizContext } from '../Context/Context'
import Form from 'react-bootstrap/Form';



function Quizroom() {
  const { setscore, score,setGamestate} = useContext(QuizContext)
  const [currentquestion, setcurrentquestion] = useState<number>(0)
  const [optionchosen, setoptionchosen] = useState<String>('')


  
  const nextquestion = () => {
    if (questions[currentquestion].answer == optionchosen){
      setscore(score + 1)
    }
    setcurrentquestion(currentquestion + 1)
    console.log(optionchosen)

    setoptionchosen('')




  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    
    setoptionchosen(event.target.value)

  }
  const finishquestion = () =>{
    if (questions[currentquestion].answer == optionchosen){
      setscore(score + 1)
    }
    setGamestate("end")

  }
  console.log(optionchosen)
  console.log(score)




  return (
    <div className='quiz'>
     <Form action="" className='container'>
     <h1>{questions[currentquestion].prompt}</h1>

          <div className='options'>
          <Form.Check
            label={questions[currentquestion].A}
            type="radio" name="op" id="A"  value={questions[currentquestion].A}  onChange={handleCheckboxChange}
            
          /><Form.Check
          label={questions[currentquestion].B}
          type="radio" name="op" id="B"  value={questions[currentquestion].B}  onChange={handleCheckboxChange}
          
        />
          
          <Form.Check
            label={questions[currentquestion].C}
            type="radio" name="op" id="C"  value={questions[currentquestion].C}  onChange={handleCheckboxChange}
            
          />
          <Form.Check
            label={questions[currentquestion].D}
            type="radio" name="op" id="D"  value={questions[currentquestion].D}  onChange={handleCheckboxChange}
            
          />
          
          
          
          </div>
          
            
     </Form>
     {currentquestion == questions.length -1 ? (
              <button onClick={finishquestion}> finish quiz</button>

            ):(
          <button onClick={nextquestion}>Next Question</button>
            )}
      

    </div>
  )
}

export default Quizroom