import React from 'react';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import s from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    return (
        <div>
            <div className={s.profileCover}>
                <img className={s.profileCover__img}
                    src="https://s1.1zoom.me/b5050/382/388402-svetik_1920x1080.jpg" />
            </div>
            <div className={s.profileInfo}>
                <img className={s.profileInfo__Avatar}
                    src={props.profileInfo.photos.large} />
                <div className={s.profileInfo__Text} >
                    <p className={s.profileInfo__Name}> {props.profileInfo.fullName} </p>
                    <p className={s.profileInfo__Parametr}>Вік: 36</p>
                    <p className={s.profileInfo__Parametr}>Освіта: КНУ</p>
                    <p className={s.profileInfo__Parametr}>Місто: Жмеринка</p>
                    <p className={s.profileInfo__Parametr}>Про мене: {props.profileInfo.aboutMe}</p>
                </div>
                <div className={s.profileInfo__Status}><ProfileStatusWithHooks status={props.profileInfo.status}
                    getUserStatus={props.getUserStatus} updateUserStatus={props.updateUserStatus} /></div>
            </div>
        </div>
    );
}

export default ProfileInfo;










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