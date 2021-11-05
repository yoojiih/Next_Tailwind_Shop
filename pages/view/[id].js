// Dynamic Routes [].js 형태      SSR
// (특정 제품 클릭 시 각 id에 해당하는 상세페이지로 전환)
// view/ 뒤에 어떤 텍스트가 오든 pages/view/[id].js 페이지로 가게함  
// 사용 예) [id]를 통해서 url 얻어낸 다음에 const {id} = router.query 사용
//	const router = useRouter()
//	const { id } = router.query
//    return <p>Post: {id}</p>
//  -> post: 452 이런식으로 뜸

import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
    return (
        <>
        {item && (
            <>
            <Head>
                {/* item값 받아서 next/head 이용해 title & description 작성 시 
                    검색엔진(SEO)이나 공유 할 때 작성한 title과 description 정보들을 사용 가능
                    게다가 항상 최신상태를 유지하고 있으니 가격이나 판매상태등이 변경되어도 바로적용가능
                    but 요청횟수가 증가해 performance가 떨어짐 = SSR
                */}
                <title>{item.name}</title>
                <meta name="description" content={item.description}></meta>
            </Head>
            {/* 개발환경 입니다 */}
            {name} 환경 입니다.
            
            {/* item은 getServerSideProp메소드를 사용해 SSR로 불러들인거니 
            항상 최신 상태를 유지하고 있어 가격이나 판매 상태등이 변경되어도 바로 적용됨
            -> but 요청 횟수가 증가해 performance가 떨어짐 */}
            <Item item={item} />
            </>
        )}
        </>
    );
}

export default Post;


// SSR (서버사이드렌더링) -> 상세페이지 (SSG는 첫 페이지)
// getServerSideProps로 서버에서 데이터 가져오기

export async function getServerSideProps(context) {
    // context에는 params, 요청 & 응답 query등이 담겨있음
    // params에 있는 id를 받아옴 (id는 url맨 뒤에 붙는 상품 고유 번호를 의미) 
    const id = context.params.id;
    // id + url
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    // id + api GET 호출하고 받아온 응답값
    const res = await Axios.get(apiUrl);
    // 호출한 API data인 상품 리스트들 사용하려면 res.data 로 뽑아 data에 넣어줌
    const data = res.data;

// 환경변수 구분을 위해 props에 name 추가 (Post에서 파라미터로 받을 수 있게) name변수 공개처리
// 브라우저 환경이 아닌 서버에서 동작하기 때문에 윈도우 같은거 쓰면 에러 발생
// node js 환경은 getServerSideProps내부에서 사용하면 됨 
// node js 환경 : process.env.변수명
// 브라우저 환경 : process.env.Next_PUBLIC_변수명

//     id와 api를 호출하고 받아온 응답값을 data에 담았었는데 item에 다시 넣어 props로 넘겨줌
//     그럼 Post 컴포넌트 실행 시  item으로 받을 수 있음
    return {
        props: {
        item: data,
        name: process.env.name
        },
    };
}




//<환경변수> 브라우저 환경에 따라 .env.development & production 모드를 이름으로 구분해서 띄우기 위해 props에 name 추가
// const Post = ({ item, name }) => {
//     return (
//         <>
//         {item && (
//             <>
//             <Head>
//                 {/* item값 받아서 next/head 이용해 title & description 작성 시 
//                     검색엔진(SEO)이나 공유 할 때 작성한 title과 description 정보들을 사용 가능
//                     게다가 항상 최신상태를 유지하고 있으니 가격이나 판매상태등이 변경되어도 바로적용가능
//                     but 요청횟수가 증가해 performance가 떨어짐 = SSR
//                 */}
//                 <title>{item.name}</title>
//                 <meta name="description" content={item.description}></meta>
//             </Head>
//             {/* 개발환경 입니다 */}
//             {name} 환경 입니다.
            
//             {/* item은 getServerSideProp메소드를 사용해 SSR로 불러들인거니 
//             항상 최신 상태를 유지하고 있어 가격이나 판매 상태등이 변경되어도 바로 적용됨
//             -> but 요청 횟수가 증가해 performance가 떨어짐 */}
//             <Item item={item} />
//             </>
//         )}
//         </>
//     );
// };

// export default Post;

