import * as types from '../../action-types';

export const handleOptionColor = (index, questionArray, selectedOption, renderState) => {
    
    questionArray[index].selected_option = selectedOption;
    questionArray[index].answered = true;

    let payloadObject = {
        questionsArr: questionArray,
        renderObj: !renderState
    };

    return{
        type: types.OPTION_CHANGE,
        payload: payloadObject
    }
}
