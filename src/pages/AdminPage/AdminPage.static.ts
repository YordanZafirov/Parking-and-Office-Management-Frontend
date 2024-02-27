export interface LocationData {
    id?: string;
    name?: string;
    city?: string;
    address?: string;
    modifiedBy?: string | undefined;
}

export interface EditFormErrors {
    name: string;
    city: string;
    address: string;
}
