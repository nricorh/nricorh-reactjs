import React from  'react';

export default class List extends React.Component {
    state = {
        users : ['Enrico', 'Risnanda', 'Himawan']
    }

    render () {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map((user, index) => <li key={index}>{user}</li>)
                    }
                </ul>
            </div>
        )
    }
}