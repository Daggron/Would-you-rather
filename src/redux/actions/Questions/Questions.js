export const Add_Question = 'Add_Question';

export function addQuestions(value){
    return({
        type: Add_Question,
        value,
    });
}
