import React from 'react'

class UserCard extends React.Component {

    constructor(){
        super();
    }

render(){
    return (
        <div className='userCard'>
            <h3>Username: {this.props.user.login}</h3>
            <p>id: {this.props.user.id}</p>
            <p>created: {this.props.user.created_at}</p>
        </div>
    )
    }
} 

export default UserCard;