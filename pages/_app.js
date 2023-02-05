import "../styles/globals.css";
import ChatwootWidget from '../components/ChatwootWidget'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
    <ChatwootWidget />
    <Component {...pageProps} key={router.asPath} />
    </>
  );
}
export default MyApp;
