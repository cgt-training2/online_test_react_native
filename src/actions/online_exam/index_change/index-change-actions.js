// Actions
import * as types from '../../action-types';

// Enum
import { answer_option, color_code_answer_button } from '../../../enums/global_colors';

// Summary: increaseIndex will increase the index by one.
export function increaseIndex(index, questionArray, colorCode, answered, notAnsweredCountParam, markReviewCountParam, 
    saveCountParam, saveAndMarkReviewCountParam, lengthOfData, timerValue) {
    // let lengthOfData = questionArray.length;
    let newIndex = index == (lengthOfData - 1) ? index : index+1;
    let saveStatus = questionArray[index].save;
    let saveMarkReviewStatus = questionArray[index].save_mark_review;
    let markReviewStatus = questionArray[index].mark_review; 
    let alreadyVisited = questionArray[index].visited_not_answer;
    let conditionStatus = ( alreadyVisited == false && saveStatus == false && saveMarkReviewStatus == false && markReviewStatus == false);
    // time_taken_by_question
    // display_time_of_question
    let displayTime =  questionArray[index].display_time_of_question;
    let alreadyTakenTime = questionArray[index].time_taken_by_question;
    let timerValueTaken = timeTakenByEachQuestion(displayTime, timerValue, alreadyTakenTime);
    console.log("timerValueTaken");
    console.log(timerValueTaken);
    questionArray[index].question_pallete_color = answered == true ? questionArray[index].question_pallete_color : colorCode;
    questionArray[index].time_taken_by_question = timerValueTaken;
    questionArray[index].visited_not_answer = true;
    questionArray[newIndex].display_time_of_question = timerValue;
    let payloadObject = {
        index: newIndex,
        questionsObj: index == (lengthOfData - 1) ? questionArray[index] : questionArray[index +1],
        questionsArr: questionArray,
        disable_prev_button: index == 1 ? true : false,
        disable_next_button: index == (lengthOfData - 2) ? true : false,
        not_answered_count: conditionStatus ? notAnsweredCountParam + 1 : notAnsweredCountParam,
        save_count: saveCountParam,
        save_and_mark_review_count: saveAndMarkReviewCountParam,
        mark_review_count: markReviewCountParam
    };
    return {
        type: types.INDEX_INCREASE,
        payload: payloadObject
    }
}

export function timeTakenByEachQuestion(displayTime, timerValue, alreadyTakenTime){
    let difference = displayTime - timerValue;
    let timeTaken = alreadyTakenTime + difference;
    return timeTaken;
}

// Summary: decreaseIndex will increase the index by one.
export function decreaseIndex(index, questionArray, notAnswerCount, examDetails, timerValue) {

    let newIndex = index == 0 ? 0 : index - 1;

    let displayTime =  questionArray[index].display_time_of_question;
    let alreadyTakenTime = questionArray[index].time_taken_by_question;
    let timerValueTaken = timeTakenByEachQuestion(displayTime, timerValue, alreadyTakenTime);
    console.log("timerValueTaken");
    console.log(timerValueTaken);

    questionArray[index].time_taken_by_question = timerValueTaken;
    questionArray[newIndex].display_time_of_question = timerValue;

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
    lengthOfData, buttonId, timerValue) {

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

    let displayTime =  questionArray[index].display_time_of_question;
    let alreadyTakenTime = questionArray[index].time_taken_by_question;
    let timerValueTaken = timeTakenByEachQuestion(displayTime, timerValue, alreadyTakenTime);
    console.log("timerValueTaken");
    console.log(timerValueTaken);

    questionArray[index].question_pallete_color = conditionStatus ? colorCode : questionArray[index].question_pallete_color;
    questionArray[index].save = ( buttonId == 0 && conditionStatus ) ? true: questionArray[index].save;
    questionArray[index].save_mark_review = ( buttonId == 1 && conditionStatus ) ? true: questionArray[index].save_mark_review;
    questionArray[index].mark_review = ( buttonId == 2 && conditionStatus ) ? true: questionArray[index].mark_review;
    questionArray[index].time_taken_by_question = timerValueTaken;
    questionArray[index].visited_not_answer = true;
    questionArray[newIndex].display_time_of_question = timerValue;

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
