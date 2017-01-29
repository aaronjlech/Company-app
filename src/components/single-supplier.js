import React from 'react';





const Single = React.createClass({

   render(){

      return(
         <div className="suppliers_single columns medium-4 large-4 small-12">
            <div className="card">
               <div className="card-divider">
                  <h4>{this.props.name}</h4>
               </div>
               <div className="card-section">
                  <p>{this.props.address}</p>
                  <p>{this.props.phone}</p>
                  <p>{this.props.email}</p>
                  <p>{this.props.category}</p>
               </div>
            </div>
         </div>
      );
   }
})


export default Single;
