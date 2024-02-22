import * as Yup from 'yup';

export const ChangeProfilePictureSchema = Yup.object().shape({
    imgUrl: Yup.string().required('Required'),
});

export interface ChangeProfilePicture {
    id?: string;
    imgUrl?: string;
    error?: string;
}
