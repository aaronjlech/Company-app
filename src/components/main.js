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

            <AddNewForm display="display"/>

         </div>
      )
   }
})

export default Main;
