const addSupplier = function (info){

   return{
      type: 'ADD_SUPPLIER',
      info
   }
}

export const removeSupplier = function(index){

   return{
      type: 'REMOVE_SUPPLIER',
      index
   }
}

export const filterSuppliers = function(category){

   return{
      type: "FILTER_SUPPLIERS",
      category
   }
}
export default addSupplier;
