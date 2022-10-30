import React from 'react';

const Header = (props) => {
    return (
        <Header className="App-Header">
            <h2>{props.text}</h2>
        </Header>
    )
}

export default Header;