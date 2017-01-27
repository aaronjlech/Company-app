export function addSupplier(info){
   return{
      type: 'ADD_SUPPLIER',
      info
   }
}

export default addSupplier;
//
// export function addComment(postId, author, comment){
//    return{
//       type: "ADD_COMMENT",
//       postId,
//       author,
//       comment
//
//    }
// }
//
//
// export function removeComment(postId, i){
//
//    return{
//       type: 'REMOVE_COMMENT',
//       i,
//       postId
//    }
// }
