import React from 'react';
import { browserHistory } from 'react-router';




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
         category: category.value,
         phone: phone.value,
         email: email.value,
         id: this.state.id
      })
   },

   removeCurrent(){

      this.props.deleteSupplier(this.state)
      browserHistory.push('/')
   },

   render(){



      return(
         <div className="container">
            <div className="card">
               <div className="card-divider">
               </div>
               <div className="card-section">
                  <form onSubmit={this.handleEdit}>
                  <input type="text" defaultValue={this.state.name} ref="name" />
                  <input type="text" defaultValue={this.state.address} ref="address" />
                  <input type="text" defaultValue={this.state.phone} ref="phone" />
                  <input type="text" defaultValue={this.state.email} ref="email" />
                  <input type="text" defaultValue={this.state.category} ref="category" />


                  <button>Submit Changes</button>
                  </form>
               </div>
               <button onClick={this.removeCurrent}>DELETE</button>
            </div>
         </div>
      )
   }
})


export default SingleView;
