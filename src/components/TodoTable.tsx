import React from 'react';
import { useRecoilState } from 'recoil';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TalbeContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { format } from 'date-fns';

import { tasksState } from '../atoms/Tasks';

export default function TodoTalbe() {
    const [tasks, setTasks] = useRecoilState(tasksState);

    return (
        <TalbeContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>タスク</TableCell>
                        <TableCell align="center">期日</TableCell>
                        <TableCell align="center">優先度</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task: any) => (
                        <TableRow>
                            <TableCell>{task.content}</TableCell>
                            <TableCell align="center">
                                {format(task.deadline, 'yyyy/MM/dd')}
                            </TableCell>
                            <TableCell align="center">{task.priority}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TalbeContainer>
    );
}