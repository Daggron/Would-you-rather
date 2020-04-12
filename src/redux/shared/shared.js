
import * as Data from '../../utils/_DATA';
import { addUsers } from '../actions/Auth/Auth';
import { addQuestions } from '../actions/Questions/Questions';

export function FetchData(){
    return (dispatch)=>{
        return Data.getInitialData()
        .then(({users , questions })=>{
            dispatch(addUsers(users))
            dispatch(addQuestions(questions))
        }
        );
    }
}