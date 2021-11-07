import { atom } from 'recoil';

type TaskType = {
    content: string,
    deadline: any,
    priority: number,
    expired: boolean
}

export const tasksState = atom<TaskType[]>
({
    key: 'tasksState',
    default: []
});