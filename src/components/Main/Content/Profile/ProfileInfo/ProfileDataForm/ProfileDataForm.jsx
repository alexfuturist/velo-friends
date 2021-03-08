import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileDataForm.module.scss';


const ProfileDataForm = ({ handleSubmit, profileInfo, error, isOwner, getUserStatus, updateUserStatus }) => {
   
    return (
        <form className={s.profileInfo__Form} onSubmit={handleSubmit}>
            <div className={s.profileInfo__FormLeft}>
                <p>
                    <Field className={s.profileInfo__Name} name="fullName" placeholder="Моє ім'я" component="input" />
                </p>

                <ProfileStatusWithHooks className={s.profileInfo__Parametr} status={profileInfo.status}
                    getUserStatus={getUserStatus} updateUserStatus={updateUserStatus} isOwner={isOwner} />

                <p className={s.profileInfo__Checkbox}>
                    <span className={s.bold}>Шукаю роботу:&#160;</span>
                    <Field className={s.profileInfo__CheckboxInput}
                        name="lookingForAJob" component="input" type="checkbox" id="lookingForAJob" />
                    <label className={s.profileInfo__CheckboxLabel} for="lookingForAJob"></label>
                </p>

                <p className={s.profileInfo__Parametr}>
                    <p className={s.bold}>Мої навички:</p>
                    <Field className={s.profileInfo__ParametrInput}
                        name="lookingForAJobDescription" component="input" />
                </p>

                <p className={s.profileInfo__Parametr}>
                    <p className={s.bold}>Про мене:</p>
                    <Field className={s.profileInfo__ParametrInput}
                        name="aboutMe" component="input" />
                </p>

                <div>
                    <button type="submit" className={`${s.profileInfo__button} ${s.profileInfo__buttonSave}`}>
                        Зберегти зміни
                    </button>
                </div>

                <div>
                    {error &&
                        <div className={s.formCommonError}>{error}</div>}
                </div>

            </div>

            <p className={s.profileInfo__FormContacts}>
                <p className={s.profileInfo__ContactsTitle}>Контакти:</p>
                {Object.keys(profileInfo.contacts)
                    .map(key => {
                        return (
                            <div className={s.profileInfo__Contact}>
                                <span className={s.profileInfo__ContactTitle}>{key}:&#160;</span>
                                <Field className={s.profileInfo__ContactValue} name={`contacts.` + key}
                                    placeholder={key} component="input" key={key} />
                            </div>
                        )
                    })
                }
            </p>
        </form>
    );
}

const ProfileDataFormRedux = reduxForm({ form: `edit-profile` })(ProfileDataForm);


export default ProfileDataFormRedux;











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