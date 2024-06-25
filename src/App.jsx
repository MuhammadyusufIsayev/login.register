import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/Main';
import './App.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="login">
            <a href="/login">Login</a>
          </Menu.Item>
          <Menu.Item key="register">
            <a href="/register">Register</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '16px', marginBottom: '16px' }}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
