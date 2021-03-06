import React from 'react';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileData.module.scss';


const ProfileData = ({ profileInfo, isOwner, goToEditMode, getUserStatus, updateUserStatus }) => {

    return (
        <div className={s.profileInfo__Text} >
            <div className={s.profileInfo__TextLeft}>
                <p className={s.profileInfo__Name}> {profileInfo.fullName} </p>
                
                <ProfileStatusWithHooks className={s.profileInfo__Parametr} status={profileInfo.status}
                    getUserStatus={getUserStatus} updateUserStatus={updateUserStatus} isOwner={isOwner} />
                
                <p className={s.profileInfo__Parametr}>
                    <span className={s.bold}>Шукаю роботу:&#160;</span>
                    {profileInfo.lookingForAJob ? "так" : "ні"}
                </p>
               
                <p className={s.profileInfo__Parametr}>
                    <p className={s.bold}>Мої навички:</p>
                    {profileInfo.lookingForAJobDescription}
                </p>
                
                <p className={s.profileInfo__Parametr}>
                    <p className={s.bold}>Про мене:</p>
                    {profileInfo.aboutMe}
                </p>

                {isOwner
                    &&
                    <div>
                        <button className={s.profileInfo__button} onClick={goToEditMode}>
                            Редагувати профіль
                            </button>
                    </div>
                }
            </div>

            <p className={s.profileInfo__Contacts}>
                <p className={s.profileInfo__ContactsTitle}>Контакти:</p>
                {Object.keys(profileInfo.contacts)
                    .map(key => {
                        return (
                            <Contact contactTitle={key}
                                contactValue={profileInfo.contacts[key]}
                                key={key}
                            />
                        )
                    })
                }
            </p>
        </div>
    );
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.profileInfo__Contact}>
            <span className={s.profileInfo__ContactTitle}>{contactTitle}:&#160;</span>
            <span className={s.profileInfo__ContactValue}>
                <a target="_blank" href={contactValue}>{contactValue}</a>
            </span>
        </div>
    )
}

export default ProfileData;











// const ProfileInfo = (props) => {

//     return (
//         <div>
//             <div className={s.profileCover}>
//                 <img className={s.profileCover__img}
//                  src="https://s1.1zoom.me/b5050/382/388402-svetik_1920x1080.jpg" />
//             </div>
//             <div className={s.profileInfo}>
//                 <img className={s.profileInfo__Avatar}
//                  src="https://tengrinews.kz/userdata/images/u38/resized/35fcc7bea1f32a6437650758096b9f89.jpeg" />
//                 <div className={s.profileInfo__Text} >
//                     <p className={s.profileInfo__Name}> Володимир Погребняк</p>
//                     <p className={s.profileInfo__Parametr}>Вік: 36</p>
//                     <p className={s.profileInfo__Parametr}>Освіта: КНУ</p>
//                     <p className={s.profileInfo__Parametr}>Місто: Жмеринка</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProfileInfo;