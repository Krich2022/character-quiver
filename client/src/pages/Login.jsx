import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../utils/mutations";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../utils/actions";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";

function LoginPage(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_MUTATION);
  // const dispatch = useDispatch();
  const [state, dispatch] = useStoreContext();
  let [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginFailed(false);
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.login.token;
      console.log(token);
      const user = mutationResponse.data.login.user;
      console.log(user);
      Auth.login(token);
      dispatch(loginSuccess(token, user));
    } catch (err) {
      console.error("Login failed:", err);
      setLoginFailed(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div
        direction="vertical"
        className="container-background p-5 enable-rounded text-color login-width"
      >
        <h2 className="pb-3">Login to your account</h2>
        {loginFailed ? (
          <Alert key="danger" variant="danger">
            Username or Password is incorrect
          </Alert>
        ) : (
          <></>
        )}
        <form>
          <Form.Control
            type="input"
            id="email"
            name="email"
            placeholder="email"
            className="mb-4 input-container"
            onChange={handleChange}
          />
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="mb-4 input-container"
            onChange={handleChange}
          />
          <Button className="mb-3 button-container" onClick={handleSubmit}>
            Login
          </Button>
        </form>
        <p className="">Don't have an account?</p>
        <Button href="/signup" className="mb-3 button-container">
          Create an Account
        </Button>
      </div>
    </>
  );
}

export default LoginPage;
