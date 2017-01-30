function suppliers(state = [], action){


   switch (action.type) {
      case "ADD_SUPPLIER":

      return[
         {
            name: action.info.name,
            address: action.info.address,
            phone: action.info.phone,
            email: action.info.email,
            id: state.length
         },
         ...state
      ]
         break;
      case "REMOVE_SUPPLIER":
         return state.filter((supplier)=>{
            supplier.id !== action.id
         })
         break;
      case "EDIT_SUPPLIER":

         console.log(state, action.type, action.info);
         return state.map((supplier)=>{
            supplier.id === action.info.id ?

               {
                  // ...supplier,
                  name: action.info.name,
                  address: action.info.address,
                  phone: action.info.phone,
                  email: action.info.email,
                  id: action.info.id
               } : supplier

         })
         break;
      default:
         return state;
         break;
   }


}
export default suppliers;
