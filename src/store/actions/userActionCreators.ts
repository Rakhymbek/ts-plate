import axios from 'axios'
import { Dispatch } from 'redux'
import { UserActionType } from '../../types/userTypes'

export const fetchUsers = () => (dispatch: Dispatch) => {
    dispatch({ type: UserActionType.FETCH_USERS })
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        setTimeout(() => {
            dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: res.data })
        },1000)
    }).catch(() => {
        dispatch({ type: UserActionType.FETCH_USERS_REJECT, payload: 'Ошибка при загрузке пользователей' })
    })
}