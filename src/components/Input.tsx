import React, { useState } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

const Input = () => {
    const [data, setData] = useState([]);
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, task]);
        setTask('');
    };

    const DeleteHandler = (i) => {
        setData(data.filter((_, index) => index !== i));
    };

    const [completedTasks, setCompletedTasks] = useState([]);

    const FinishHandler = (i) => {
        if (completedTasks.includes(i)) {
            setCompletedTasks(completedTasks.filter((index) => index !== i));
        } else {
            setCompletedTasks([...completedTasks, i]);
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: '1rem', width: '60%', flexDirection: 'column' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <TextField required value={task} onChange={(e) => setTask(e.target.value)} id="outlined-basic" label="Type your task" variant="outlined" sx={{ width: '100%' }} />
                <Button variant="contained" type="submit">
                    Add
                </Button>
            </form>
            {data.map((task, i) => (
                <Paper key={i} elevation={3} square sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                    <Typography variant="p" style={completedTasks.includes(i) ? { textDecoration: 'line-through' } : {}}>
                        {task}
                    </Typography>
                    <Box>
                        <Button variant="danger" onClick={() => FinishHandler(i)}>
                            {completedTasks.includes(i) ? 'Unfinish' : 'Finish'}
                        </Button>
                        <Button variant="danger">
                            Edit
                        </Button>
                        <Button variant="danger" onClick={() => DeleteHandler(i)}>
                            Delete
                        </Button>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
};

export default Input;
