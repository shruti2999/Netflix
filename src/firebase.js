
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDt2tE9GmTICalkqW5PyauFSD3Cr19wQ9g",
  authDomain: "netflix-972a0.firebaseapp.com",
  projectId: "netflix-972a0",
  storageBucket: "netflix-972a0.firebasestorage.app",
  messagingSenderId: "90213900293",
  appId: "1:90213900293:web:7389749c3423f934183c6c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);

const signup= async(name,EmailAuthCredential,password)=>{
    try{
       const res= await createUserWithEmailAndPassword(auth,EmailAuthCredential,password);
       const user =res.user;
       await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
       })
    }catch(error){
        console.log(error)
        toast.error(error.code);
    }
}
const login =async ()=>{
    try{
       await signInWithEmailAndPassword(auth, email,password)
    }catch(error){
        console.log(error);
        toast.error(error.code);
    }
}

const logout =()=>{
    signOut(auth);

}
export default(auth,db,login,signup,logout);