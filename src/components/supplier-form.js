import React from 'react';




const AddNewForm = React.createClass({

   _handleSubmit(e){
      e.preventDefault()
      console.log("haylloo")
   },


   render(){
      return(
         <form onSubmit={this._handleSubmit}>
           <div className="row">
            <div className="medium-12 columns">
               <label>Company Name
                  <input type="text" placeholder="name"/>
               </label>
               </div>
            <div className="medium-12 columns">
               <label>Address
                 <input type="text" placeholder="address"/>
               </label>
            </div>
            <div className="medium-12 columns">
               <label>Address
                 <input type="text" placeholder="address"/>
               </label>
            </div>
            <div className="medium-12 columns">
               <label>Phone
                 <input type="text" placeholder="IE: 555-555-5555"/>
               </label>
            </div>
            <div className="medium-12 columns">
               <label>Email
                 <input type="text" placeholder="Email"/>
               </label>
            </div>
           </div>
           <label>
               <select>
                  <option value="Appliances">Appliances</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Tools">Tools</option>
                  <option value="Outdoor Equipment">Outdoor Equipment</option>
               </select>
            </label>
            <input type="submit">Submit</input>

         </form>
      )
   }
})

export default AddNewForm;
