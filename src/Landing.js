import React, {useEffect, useState} from 'react'
import "./Landing.css"
import demoLandingBelt from "./sample/posts/Demo-Landing-Belt.png"

function Landing() {

    const [alfanita, setAlfanita] = useState(-620);
    var belt;


    function moveBeltLeft() {
        belt.style.left = parseInt(belt.style.left) + 1 + "px";
    }
    
    useEffect(() => {
        belt = document.querySelector('#belt');
        repeatWhileMouseOver(document.querySelector('#scroll-left-div'), moveBeltLeft, 1);
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
    
    return (<>
        <div id="Landing">
            <div id="intro-text">So you're curious about <span className="text-gradient"> NFTs</span> ?</div>
            <div id="belt-div">
                <img id="belt" style={{left: `${alfanita}px`}} src={demoLandingBelt}></img>
            </div>
            <div id="scroll-left-div"></div>
            <div id="scroll-right-div"></div>
        </div>
    </>)
}

export default Landing