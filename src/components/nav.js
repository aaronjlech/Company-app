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
               <h1 id="title">P<span>ackard's</span></h1>
            </div>
         <div className="top-bar-right">
         <ul className="menu filter-menu">
            <li>
               <div className="row">
                  <div className="small-3 columns label_container">
                     <label htmlFor="middle-label" className="text-right middle">Show:</label>
                  </div>
                  <div className="small-9 columns">
                     <select ref="filter" onChange={this.handleChange}>
                        <option value="SHOW_ALL">All</option>
                        <option value="SHOW_APPLIANCES">Appliances</option>
                        <option value="SHOW_ELECTRONICS">Electronics</option>
                        <option value="SHOW_TOOLS">Tools</option>
                        <option value="SHOW_OUTDOOR">Outdoor Equipment</option>
                     </select>
                  </div>
               </div>
            </li>
      <li>
         <Link className="button primary_btn primary_btn_edit" to="/add-new">
            Add Supplier
         </Link>
      </li>
    </ul>
  </div>
</div>
      )
   }
})


export default Nav;
