function suppliers(state = [], action){

   const {name, address, phone, email, category} = action.info

   switch (action.type) {
      case "ADD_SUPPLIER":
      return[
         {
            name: name,
            address: address,
            phone: phone,
            email: email,
            id: state.length
         }
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
                  ...supplier,
                  name: name,
                  address: address,
                  phone: phone,
                  email: email,
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
