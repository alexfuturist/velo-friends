import { PhotosType, ProfileInfoType } from '../shared/types';
import { instance } from './api';

//PROFILE
type GetProfileResponseType = {
  aboutMe: string;
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  photos: PhotosType;
};

type ResponseType<D> = {
  data: D;
  resultCode: number;
  messages: Array<string>;
};

type UpdatePhotoResponseDataType = {
  photos: PhotosType;
};

export const profileAPI = {
  getUserProfile(userId: number | null) {
    return instance.get<GetProfileResponseType>(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId: number | null) {
    return instance.get<string>(`profile/status/${userId}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseType<object>>(`profile/status`, {
        status: status,
      })
      .then((res) => res.data);
  },
  updatePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance
      .put<ResponseType<UpdatePhotoResponseDataType>>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },
  saveProfile(profile: ProfileInfoType) {
    return instance.put<ResponseType<object>>(`profile`, profile).then((res) => res.data);
  },
};
