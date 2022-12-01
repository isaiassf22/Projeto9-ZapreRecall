import styled from "styled-components"
import zap from "../img/ZapRecall.png"
import logo from "../img/image_2.png"


export default function ({start}) {
return(
    <>
    <Begin>
        <img src={logo} alt="" />
        <img src={zap} alt="" />
        <button onClick={() => start(true)}>Iniciar Recall!!</button>
    </Begin>
    </>
)
}

const Begin = styled.div`
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
img:nth-child(1){
    width: 200px;
    height: 200px;
   margin-bottom: 40px;
}

img:nth-child(2){
    width: 180px;
}

button{
    width: 300px;
    height: 60px;
    text-align: center;
    font-size: 20px;
    color: red;
    background-color: white;
    border: 1px solid red;
    border-radius: 5px;
    margin-top: 30px;
}
`