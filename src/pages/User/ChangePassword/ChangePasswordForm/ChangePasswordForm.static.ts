import * as Yup from 'yup';

export const ChangePasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.')
        .matches(
            /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/,
            'Password must contain at least one letter, one number, and one special character.',
        )
        .required('Required'),
    confirmPassword: Yup.string()
        .nullable()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Required'),
});

export interface ChangePassword {
    id?: string,
    password?: string;
    newPassword?: string;
    confirmPassword?: string;
    error?: string;
  }