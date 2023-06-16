import { initializeApp } from 'firebase/app';
import {
    getAuth, //each firebase app has one 'auth' class that instantiates the authentication instance - gateway to the authentication api
    signInWithPopup, //provide functionality of popup behaviour of the sign in component - can take 3rd party auth providers
    signInWithRedirect,
    getRedirectResult,
    createUserWithEmailAndPassword,
    GoogleAuthProvider, //creates an instance of the auth object to interact with the google auth api - available for many other providers as well
 } from 'firebase/auth';
import {
    getFirestore, //instantiates our database instance in our project
    doc, //retrieves specified document(file) but not it's data - if file not found it creates it
    getDoc, //retrieves data from specified file - if none exists the returned object contains a .exists() method returning true/false
    setDoc  //creates data using the document(file) object retrieved from doc() and an object with desired variables to be set as data
} from 'firebase/firestore'



//confog pbject taken from firebase console - ties the instance we create with the project in the backend using 'initializeApp()'
const firebaseConfig = {
apiKey: "AIzaSyDi_4jtLy4chdwmvxQpyBb_nE9jGYvHv9g",
authDomain: "crown-clothing-project-75fe1.firebaseapp.com",
projectId: "crown-clothing-project-75fe1",
storageBucket: "crown-clothing-project-75fe1.appspot.com",
messagingSenderId: "569721105849",
appId: "1:569721105849:web:0088100fe989e67399da68"
};

const firebaseApp = initializeApp(firebaseConfig); // instantiates our firebase project in our app
//--------------------------------------------------------------------------------------------------------


// below, all firebase methods are wrapped in our own functions so that when the library is modified by firebase we do not have to make updates 
// and changes throught our whole program, we can update the code from one place
// ** email/password sign, getdoc, setdoc are async methods 

// instantiate instances of the authentication objects needed - below are firebase and google
export const auth = getAuth()

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
//-------------------------------------------------------------------------------------------


// creating methods for sign in through different options
export const googleSignInPopup = () => signInWithPopup(auth, googleProvider);
export const googleSignInRedirect = () => signInWithRedirect(auth, googleProvider)


export const createUserViaEmailPassword = async (email, password) => {
    if (!email || !password) return; //defensive programming

    return await createUserWithEmailAndPassword(auth, email, password);
}

//app reloads when returning from redirect thus losing the access token and user data inside it used to create a record in the DB
//thus we execute the method below on mount to get the lost access token from firebase, if it exists, to continue the operation.
export const getRedirectResultHandler = ()=> getRedirectResult(auth); 
//--------------------------------------------------------------------


//below, creating the firestore database instance and using it to check for new users (users who's docs have no data) and adding thier data to the database via setDoc()
//returns the user document at the end (*doc does not contain the data, it's the document info, getDoc/setDoc get/set the data from the database)
export const database = getFirestore();

export const createUserDocFromAuth = async (user, additionalInfo={}) => {
    const userDoc = doc(database, 'users', user.uid);
    const userData = await getDoc(userDoc);

    if(!userData.exists()) {
        let {displayName, email} = user;
        const dateCreated = new Date();

        try {
            await setDoc(userDoc, {displayName, email, dateCreated, ...additionalInfo});
        } catch(error) {
            console.log('error creating new user from auth', error.message)
        }
    }

    return userDoc;
}
//---------------------------------------------------------------------------------------------
