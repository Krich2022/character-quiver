import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <>
            <div direction="vertical" className="container-background p-10 rounded-2xl">
                <h2 className="text-xl">Login to your account</h2>

                <form>
                    <Form.Control type="password" id="inputPassword" placeholder="password" className=''></Form.Control>
                </form>
                <p className="text-lg">Don't have an account?</p>
                
            </div>
        </>
    )
}

export default Login;
