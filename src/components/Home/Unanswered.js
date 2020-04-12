import React from 'react'
import { Card, Divider, Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import style from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Unanswered({questions}) {
    const users = useSelector(state=>state.users);

    const getUserName = (name) =>{
        const author = users[name];
        return(
            <h4>
                {
                    author.name
                }
                &nbsp;Says:
            </h4>
        )
    }

    const getImage = (name) =>{
        const author = users[name];
        return(
           <img src={author.avatarURL} alt="Author" style={{height:100 , width: 100 , borderRadius: 50}}/>
        )
    }

    return (
        <div>
           {
                questions.map(eachQuestion=>{
                    return(
                        <Card style={{width: 400 , margin: 'auto' , marginTop: 10}} key={eachQuestion.id}>
                            <Card.Content>
                                {getUserName(eachQuestion.author)}
                            </Card.Content>
                            <Card.Content>
                                <div className={style.container}>
                                    <div>
                                        {getImage(eachQuestion.author)}
                                    </div>
                                    <div className={style.line} />
                                    <div className={style.body}>
                                        Would You Rather
                                        <br/>
                                        ....{eachQuestion.optionOne.text}...
                                        <br/>
                                        <br/>
                                        <Link style={{marginTop: 20}} to={{pathname:`/question/${eachQuestion.id}` , state: eachQuestion}}>
                                            <Button basic color='green'>
                                                View Poll
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card.Content>
                            <Divider />
                        </Card>
                    )
                })
           }
        </div>
    )
}
