import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../../types/types'
import Paginator from '../../../Common/Paginator/Paginator'
import User from './User/User'
import s from './Users.module.scss'

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    // isFetching: boolean
    followingInProgress: number[]

    followSucces: (userId: number) => void
    unfollowSucces: (userId: number) => void
    // toggleFollowingInProgress: (
    //     followingInProgress: number[],
    //     userId: number
    // ) => void
    // // requestUsers: (currentPage: number, pageSize: number) => void
    // updateUsers: (pageNumber: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users: React.FC<PropsType> = ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    users,
    ...props
}) => {
    // debugger
    return (
        <section className={s.users}>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
                {users.map((u) => (
                    <User {...props} u={u} key={u.id} />
                ))}
            </div>
        </section>
    )
}

export default Users
