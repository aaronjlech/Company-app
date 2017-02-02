import React from 'react';
import { hashHistory, Link } from 'react-router';




const SingleView = React.createClass({

   getInitialState(){

      return this.props.suppliers.filter((obj,i)=>{
         if(obj.id === this.props.params.singleId){
            return true
         }
      })[0];

   },
   handleEdit(e){
      e.preventDefault()
      let { name, address, phone, email, category} = this.refs

      this.props.editSupplier({
         name: name.value,
         address: address.value,
         category: this.state.category,
         phone: phone.value,
         email: email.value,
         id: this.state.id
      })
      hashHistory.push('/')
   },

   removeCurrent(){

      this.props.deleteSupplier(this.state)
      hashHistory.push('/')
   },

   render(){

      return(
         <div className="suppliers_form text-center row">
            <div className="small-6 small-centered columns">
               <h1>Edit Current Supplier</h1>
               <Link to="/" className="button primary_btn home_btn">Home</Link>

               <form onSubmit={this.handleEdit}>
                  <label htmlFor="name">Name
                     <input className="suppliers_edit_input" type="text" defaultValue={this.state.name} ref="name" />
                  </label>
                  <label htmlFor="address">Address
                     <input className="suppliers_edit_input" type="text" defaultValue={this.state.address} ref="address" />
                  </label>
                  <label htmlFor="phone">Phone
                     <input className="suppliers_edit_input" type="text" defaultValue={this.state.phone} ref="phone" />
                  </label>
                  <label htmlFor="email">Email
                     <input className="suppliers_edit_input" type="text" defaultValue={this.state.email} ref="email" />
                  </label>
                  <button className="button primary_btn">Submit Changes</button>
               </form>
               <button className="button primary_btn danger_btn" onClick={this.removeCurrent}>DELETE</button>
            </div>

         </div>
      )
   }
})


export default SingleView;
