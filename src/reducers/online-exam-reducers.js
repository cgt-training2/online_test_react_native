// Actions
import * as types from '../actions/action-types';

// Enums
import { questions_array_object } from '../enums/question_answers_set1';

// Utils
import { getOnlineExamDetails } from '../utils/online_exam/online-exam-utils';

const INITIAL_STATE = { 
    examDetail: JSON.parse(JSON.stringify(getOnlineExamDetails(0, true, false, 0, 0, 0, 0))),
    questionsObj: questions_array_object[0],
    questionsObjArray: questions_array_object,
    renderVal: false
};
// mark_review_count, save_count, save_and_mark_review_count
export default (state = INITIAL_STATE , action) => {

    switch (action.type) {

        // Summary: This case will increase the index by one.
        case types.INDEX_INCREASE:
            return Object.assign({}, state,{
                examDetail: JSON.parse(JSON.stringify(getOnlineExamDetails(action.payload.index, action.payload.disable_prev_button, action.payload.disable_next_button, action.payload.not_answered_count))),
                questionsObj: action.payload.questionsObj,
                questionsObjArray: action.payload.questionsArr
            });
        case types.INDEX_DECREASE:
            return Object.assign({}, state, {
                examDetail: JSON.parse(JSON.stringify(getOnlineExamDetails(action.payload.index, action.payload.disable_prev_button, false, action.payload.not_answered_count))),
                questionsObj: action.payload.questionsObj,
                questionsObjArray: action.payload.questionsArr
            });
        case types.OPTION_CHANGE:
            return Object.assign({}, state, {
                questionsObjArray: action.payload.questionsArr,
                renderVal: action.payload.renderObj
            });
        default:
            return state;
    }
};