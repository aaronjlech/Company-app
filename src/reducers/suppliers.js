function suppliers(state = [], action){

   switch (action.type) {
      case "ADD_SUPPLIER":
         console.log(state, action.type, action.supplier);
         break;
      case "REMOVE_SUPPLIER":
         console.log(state, action.type, action.supplier);
         break;
      case "EDIT_SUPPLIER":
         console.log(state, action.type, action.supplier);
         break;
      default:
         return state;
         break;
   }


}
export default addNewCompany;
