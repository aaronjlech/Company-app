import React from 'react';




const Nav = React.createClass({

   handleChange(){
      console.log('hayllooo', this.refs.filter.value)
      this.props.displayFilter(this.refs.filter.value);

   },

   render(){

      return(
         <div className="top-bar">
  <div className="top-bar-left">
      <h1>Supplier Index</h1>
  </div>
  <div className="top-bar-right">
    <ul className="menu">
      <li>
         <label>
            Show:
               <select ref="filter" onChange={this.handleChange}>
                  <option value="SHOW_ALL">All</option>
                  <option value="SHOW_APPLIANCES">Appliances</option>
                  <option value="SHOW_ELECTRONICS">Electronics</option>
                  <option value="SHOW_TOOLS">Tools</option>
                  <option value="SHOW_OUTDOOR">Outdoor Equipment</option>
               </select>
         </label>
      </li>
      <li><button type="button" className="button">Search</button></li>
    </ul>
  </div>
</div>
      )
   }
})


export default Nav;
