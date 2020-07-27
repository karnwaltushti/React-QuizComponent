import React,{Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData=require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state={quiz_position: 1}
    }
    showNextQuestion (){
        this.setState((state)=>{
            return {quiz_position:state.quiz_position+1}
        })
        
    }
    handleResetClick(){
        this.setState((state)=>{
            return {quiz_position:1}
        })
    }
    render(){
        const isQuizEnd= quizData.quiz_questions.length === this.state.quiz_position-1 ? true:false
        if (isQuizEnd===true){
        return (
            <div>
                <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/>
            </div> 
        )
        }
        else{
            return (
                <div>
                    <div class="QuizQuestion">
                        <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
                    </div>
                </div>   
            )
        }
    }
    
}
export default Quiz