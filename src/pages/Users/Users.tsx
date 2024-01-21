import React from "react";
import User from "./User/User";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import s from "./Users.module.scss";
import { filterType } from "src/app/redux/users-reducer";
import { Paginator } from "src/shared/ui/Paginator";
import { UserType } from "src/shared/types";

type PropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  followingInProgress: number[];
  isFetching: boolean;

  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  onPageChanged: (pageNumber: number) => void;
  onFilterChanged: (filter: filterType) => void;
};

const Users: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isFetching,
  onPageChanged,
  onFilterChanged,
  users,
  ...props
}) => {
  return (
    <section className={s.users}>
      <UsersSearchForm
        onFilterChanged={onFilterChanged}
        isFetching={isFetching}
      />

      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((u) => (
          <User
            {...props}
            u={u}
            key={u.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Users;
