// helper functions.

export function apiHelper() {
    return new Promise((resolve, reject) => {
        fetch("https://konuxdata.getsandbox.com/data")
            .then(response => resolve(response.json()))
            .catch(err => reject(err))
    });
}
