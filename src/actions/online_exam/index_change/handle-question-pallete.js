import * as types from '../../action-types';

// Summary: This action will handle opening and closing of question pallete alert box.
export function handleQuestionPallete(index, questionArray, modalVisible, examDetails){
    let questionObj = {
        index: index,
        question_obj: questionArray[index],
        questionLegendModalVisible: !modalVisible,
        disable_prev_button: examDetails.disable_prev_button,
        disable_next_button: examDetails.disable_next_button,
        not_answered_count: examDetails.not_answer_count,
        save_count: examDetails.save_count,
        save_and_mark_review_count: examDetails.save_and_mark_review_count,
        mark_review_count: examDetails.mark_review_count
    };
    return {
        type: types.HANDLE_QUESTION_PALLETE,
        payload: questionObj
    };
}
