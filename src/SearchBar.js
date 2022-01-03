import React, { useState } from 'react'
import magGlass from './sample/posts/magGlass.svg'
import './SearchBar.css'
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    function handleFocus() {
        document.getElementById("placeholder").style.display = 'none';
        if (window.innerWidth > 650) {
            document.getElementById("searchBar").style.top = "83px";
            document.getElementById("searchBar").style.width = "1075px";
        }

    }

    function handleFocusOut() {
        document.getElementById("placeholder").style.display = 'visible';
    }

    function handleChangeSearch(e) {
        
        setSearchTerm(e.target.value);

        /* checks if first letter is @, and if so, sets color of input to purple. if not, sets it back to black.  */
        let isAt = e.target.value.charAt(0) == '@';
        if (isAt) {
            /* TODO: use ternary operator */
            document.getElementById("searchText").style.color = "rgb(195,55,245)";
            document.getElementById("searchText").style.caretColor = "rgb(195,55,245)";
        }
        else {
            document.getElementById("searchText").style.color = "black";
            document.getElementById("searchText").style.caretColor = "gray";
        }
        
      }

    return (<>
        <div id="searchBar" type="search">
            <img id="magGlass" role="presentation" src={magGlass} />
            <p id="placeholder"> Find <span className='placeholderGradient'>Artists...</span></p>
            <input
            // whileFocus={{y: 20}}
            id="searchText" type="search" value={searchTerm} onChange={handleChangeSearch} onFocus={handleFocus} onFocusOut={handleFocusOut} />
        </div>
    </>);
}

export default SearchBar;