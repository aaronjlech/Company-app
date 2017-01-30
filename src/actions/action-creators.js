const addSupplier = function (info){

   return{
      type: 'ADD_SUPPLIER',
      info
   }
}
export const deleteSupplier = function(info){
   return{
      type: 'DELETE_SUPPLIER',
      info
   }
}
export const editSupplier = function(crnt, updated){
   return{
      type: "EDIT_SUPPLIER",
      crnt,
      updated
   }
}
