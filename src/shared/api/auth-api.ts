import { instance } from "./api";

//AUTH
type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};

type LoginResponseType = {
  data: {
    id: number;
  };
  resultCode: number;
  messages: Array<string>;
};

type LogoutResponseType = {
  data: object;
  resultCode: number;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe: boolean, captcha = null as string | null) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete<LogoutResponseType>(`auth/login`).then((res) => res.data);
  },
};
