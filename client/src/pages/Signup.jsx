import { Button, Form } from 'react-bootstrap';

function Signup() {
    return (
        <div direction="vertical" className="container-background p-5 enable-rounded text-white">
            <h2 className="pb-3">Set Up Your Account</h2>

            <form>
                <div>
                    <Form.Control type="input" id="createUsername" placeholder="username" className="mb-4" />
                    <Form.Control type="input" id="createEmail" placeholder="email" className="mb-4" />
                    <Form.Control type="password" id="createPassword" placeholder="password" className="mb-3" />
                    <Button className="mb-3">Create Account</Button>
                </div>
            </form>
            <p classname="text-lg">Already have an account?</p>
            <Button className="mb-3">Login</Button>
        </div>
    )
}

export default Signup;