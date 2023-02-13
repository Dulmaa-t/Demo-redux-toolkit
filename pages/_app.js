import "../styles/globals.css";
import "swiper/css";
import { Provider } from 'react-redux'
import {store} from "../redux/store"
import Template from "../components/Template/Template.jsx"

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Template>
       <Component {...pageProps} />
    </Template>
    </Provider>
}

export default MyApp
