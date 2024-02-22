import { useNavigate } from 'react-router';
import Modal from '../../../../components/Modal/Modal';
import { Button } from '../../../CreateSpots/CreateSpotsPage.style';
import useChangePassword from './ChangePasswordForm.logic';
import { StyledPasswordForm } from './ChangePasswordForm.styles';

const ChangePasswordForm = () => {
    const { formik } = useChangePassword();
    const navigate = useNavigate();

    return (
        <Modal>
            <StyledPasswordForm onSubmit={formik.handleSubmit}>
            <Button type="button" className="close-btn" onClick={() => navigate(-1)}>
                    Close
                </Button>
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
                <button type="submit">Change Password</button>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </StyledPasswordForm>
        </Modal>
    );
};

export default ChangePasswordForm;
