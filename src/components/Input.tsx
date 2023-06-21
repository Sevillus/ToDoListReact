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
        setCompletedTasks(completedTasks.filter((index) => index !== i));
    };

    const [completedTasks, setCompletedTasks] = useState([]);

    const FinishHandler = (i) => {
        if (completedTasks.includes(i)) {
            setCompletedTasks(completedTasks.filter((index) => index !== i));
        } else {
            setCompletedTasks([...completedTasks, i]);
        }
    };

    const [showEdit, setShowEdit] = useState([])

    const EditHandler = (i) =>{
        if (showEdit.includes(i)) {
            setShowEdit(completedTasks.filter((index) => index !== i));
        } else {
            setShowEdit([...completedTasks, i]);
        }
    }

    const ConfirmChanges = (i) => (e) => {
        e.preventDefault();
        const newDataArr = [...data]
        newDataArr[i] = changedTask
        setData(newDataArr)
        newTask('')
        setShowEdit([])
    };

    const [changedTask,newTask] = useState(task)


    return (
        <Box sx={{ display: 'flex', gap: '1rem', width: '60%', flexDirection: 'column' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <TextField required value={task} onChange={(e) => setTask(e.target.value)} id="outlined-basic" label="Type your task" variant="outlined" sx={{ width: '100%' }} />
                <Button variant="contained" type="submit">
                    Add
                </Button>
            </form>
            {data.map((task, i) => (
                <Box key={i}>
                    <Paper  elevation={3} square sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' ,my:1.5}}>
                        <Typography variant="p" style={completedTasks.includes(i) ? { textDecoration: 'line-through' } : {}}>
                            {task}
                        </Typography>
                        <Box>
                            <Button variant="danger" onClick={() => FinishHandler(i)}>
                                {completedTasks.includes(i) ? 'Unfinish' : 'Finish'}
                            </Button>
                            <Button variant="danger" onClick={() => EditHandler(i)}>
                                Edit
                            </Button>
                            <Button variant="danger" onClick={() => DeleteHandler(i)}>
                                Delete
                            </Button>
                        </Box>
                    </Paper>
                    <form   onSubmit={(e)=>ConfirmChanges(i)(e)} style={{ display: showEdit.includes(i)?"flex":"none", gap: '1rem', width: '100%' }}>
                        <TextField required value={changedTask} onChange={(e) => newTask(e.target.value)} id="outlined-basic" label="Change name task" variant="outlined" sx={{ width: '100%' }} />
                        <Button variant="danger" type={"submit"} >
                            Change
                        </Button>
                        <Button variant="danger" onClick={()=>setShowEdit([])} >
                            Close
                        </Button>
                    </form>
                </Box>
            ))}
        </Box>
    );
};

export default Input;
