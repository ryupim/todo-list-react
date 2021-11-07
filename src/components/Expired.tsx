import { useRecoilState } from 'recoil';

import Box from '@material-ui/core/Box';
import { tasksState } from '../atoms/Tasks';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import UpdateIcon from '@mui/icons-material/Update';


export default function Expired() {
    const [tasks, setTasks] = useRecoilState(tasksState);
    let num_expired = 0;
    tasks.map(task => {
        if (task.expired) num_expired++;
    });

    const handleScan = () => {
        const today = new Date();

        const updateTasks = tasks.map(task => {
            let updateTask = {...task};
            let date = task.deadline;
            if (lowerThanDate(date, today)){
                updateTask.expired = true;
            }else {
                updateTask.expired = false;
            }
            return updateTask;
        });
        setTasks(updateTasks);
    }

    return (
        <Box padding=".5rem" textAlign="center">
            {num_expired !== 0 ? (
                <>
                    <div>期限切れのタスクが{num_expired}つあります。</div>
                </>
            ) : (
                <>
                    <div>現在、期限切れのタスクはありません。</div>
                </>
            )}
            <Tooltip title='モックスキャン' arrow>
            <IconButton
            onClick={handleScan}
            aria-label="scan"
            >
                <UpdateIcon />
            </IconButton>
        </Tooltip>
        </Box>
    );
}

function lowerThanDate(date1: Date, date2: Date): boolean {
    var year1 = date1.getFullYear();
    var month1 = date1.getMonth() + 1;
    var day1 = date1.getDate();

    var year2 = date2.getFullYear();
    var month2= date2.getMonth() + 1;
    var day2 = date2.getDate();

    if (year1 === year2) {
        if (month1 === month2) {
            return day1 < day2;
        }
        else {
            return month1 < month2;
        }
    } else {
        return year1 < year2;
    }
}