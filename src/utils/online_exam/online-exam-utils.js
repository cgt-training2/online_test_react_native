// Summary: This function will provide the object to be handled in redux for online exam.
export const getOnlineExamDetails = (index, disable_prev_button, 
    disable_next_button, not_answer_count, mark_review_count, save_count, save_and_mark_review_count) => {
    return{
        index: index,
        disable_prev_button: disable_prev_button,
        disable_next_button: disable_next_button,
        not_answer_count: not_answer_count,
        mark_review_count: mark_review_count,
        save_count: save_count,
        save_and_mark_review_count: save_and_mark_review_count
    };
};