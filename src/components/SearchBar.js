import React, {Component} from "react";


// const SearchBar = () =>{
//     return(
//         <form action="/search">
//             <input placeholder="Search" required/>
//             <button type="submit">Search</button>
//         </form>
//     )
// };

// export default SearchBar;

function SearchBar() {
    return (
      <div className="home">
         <h1>SPOTIFY</h1>
        <form id="form" className="formSearch">
          <div className="form-group">
            <input type="text" name="title" required />
            <button id="btnSearch" type="submit">
              Search
            </button>
          </div>
        </form> 
      </div>
    ); 
};
export default SearchBar;