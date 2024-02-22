import { useFormik } from 'formik';
import useToken from '../../../../hooks/Token/Token.hook';
import { ChangePassword, ChangePasswordSchema } from './ChangePasswordForm.static';
import { changePassword } from '../../../../services/userService';
import { route } from '../../../../static/routes';
import { useNavigate } from 'react-router';

const useChangePassword = () => {
    const navigate = useNavigate();
    const decodedToken = useToken();
    const formik = useFormik({
        initialValues: {
            id: decodedToken?.id,
            password: '',
            newPassword: '',
            confirmPassword: '',
            error: '',
        },
        validationSchema: ChangePasswordSchema,

        onSubmit: async (values: ChangePassword) => {
            try {
                const { id, password, newPassword } = values;
                await changePassword({ id, password, newPassword });
                navigate(`${route.user}/${id}`);
            } catch (error) {
                console.error('Error while change password:', error);
                formik.setFieldValue('error', error.message);
            }
        },
    });
    return { formik };
};

export default useChangePassword;
