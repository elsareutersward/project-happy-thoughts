import React, { useState } from 'react';
import Tooltip from 'react-tooltip-lite';
import { API_URL } from 'App';

export const MessageLike = (props) => {
    const { thoughtId, likes } = props
    const MESSAGES_URL = `${API_URL}${thoughtId}/like`;
    const [amountLikes, setAmountLikes] = useState(likes);
    const [myLikes, setMyLikes] = useState(+localStorage.getItem(thoughtId) || 0);

    const clickHandler = () => {
        fetch(MESSAGES_URL, 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}, 
                body: ''
            })
        setAmountLikes(amountLikes + 1);
        localStorage.setItem(thoughtId, myLikes + 1);
        setMyLikes(myLikes + 1);
    }

    return (
        <section className='like-container'>
            <Tooltip content='Spread the love' direction='left'>
                <button
                    type='button'
                    className={myLikes > 0 ? 'like-button-pink': 'like-button-grey'}
                    onClick={clickHandler}
                >
                    <img className='sparkling-heart' src={require('./assets/sparkling-heart.png')} alt='heart'/>
                </button>
            </Tooltip>    
            <div className='like-display'>x {amountLikes} (you've given {myLikes} love{myLikes > 1 ? 's' : null})</div>
        </section>
    )
}