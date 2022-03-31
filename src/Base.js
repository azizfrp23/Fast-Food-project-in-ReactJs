import Rebase from 're-base'
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEeql4B3Rdgt-KT53pNV_v9HMWMZ8BjDg",
    authDomain: "fast-food-4cef2.firebaseapp.com",
    databaseURL: "https://fast-food-4cef2-default-rtdb.europe-west1.firebasedatabase.app",

})
const base = Rebase.createClass(firebaseApp.database())
export {firebaseApp}
export default base