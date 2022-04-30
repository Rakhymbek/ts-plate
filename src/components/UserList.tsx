import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useUserActions } from '../hooks/useUserActions'
import { UserItem } from './UserItem'

export function UserList() {
    const { users, error, loading } = useTypedSelector((state) => state.user)
    const { fetchUsers } = useUserActions()

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    if (loading) {
        return (
            <h1>Загрузка пользователей</h1>
        )
    }
    if (error) {
        return (
            <h1 style={{ border: '1px solid red' }}>{error}</h1>
        )
    }

    return (
        <div>
            <Typography>Proverka</Typography>
            {users.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
    )
}