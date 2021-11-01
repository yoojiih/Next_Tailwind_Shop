import '../styles/globals.css'
import Nav from "../src/component/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
