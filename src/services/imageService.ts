import { BASE_URL } from '../static/constants';

export const uploadImage = async (imageFile: File): Promise<string> => {
    try {
        // Create a new FormData object
        const formData = new FormData();
        formData.append('image', imageFile);

        // Get the user's access token
        const userAuth = localStorage.getItem('access_token');
        const headers: HeadersInit = {};

        // Add the user's access token to the headers
        if (userAuth) {
            headers['Authorization'] = `Bearer ${userAuth}`;
        }

        // Send the image to the server
        const response = await fetch(`${BASE_URL}/image-upload`, {
            method: 'POST',
            headers,
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to upload image: ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};
