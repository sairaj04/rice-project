import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvAmDNkUpKoKPjy33hd0W87lAwOisb6U4",
  authDomain: "rice-app-d0da9.firebaseapp.com",
  projectId: "rice-app-d0da9",
  storageBucket: "rice-app-d0da9.appspot.com",
  messagingSenderId: "1002736991545",
  appId: "1:1002736991545:web:9e7ec39c22eca810adfce8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
