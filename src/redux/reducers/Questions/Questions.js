import { Add_Question } from "../../actions/Questions/Questions";

export function QuestionReducer(state = {} , action){
    switch(action.type){
        case Add_Question: {
            return action.value
        }
        default: return state;
    }
}