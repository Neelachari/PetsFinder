import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "../actionTypes"
import axios from "axios"

export const getcatproduct=(query)=>(dispatch)=>{
   dispatch({type:GET_REQUEST,});
   // console.log(query)
   
  //  axios.get(`https://shy-erin-perch-kit.cyclic.app/cats/get?${paramsObj.gender?`&gender=${paramsObj.gender}`:""}${paramsObj.color?`&color=${paramsObj.color}`:""}`)
    axios.get("https://shy-erin-perch-kit.cyclic.app/cats/get",query)
   .then((res)=>{
   //  console.log(res.data)
    return dispatch({type:GET_SUCCESS,payload:res.data})
   })
   .catch((error)=>{
    return dispatch({type:GET_FAILURE})
   })
} 

