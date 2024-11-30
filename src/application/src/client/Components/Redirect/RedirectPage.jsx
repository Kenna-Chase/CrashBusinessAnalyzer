import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Space } from 'antd';

const { Title, Text } = Typography;

const RedirectToLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login'); // Automatically navigate to the login page
        }, 3000); // After 3 seconds

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, [navigate]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#9c98f1',
            }}
        >
            <Space direction="vertical" align="center">
                <h1>Redirecting to Login...</h1>
                <h2> Please login to the application!</h2>
                <Text type="primary">You will be redirected shortly.</Text>
                <Button block size="large" color={"primary"} onClick={() => navigate('/login')}>
                    Go to Login Now
                </Button>
            </Space>
        </div>
    );
};

export default RedirectToLogin;
