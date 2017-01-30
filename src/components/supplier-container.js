import React from 'react';






export default class MainSuppliers extends Component {

   const SUPPLIER_FILTERS = {
      SHOW_ALL: supplier => !supplier.archived,
      SHOW_APPLIANCES: supplier => supplier.category === "Appliances",
      SHOW_ELECTRONICS: supplier => supplier.category === "Electronics",
      SHOW_TOOLS: supplier => supplier.category === "Tools",
      SHOW_OUTDOOR: supplier => supplier.category === "Outdoor Equipment",
      SHOW_ARCHIVED: supplier => supplier.archived
   }





   render(){
      const {filter} = this.state;
      const filteredSuppliers = suppliers.filter(SUPPLIER_FILTERS[filter]

      });

      return(
         <div className="row suppliers_container">
            {suppliers.map((sup, i)=>{
               return (
                  <Single
                     key={i}
                     name={sup.name}
                     address={sup.address}
                     category={sup.category}
                     email={sup.email}
                     phone={sup.phone}
                     index={i}
                  />
               )
            })}
         <div/>

      )
   }
}
