import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, CircularProgress, MenuItem, Select, FormControl, InputLabel,    Card, 
    CardContent, 
    CardActions,
  
 } from '@mui/material';
import api from '../../api';
import { useAuth2 } from '../ResAuth';
import DeleteIcon from '@mui/icons-material/Delete';


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
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={newMenuItem.category}
                                    onChange={handleNewMenuItemChange}
                                    name="category"
                                >
                                    <MenuItem value="Appetizers">Appetizers</MenuItem>
                                    <MenuItem value="Main Course">Main Course</MenuItem>
                                    <MenuItem value="Desserts">Desserts</MenuItem>
                                    <MenuItem value="Beverages">Soups</MenuItem>
                                    {/* Add more categories as needed */}
                                </Select>
                            </FormControl>
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
                    <br/>
                    <br/>
                    <Grid container spacing={2}>
                        {menuItems.map(item => (
                            <Grid item xs={12} sm={6} md={10} key={item.id}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="subtitle1">Item ID: {item.id}</Typography>
                                    <Typography variant="body1">Name: {item.name}</Typography>
                                    <Typography variant="body1">Description: {item.description}</Typography>
                                    <Typography variant="body1">Price: {item.price}</Typography>
                                    <Typography variant="body1">Category: {item.category}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        style={{ color: 'white', backgroundColor: 'grey' }}
                                        onClick={() => handleDeleteMenuItem(item.id)}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default Menu;
