
import * as firebase from "firebase"


export function login(user) {
    return new Promise((resolve,reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.username, user.password)
            .then(resp => resolve(resp))
            .catch(error => reject(error));
    });
}

export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}


export function register(user) {
    return new Promise((resolve,reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.username, user.password)
            .then(resp => resolve(resp))
            .catch(error => reject(error));
    });
}
