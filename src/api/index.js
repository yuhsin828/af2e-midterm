import { getApps, getApp, initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    getDocs,
    deleteDoc,
    query,
    where,
    limit,
    initializeFirestore,
} from "firebase/firestore";
import {
    getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    initializeAuth,
} from 'firebase/auth';
import _ from "lodash";
import products from "../json/products.json";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = app_length ? getFirestore(app) : initializeFirestore(app, { experimentalForceLongPolling: true, });

// REFERENCE AUTH
const auth = app_length ? getAuth(app) : initializeAuth(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products");

export const feedProducts = async () => {
    // DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async (product) => {
        await deleteDoc(doc(db, "products", product.id));
    });
    // ADD NEW DOCS
    products.forEach(async (product) => {
        const docRef = await doc(productsCollection);
        await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
    });
};

// export const getProducts = async () => {
//     const querySnapshot = await getDocs(productsCollection);
//     // Convert query to a json array.
//     let result = [];
//     querySnapshot.forEach(async (product) => {
//         await result.push(product.data());
//     });
//     console.log({ result });
//     return result;
// };

export const getProducts = async ({ queryKey }) => {
    const [showItemCount] = queryKey;
    const q = await query(
        productsCollection,
        where("hotNew", "==", "hot"),
        limit(showItemCount)
    );
    let querySnapshot = await getDocs(q);

    const r = await query(
        productsCollection,
        where("hotNew", "==", "new"),
        limit(showItemCount)
    );
    let rquerySnapshot = await getDocs(r);

    let result = [];
    querySnapshot.forEach(async (product) => {
        await result.push(product.data());
    });
    rquerySnapshot.forEach(async (product) => {
        await result.push(product.data());
    });
    return result;
};

export const getProductById = async ({ queryKey }) => {
    const [id] = queryKey;
    const docRef = await doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

export const getProductsByCategory = async ({ queryKey }) => {
    const [category] = queryKey;
    const q = await query(
        productsCollection,
        category == "hot" || category == "new"
            ? where("hotNew", "==", category)
            : category == "all"
                ? where("countInStock", ">=", 1)
                : where("category", "==", category.toUpperCase())
    );
    let querySnapshot = await getDocs(q);
    // Convert the query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
        await result.push(product.data());
    });
    return result;
};

export const getUserInfo = async () => {
    const storedUser = localStorage.getItem("user");
    const user = auth?.currentUser || JSON.parse(storedUser) || null;

    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const userDoc = docSnap.data();
        return {
            uid: user.uid,
            email: user.email,
            ...userDoc,
        };
    } else {
        return {}
    }
}

export const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = auth.currentUser;
    localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ name, email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = userCredential?.user;
    localStorage.setItem("user", JSON.stringify(user));
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
        name,
    });
};

export const updateUserInfo = async ({ name, adrs, tel, uid }) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
        name,
        adrs,
        tel,
    });
    const user = auth.currentUser;
    localStorage.setItem("user", JSON.stringify(user));
}


export const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("user");
}

export const toggleFavoriteProduct = async ({ productId, uid }) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    const favorites = userDoc?.favorites || [];
    if (favorites.length === _.pull(favorites, productId).length) {
        favorites.push(productId);
    }
    await updateDoc(docRef, { favorites });
    return favorites;
}

export const getProductsByFavorites = async ({ queryKey }) => {
    const [uid] = queryKey;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    const favorites = userDoc?.favorites || [];
    let result = [];

    await Promise.all(
        favorites.map(async (favorite) => {
            const q = query(productsCollection, where("id", "==", favorite));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((product) => {
                result.push(product.data());
            });
        })
    );

    return result;
}