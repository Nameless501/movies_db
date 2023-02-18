function handleResponseCheck(response) {
    return response.ok ? response.json() : Promise.reject(response.status);
}

export const handleFetch = (url, options, payload = null) => {
    if (payload) {
        options.body = JSON.stringify({ ...payload });
    }

    return fetch(url, options);
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