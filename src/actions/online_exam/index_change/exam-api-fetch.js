import { questions_array_object } from '../../../enums/question_answers_set1';
import { questions_array_dummy } from '../../../enums/question_answers_dummy';
import { initialStateExam } from './index-change-actions';

export function fetchExamFromAPI(value) {
    let data = [];
    if(value){
        console.log("if(value == true)");
        data = questions_array_object;
    }else{
        console.log("if(value == false)");
        data = questions_array_dummy;
    }
     
    return dispatch => { 
        return dispatch(initialStateExam(data, value));
    }         
}