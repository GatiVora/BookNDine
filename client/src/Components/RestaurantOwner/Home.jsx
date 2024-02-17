// // import React, { useState, useEffect } from 'react';
// // import 
// // { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'

// // import api from '../../api';

// // import {useAuth2} from '../ResAuth';

// // const Home = () =>{


// //   const [restaurantData, setRestaurantData] = useState({
// //     res_name: '',
// //     mobile: '',
// //     email: '',
// //     city: '',
// //     password: '',
// //     category: '',
// //     cuisine: '',
// //     rating: ''
// // });
     
// // const auth = useAuth2();

// // const res_id = auth.user?.id;


// // useEffect(() => {
// //   // Fetch restaurant information
// //   api.get(`/restaurants/${res_id}`) // Use template literals for interpolation
// //       .then(response => setRestaurantData(response.data))
// //       .catch(error => console.error('Error fetching restaurant information:', error));
// // }, [res_id]); // Include res_id in the dependency array




// //     // Function to handle input change
// //     const handleInputChange = (e) => {
// //       setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
// //   };

// //      // Function to submit updated information
// //      const handleSubmit = () => {
// //       api.put(`/api/restaurants/{auth.user?.id}`, restaurantData) // Use the api instance to make requests
// //           .then(response => {
// //               // Handle successful update
// //               alert('Restaurant information updated successfully');
// //           })
// //           .catch(error => console.error('Error updating restaurant information:', error));
// //   };


// //   return (
// //     <main className='main-container'>
// //         <div className='main-title'>
// //             <h3>DASHBOARD {auth.user?.res_name}</h3>
// //         </div>

// //         {/* <div className='main-cards'>
// //             <div className='card'>
// //                 <div className='card-inner'>
// //                     <h3>PRODUCTS</h3>
// //                     <BsFillArchiveFill className='card_icon'/>
// //                 </div>
// //                 <h1>300</h1>
// //             </div>
// //             <div className='card'>
// //                 <div className='card-inner'>
// //                     <h3>CATEGORIES</h3>
// //                     <BsFillGrid3X3GapFill className='card_icon'/>
// //                 </div>
// //                 <h1>12</h1>
// //             </div>
// //             <div className='card'>
// //                 <div className='card-inner'>
// //                     <h3>CUSTOMERS</h3>
// //                     <BsPeopleFill className='card_icon'/>
// //                 </div>

// //                 <h1>33</h1>
// //             </div>
// //             <div className='card'>
// //                 <div className='card-inner'>
// //                     <h3>ALERTS</h3>
// //                     <BsFillBellFill className='card_icon'/>
// //                 </div>
// //                 <h1>42</h1>
// //             </div>
// //         </div> */}

// // <div>
// //             <h2>Edit Restaurant Information</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Restaurant Name:</label>
// //                     <input type="text" name="res_name" value={restaurantData.res_name} onChange={handleInputChange} />
// //                     <button type="button">Edit</button>
// //                 </div>
// //                 <div>
// //                     <label>Mobile:</label>
// //                     <input type="text" name="mobile" value={restaurantData.mobile} onChange={handleInputChange} />
// //                     <button type="button">Edit</button>
// //                 </div>
// //                 {/* Repeat similar structure for other fields */}
// //                 <button type="submit">Update Information</button>
// //             </form>
// //         </div>



// //     </main>
// //   )
// // }

// // export default Home

// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Grid, Typography, Container } from '@mui/material';
// import api from '../../api';
// import { useAuth2 } from '../ResAuth';

// const Home = () => {
//     const [restaurantData, setRestaurantData] = useState({
//         res_name: '',
//         mobile: '',
//         email: '',
//         city: '',
//         password: '',
//         category: '',
//         cuisine: '',
//         rating: ''
//     });

//     const auth = useAuth2();
//     const res_id = auth.user?.id;

//     useEffect(() => {
//         api.get(`/restaurants/${res_id}`)
//             .then(response => setRestaurantData(response.data))
//             .catch(error => console.error('Error fetching restaurant information:', error));
//     }, [res_id]);

//     const handleInputChange = (e) => {
//         setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         api.put(`/api/restaurants/${auth.user?.id}`, restaurantData)
//             .then(response => {
//                 alert('Restaurant information updated successfully');
//             })
//             .catch(error => console.error('Error updating restaurant information:', error));
//     };

