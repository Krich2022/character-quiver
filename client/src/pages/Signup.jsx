import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER_MUTATION } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER_MUTATION);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
          variables: {
            email: formState.email,
            password: formState.password,
            username: formState.username
          },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormState({
          ...formState,
          [id]: value,
        });
      };

    return (
        <div direction="vertical" className="container-background p-5 enable-rounded text-white">
            <h2 className="pb-3">Set Up Your Account</h2>

            <form>
                <div>
                    <Form.Control type="input" id="username" name="username" placeholder="username" className="mb-4" onChange={handleChange} />
                    <Form.Control type="input" id="email" name="email" placeholder="email" className="mb-4" onChange={handleChange} />
                    <Form.Control type="password" id="password" name="password" placeholder="password" className="mb-3" onChange={handleChange} />
                    <Button className="mb-3" onClick={handleSubmit}>Create Account</Button>
                </div>
            </form>
            <p className="text-lg">Already have an account?</p>
            <Button className="mb-3">Login</Button>
        </div>
    )
}

export default Signup;