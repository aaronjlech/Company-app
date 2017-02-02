import React from 'react';
import { Link } from 'react-router';


const SupplierCard = React.createClass({

   render(){

      return(
         <div className="columns medium-4 large-4 small-12 suppliers_column text-center">
               <div className="suppliers_single">
                  <div className="card-divider supplier_title">
                     <h4>{this.props.name}</h4>
                  </div>
                  <div className="card-section">
                     <p>{this.props.address}</p>
                     <p>{this.props.phone}</p>
                     <p>{this.props.email}</p>
                     <p>{this.props.category}</p>
                  </div>
                  <div className="button-container">
                     <Link className="button primary_btn primary_btn_edit" to={`/view/${this.props.id}`}>Edit</Link>

                  </div>
               </div>
         </div>
      );
   }
})


export default SupplierCard;
