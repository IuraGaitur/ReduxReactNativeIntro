import PouchDB from 'pouchdb-react-native'
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default);
PouchDB.plugin(require('pouchdb-find'));
const AppDatabase = new PouchDB('Sporter', {adapter: 'asyncstorage'});

export default AppDatabase;

