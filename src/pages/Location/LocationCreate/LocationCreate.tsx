import { useCreateLocation } from "./LocationCreate.logic";

export default function LocationCreateForm() {
    const { formik } = useCreateLocation();

    return (
        <div className="page-center">
            <form onSubmit={formik.handleSubmit}>
                <h3 className="form-title">Create new location</h3>

                <label>Name</label>
                <input type="name" id="name" name="name" placeholder="Please enter location's name" onChange={formik.handleChange} />
                {formik.errors.name && formik.touched.name && <div className="error-message">{formik.errors.name}</div>}

                <label>City</label>
                <input type="name" id="city" name="city" placeholder="Please enter location's city" onChange={formik.handleChange} />
                {formik.errors.city && formik.touched.city && <div className="error-message">{formik.errors.city}</div>}

                <label>Address</label>
                <input type="name" id="address" name="address" placeholder="Please enter location's address" onChange={formik.handleChange} />
                {formik.errors.address && formik.touched.address && <div className="error-message">{formik.errors.address}</div>}

                <label>Image</label>
                <input type="name" id="imgUrl" name="imgUrl" placeholder="Please enter location's address" onChange={formik.handleChange} />
                {formik.errors.imgUrl && formik.touched.imgUrl && <div className="error-message">{formik.errors.imgUrl}</div>}

                <button type="submit">Create</button>

                {formik.errors.name && formik.touched.name && <div className="error-message">{formik.errors.name}</div>}
            </form>
        </div>
    );
}
