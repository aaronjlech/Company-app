import React from 'react';




const Nav = React.createClass({




   render(){

      return(
         <div class="top-bar">
  <div class="top-bar-left">
      <h1>Supplier Index</h1>
  </div>
  <div class="top-bar-right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"/></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>
      )
   }
})
