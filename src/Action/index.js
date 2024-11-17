export const incNumber=(num)=>{
   return {
    type:"INCREMENT",
    payLoad:num,
   }
}

export const dicNumber=()=>{
    return {
     type:"DICREMENT"
    }
 }