import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import api from '../../api';
import { useAuth2 } from '../ResAuth';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loadingMenuItems, setLoadingMenuItems] = useState(false);
    const [newMenuItem, setNewMenuItem] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });
    const [creatingMenuItem, setCreatingMenuItem] = useState(false);

    const auth = useAuth2();
    const res_id = auth.user?.id;

    useEffect(() => {
        if (res_id) {
            fetchMenuItems();
        }
    }, [res_id]);

    const fetchMenuItems = () => {
        setLoadingMenuItems(true);
        api.get(`/menu_items/${res_id}`)
            .then(response => {
                setMenuItems(response.data);
            })
            .catch(error => console.error('Error fetching menu items:', error))
            .finally(() => setLoadingMenuItems(false));
    };

    const handleNewMenuItemChange = (e) => {
        setNewMenuItem({ ...newMenuItem, [e.target.name]: e.target.value });
    };

    const handleCreateMenuItem = () => {
        setCreatingMenuItem(true);
        api.post(`/menu_items/${res_id}`, newMenuItem)
            .then(response => {
                setNewMenuItem({
                    name: '',
                    description: '',
                    price: '',
                    category: '',
                });
                fetchMenuItems();
            })
            .catch(error => console.error('Error creating menu item:', error))
            .finally(() => setCreatingMenuItem(false));
    };

    const handleDeleteMenuItem = (menuItemId) => {
        api.delete(`/menu_items/${res_id}/${menuItemId}`)
            .then(response => {
                fetchMenuItems();
            })
            .catch(error => console.error('Error deleting menu item:', error));
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Restaurant Menu</Typography>
            {loadingMenuItems ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2}>
                        {menuItems.map(item => (
                            <Grid item xs={12} key={item.id}>
                                <Typography variant="subtitle1">Item ID: {item.id}</Typography>
                                <Typography variant="body1">Name: {item.name}</Typography>
                                <Typography variant="body1">Description: {item.description}</Typography>
                                <Typography variant="body1">Price: {item.price}</Typography>
                                <Typography variant="body1">Category: {item.category}</Typography>
                                <Button variant="outlined" color="secondary" onClick={() => handleDeleteMenuItem(item.id)}>Delete</Button>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h6" gutterBottom>Add New Menu Item</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                value={newMenuItem.name}
                                onChange={handleNewMenuItemChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name="description"
                                value={newMenuItem.description}
                                onChange={handleNewMenuItemChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Price"
                                name="price"
                                value={newMenuItem.price}
                                onChange={handleNewMenuItemChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Category"
                                name="category"
                                value={newMenuItem.category}
                                onChange={handleNewMenuItemChange}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCreateMenuItem}
                        disabled={creatingMenuItem}
                    >
                        {creatingMenuItem ? <CircularProgress size={24} /> : 'Create Menu Item'}
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Menu;
