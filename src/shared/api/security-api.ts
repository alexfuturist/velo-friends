import { instance } from "./api";

//SECURITY
type GetCaptchaUrl = {
  url: string;
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaUrl>(`security/get-captcha-url`).then((res) => res.data);
  },
};
