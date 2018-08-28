// helper functions.

export function apiHelper() {
    return new Promise((resolve, reject) => {
        fetch("http://konuxdata.getsandbox.com/data")
            .then(response => response.json())
            .then(function(data) {
                resolve(JSON.stringify(data));
            })
            .error(function(err){
                reject(err);
            })
    });
}
