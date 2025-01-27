import { IAlert } from "../types";
import {setAlert} from '../context/alert.ts';
import { setAuth, setUsername } from "../context/auth.ts";
import { setCosts } from "../context/index.ts";

export const removeUser = () => {
    localStorage.removeItem('auth');
    setAuth(false);
    setUsername('');
    setCosts([]);
}

export const getAuthDataFromLS = () => {
    try {
        const lSData = JSON.parse(localStorage.getItem('auth') as string);

        if (!lSData) {
            removeUser();
            return;
        }

        return lSData;
    } catch (error) {
        removeUser();
    }
}

export const handleAlertMessage = (alert: IAlert) => {
    setAlert(alert);
    setTimeout(() => setAlert({alertText: '', alertStatus: ''}), 3000)
}
