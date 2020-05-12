// Actions
import * as types from '../../action-types';

// Enum
import { answer_option, color_code_answer_button } from '../../../enums/global_colors';

// Summary: increaseIndex will increase the index by one.
export function increaseIndex(index, questionArray, colorCode, answered, notAnsweredCountParam) {
    
    let lengthOfData = questionArray.length;
    let newIndex = index == 14 ? 14: index+1;
    // let questionArray = Object.assign({}, questionArray);
    // not_answered_count
    questionArray[index].question_pallete_color = answered == true ? questionArray[index].question_pallete_color : colorCode;
    let payloadObject = {
        index: newIndex,
        questionsObj: index == 14 ? questionArray[index] : questionArray[index +1],
        questionsArr: questionArray,
        disable_prev_button: index == 1 ? true : false,
        disable_next_button: index == 13 ? true : false,
        not_answered_count: notAnsweredCountParam + 1
    };
    return {
        type: types.INDEX_INCREASE,
        payload: payloadObject
    }
}


// Summary: decreaseIndex will increase the index by one.
export function decreaseIndex(index, questionArray, notAnswerCount) {

    let newIndex = index == 0 ? 0 : index - 1;

    let payloadObject = {
        index: newIndex,
        questionsArr: questionArray,
        questionsObj: questionArray[newIndex],
        disable_prev_button: index == 1 ? true : false,
        not_answered_count: notAnswerCount
    };
    return {
        type: types.INDEX_DECREASE,
        payload: payloadObject
    }
}

// index: prevState.index + 1,
// question_obj: questions_array_object[prevState.index + 1],
// disable_prev_button: false,
// disable_next_button: false,
// save_count: saveCount,
// mark_review_count: markReviewCount
// index: prevState.index + 1,
// question_obj: questions_array_object[prevState.index + 1],
// disable_prev_button: false,
// disable_next_button: false,
// save_and_mark_review_count: saveAndMarkReviewCount,

// questionsObjVar[this.state.index].question_pallete_color = colorCode;
// questionsObjVar[this.state.index].save = true;
// questionsObjVar[this.state.index].mark_review = true;
// questionsObjVar[this.state.index].save_mark_review = true;
// Summary: increaseIndex will increase the index by one.
export function increaseIndexSave(index, questionArray, colorCode, answered, 
    notAnsweredCountParam, markReviewCountParam, saveCountParam, saveAndMarkReviewCountParam,
    lengthOfData, buttonId) {
    
    let saveStatus = questionArray[index].save;
    let saveMarkReviewStatus = questionArray[index].save_mark_review;
    let markReviewStatus = questionArray[index].mark_review;        
    let newIndex = index == (lengthOfData - 1) ? index: index+1;
    let save_count_param = (buttonId == 0 && saveStatus == false) ? 
        saveCountParam + 1 : saveCountParam;
    let save_and_mark_review_count_param = (buttonId == 1 && saveMarkReviewStatus == false) ? 
        saveAndMarkReviewCountParam + 1 : saveAndMarkReviewCountParam;
    let mark_review_count_param = (buttonId == 2 && markReviewStatus == false) ? 
        markReviewCountParam + 1 : markReviewCountParam;
    
    questionArray[index].question_pallete_color = colorCode;
    questionArray[index].save = buttonId == 0 ? true: false;
    questionArray[index].save_mark_review = buttonId == 1 ? true: false;
    questionArray[index].mark_review = buttonId == 2 ? true: false;

    let payloadObject = {
        index: newIndex,
        questionsObj: questionArray[newIndex],
        questionsArr: questionArray,
        disable_prev_button: index == 1 ? true : false,
        disable_next_button: index == 13 ? true : false,
        not_answered_count: notAnsweredCountParam,
        save_count: save_count_param,
        save_and_mark_review_count: save_and_mark_review_count_param,
        mark_review_count: mark_review_count_param
    };
    return {
        type: types.INDEX_INCREASE,
        payload: payloadObject
    }
}
