import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const tronRedux = reactotronRedux();
const tronSaga = sagaPlugin();
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' && process.browser) {
  const tron = Reactotron.configure()
    .use(tronRedux)
    .use(tronSaga)
    .connect(); // let's connect!
  tron.clear();
  console.tron = tron;
};