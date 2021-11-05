import Head from 'next/head'
// metadata 처리
// import Head from 'next/head';

// <Head>
// <title>Main Page</title>
// </Head>

// 서버에서 pre-rendering을 한 후에 브라우저로 파일을 넘겨주기 때문에 
// metadata가 적용된 상태로 브라우저가 html파일을 받아볼 수 있게된다.


import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Axios from "axios";

import { useEffect, useState } from "react";
  
import ItemList from "../src/component/ItemList";

// 상품리스트르 화면에 보여주기 위해 Item List컴포넌트 생성해 list state를 넘겨줌
// process.env.apiURL 추가해줬기 때문에 list를 props로 받음
export default function Home({list}) {
  //const [list, setList] = useState({});

  // const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
	//const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData(){
	// 	Axios.get(API_URL)
	// 		.then((res) => {
  //       console.log("res.dataaaa",res.data);
  //       setList(res.data);
	// 	});
	// }
  // //useEffect HOOK: 진입 시 한번만 api 호출하기 위함
	// useEffect(()=>{
	// 	getData();
	// }, []);
  
  return (
    <div>
      <Head>
        <title>HOME | Jardin</title>
        <meta name="description" content="Jardin HOME" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* item List라는 컴포넌트를 index.js 에 넣어주고 list state는 list로 넘겨줌 (인자) */}
      <>
      <ItemList list={list.slice(14, 77)} />
      </>

    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}


// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// import Axios from "axios";

// import { useEffect, useState } from "react";
  
// import ItemList from "../src/component/ItemList";

// // 상품리스트르 화면에 보여주기 위해 Item List컴포넌트 생성해 list state를 넘겨줌
// export default function Home() {
//   const [list, setList] = useState({});

//   // const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
// 	const API_URL = process.env.NEXT_PUBLIC_API_URL;

//   function getData(){
// 		Axios.get(API_URL)
// 			.then((res) => {
//         console.log("res.dataaaa",res.data);
//         setList(res.data);
// 		});
// 	}
//   //useEffect HOOK: 진입 시 한번만 api 호출하기 위함
// 	useEffect(()=>{
// 		getData();
// 	}, []);