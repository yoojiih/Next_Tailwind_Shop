// MyApp 컴포넌트에 props로 넘어온 Component & pageProps
// Component : props로 받은 현재 페이지를 의미 (페이지 전환시 이 컴포넌트 props가 변경됨)
// pageProps : data fetching 메소드를 통해 미리 가져온 초기 객체 -> 이 메소드를 사용하지 않는다면 ...pageProps 객체가 전달됨
import '../styles/globals.css'

import Nav from "../src/component/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {/* 메인 페이지에 Nav 컴포넌트 넣어줌 */}
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
