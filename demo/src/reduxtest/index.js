import store from "../store";
import { addArticle } from "../actions";

window.store = store;
window.addArticle = addArticle;

/*

store.getState()

store.subscribe(() => console.log('Look ma, Redux!!'))

store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )

store.getState()

*/