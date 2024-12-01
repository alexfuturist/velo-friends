import { Field, reduxForm } from "redux-form";
import { ProfileInfoType } from "src/shared/types";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import s from "./ProfileDataForm.module.scss";
import React from "react";

type PropsType = {
  profileInfo: ProfileInfoType;
  status?: string;
  isOwner: boolean;
  error: boolean;

  handleSubmit: () => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
};

const ProfileDataForm: React.FC<PropsType> = ({
  handleSubmit,
  profileInfo,
  status,
  error,
  isOwner,
  getUserStatus,
  updateUserStatus,
}) => {
  return (
    <form
      className={s.profileInfo__Form}
      onSubmit={handleSubmit}
    >
      <div className={s.profileInfo__FormLeft}>
        <div>
          <Field
            className={s.profileInfo__Name}
            name="fullName"
            placeholder="Моє ім'я"
            component="input"
          />
        </div>

        <div className={s.profileInfo__Parametr}>
          <ProfileStatusWithHooks
            status={status}
            getUserStatus={getUserStatus}
            updateUserStatus={updateUserStatus}
            isOwner={isOwner}
          />
        </div>

        <div className={s.profileInfo__Checkbox}>
          <span className={s.bold}>Шукаю роботу:&#160;</span>
          <Field
            className={s.profileInfo__CheckboxInput}
            name="lookingForAJob"
            component="input"
            type="checkbox"
            id="lookingForAJob"
          />
          <label
            className={s.profileInfo__CheckboxLabel}
            htmlFor="lookingForAJob"
          ></label>
        </div>

        <div className={s.profileInfo__Parametr}>
          <div className={s.bold}>Мої навички:</div>
          <Field
            className={s.profileInfo__ParametrInput}
            name="lookingForAJobDescription"
            component="input"
          />
        </div>

        <div className={s.profileInfo__Parametr}>
          <div className={s.bold}>Про мене:</div>
          <Field
            className={s.profileInfo__ParametrInput}
            name="aboutMe"
            component="input"
          />
        </div>

        <div>
          <button
            type="submit"
            className={`${s.profileInfo__button} ${s.profileInfo__buttonSave}`}
          >
            Зберегти зміни
          </button>
        </div>

        <div>{error && <div className={s.formCommonError}>{error}</div>}</div>
      </div>

      <div className={s.profileInfo__FormContacts}>
        <div className={s.profileInfo__ContactsTitle}>Контакти:</div>
        {Object.keys(profileInfo.contacts).map((key) => {
          return (
            <div
              key={key}
              className={s.profileInfo__Contact}
            >
              <span className={s.profileInfo__ContactTitle}>{key}:&#160;</span>
              <Field
                className={s.profileInfo__ContactValue}
                name={`contacts.` + key}
                placeholder={key}
                component="input"
                key={key}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form: `edit-profile` })(
  //@ts-ignore
  ProfileDataForm,
);

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
