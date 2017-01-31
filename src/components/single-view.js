import React from 'react';





const SingleView = React.createClass({




   render(){
      const current = this.props.suppliers.filter((obj,i)=>{
         console.log(obj.id, 'da id')
         if(obj.id === this.props.params.singleId){
            console.log(obj.id, "hello", this.props.params.singleId)
            return true
         }
      })
      const singleSupplier = current[0];

      console.log(this.props.params.singleId)
      return(
         <div className="container">
            <div className="card">
               <div className="card-divider">
                  <h4>{singleSupplier.name}</h4>
               </div>
               <div className="card-section">
                  <p>{singleSupplier.address}</p>
                  <p>{singleSupplier.phone}</p>
                  <p>{singleSupplier.email}</p>
                  <p>{singleSupplier.category}</p>
               </div>
            </div>
         </div>
      )
   }
})


export default SingleView;
