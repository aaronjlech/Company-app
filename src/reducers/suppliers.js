// very simple serial generator
function serialize(str, lngth){
   let numStr = ''
   for(var i = str.length -1 ; i >= 0; i--){
      var randm = Math.floor(str.length*(Math.random()*lngth))
      if(randm % 2 != 0 || typeof str[i] === "undefined" || str[i] === " "){
         numStr += randm
      }else{
         numStr += str[i]
      }
   }
   return numStr
}

function suppliers(state = [], action){

   switch (action.type) {
      case "ADD_SUPPLIER":
      return[
         {
            name: action.info.name,
            address: action.info.address,
            phone: action.info.phone,
            email: action.info.email,
            category: action.info.category,
            id: serialize(action.info.name, state.length)
         },
         ...state
      ]
         break;
      case "DELETE_SUPPLIER":
         return state.filter((supplier)=>{
            if(supplier.id !== action.info.id){
               return true
            }else{
               return false
            }
         })
         break;
      case "EDIT_SUPPLIER":
            return state.map((supplier)=>{

            if(supplier.id === action.info.id){
               return action.info
            }else{
               return supplier
            }
         })
         break;
      default:
         return state;
         break;
   }


}
export default suppliers;
