import { IAlert } from "../types";
import {setAlert} from '../context/alert.ts'

export const handleAlertMessage = (alert: IAlert) => {
    setAlert(alert);
    setTimeout(() => setAlert({alertText: '', alertStatus: ''}), 3000)
}