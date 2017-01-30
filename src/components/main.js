import React from 'react';
import AddNewForm from './supplier-form';
import MainSuppliers from './supplier-container'



const Main = React.createClass({



   render(){

      return(
         <div className="main-container">
            <MainSuppliers {...this.props} />
            <AddNewForm display="display" {...this.props}/>

         </div>
      )
   }
})

export default Main;
