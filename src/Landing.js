import React, {useEffect, useState} from 'react'
import "./Landing.css"
import demoLandingBelt from "./sample/posts/Demo-Landing-Belt.png"

function Landing() {

    var belt;

    function moveBeltLeft() {
        belt.style.left = parseInt(belt.style.left) + 1 + "px";
    }

    function moveBeltRight() {
        belt.style.left = parseInt(belt.style.left) - 1 + "px";
    }
    
    useEffect(() => {
        belt = document.querySelector('#belt');
        repeatWhileMouseOver(document.querySelector('#scroll-left-div'), moveBeltLeft, 1);
        repeatWhileMouseOver(document.querySelector('#scroll-right-div'), moveBeltRight, 1);
        scrolling(moveBeltRight, 10);
    }, [])

    function repeatWhileMouseOver(element, action, milliseconds) {
        var interval = null;
        element.addEventListener('mouseover', function () {
            interval = setInterval(action, milliseconds);
        });
    
        element.addEventListener('mouseout', function () {
            clearInterval(interval);
        });
    }
    function scrolling(action, milliseconds) {
        var interval = null;
            interval = setInterval(action, milliseconds);
    }
    
    return (<>
        <div id="Landing">
            <div id="intro-text">So you're curious about <span className="text-gradient"> NFTs</span> ?</div>
            <div id="belt-div">
                <img id="belt" style={{left: '-620px'}} src={demoLandingBelt}></img>
            </div>
            <div id="scroll-left-div"></div>
            <div id="scroll-right-div"></div>
            <div id="button-div">
                <a href="/login">
                    <button class="login-signup">Login</button>
                </a>
                <a href="/signup">
                    <button class="login-signup">Signup</button>
                </a>
            </div>
        </div>
    </>)
}

export default Landing