import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.scss';


const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
  return (
    <section className={s.users} >
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
      <div>
        {users.map(u => <User {...props} u={u} />)}
      </div>
    </section>
  );
};

export default Users;






// let Users = (props) => {

//   console.log(props.users.length);

//   if (props.users.length === 0) {
//     props.setUsers([
//       {
//         id: 1,
//         followed: true,
//         avatar: 'https://glavcom.ua/img/article/6194/8_main.jpg',
//         fullName: 'Олег',
//         status: 'Відпочиваю після концерту. Вовчиці дали вогню..)',
//         location: {
//           city: 'Київ',
//           country: 'Україна'
//         },
//       }, {
//         id: 2,
//         followed: false,
//         avatar: 'https://fdlx.com/wp-content/uploads/donald-tramp-uxodit-v-otpusk-dlya-uchastiya-v-otborochnyx-igrax-po-golfu.jpg',
//         fullName: 'Donald',
//         status: "I'd better go play golf ..",
//         location: {
//           city: 'Нью-Йорк',
//           country: 'США'
//         },
//       }, {
//         id: 3,
//         followed: false,
//         avatar: 'https://cdn.livesport.ru/l/hockey/2019/03/01/lukashenko/picture.jpg?1551464140',
//         fullName: 'Александр',
//         status: 'Я очень люблю спорт — это самое лучшее мое качество.',
//         location: {
//           city: 'Мінськ',
//           country: 'Білорусь'
//         },
//       }, {
//         id: 4,
//         followed: true,
//         avatar: 'https://delo.ua/files/news/images/3624/99/picture2_klichko-pronik-v-_362499_p0.jpg',
//         fullName: 'Віталій',
//         status: 'Дайте мне точку опоры! И я обопрусь.',
//         location: {
//           city: 'Київ',
//           country: 'Україна'
//         },
//       }
//     ])
//   }

//   console.log(props.users.length);


//   return (
//     <section className={s.users}>
//       <div>
//         {
//           props.users.map(u => <div key={u.id} className={s.users__item}>
//             <div className={s.users__img}>
//               <img src={u.avatar} alt="" />
//               <div>
//                 {u.followed
//                   ? <button onClick={() => { props.unfollow(u.id) }} className={`${s.users__button__unfollow} ${s.users__button} button`}>
//                     <span className={s.active}>Слідкую</span>
//                     <span className={s.hover}>Відписатись</span>
//                   </button>
//                   : <button onClick={() => { props.follow(u.id) }} className={`${s.users__button__follow} ${s.users__button} button`}>
//                     Підписатись
//                   </button>
//                 }
//               </div>
//             </div>

//             <div className={s.users__info}>
//               <div className={s.users__infoTop}>
//                 <p className={s.users__name}>{u.fullName}</p>
//                 <p className={s.users__city}>{u.location.city},</p>

//               </div>
//               <div className={s.users__infoBottom}>
//                 <p className={s.users__status}>{u.status}</p>
//                 <p className={s.users__country}>{u.location.country}</p>
//               </div>
//             </div>
//           </div >)
//         }
//       </div>
//     </section>
//   );
// }

// export default Users;








