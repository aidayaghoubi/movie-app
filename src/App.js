
import './App.css';
import SearchMovie from './components/search/search';
import Router from './router/router';
import Header from './main/header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Header></Header>
    <Router></Router>
    </Provider>

  );
}

export default App;
