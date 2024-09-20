import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCes-ytkbevOvVOqafv8zZeWBctMsV2GGs",
    authDomain: "tickets-b0cf5.firebaseapp.com",
    projectId: "tickets-b0cf5",
    storageBucket: "tickets-b0cf5.appspot.com",
    messagingSenderId: "905318445812",
    appId: "1:905318445812:web:eafa7995496be4088ae4a1",
    measurementId: "G-963KG2BZX0"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        