
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, CircularProgress } from '@mui/material';
import api from '../../api';
import { useAuth } from '../Auth';

const Dashboard = () => {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        city: '',
        // Exclude password field
    });

    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const userId = auth.user?.id;

    useEffect(() => {
        if (userId) {
            api.get(`/users/${userId}`)
                .then(response => setUserData(response.data))
                .catch(error => console.error('Error fetching user information:', error));
        }
    }, [userId]);

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.put(`/users/${userId}`, userData);
            alert('User information updated successfully');
        } catch (error) {
            console.error('Error updating user information:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Container maxWidth="sm" style={{ padding: 0 }} >
            <h2>Edit User Information</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="City"
                            name="city"
                            value={userData.city}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <br/>
                <Button type="submit" variant="contained" color="primary">
                    {loading ? <CircularProgress size={24} /> : 'Update Information'}
                </Button>
                <br/>
            </form>
            <br/>
        </Container>
        </>
    );
};

export default Dashboard;
