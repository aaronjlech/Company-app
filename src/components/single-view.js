import React from 'react';





const SingleView = React.createClass({
   getInitialState(){
      const current = this.props.suppliers.filter((obj,i)=>{
         console.log(obj.id, 'da id')
         if(obj.id === this.props.params.singleId){
            console.log(obj.id, "hello", this.props.params.singleId)
            return true
         }
      })
      return(
         current[0]
      )


   },

   handleEdit(e){
      e.preventDefault()
      console.log('wahht')
   },

   _handleChange(e){
      console.log([e.target])

   },


   render(){
      // const current = this.props.suppliers.filter((obj,i)=>{
      //    console.log(obj.id, 'da id')
      //    if(obj.id === this.props.params.singleId){
      //       console.log(obj.id, "hello", this.props.params.singleId)
      //       return true
      //    }
      // })
      // const singleSupplier = current[0];

      console.log(this.props.params.singleId)
      return(
         <div className="container">
            <div className="card">
               <div className="card-divider">
               </div>
               <div className="card-section">
                  <form onSubmit={this.handleEdit}></form>
                  <input type="text" value={this.state.name} ref="name" onChange={this._handleChange}/>
                  <input type="text" value={this.state.address} ref="address" onChange={this._handleChange}/>
                  <input type="text" value={this.state.phone} ref="phone" onChange={this._handleChange}/>
                  <input type="text" value={this.state.email} ref="email" onChange={this._handleChange}/>
                  <input type="text" value={this.state.category} ref="category" onChange={this._handleChange}/>
                  <button>Submit Changes</button>
               </div>
            </div>
         </div>
      )
   }
})


export default SingleView;
