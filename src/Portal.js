import React from 'react';
import NavBar2 from './NavBar2';


function Portal(props) {
    // console.log(props.currentPage);
    return (
        <div id="Portal">
            <NavBar2></NavBar2>
            {React.createElement(props.currentPage)}
        </div>
        )
}

export default Portal;