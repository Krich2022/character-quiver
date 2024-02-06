import React from 'react';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Login() {
    return (
        <Space direction="vertical" className="container-background p-10 rounded-2xl">
            <h2 className="text-xl">Login to your account</h2>

            <form>
                <div>
                    <Input placeholder="username" className="my-4" />
                    <Input.Password 
                    placeholder="password" 
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                    />
                    <Button type="primary" className="my-4 button-background">Login</Button>
                </div>
            </form>
            <p classname="text-lg">Don't have an account?</p>
            <Button type="primary" className="button-background">Sign Up</Button>
        </Space>
    )
}

export default Login;
