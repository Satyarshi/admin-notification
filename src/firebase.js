import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBGG9QxA4kyZAERsJgVpX--CBFLX1Ajm9c",
    authDomain: "soach-notification.firebaseapp.com",
    projectId: "soach-notification",
    storageBucket: "soach-notification.firebasestorage.app",
    messagingSenderId: "339616068216",
    appId: "1:339616068216:web:15dd4738c11d030034338d"
};

const FIREBASE_VAPID_KEY = "BFke_b3UsV3k56a7II5jgGtAZpBi7CpWE2Dq7xOlhhyIG6MoeD4WytLXKHlSZrDZBpQSokRUNV5rPJ59dtEC0cI";


export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// Request permission for notifications
export const requestForToken = async () => {
    try {
        const currentToken = await getToken(messaging, { vapidKey: FIREBASE_VAPID_KEY });
        if (currentToken) {
            console.log("FCM Token:", currentToken);
            return currentToken;
        } else {
            console.log("No registration token available. Request permission to generate one.");
        }
    } catch (err) {
        console.error("An error occurred while retrieving token:", err);
    }
};

// Listen for foreground messages
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
