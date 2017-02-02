import React from 'react';
import addSupplier from '../actions/action-creators';
import { hashHistory, Link } from 'react-router';


const AddNewForm = React.createClass({

   _handleSubmit(e){
      const {companyName, address, phone, category, email } = this.refs
      e.preventDefault()
      let newSupplier = {
         name: companyName.value,
         address: address.value,
         phone: phone.value,
         category: category.value,
         email: email.value

      };
      console.log(newSupplier)
      this.props.addSupplier(newSupplier)
      this.refs.newForm.reset();
      hashHistory.push("/")
   },


   render(){
      console.log(this.props, 'form proppps')
      return(
         <div className="suppliers_form text-center row">
            <Link to="/" className="button primary_btn home_btn">Home</Link>
            <div className="small-6 small-centered columns">
               <h1>Create New Supplier</h1>
               <form onSubmit={this._handleSubmit} ref="newForm" >
                  <label>Company Name
                     <input className="suppliers_edit_input" ref="companyName" type="text" placeholder="name"/>
                  </label>
                  <label>Address
                    <input className="suppliers_edit_input" ref="address" type="text" placeholder="address"/>
                  </label>
                  <label>Phone
                    <input  className="suppliers_edit_input" ref="phone" type="text" placeholder="IE: 555-555-5555"/>
                  </label>
                  <label>Email
                    <input className="suppliers_edit_input" ref="email" type="text" placeholder="Email"/>
                  </label>
                  <label>Category
                     <select className="suppliers_edit_input" ref="category">
                        <option value="Appliances">Appliances</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Tools">Tools</option>
                        <option value="Outdoor Equipment">Outdoor Equipment</option>
                     </select>
                  </label>
                  <button className="button primary_btn">Submit</button>
               </form>
            </div>
         </div>
      )
   }
})

export default AddNewForm;
