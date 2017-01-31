import React from 'react';
import { Link }  from 'react-router';



const Nav = React.createClass({

   handleChange(){
      console.log('hayllooo', this.refs.filter.value)
      this.props.displayFilter(this.refs.filter.value);

   },
   handleSearch(e){
      let search = this.refs.nameSearch.value.toLowerCase()
      this.props.suppliers.filter((obj, i)=>{
            console.log("hayLo")
            let nameLowered = obj.name.toLowerCase()
         if(nameLowered.includes(search)){
            console.log(obj)
         }
      })
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
         <p>OR</p>
         <label htmlFor="">
            By Name:
            <input type="text" onChange={this.handleSearch} ref="nameSearch"/>
         </label>
      </li>
      <li><Link to="/add-new">ADD+</Link></li>
    </ul>
  </div>
</div>
      )
   }
})


export default Nav;
