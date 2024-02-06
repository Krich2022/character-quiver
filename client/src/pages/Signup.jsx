import React from 'react';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Signup() {
    return (
        <Space direction="vertical" className="container-background p-10 rounded-2xl">
            <h2 className="text-xl">Set Up Your Account</h2>

            <form>
                <div>
                    <Input placeholder="username" className="my-4" />
                    <Input placeholder="email" className="mb-4" />
                    <Input.Password 
                    placeholder="password" 
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                    />
                    <Button type="primary" className="my-4 button-background">Sign Up</Button><br />
                </div>
            </form>
            <p classname="text-lg">Already have an account?</p>
            <Button type="primary" className="button-background">Login</Button>
        </Space>
    )
}

export default Signup;