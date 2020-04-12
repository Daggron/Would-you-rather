import React, { useEffect, useState } from 'react'
import style from './Auth.module.css';
import Kylo from './kyloren.png';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/actions/Auth/Auth';
import { Dropdown, Button } from 'semantic-ui-react';
import { FetchData } from '../../redux/shared/shared';
import { Redirect } from 'react-router-dom';

export default function Auth() {
    const dispatch = useDispatch();
    const [selectedUser , setSelectedUser] = useState();
    
    useEffect(()=>{
        dispatch(FetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleChange = (e,data) => {
        setSelectedUser(data.value);
    }

    const handleLogin = () => {
        dispatch(Login(selectedUser));
    }

    const users = useSelector(state=>state.users);
    if(!users) return <p>Loding...</p>
    if(users.authUser){
        return(
            <Redirect to={{pathname: '/'}} />
        )
    }

    const usersList = Object.entries(users).map(([name , eachUser])=>{
        return({
            key: name,
            text: eachUser.name,
            value: eachUser.id,
            image: {
                avatar: true,
                src: eachUser.avatarURL
            }
        })
    })
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h4>
                    Welcome to Would you rather app
                </h4>
                <span>
                    Please sign in to continue
                </span>
            </div>
            <div className={style.body}>
                <img src={Kylo} alt="login-splash" />
                <div className={style.select}>
                    <Dropdown 
                    placeholder='Select User'
                    fluid
                    selection
                    options={usersList}
                    style={{width: 200}}
                    onChange={handleChange}
                    />
                </div>
                <Button animated='fade' disabled={selectedUser ? false : true} style={{marginTop: 10 , width: 200}} onClick={handleLogin}>
                <Button.Content visible>Sign Up </Button.Content>
                {selectedUser && (<Button.Content hidden>{selectedUser.name}</Button.Content>) }
                {!selectedUser && (<Button.Content hidden>Choose a user first </Button.Content>) }
                </Button>
            </div>
        </div>
    )
}
