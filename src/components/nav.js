import React from 'react';
import { Link }  from 'react-router';



const Nav = React.createClass({

   handleChange(){
      console.log('hayllooo', this.refs.filter.value)
      this.props.displayFilter(this.refs.filter.value);

   },


   render(){

      return(
         <div className="top-bar main-nav">
  <div className="top-bar-left">
      <h1 id="title">Poncho's</h1>
  </div>
  <div className="top-bar-right">
    <ul className="menu filter-menu">
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
      <li>
         <Link to="/add-new">
            <div className="button-container">
               <a className="button primary_btn primary_btn_edit">Edit</a>
            </div>
         </Link>
      </li>
    </ul>
  </div>
</div>
      )
   }
})


export default Nav;
