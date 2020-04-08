import React from 'react';
import NavContainer from '../nav/nav_container';

const Homepage = () => {
    return (
        <div>
            <img className="home-main-container" src={splash} alt="splash"></img>
                <NavContainer/>
        </div>
    )
}

export default Homepage;