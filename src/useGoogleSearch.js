import { useState,useEffect } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "017576662512468239146";
const useGoogleSearch = (term) => { 
 const[data,setData] = useState(null);
 useEffect(()=>{
    const fetchData = async() =>{
         fetch(
            `https://www.googleapis.com/customsearch/v1?key=AIzaSyAO9SANz_P_T0EZTSOji9XG50jmZysQqn8&cx=017576662512468239146:omuauf_lfve&q=${term}`
        )
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
    }
        fetchData();
 },[term])

 return{data}
 
};

export default useGoogleSearch
