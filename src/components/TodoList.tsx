import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoTable from './TodoTable';
import { tasksState } from '../atoms/Tasks';


import RegisterDialog from './RegisterDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        '&:hover': {
            backgroundColor:'#666ff'
        }
    },
    fab: {
        position: 'absolute',
        bottom: '2rem',
        right:'2rem',
        '&:hover': {
            backgroundColor:'#666ff'
        }
    }
  })
);

export default function TodoList() {
    const classes = useStyles();
    const tasks = useRecoilValue(tasksState);
    const [open, setOpen] = useState<boolean>(false);

    console.log(tasks);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box padding="2rem" textAlign="center">
                {tasks.length !== 0 ? (
                    <>
                        <TodoTable />
                        <Fab
                            className={classes.fab}
                            onClick={handleOpen}
                            color="primary"
                            aria-label="add"
                        >
                            <AddIcon />
                        </Fab>
                    </>
                ) : ( 
                <>
                    <Typography variant="subtitle1" gutterBottom>
                        まだ登録されたタスクは有りません。
                    </Typography>
                    <Button
                        className={classes.button}
                        onClick={handleOpen}
                        variant="contained"
                        color="primary"
                    >
                    タスクを登録する
                    </Button>
                </>
                )}
            </Box>
            <RegisterDialog open={open} onClose={handleClose} />
        </>
    );
}