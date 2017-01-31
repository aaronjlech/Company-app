import React from 'react';
import addSupplier from '../actions/action-creators';
import { browserHistory } from 'react-router';



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
      browserHistory.push("/")
   },


   render(){
      console.log(this.props, 'form proppps')
      return(
         <form onSubmit={this._handleSubmit} ref="newForm" >
           <div className="row">
            <div className="medium-12 columns">
               <label>Company Name
                  <input ref="companyName" type="text" placeholder="name"/>
               </label>
               </div>
            <div className="medium-12 columns">
               <label>Address
                 <input ref="address" type="text" placeholder="address"/>
               </label>
            </div>
            <div className="medium-12 columns">
               <label>Phone
                 <input ref="phone" type="text" placeholder="IE: 555-555-5555"/>
               </label>
            </div>
            <div className="medium-12 columns">
               <label>Email
                 <input ref="email" type="text" placeholder="Email"/>
               </label>
            </div>
           </div>
           <div className="medium-12 columns">
           <label>
             Category
               <select ref="category">
                  <option value="Appliances">Appliances</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Tools">Tools</option>
                  <option value="Outdoor Equipment">Outdoor Equipment</option>
               </select>
            </label>
            </div>
            <button>Submit</button>

         </form>
      )
   }
})

export default AddNewForm;
