import styled from "styled-components";
import detail from "../assets/images/detail.png"
import { useNavigate } from "react-router-dom";

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 430px;
`;

const Detail = () => {
  const navigate = useNavigate()
  return <>
    <Image src={detail} onClick={() => navigate('/')} />
  </>
}

export default Detail
