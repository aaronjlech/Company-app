import React from 'react';
import { browserHistory } from 'react-router';




const SingleView = React.createClass({
   getInitialState(){
      const current = this.props.suppliers.filter((obj,i)=>{
         if(obj.id === this.props.params.singleId){
            return true
         }
      })
      return(
         current[0]
      )


   },

   handleEdit(e){
      e.preventDefault()
      this.props.editSupplier(this.state)
      // browserHistory.push("/")
   },

   _handleChange(e){
      let newState = this.state
      let currentInput = e.currentTarget.name
      newState[currentInput] = e.currentTarget.value
      console.log(newState)
      this.setState(newState)

   },


   render(){
      console.log(this.state)

      return(
         <div className="container">
            <div className="card">
               <div className="card-divider">
               </div>
               <div className="card-section">
                  <form onSubmit={this.handleEdit}>
                  <input type="text" value={this.state.name} name="name" onChange={this._handleChange}/>
                  <input type="text" value={this.state.address} name="address" onChange={this._handleChange}/>
                  <input type="text" value={this.state.phone} name="phone" onChange={this._handleChange}/>
                  <input type="text" value={this.state.email} name="email" onChange={this._handleChange}/>
                  <input type="text" value={this.state.category} name="category" onChange={this._handleChange}/>


                  <button>Submit Changes</button>
                  </form>
               </div>
            </div>
         </div>
      )
   }
})


export default SingleView;
