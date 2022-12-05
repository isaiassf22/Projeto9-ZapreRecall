import styled from "styled-components"
import title from "../img/ZapRecall.png"
import logo from "../img/image_2.png"
import Flipcard from "./Flipcard"
import { boxPerguntas } from "./data"
import Footer from "./footer"
import { useState } from "react"

export default function Container() {

    const [open,setOpen]=useState(null)
    const [counter,setCounter]=useState(0)
    return (
        <>

            <Style>
                <Header>
                    <img src={logo} alt="" />
                    <img src={title} alt="zap" />
                </Header>
                <Main>
                    {boxPerguntas.map((l, i) => <Flipcard  key={i} number={i} open={open} openCard={setOpen} counter={setCounter} count={counter}  data-test="flashcard" />)}    
                </Main>


                
                    <Footer counter={counter} />
                

            </Style>

        </>
    )
}

const Style = styled.div`
font-size: 16px;
color: brown;
width: 600px;
height: 100vh;
margin: 0 auto;
border: 1px solid black;
background-color: #FB6B6B;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`
const Header = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 80px;
   
    img:first-child{
        width: 70px;
    }

    img:nth-child(2){
        height: 70px ;
        margin: 0 auto;
    }
`

const Main = styled.div`
    width: 100%;
    max-height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    `