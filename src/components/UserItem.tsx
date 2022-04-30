import { TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { User } from '../types/userTypes'

type Props = {
    user: User
}
export const UserItem:FC<Props> = ({ user }) => {
    return (
        <div>
            {user.name}
        </div>
    )
}