//     return (
//         <Container maxWidth="sm">
//             <Typography variant="h5" gutterBottom>Edit Restaurant Information</Typography>
//             <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Restaurant Name"
//                             name="res_name"
//                             value={restaurantData.res_name}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             label="Mobile"
//                             name="mobile"
//                             value={restaurantData.mobile}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             label="Email"
//                             name="email"
//                             value={restaurantData.email}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="City"
//                             name="city"
//                             value={restaurantData.city}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                     {/* <Grid item xs={12}>
//                         <TextField
//                             label="Password"
//                             name="password"
//                             type="password"
//                             value={restaurantData.password}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid> */}
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Category"
//                             name="category"
//                             value={restaurantData.category}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Cuisine"
//                             name="cuisine"
//                             value={restaurantData.cuisine}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Rating"
//                             name="rating"
//                             value={restaurantData.rating}
//                             onChange={handleInputChange}
//                             fullWidth
//                         />
//                     </Grid>
//                 </Grid>
//                 <Button type="submit" variant="contained" color="primary">Update Information</Button>
//             </form>
//         </Container>
//     );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, CircularProgress } from '@mui/material';
import api from '../../api';
import { useAuth2 } from '../ResAuth';

const Home = () => {
    const [restaurantData, setRestaurantData] = useState({
        res_name: '',
        mobile: '',
        email: '',
        city: '',
        password: '',
        category: '',
        rating: '',
        about:'',
        cuisine:'',
        address:'',
        image: null,  // New state to hold the image file

    });
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null); // State to hold the image URL

    const auth = useAuth2();
    const res_id = auth.user?.id;


    useEffect(() => {
        // Fetch restaurant information including the image URL
        console.log("useeffect called:" ,res_id);
        if(res_id){
        api.get(`/restaurants/${res_id}`)
            .then(response => {
                setRestaurantData(response.data);
                // setImageUrl(response.data.image_url); // Set the image URL
            })
            .catch(error => console.error('Error fetching restaurant information:', error));
        }
    }, [res_id]);

    // const handleInputChange = (e) => {
    //     setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Handle time input separately
        if (name === 'open_time_start' || name === 'open_time_end') {
            setRestaurantData({
                ...restaurantData,
                [name]: value // No need for additional formatting if Material-UI provides the correct time format
            });
        } else {
            setRestaurantData({
                ...restaurantData,
                [name]: value
            });
        }
    };
    

    const handleImageChange = (e) => {
        setRestaurantData({ ...restaurantData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const formData = new FormData();
            formData.append('file', restaurantData.image);  // Ensure the field name matches your backend expectation
    
            // Upload the image first
            const imageResponse = await api.post(`/restaurants/${res_id}/upload-image/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            // Update restaurant data if image upload is successful
            if (imageResponse.status === 200) {
                await api.put(`/restaurants/${res_id}`, restaurantData);
                alert('Restaurant information updated successfully');
            }
        } catch (error) {
            console.error('Error updating restaurant information:', error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <>
        {/* <h1>Welcome! {res_id}</h1> */}
        <Container maxWidth="sm" className='contain'>
            <Typography variant="h5" gutterBottom>Edit Restaurant Information</Typography>
            <br/>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Restaurant Name"
                            name="res_name"
                            value={restaurantData.res_name}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Mobile"
                            name="mobile"
                            value={restaurantData.mobile}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            value={restaurantData.email}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="City"
                            name="city"
                            value={restaurantData.city}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Category"
                            name="category"
                            value={restaurantData.category}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Rating"
                            name="rating"
                            value={restaurantData.rating}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="About Us"
                            name="about"
                            value={restaurantData.about}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Cuisine"
                            name="cuisine"
                            value={restaurantData.cuisine}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Address"
                            name="address"
                            value={restaurantData.address}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        name="file" // Ensure that the name attribute is set to "file"
                    />



                    </Grid>


                    <Grid item xs={12}>
                        
                        <img src={"http://127.0.0.1:8000/restaurants/"+ res_id + "/image"} alt="Restaurant" style={{ maxWidth: '100%' }} />
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

export default Home;
