import { useLayoutEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (userInfo === null) {
      navigate('/login')
    }
  }, [userInfo])

  return <></>
}

export default MyPage
