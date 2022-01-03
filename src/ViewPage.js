import React, { useState } from 'react';
import close from './sample/posts/close.svg';
import fire from './sample/posts/fire.svg';
import profileImg from './sample/posts/profile2.png'
import testImg from './sample/posts/Rectangle 3.png'
import './ViewPage.css'
function View() {
    return (<>
        <img id="close" src={close} />
        <div id="modal">
            <div className="left">
            <img id="artView" src={testImg} />
            <h1 id="artTitle">JungleCity</h1>
            <img src={fire} alt="fireIcon" id="like" />
            <p id="description">Lucious greens and blues drawn in Procreate.</p>
            <div id="price">$740</div>
            <button id="buy">Buy</button>
            </div>
            <div className="right">
                <div id="comments">
                    <div className="commentDiv">
                        <img src={profileImg} alt="" className="profileImg" />
                        <div className="name"></div>
                        <p className="comment"></p>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default View;