

export default (context, inject) => {
  inject('storage', firebase.storage());
  inject('db', firebase.firestore())
}