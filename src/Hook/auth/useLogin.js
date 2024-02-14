import { useEffect, useState } from "react";
import { showToast } from "../../lib/Swal/Swal";
import { useNavigate } from "react-router-dom";


const User = {
  userId: "kimPole",
  password: "1234",
};

const useLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [isValid, setIsValid] = useState(false);

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handlePw = (event) => {
    setPw(event.target.value);
  };

  useEffect(() => {
    if (User.userId === id && User.password == pw) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [id, pw]);

  const onclickConfirnButton = () => {
    if (isValid) {
      showToast("success", "기모찌");
      navigate("/check-student");
    } else {
      showToast("error", "헤응");
      setId("");
      setPw("");
    }
  };

  return {
    id,
    pw,
    isValid,
    handleId,
    handlePw,
    onclickConfirnButton,
  };
};

export default useLogin;
