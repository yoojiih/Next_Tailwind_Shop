// MyApp 컴포넌트에 props로 넘어온 Component & pageProps
// Component : props로 받은 현재 페이지를 의미 (페이지 전환시 이 컴포넌트 props가 변경됨)
// pageProps : data fetching 메소드를 통해 미리 가져온 초기 객체 -> 이 메소드를 사용하지 않는다면 ...pageProps 객체가 전달됨
import '../styles/globals.css'

import Nav from "../src/component/Nav";

import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {/* 메인 페이지에 Nav 컴포넌트 넣어줌 */}
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

//export default MyApp;
export default wrapper.withRedux(MyApp)

// wrapper의 withRedux HOC로 App컴포넌트를 감싸준다.
// 이제 각 페이지에서 getStaticProps, getServerSideProps 등의 함수 내에서 스토어 접근이 가능해진다.
// 작동을 확인하기 위해 다음과 같이 pages 디렉토리 내에 counter.js(counter.jsx)를 작성해보자.


// // import App from "next/app";
// //import type { AppProps /*, AppContext */ } from 'next/app'
// import App, { AppContext, AppProps } from "next/app";
// import axios from "../lib/api";
// import Header from "../components/Header";
// import GlobalStyle from "../styles/GlobalStyle";
// import { wrapper } from "../store";
// import { cookieStringToObject } from "../lib/utils";
// import { meAPI } from "../lib/api/auth";
// import { userActions } from "../store/user";
// //function MyApp({ Component, pageProps }: AppProps) {

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   return (
//     <>
//       <GlobalStyle />
//       <Header />
//       <Component {...pageProps} />
//       <div id="root-modal" />
//     </>
//   );
// };

// MyApp.getInitialProps = async (context: AppContext) => {
//   const appInitialProps = await App.getInitialProps(context);
//   const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
//   const { store } = context.ctx;
//   const { isLogged } = store.getState().user;
//   try {
//     if (!isLogged && cookieObject.access_token) {
//       axios.defaults.headers.cookie = cookieObject.access_token;
//       const { data } = await meAPI();
//       store.dispatch(userActions.setLoggedUser(data));
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
//   return { ...appInitialProps };
// };

// export default wrapper.withRedux(MyApp);
