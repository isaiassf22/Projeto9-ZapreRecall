import Globalstyle from "./style/globalStyle"
import Container from "./components/container"
import { useState } from "react"
import Begin from "./components/begin"

export default function App (){
    const[start,setStart]=useState(false)
    return(
        <>
         <Globalstyle/>
         { start ? 
          <Container></Container>
          :
          <Begin start={setStart}></Begin>

         }
       
        
        
        </>
    )
}