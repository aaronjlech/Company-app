import React from 'react';
import Single from './single-supplier';
import Nav from './nav';
import AddNewForm from './supplier-form';




const Main = React.createClass({



   render(){

      const { suppliers } = this.props
      return(
         <div className="main-container">
            <Nav {...this.props}/>
            <h1>Joe Schmos</h1>
            <div className="row suppliers_container">
               {suppliers.map((sup, i)=>{
                  return (
                     <Single
                        key={i}
                        name={sup.name}
                        category={sup.category}
                        email={sup.email}
                        phone={sup.phone}
                        index={i}
                     />
                  )
               })}
            </div>
            {/* <AddNewForm/> */}

         </div>
      )
   }
})

export default Main;
