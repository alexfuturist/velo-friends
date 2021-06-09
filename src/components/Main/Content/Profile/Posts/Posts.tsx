import React from 'react'
import { PostType, ProfileInfoType } from '../../../../../types/types'
import Post from './Post/Post'
import s from './Posts.module.scss'

type PropsType = {
    posts: PostType[]
    profileInfo: ProfileInfoType
    isUpdatePostMode: boolean

	deletePost: (id: number) => void
    updatePost: (id: number, message: string) => void
    updatePostMode: (flag: boolean) => void
}

const Posts: React.FC<PropsType> = (props) => {
    let postsElements = [...props.posts]
        .reverse()
        .map((p) => (
            <Post
                profileInfo={props.profileInfo}
                massage={p.message}
                deletePost={props.deletePost}
                updatePost={props.updatePost}
                updatePostMode={props.updatePostMode}
                isUpdatePostMode={props.isUpdatePostMode}
                key={p.id}
                id={p.id}
            />
        ))

    return <ul className={s.posts}>{postsElements}</ul>
}

export default Posts
