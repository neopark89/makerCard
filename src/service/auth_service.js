import def from 'css-minimizer-webpack-plugin/node_modules/ajv/dist/vocabularies/format/format';
import firebase from 'firebase';


class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth.[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;