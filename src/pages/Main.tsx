import styled from "styled-components"
import main1 from "../assets/images/main_1.png"
import { useNavigate } from "react-router-dom"

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Main = () => {
  const navigate = useNavigate()
  return (
    <button style={{
      width: "100%",
      marginTop: "144px"
    }}
      onClick={() => navigate('review')}
    >
      <Image src={main1} />
    </button>
  )
}

export default Main
