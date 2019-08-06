import React from 'react'

class FollowerCard extends React.Component {

    constructor(){
        super();
    }

render(){
    return (
        <div className='followerCard'>
            <h3>Username: {this.props.follower.login}</h3>
            <p>id: {this.props.follower.id}</p>
            <p>created: {this.props.follower.created_at}</p>
        </div>
    )
    }
} 

export default FollowerCard;