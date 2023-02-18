import { useCallback } from "react";

function useDataFetch() {
    function handleResponseCheck(response) {
        return response.ok ? response.json() : Promise.reject(response.status);
    }

    const handleFetch = useCallback((config, payload = null) => {
        const { url, method, credentials, headers } = config;
        const options = { method, credentials, headers };

        if (payload) {
            options.body = JSON.stringify({ ...payload });
        }

        return fetch(url, options)
            .then(handleResponseCheck);
    }, []);

    const handleFetchById = useCallback((config, id) => {
        const { url, method, credentials, headers } = config;

        return fetch(`${url}/${id}`, {
            method,
            credentials,
            headers,
        })
            .then(handleResponseCheck);
    }, []);

    return { handleFetch, handleFetchById };
}

export default useDataFetch;