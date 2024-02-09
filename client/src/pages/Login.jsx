import { Button, Form } from 'react-bootstrap';

function Login() {
    return (
        <>
            <div direction="vertical" className="container-background p-5 enable-rounded text-white">
                <h2 className="pb-3">Login to your account</h2>

                <form>
                    <Form.Control type="input" id="inputUsername" placeholder="username" className="mb-4" />
                    <Form.Control type="password" id="inputPassword" placeholder="password" className="mb-2" />
                    <Button className="mb-3">Login</Button>
                </form>
                <p className="">Don't have an account?</p>
                <Button className="mb-3">Create an Account</Button>
                
            </div>
        </>
    )
}

export default Login;
