import React from 'react';
import PortalNav from './PortalNav';


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