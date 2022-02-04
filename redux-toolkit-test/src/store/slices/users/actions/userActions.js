import { setUserList } from "..";
import axios from 'axios';

export const fetchAllUsers = () => (dispatch) => {
    axios.get('https://reqres.in/api/users?per_page=12').then(res => {
        dispatch(setUserList(res.data.data));
    }).catch((error) => console.log('error'));
}