import { withAuthRedirect } from "src/shared/lib/hoc/AuthRedirect";
import s from "./AboutProject.module.scss";
import cn from "classnames";

export const AboutProjectComponent = () => {
  return (
    <div className={s.aboutProject}>
      <p className={s.aboutProject__title}>Використані наступні технології та бібліотеки:</p>
      <ul className={s.stack}>
        <li className={s.stack__item}>
          <br />
          <li className={s.list__item}>
            <span>TypeScript</span>
          </li>
          <br />
          <p className={s.stack__title}>UI:</p>
          <ul className={s.stack__list}>
            <li className={s.list__item}>
              <span>React,</span>, React-Hooks, functional component, class component.
            </li>
            <li className={s.list__item}>React Router, Compose, React.memo.</li>
            <li className={s.list__item}>HOC: WithRouter, WithAuthRedirect.</li>
            <li className={s.list__item}>React.lazy, React.suspense</li>
            <li className={s.list__item}>SCSS, CSS Modules, classnames.</li>
          </ul>
        </li>
        <li className={s.stack__item}>
          <p className={s.stack__title}>BLL:</p>
          <ul className={s.stack__list}>
            <li className={s.list__item}>
              <span>Redux</span>, react-redux, connect.
            </li>
            <li className={s.list__item}>FLUX-архітектура.</li>
            <li className={s.list__item}>Selectors, Reselect.</li>
            <li className={s.list__item}>Redux-form, validation.</li>
          </ul>
        </li>
        <li className={s.stack__item}>
          <p className={s.stack__title}>DAL:</p>
          <ul className={s.stack__list}>
            <li className={s.list__item}>
              <span>REST API</span>, Axios.
            </li>
            <li className={s.list__item}>
              <span>Middleware: </span>Redux-thunk.
            </li>
          </ul>
        </li>
      </ul>
      <p className={s.aboutProject__title}>Реалізовано:</p>
      <ul className={cn(s.stack__list, s.stack__listBottom)}>
        <li className={s.list__item}>
          <span>Сторінка Авторизації</span>, валідація, captcha.
        </li>
        <li className={s.list__item}>
          <span>Сторінка Профілю:</span>
          <p>
            {" "}
            - можливість зміни фотографії, статуса та інформації{" "}
            <span className={s.list__itemPink}>(працює з redux+сервер-API)</span>.
          </p>
          <p>
            {" "}
            - можливість додавання, редагування, видалення постів{" "}
            <span className={s.list__itemBlue}>(працює локально з redux)</span>.
          </p>
        </li>
        <li className={s.list__item}>
          <span>{`Сторінка "Мої підписки":`}</span>
          <p>
            {" "}
            - пагінація, preloader, можливість переходу на сторінку юзера{" "}
            <span className={s.list__itemPink}>(працює з redux+сервер-API)</span>.
          </p>
          <p>
            {" "}
            - можливість підписуватись на сторінки інших юзерів{" "}
            <span className={s.list__itemPink}>(працює з redux+сервер-API)</span>.
          </p>
        </li>
        <li className={s.list__item}>
          <span>{`Сторінка "Повідомлення":`}</span>
          <p>
            {" "}
            - можливість вибору діалогу та додавання нового повідомлення.{" "}
            <span className={s.list__itemBlue}>(працює локально з redux)</span>
          </p>
          <p>
            {" "}
            - збереження чорнетки повідомлення для кожного діалогу.{" "}
            <span className={s.list__itemBlue}>(працює локально з redux)</span>
          </p>
        </li>
        <li className={s.list__item}>
          <span>Авторський дизайн😉</span>
        </li>
      </ul>

      <p className={cn(s.aboutProject__title, s.aboutProject__linkTitle)}>
        Посилання на GitHub проєкту:
      </p>
      <ul className={cn(s.stack__list, s.stack__listBottom)}>
        <li className={s.list__item}>
          <a
            className={s.aboutProject__link}
            target="_blank"
            href="https://github.com/alexfuturist/velo-friends"
            rel="noreferrer"
          >
            https://github.com/alexfuturist/velo-friends
          </a>
        </li>
      </ul>
      <p className={cn(s.aboutProject__title, s.aboutProject__linkTitle)}>
        Посилання на Server-API docs:
      </p>
      <ul className={cn(s.stack__list, s.stack__listBottom)}>
        <li className={s.list__item}>
          <a
            className={s.aboutProject__link}
            target="_blank"
            href="https://social-network.samuraijs.com/docs"
            rel="noreferrer"
          >
            https://social-network.samuraijs.com/docs
          </a>
        </li>
      </ul>
    </div>
  );
};

export const AboutProject = withAuthRedirect(AboutProjectComponent);
