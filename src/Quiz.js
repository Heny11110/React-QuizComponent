import React,{Component} from 'React'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component{
  constructor(props) {
   super(props);
   this.state = {quiz_position:1};
 }
 render() {
   return (
     <div className="QuizQuestion"></div>
   );
 }

}

  export default Quiz;
