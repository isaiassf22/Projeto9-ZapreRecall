import styled from "styled-components"
import {boxPerguntas} from "./data"

export default function Footer({counter}) {
    return (
        <>
        <FooterStyle>
             
           <p>
            {counter}/{boxPerguntas.length} concluídos
           </p>
        </FooterStyle>
           
        </>
    )
}

const FooterStyle = styled.div`
    width: 100%;
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
    position: absolute;
    bottom: 0vh;
    p{
        font-size: 25px;
        font-family:  'Recursive', sans-serif;
    }
    `

