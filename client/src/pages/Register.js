import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isUser: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
  const {  user, showAlert, displayAlert, registerUser, isLoading } =
    useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isUser } = values;
    if (!email || !password || (!isUser && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isUser) {
      console.log("already a user");
    } else {
      registerUser(currentUser);
    }
  };
  useEffect(() => {
    if(user){
        setTimeout(()=>{

            navigate('/')
        }, 2000)
    }
  }, [user, navigate])
  const toggleUser = () => {
    setValues({ ...values, isUser: !values.isUser });
    console.log(showAlert)
  };
  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{values.isUser ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isUser && (
          <FormRow
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            type={"text"}
          />
        )}
        <FormRow
          name={"email"}
          value={values.email}
          handleChange={handleChange}
          type={"email"}
        />
        <FormRow
          name={"password"}
          value={values.password}
          handleChange={handleChange}
          type={"password"}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isUser ? "Not a member yet?" : "Already a member?"}
          <button type = "button" onClick={toggleUser} className="member-btn">
            {!values.isUser ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
