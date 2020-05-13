// Actions
import * as types from '../../action-types';

// Enum
import { answer_option, color_code_answer_button } from '../../../enums/global_colors';

// Summary: increaseIndex will increase the index by one.
export function increaseIndex(index, questionArray, colorCode, answered, notAnsweredCountParam, markReviewCountParam, 
    saveCountParam, saveAndMarkReviewCountParam, lengthOfData) {
    console.log("function increaseIndex");
    console.log(lengthOfData);
    // let lengthOfData = questionArray.length;
    let newIndex = index == (lengthOfData - 1) ? index : index+1;
    questionArray[index].question_pallete_color = answered == true ? questionArray[index].question_pallete_color : colorCode;
    questionArray[index].visited_not_answer = true;
    let payloadObject = {
        index: newIndex,
        questionsObj: index == (lengthOfData - 1) ? questionArray[index] : questionArray[index +1],
        questionsArr: questionArray,
        disable_prev_button: index == 1 ? true : false,
        disable_next_button: index == (lengthOfData - 2) ? true : false,
        not_answered_count: notAnsweredCountParam + 1,
        save_count: saveCountParam,
        save_and_mark_review_count: saveAndMarkReviewCountParam,
        mark_review_count: markReviewCountParam
    };
    return {
        type: types.INDEX_INCREASE,
        payload: payloadObject
    }
}


// Summary: decreaseIndex will increase the index by one.
export function decreaseIndex(index, questionArray, notAnswerCount, examDetails) {

    let newIndex = index == 0 ? 0 : index - 1;

    let payloadObject = {
        index: newIndex,
        questionsArr: questionArray,
        questionsObj: questionArray[newIndex],
        disable_prev_button: index == 1 ? true : false,
        not_answered_count: notAnswerCount,
        save_count: examDetails.save_count,
        save_and_mark_review_count: examDetails.save_and_mark_review_count,
        mark_review_count: examDetails.mark_review_count
    };
    return {
        type: types.INDEX_DECREASE,
        payload: payloadObject
    }
}

export function increaseIndexSave(index, questionArray, colorCode, answered, 
    notAnsweredCountParam, markReviewCountParam, saveCountParam, saveAndMarkReviewCountParam,
    lengthOfData, buttonId) {
    
    let saveStatus = questionArray[index].save;
    let saveMarkReviewStatus = questionArray[index].save_mark_review;
    let markReviewStatus = questionArray[index].mark_review; 
    let conditionStatus = (saveStatus == false && saveMarkReviewStatus == false && markReviewStatus == false);       
    let newIndex = index == (lengthOfData - 1) ? index: index+1;
    let save_count_param = (buttonId == 0 && conditionStatus) ? 
        saveCountParam + 1 : saveCountParam;
    let save_and_mark_review_count_param = (buttonId == 1 && conditionStatus) ? 
        saveAndMarkReviewCountParam + 1 : saveAndMarkReviewCountParam;
    let mark_review_count_param = (buttonId == 2 && conditionStatus) ? 
        markReviewCountParam + 1 : markReviewCountParam;
    
    let not_answered_count_param = notAnsweredCountParam;
    
    if(questionArray[index].visited_not_answer == true){
        questionArray[index].visited_not_answer = false;
        not_answered_count_param = ((buttonId == 0 && saveStatus == false) || 
            (buttonId == 1 && saveMarkReviewStatus == false) || 
            (buttonId == 2 && markReviewStatus == false)) ? not_answered_count_param - 1 : not_answered_count_param;
    }
    questionArray[index].question_pallete_color = conditionStatus ? colorCode : questionArray[index].question_pallete_color;
    questionArray[index].save = ( buttonId == 0 && conditionStatus ) ? true: questionArray[index].save;
    questionArray[index].save_mark_review = ( buttonId == 1 && conditionStatus ) ? true: questionArray[index].save_mark_review;
    questionArray[index].mark_review = ( buttonId == 2 && conditionStatus ) ? true: questionArray[index].mark_review;

    let payloadObject = {
        index: newIndex,
        questionsObj: questionArray[newIndex],
        questionsArr: questionArray,
        disable_prev_button: index == 1 ? true : false,
        disable_next_button: index == (lengthOfData - 2) ? true : false,
        not_answered_count: not_answered_count_param,
        save_count: save_count_param,
        save_and_mark_review_count: save_and_mark_review_count_param,
        mark_review_count: mark_review_count_param
    };
    return {
        type: types.INDEX_INCREASE_SAVE,
        payload: payloadObject
    }
}
