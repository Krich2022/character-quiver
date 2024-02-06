import React from 'react';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Login() {
    // const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <Space direction="vertical">
            <h2 className="text-xl">Login</h2>

            <form>
                <div>
                    <Input placeholder="username" className="my-4" />
                    <Input.Password 
                    placeholder="password" 
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                    />
                </div>
            </form>
        </Space>
    )
}

export default Login;
