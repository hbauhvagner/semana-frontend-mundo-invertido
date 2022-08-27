import app from './app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app);
    const hellFireClubCollection = collection(db, 'hellfire-club');
    const docRef = await addDoc(hellFireClubCollection, subscription);

    return docRef.id;
}

export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app);
    const hellFireClubCollection = collection(db, 'hellfire-club');
    const hellFireClubCollectionSnapshot = await getDocs(hellFireClubCollection)
    const subscriptions = hellFireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}