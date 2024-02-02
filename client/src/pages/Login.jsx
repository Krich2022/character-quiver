import { Input } from 'antd';

function Login() {
    return (
        <div>
            <h2>Login</h2>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Input />
                </div>
            </form>
        </div>
    )
}

export default Login;