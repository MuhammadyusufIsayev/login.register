import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://ecommerce-backend-fawn-eight.vercel.app/api/auth', values);
      console.log('Login successful:', response.data);
      // Save the token to localStorage
      localStorage.setItem('token', response.data.token);
      // Redirect to the main page
      navigate('/main');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Card title="Login" style={{ maxWidth: 400, margin: 'auto', paddingTop: 20, paddingBottom: 20 }}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
