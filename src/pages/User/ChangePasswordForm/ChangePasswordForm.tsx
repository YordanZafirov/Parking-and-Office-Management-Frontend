import { useNavigate } from 'react-router';
import Modal from '../../../components/Modal/Modal';
import useChangePassword from './ChangePasswordForm.logic';
import { StyledPasswordForm } from './ChangePasswordForm.styles';
import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';

const ChangePasswordForm = () => {
    const { formik } = useChangePassword();
    const navigate = useNavigate();

    return (
        <Modal>
            <StyledPasswordForm onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Change Password</h2>
                <label htmlFor="password">Current Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <label htmlFor="newPassword">New Password</label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="New Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.newPassword && formik.touched.newPassword ? (
                    <div>{formik.errors.newPassword}</div>
                ) : null}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
                <FormButtonsContainer>
                    <BaseButton type={'submit'}>Change Password</BaseButton>
                    <BaseButton
                        type="button"
                        className="close-btn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Close
                    </BaseButton>
                </FormButtonsContainer>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </StyledPasswordForm>
        </Modal>
    );
};

export default ChangePasswordForm;
