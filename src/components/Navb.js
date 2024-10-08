// FileName: Navb.js

import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>GeeksforGeeks Musiikkisoitin (https://www.geeksforgeeks.org/)</h1>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}
            >
                <h4>Kirjasto</h4>
            </button>
        </nav>
    );
};

export default Nav;