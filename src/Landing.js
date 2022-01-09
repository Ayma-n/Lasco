import React, { useEffect } from "react";
import "./Landing.css";
import demoLandingBelt from "./sample/posts/Demo-Landing-Belt.png";
import demoLogo from "./sample/posts/demo-logo.png";
import NavBar from "./NavBar";

function Landing() {
  var belt;
  var beltDiv;
  var scrollInterval;

  const defaultWidthOffset = 20;
  const defaultBeltWidth = 2662;
  const startingOffset = -1288;

  function moveBeltLeft() {
    const widthOffset =
      (defaultWidthOffset / defaultBeltWidth) * belt.clientWidth;
    if (parseInt(beltDiv.style.left) >= 0) {
      beltDiv.style.left = `${-belt.clientWidth - 0.5 * widthOffset}px`;
    }
    beltDiv.style.left = parseInt(beltDiv.style.left) + 1 + "px";
  }

  function moveBeltRight() {
    const widthOffset =
      (defaultWidthOffset / defaultBeltWidth) * belt.clientWidth;
    if (parseInt(beltDiv.style.left) <= -belt.clientWidth - widthOffset) {
      beltDiv.style.left = `${-0.5 * widthOffset}px`;
    }
    beltDiv.style.left = parseInt(beltDiv.style.left) - 1 + "px";
  }

  useEffect(() => {
    beltDiv = document.querySelector("#belt-div");
    belt = document.querySelector("#main-belt");
    repeatWhileMouseOver(
      document.querySelector("#scroll-left-div"),
      moveBeltLeft,
      1
    );
    repeatWhileMouseOver(
      document.querySelector("#scroll-right-div"),
      moveBeltRight,
      1
    );
    scrolling(moveBeltRight, 10);
  }, []);

  function repeatWhileMouseOver(element, action, milliseconds) {
    var interval = null;
    element.addEventListener("mouseover", function () {
      interval = setInterval(action, milliseconds);
      clearInterval(scrollInterval);
    });

    element.addEventListener("mouseout", function () {
      clearInterval(interval);
      scrolling(moveBeltRight, 10);
    });
  }
  function scrolling(action, milliseconds) {
    scrollInterval = setInterval(action, milliseconds);
  }
  //console.log(window.innerWidth)
  //console.log(`${-4804 + 0.5 * window.innerWidth}px`);

  return (
    <>
      <div id="Landing">
      <NavBar></NavBar>
        <div id="intro-text">
          So you're curious about <span className="text-gradient">NFTs</span> ?
        </div>
        <div id="parent-div">
        <div
          id="belt-div"
          style={{ left: `${startingOffset + 0.5 * window.innerWidth}px` }}
        >
          <img id="main-belt" className="belt" src={demoLandingBelt}></img>
          <img className="belt" src={demoLandingBelt}></img>
        </div>
          <div id="scroll-left-div"></div>
          <div id="scroll-right-div"></div>
        </div>
        <div id="button-div">
            <a href="/signup">
              <button className="filled-btn" id="join-lasco-button">
                <div className="text-white">Join Lasco</div>
              </button>
            </a>
          </div>
      </div>
    </>
  );
}

export default Landing;
