import React, { useEffect, useState } from "react";
import s from './ProfileStatus.module.scss';

const ProfileStatusWithHooks = React.memo((props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    console.log(`cтатус локальный:` + status);

    useEffect(() => {
        console.log('effect satus profile');
        // setStatus(props.status);
        if (props.status !== undefined) {
            setStatus(props.status)
        }
    }, [props.status]);
    

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    console.log(`cтатус из пропс:` + props.status);
    return (
        <div className={s.profileStatus}>
            { !editMode &&
                <p className={s.profileStatus__Description} onClick={activateEditMode}>{props.status}</p>
            }
            { editMode &&
                <input onChange={onStatusChange} maxLength="25" autoFocus={true} onBlur={deactivateEditMode}
                    className={s.profileStatus__input} value={status} />
            }
        </div>
    )

})

export default ProfileStatusWithHooks;