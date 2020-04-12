import React from 'react'

export default function Answered({questions}) {
    console.log(questions);
    return (
        <div>
             {
                questions.map(eachQuestion=>{
                    return(
                        <li key={eachQuestion.id}>
                            {eachQuestion.optionOne.text}
                            <br/>
                            {eachQuestion.optionTwo.text}
                        </li>
                    )
                })
            }
        </div>
    )
}
