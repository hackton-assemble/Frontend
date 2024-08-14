import styled from "styled-components"
import main1 from "../assets/images/main_1.png"
import main2 from "../assets/images/main_2.png"
import { useNavigate } from "react-router-dom"

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Main = () => {
  const navigate = useNavigate()
  return (
    <>
      <img
        style={{
          width: "calc(100% - 50px)",
          marginLeft: "25px",
          height: "auto",
          marginTop: "144px"
        }}
        src={main2} alt="/" />
      <button style={{
        width: "100%",
        marginTop: "24px"
      }}
        onClick={() => navigate('review')}
      >
        <Image src={main1} />
      </button>
    </>

  )
}

export default Main
