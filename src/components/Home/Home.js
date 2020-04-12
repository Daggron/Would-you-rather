import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';
import Answered from './Answered';
import Unanswered from './Unanswered';

export default function Home() {
    const user = useSelector(state=>state.users.authUser);
    const questions = useSelector(state=>state.questions);

    const panes = [
        { menuItem: 'Unanswered Questions', render: () => <Tab.Pane><Unanswered questions={unanswerdQuestions} /></Tab.Pane> },
        { menuItem: 'Answered Questions', render: () => <Tab.Pane><Answered questions={answerdQuestions} /></Tab.Pane> },
        
    ]

    if(!user){
        return(
            <Redirect to="/login" />
        )
    }

    console.log(questions);

    const quest = Object.entries(questions).map(([name , question])=>{
        return question;
    })

    const answerdQuestions = quest.filter(eachQuestion=>{
        let isAnswered = false;
        //eslint-disable-next-line
        eachQuestion.optionOne.votes.map(eachVote=>{
            if(eachVote === user){
               return isAnswered = true;
            }
        })
         //eslint-disable-next-line
        eachQuestion.optionTwo.votes.map(eachVote=>{
            if(eachVote === user){
                isAnswered = true;
            }
        })
        return isAnswered;
    })

    const unanswerdQuestions = quest.filter(eachQuestion=>{
        let isUnAnswered = true;
        //eslint-disable-next-line
        eachQuestion.optionOne.votes.map(eachVote=>{
            if(eachVote === user){
               return isUnAnswered = false;
            }
        })
         //eslint-disable-next-line
        eachQuestion.optionTwo.votes.map(eachVote=>{
            if(eachVote === user){
                isUnAnswered = false;
            }
        })
        return isUnAnswered;
    })

    console.log(unanswerdQuestions)

    return (
        <div>
           <Tab panes={panes}/>
        </div>
    )
}
