import React from 'react';

export function MediaCard({title, body, imageUrl}){
   console.log(imageUrl)
    return(

        <div className='media'>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl} alt='simple things matters'></img>
        </div>

    )
}