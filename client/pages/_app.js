import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const storages = () => store;

const reduxWrapper = createWrapper(storages)

export default reduxWrapper.withRedux(MyApp)
