
import { useEffect } from 'react'



export default function Tittle({tittle}){
    
    useEffect(()=>{
        document.title = tittle
    },[tittle])
}