import React from 'react';
import SupplierCard from './single-supplier';
import Nav from './nav';
import {Link} from 'react-router';

const SUPPLIER_FILTERS = {
   SHOW_ALL: supplier => !supplier.archived,
   SHOW_APPLIANCES: supplier => supplier.category === "Appliances",
   SHOW_ELECTRONICS: supplier => supplier.category === "Electronics",
   SHOW_TOOLS: supplier => supplier.category === "Tools",
   SHOW_OUTDOOR: supplier => supplier.category === "Outdoor Equipment",
   SHOW_ARCHIVED: supplier =>  supplier.archived
}

const MainSuppliers = React.createClass({

   getInitialState(){
      return{
         filter: "SHOW_ALL"
      }
   },

   handleShow(input) {
      console.log('ggetttinn hitt')
      this.setState({ filter: input })
   },




   render(){
      const { suppliers } = this.props
      const { filter } = this.state;
      console.log(this.props)
      const filteredSuppliers = suppliers.filter(
         SUPPLIER_FILTERS[filter]

      )

      return(
         <div className="main_container">
            <Nav displayFilter={this.handleShow}/>
            <div className="row suppliers_container">
               {filteredSuppliers.map((sup, i)=>{
                  return (
                     <SupplierCard
                        key={i}
                        name={sup.name}
                        address={sup.address}
                        category={sup.category}
                        email={sup.email}
                        phone={sup.phone}
                        id={sup.id}
                     />
                  )
               })}
         </div>
      </div>
      )
   }
})

export default MainSuppliers;
