import users from './mockData'

import User from "../User";

import './style.css'

function UserCards() {
    return (
        <div className="user-cards">
            {users.map(user => (<User key={user.id} {...user}/>))}
        </div>
    );
}

export default UserCards;