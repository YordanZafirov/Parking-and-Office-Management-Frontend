import * as Yup from 'yup';

export interface FloorPlan {
    id?: string;
    name?: string;
    imgUrl?: string;
    locationId?: string;
    modifiedBy?: string;
    error?: string;
}

const FloorPlanCreateShema = Yup.object().shape({
    name: Yup.string().min(3, 'Name is too short!').max(100, 'Name is too long!').required('Name is required'),
    imgUrl: Yup.string().required('Image is required'),
});

export { FloorPlanCreateShema };

export interface EditFormErrors {
    name: string;
}
