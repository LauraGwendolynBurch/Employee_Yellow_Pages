import React from 'react'

function Header() {
    return (
        <div className="jumbotron" style={{ background: "pink", fontFamily:"cursive", fontWeight:"bolder", textAlign:"center"}}>
            <h1 className="display-4">Emplyee Yellow Pages</h1>
                <p>Search for any emplyee in our company </p>
                <input type="text" className="" placeholder="Search by last name" id=""></input>
                <a className="btn m-3" href="#" role="button" style={{ background: "yellow"}}>search</a>
        </div>
    )
};

export default Header;