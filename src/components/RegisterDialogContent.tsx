import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

import {
    taskContentState,
    taskDeadlineState,
    taskPriorityState
} from '../atoms/RegisterDialogContent';

export default function RegisterDialogContent() {
    // atom から state を取得する
    const setContent = useSetRecoilState(taskContentState);
    const [deadline, setDeadline] = useRecoilState(taskDeadlineState);
    const [priority, setPriority] = useRecoilState(taskPriorityState);

    // タスクの内容が変更された時
    const handleContentChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setContent(e.target.value);
    };

    // タスクの期限が変更された時
    const handleDeadlineChange = (date: any) => {
        setDeadline(date);
    };

    // スライダーが動かされた時
    const handleSliderChange = (e: React.ChangeEvent<{}>, newValue: any) => {
        setPriority(newValue);
    };
    
    //スライダー横の数値入力欄が変更されたとき
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(Number(e.target.value));
    };

    const handleBlur = () => {
        if (priority < 1) {
            setPriority(1);
        } else if (priority > 5 ) {
            setPriority(5);
        }
    };

    return (
        // このタグ内にある部分が pickers のカバーする範囲になる
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DialogContent>
                <DialogContentText>
                登録するタスクの情報を入力してください。
                </DialogContentText>
                <Grid container spacing={6} direction="column">
                    <Grid item>
                        <TextField
                            onChange={handleContentChange}
                            margin="dense"
                            id="name"
                            label="内容"
                            fullWidth
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            minDate={new Date()}
                            margin="normal"
                            id="date-picker-inline"
                            label="期限"
                            value={deadline}
                            onChange={date => handleDeadlineChange(date)}
                            invalidDateMessage="無効な形式です"
                            minDateMessage="昨日以前の日付を指定することは出来ません"
                        />
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs={2}>
                        <DialogContentText>優先度</DialogContentText>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                value={priority}
                                onChange={handleSliderChange}
                                defaultValue={1}
                                aria-valuetext=""
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="on"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Input
                                value={priority}
                                margin="dense"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 1,
                                    max: 5,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </MuiPickersUtilsProvider>
    );
}