import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mypage from "../assets/images/mypage.png"
import mypage_pop from "../assets/images/mypage_pop.png"

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 430px;
`;

const MyPage = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate()

  const [opened, setOpend] = useState(false)

  useLayoutEffect(() => {
    if (userInfo === null) {
      navigate('/login')
    }
  }, [userInfo])

  return <>
    <Image src={opened ? mypage_pop : mypage} onClick={() => setOpend(!opened)} />
  </>
}

export default MyPage
