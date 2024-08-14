import { useState } from "react";
import ReceiptForm from "../components/Review/ReceiptForm";
import ReviewFormFields from "../components/Review/ReviewFormFields";

const Review = () => {
  const [imageUploaded, setImageUploaded] = useState(false);
  if (imageUploaded) return <ReviewFormFields />
  return <ReceiptForm
    setImageUploaded={setImageUploaded}
  />
}

export default Review
