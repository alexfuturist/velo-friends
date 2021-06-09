import React, { ChangeEvent, useEffect, useState } from 'react'
import userPhotoDefault from '../../../../../../assets/images/user_default.png'
import cn from 'classnames'
import s from './Post.module.scss'
import { ProfileInfoType } from '../../../../../../types/types'

type PropsType = {
    profileInfo: ProfileInfoType
    massage: string
    isUpdatePostMode: boolean
    id: number

    deletePost: (id: number) => void
    updatePost: (id: number, message: string) => void
    updatePostMode: (flag: boolean) => void
}

const Post: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [message, setMessage] = useState(props.massage)
    let [warningMode, setWarningMode] = useState(false)

    useEffect(() => {
        setMessage(props.massage)
    }, [props.massage])

    const activateEditMode = () => {
        if (!props.isUpdatePostMode) {
            setEditMode(true)
            props.updatePostMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updatePostMode(false)
        props.updatePost(props.id, message)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const activateWarningMode = () => {
        if (!props.isUpdatePostMode) {
            setWarningMode(true)
            props.updatePostMode(true)
        }
    }

    const deactivateWarningMode = () => {
        setWarningMode(false)
        props.updatePostMode(false)
    }

    return (
        <li className={s.post}>
            {!editMode && (
                <div className={s.post__constant}>
                    <img
                        className={s.post__image}
                        src={props.profileInfo.photos.small || userPhotoDefault}
                        alt=""
                    />
                    <p className={s.post__text}>{props.massage}</p>
                    <div className={s.controls}>
                        <div
                            className={s.controls__button}
                            onClick={activateEditMode}
                        >
                            редагувати
                        </div>
                        <div
                            className={cn(
                                s.controls__button,
                                s.controls__buttonClose
                            )}
                            onClick={activateWarningMode}
                        >
                            видалити
                        </div>

                        {warningMode && (
                            <div
                                className={s.warning__container}
                                onBlur={deactivateWarningMode}
                                tabIndex={1}
                            >
                                <p className={s.warning__title}>
                                    Точно видалити?
                                </p>
                                <div className={s.warning__buttons}>
                                    <div
                                        onClick={() =>
                                            props.deletePost(props.id)
                                        }
                                    >
                                        так
                                    </div>
                                    <div onClick={deactivateWarningMode}>
                                        ні
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {editMode && (
                <div className={s.post__update}>
                    <img
                        className={s.post__image}
                        src={props.profileInfo.photos.small}
                        alt=""
                    />
                    <div className={s.post__textareaContainer}>
                        {message}
                        <textarea
                            className={s.post__textarea}
                            onChange={onPostChange}
                            maxLength={600}
                            value={message}
                            autoFocus={true}
                            onFocus={function (e) {
                                let val = e.target.value
                                e.target.value = ''
                                e.target.value = val
                            }}
                        />
                    </div>
                    <div className={s.controls}>
                        <div onClick={deactivateEditMode}>зберегти</div>
                    </div>
                </div>
            )}
        </li>
    )
}

export default Post
