// 장바구니에 있는 리스트 개수만큼 렌더링 map함수
// 각 제품마다 카운트 따로  id & value 
// 서버에서 pre-rendering을 한 후에 브라우저로 파일을 넘겨주기 때문에 
// metadata가 적용된 상태로 브라우저가 html파일을 받아볼 수 있게된다.
import Axios from "axios";
import ShoppingBag from "../src/component/ShoppingBag";

// 상품리스트르 화면에 보여주기 위해 ShoppingBag컴포넌트 생성해 list state를 넘겨줌
// process.env.apiURL 추가해줬기 때문에 list를 props로 받음
export default function Test({list}) {
    console.log(list);
    const {
        id,
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link,
    } = list;
    console.log(id);

    return (
        <div>
            <ShoppingBag list={list.slice(14, 77)} />
            {/* <ShoppingBag/> */}
        </div>
    );
}

export async function getStaticProps() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    //상품 리스트들 사용 시 res.data 이런식으로 뽑아와야함
    const data = res.data;
    // 뽑아온 리스트를 data변수에 저장후 list라는 이름으로 리턴
    return {
        props: {
        list: data,
        name: process.env.name,
        },
    };
}
// 1. res.data로 데이터들 뽑아와서 
// 2. id 추출 
// 3. 리덕스에 저장된 리스트의 아이디와 같은 id만 렌더링


// 아니면 리덕스에 저장시 이미지 아이디 전부 다 넣어주기