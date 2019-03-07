import React from 'react';

const Card = (props) => {

  return (
    <div className ='bg-light-green tc dib br3 pa3 ma3 grow'>
      <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}
export default Card;
