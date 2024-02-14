import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from '../utils/mutations';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../utils/actions';
import Auth from "../utils/auth";

function LoginPage(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login] = useMutation(LOGIN_MUTATION);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            console.error('Login failed:', err)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <>
            <div direction="vertical" className="container-background p-5 enable-rounded text-color">
                <h2 className="pb-3">Login to your account</h2>

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
                <Button href="/signup" className="mb-3 button-container">Create an Account</Button>
                
            </div>
        </>
    )
}

export default LoginPage;
