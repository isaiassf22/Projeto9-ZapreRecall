import styled from "styled-components"
import icon_0 from "../img/Vector.png"
import { boxPerguntas } from "./data"
import icon_1 from "../img/Vector(0).png"
import icon_2 from "../img/VectorGreen.png"
import icon_3 from "../img/VectorOrange.png"
import icon_4 from "../img/VectorRed.png"
import { useState } from "react"


export default function Flipcard({ number, open, openCard,counter,count}) {

    const [showAnswear, setShowAnswear] = useState(false)
    const [verification,setVerification]=useState("black")
    const [icon,setIcon]=useState(icon_0)

    function result(props){
        setVerification(props)
        openCard(null)
        counter(count+1)
        switch (props) {
            case "green":
                setIcon(icon_2)
                break;
            
            case "#FF922E":
                setIcon(icon_3)
                break;

            case "red":
                setIcon(icon_4)
                break;
        
            default:
                setIcon(icon_0)
                break;
        }
        oi()
        console.log(props)
    }
    function oi(){
        console.log(icon)
    }
    
    return (
        <>
            {open !== number ?
                <ClosedCard   color={verification}>
                    <p data-test="flashcard-text" >{boxPerguntas[number].begin}</p>
                    
                    <img src={icon} alt="icon" onClick={verification==="black"? () => openCard(number):"" } data-test="play-btn"/>
                </ClosedCard>
                : showAnswear ?
                    <OpenedCard>
                        <p data-test="flashcard-text">{boxPerguntas[number].answear}</p>

                        <Button>
                            <button style={{ backgroundColor: 'red' }} onClick={()=>result("red")} data-test="no-btn">
                                Não lembrei
                            </button>
                            <button  style={{ backgroundColor: "#FF922E" }} onClick={()=>result("#FF922E")} data-test="partial-btn">
                                quase não lembrei
                            </button>
                            <button  style={{ backgroundColor: "green" }} onClick={()=>result("green")} data-test="zap-btn">
                                Zap!
                            </button>
                        </Button>

                    </OpenedCard>
                    :
                    <OpenedCard >
                        <span>
                            <p data-test="flashcard-text">{boxPerguntas[number].question}</p>
                            <img src={icon_1} alt="icon" onClick={() => setShowAnswear(true)} data-test="turn-btn"/>
                        </span>

                    </OpenedCard>



            }


        </>


    )
}

const ClosedCard = styled.div`
    width: 80%;
    height: 70px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    p{
        font-size: 25px;
        font-family: 'Recursive', sans-serif;
        color:${props =>props.color} ;
        margin-left: 10px;
        text-decoration: ${props =>props.color==="black" ? 'none' : 'line-through'};
        
    }

    img{
        height: 40px;
        margin-right: 10px;
        cursor: pointer;
    }
    
`
const OpenedCard = styled.div`
    width: 80%;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
    span{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    p{
        font-size: 25px;
        font-family: 'Recursive', sans-serif;
        color: black;
        margin-left: 30px;
        
    }
    img{
        height: 40px;
        width: 40px;
        margin-right: 10px;
        cursor: pointer;
    }
    
`
const Button = styled.div`
    display: flex;
    justify-content: center;
    button{
        margin: 15px;
        width: 120px;
        height: 50px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }
`