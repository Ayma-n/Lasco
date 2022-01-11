import React from 'react';
import PortalNav from './PortalNav';
import './Portal.css';


function Portal(props) {
    // console.log(props.currentPage);
    return (
        <div id="Portal">
            <PortalNav></PortalNav>
            {React.createElement(props.currentPage)}
        </div>
        )
}

export default Portal;