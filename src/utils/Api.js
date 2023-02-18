function handleResponseCheck(response) {
    return response.ok ? response.json() : Promise.reject(response.status);
}

export const handleFetch = (config, payload = null) => {
    const { url, method, credentials, headers } = config;
    const options = { method, credentials, headers };

    if (payload) {
        options.body = JSON.stringify({ ...payload });
    }

    return fetch(url, options)
        .then(handleResponseCheck);
};

export const handleFetchById = (config, id) => {
    const { url, method, credentials, headers } = config;

    return fetch(`${url}/${id}`, {
        method,
        credentials,
        headers,
    })
        .then(handleResponseCheck);
};