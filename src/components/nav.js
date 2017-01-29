import React from 'react';




const Nav = React.createClass({




   render(){

      return(
         <div className="top-bar">
  <div className="top-bar-left">
      <h1>Supplier Index</h1>
  </div>
  <div className="top-bar-right">
    <ul className="menu">
      <li><input type="search" placeholder="Search"/></li>
      <li><button type="button" className="button">Search</button></li>
    </ul>
  </div>
</div>
      )
   }
})


export default Nav;
