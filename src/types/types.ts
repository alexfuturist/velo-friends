//Profile
export type PostType = {
  id: number;
  message: string;
};

export type ProfileContactsType = {
  facebook: null | string;
  website: null | string;
  vk: null | string;
  twitter: null | string;
  instagram: null | string;
  youtube: null | string;
  github: null | string;
  mainLink: null | string;
};

export type PhotosType = {
  small: string;
  large: string;
};

export type ProfileInfoType = {
  aboutMe: string;
  contacts: ProfileContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number | null;
  photos: PhotosType;
};

//Dialogs
export type DialogType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  name: string;
  messagesText: string;
};

export type DialogMessagesType = {
  id: number;
  messages: Array<MessageType>;
  newMessageText: string;
};

//User
export type UserType = {
  id: number;
  name: string;
  status?: string;
  photos: PhotosType;
  followed: boolean;
};
