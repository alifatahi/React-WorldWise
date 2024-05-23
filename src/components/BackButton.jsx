import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  // To navigate/redirect to page we want
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        // Redirect back
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
