function removeCompany(state = [], action){

   switch (action.type) {
      case "ADD_SUPPLIER":
         console.log(state, action)
         break;
      default:
         return state;
         break;
   }
}


export default removeCompany;
