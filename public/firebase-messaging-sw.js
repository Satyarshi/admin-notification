importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBGG9QxA4kyZAERsJgVpX--CBFLX1Ajm9c",
    authDomain: "soach-notification.firebaseapp.com",
    projectId: "soach-notification",
    storageBucket: "soach-notification.firebasestorage.app",
    messagingSenderId: "339616068216",
    appId: "1:339616068216:web:15dd4738c11d030034338d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});