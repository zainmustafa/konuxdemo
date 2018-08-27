
import * as firebase from "firebase";
import NPMPackage from "../../package.json";

/**
 * Configuration
 * @module config
 */

const config = {
    name: NPMPackage.name,
    title: NPMPackage.title,
    description: NPMPackage.description
};

firebase.initializeApp({
    apiKey: "AIzaSyALVgl0hJ95YZcH1MYJL9ZREPZE7gZyOBs",
    authDomain: "konuxdemo.firebaseapp.com",
    databaseURL: "https://konuxdemo.firebaseio.com",
    projectId: "konuxdemo",
    storageBucket: "konuxdemo.appspot.com",
    messagingSenderId: "494586801404"
});

export default config;
