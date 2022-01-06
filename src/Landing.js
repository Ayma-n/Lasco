import React, {useEffect, useState} from 'react'
import "./Landing.css"
import demoLandingBelt from "./sample/posts/Demo-Landing-Belt.png"

function Landing() {

    const [beltLeft, setBeltLeft] = useState(-620);
    const belt = document.querySelector('#belt');


    function moveBeltLeft() {
        belt.style.left = parseInt(belt.style.left) + 5 + "px";
        console.log(beltLeft);
        //setBeltLeft(beltLeft+1);
        //console.log(beltLeft);
    }
    
    const [hovered, setHovered] = useState(false);

    var foo = "";

    useEffect(() => {
        repeatWhileMouseOver(document.querySelector('#scroll-left-div'), moveBeltLeft, 10);
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
                <img id="belt" style={{left: `${beltLeft}px`}} src={demoLandingBelt}></img>
            </div>
            <div id="scroll-left-div"></div>
            <div id="scroll-right-div"></div>
        </div>
    </>)
}

export default Landing