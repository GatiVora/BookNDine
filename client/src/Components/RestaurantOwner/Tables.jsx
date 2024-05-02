// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Grid, Typography, Container, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// import api from '../../api';
// import { useAuth2 } from '../ResAuth';

// const Home = () => {
//     const [tables, setTables] = useState([]);
//     const [loadingTables, setLoadingTables] = useState(false);
//     const [newTable, setNewTable] = useState({
//         capacity: '',
//     });
//     const [creatingTable, setCreatingTable] = useState(false);

//     const auth = useAuth2();
//     const res_id = auth.user?.id;

//     useEffect(() => {
//         if (res_id) {
//             fetchTables();
//         }
//     }, [res_id]);

//     const fetchTables = () => {
//         setLoadingTables(true);
//         api.get(`/tables/${res_id}`)
//             .then(response => {
//                 setTables(response.data);
//             })
//             .catch(error => console.error('Error fetching tables:', error))
//             .finally(() => setLoadingTables(false));
//     };

//     const handleNewTableChange = (e) => {
//         setNewTable({ ...newTable, [e.target.name]: e.target.value });
//     };

//     const handleCreateTable = () => {
//         setCreatingTable(true);
//         api.post(`/tables/${res_id}`, newTable)
//             .then(response => {
//                 setNewTable({
//                     capacity: '',
//                 });
//                 fetchTables();
//             })
//             .catch(error => console.error('Error creating table:', error))
//             .finally(() => setCreatingTable(false));
//     };

//     return (
//         <Container maxWidth="md">
//             <Typography variant="h4" gutterBottom>Restaurant Tables</Typography>
//             {loadingTables ? (
//                 <CircularProgress />
//             ) : (
//                 <>
//                     <Grid container spacing={2}>
//                         {tables.map(table => (
//                             <Grid item xs={12} key={table.id}>
//                                 <Typography variant="subtitle1">Table ID: {table.id}</Typography>
//                                 <Typography variant="body1">Capacity: {table.capacity}</Typography>
//                             </Grid>
//                         ))}
//                     </Grid>
//                     <Typography variant="h6" gutterBottom>Create New Table</Typography>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <FormControl fullWidth>
//                                 <InputLabel>Capacity</InputLabel>
//                                 <Select
//                                     value={newTable.capacity}
//                                     onChange={handleNewTableChange}
//                                     name="capacity"
//                                 >
//                                     <MenuItem value={2}>2</MenuItem>
//                                     <MenuItem value={4}>4</MenuItem>
//                                     <MenuItem value={6}>6</MenuItem>
//                                     {/* Add more options as needed */}
//                                 </Select>
//                             </FormControl>
//                         </Grid>
//                     </Grid>
//                     <br/>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={handleCreateTable}
//                         disabled={creatingTable}
//                     >
//                         {creatingTable ? <CircularProgress size={24} /> : 'Create Table'}
//                     </Button>
//                 </>
//             )}
//         </Container>
//     );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import api from '../../api';
import { useAuth2 } from '../ResAuth';

const Home = () => {
    const [tables, setTables] = useState([]);
    const [loadingTables, setLoadingTables] = useState(false);
    const [newTable, setNewTable] = useState({
        capacity: '',
    });
    const [creatingTable, setCreatingTable] = useState(false);

    const auth = useAuth2();
    const res_id = auth.user?.id;

    useEffect(() => {
        if (res_id) {
            fetchTables();
        }
    }, [res_id]);

    const fetchTables = () => {
        setLoadingTables(true);
        api.get(`/tables/${res_id}`)
            .then(response => {
                setTables(response.data);
            })
            .catch(error => console.error('Error fetching tables:', error))
            .finally(() => setLoadingTables(false));
    };

    const handleNewTableChange = (e) => {
        setNewTable({ ...newTable, [e.target.name]: e.target.value });
    };

    const handleCreateTable = () => {
        setCreatingTable(true);
        api.post(`/tables/${res_id}`, newTable)
            .then(response => {
                setNewTable({
                    capacity: '',
                });
                fetchTables();
            })
            .catch(error => console.error('Error creating table:', error))
            .finally(() => setCreatingTable(false));
    };

    const handleDeleteTable = (tableId) => {
        api.delete(`/tables/${tableId}`)
            .then(response => {
                fetchTables();
            })
            .catch(error => console.error('Error deleting table:', error));
    };

    console.log(tables);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Restaurant Tables</Typography>
            {loadingTables ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2}>
                        {tables.map(table => (
                            <Grid item xs={12} key={table.id}>
                                <Typography variant="subtitle1">Table ID: {table.id}</Typography>
                                <Typography variant="body1">Capacity: {table.capacity}</Typography>
                                <Button variant="outlined" color="secondary" onClick={() => handleDeleteTable(table.id)}>Delete</Button>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h6" gutterBottom>Create New Table</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Capacity</InputLabel>
                                <Select
                                    value={newTable.capacity}
                                    onChange={handleNewTableChange}
                                    name="capacity"
                                >
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    {/* Add more options as needed */}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCreateTable}
                        disabled={creatingTable}
                    >
                        {creatingTable ? <CircularProgress size={24} /> : 'Create Table'}
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Home;
