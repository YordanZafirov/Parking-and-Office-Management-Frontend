const universalRequest = async (method: string, url: string, data) => {
    const userAuth = localStorage.getItem('access_token');
    // let auth: AuthToken;
    const headers: HeadersInit = {};

    if (userAuth) {
        headers['Authorization'] = `Bearer ${userAuth}`;
    }

    // Check if the method is GET
    if (method === 'GET') {
        try {
            const response = await fetch(url, { headers });
            const fetchedData = await response.json();
            if (fetchedData.error) {
                const backendError = fetchedData.error.message;

                return { error: backendError };
            }
            return fetchedData;
        } catch (error) {
            console.error('Error:', error);
        }
        // Check for other methods
    } else {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Fetch the data
            const fetchedData = await response.json();
            if (fetchedData.error) {
                const backendError = fetchedData.error.message;
                return { error: backendError };
            }

            return fetchedData;
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

const get = universalRequest.bind({}, 'GET');
const post = universalRequest.bind({}, 'POST');
const patch = universalRequest.bind({}, 'PATCH');
const del = universalRequest.bind({}, 'DELETE');

export { get, post, patch, del };
