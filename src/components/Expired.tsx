import { useRecoilValue } from 'recoil';

import Box from '@material-ui/core/Box';
import { tasksState } from '../atoms/Tasks';


export default function Expired() {
    const tasks = useRecoilValue(tasksState);
    const today = new Date();

    let num_expired:number = 0;

    for (var task of tasks) {
        let date = task.deadline;
        if (lowerThanDate(date, today)) num_expired++;
    }
    console.log(num_expired);

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

    if (year1 == year2) {
        if (month1 == month2) {
            return day1 < day2;
        }
        else {
            return month1 < month2;
        }
    } else {
        return year1 < year2;
    }
}