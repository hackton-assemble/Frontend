import { useLayoutEffect, useState } from "react";
import ReceiptForm from "../components/Review/ReceiptForm";
import ReviewFormFields from "../components/Review/ReviewFormFields";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (userInfo !== null) {
      navigate('/login')
    }
  }, [userInfo])

  if (imageUploaded) return <ReviewFormFields />
  return <ReceiptForm
    setImageUploaded={setImageUploaded}
  />
}

export default Review
