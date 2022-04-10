export default function handleResponseFromAPI(promise) {
    const data = { staus: 200, boy: 'success' };

    return promise
        .then(() => data)
        .catch(() => new Error())
        .finally(() => {
            console.log('Got a response from the API');
        });
}
