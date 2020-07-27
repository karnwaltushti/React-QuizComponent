import React,{Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData=require('./quiz_data.json')
class Quiz extends Component{
    constructor(props){
        super(props);
        this.state={quiz_position: 1}
    }
    render(){
        const isQuizEnd= quizData.quiz_questions.length === this.state.quiz_position-1 ? true:false;
        if (isQuizEnd===true){
        return (
            <div>
                <QuizEnd/>
                <div class="QuizQuestion">
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
                </div>
            </div> 
        )
        }
        else{
            return (
                <div>
                    <div class="QuizQuestion">
                        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
                    </div>
                </div>   
            )
        }
    }
    
}
export default Quiz