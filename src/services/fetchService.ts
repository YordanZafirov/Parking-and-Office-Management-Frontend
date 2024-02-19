const universalRequest = async (method: string, url: string, data) => {
  const userAuth = localStorage.getItem("access_token");
  const headers: HeadersInit = {};

  // Add token to headers if user is authenticated
  if (userAuth) {
    headers["Authorization"] = `Bearer ${userAuth}`;
  }

  // Add data to body if method is not GET
  if (method === "GET") {
    try {
      const response = await fetch(url, { headers });
      const fetchedData = await response.json();
      if (fetchedData.error) {
        const backendError = fetchedData.error.message;

        return { error: backendError };
      }
      return fetchedData;
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    // Add data to body if method is not GET
    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...headers,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // If response is not ok, throw error
      const fetchedData = await response.json();
      if (fetchedData.error) {
        const backendError = fetchedData.error.message;
        return { error: backendError };
      }

      return fetchedData;
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

// Bind methods to universalRequest
const get = universalRequest.bind({}, "GET");
const post = universalRequest.bind({}, "POST");
const patch = universalRequest.bind({}, "PATCH");
const del = universalRequest.bind({}, "DELETE");

export { get, post, patch, del };
