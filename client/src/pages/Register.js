import { useEffect, useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isUser: false,
  showAlert:false
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
  const {name, email, password, isUser, showAlert, displayAlert} = useAppContext()
  const handleChange = (e) => {
      setValues({...values, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     if (!email || !password || (!isUser && !name)) {
         displayAlert();
         return;
     }
  }

  const toggleUser = () => {
      setValues({...values, isUser: !values.isUser})
  }
  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{isUser ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {values.isUser && (
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
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isUser ? "Not a member yet?" : "Already a member?"}
          <button onClick={toggleUser} className="member-btn">
            {values.isUser ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
