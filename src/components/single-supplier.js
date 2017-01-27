import React from 'react';





const Suppliers = React.createClass({

   _renderSingle(){
      return(
         <div className="suppliers_single">
            <h1 className="supplier_name">{this.props.name}</h1>
            <h3 className="supplier_address">{this.props.address}</h3>
            <h3 className="supplier_phone">{this.props.phone}</h3>
            <h3 className="supplier_email">{this.props.email}</h3>
            <h3 className="supplier_category">{this.props.category}</h3>
         </div>
      )
   },


   render(){

      return(
         <div className="suppliers">
            {}
         </div>
      )
   }


})
