export default (req, res) => {

    if (req.method === "POST") {
        res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
        res.statusCode = 200;
        // res.json({ name: null });
        res.json({ message: "ok" });
    }
};
// < 로그인으로 POST 날리기 >
// 로그인 창에서 버튼 누르면 POST로 id와 비번이 넘어오는걸 이때 `req.method`를 이용해 request method가 POST라면 ~하도록 구현
// api는 메소드별로 각각 다르게 작업 가능 (POST로만 동작함)

// setHeader로 Header 만들어 Set-Cookie를 해줌 
// 쿠키명 : `a_name` 값: `=Mike` Max-Age는 3600초(약 1시간)
// res.statusCode 는 200 으로 주고 message는 ok로 함


// < 로그인으로 POST 날리기 >
// 로그인 페이지에서 작업해 로그인 버튼 누르면 로그인 api쪽으로(pagex/api/login.js) POST를 날리는 거 구현
// 이게 잘 동작하는지 보기 위해선 아무거나 입력하고 로그인 버튼을 누르면 로그인 되는걸로 만듦 (id나 비번체크같은 백엔드 작업은 건너뜀)

// 1. Axios.post : POST Method로 날려줄거고 
// 2. ("/api/login") 으로 날림
// 3. res.status === 200 이면 로그인 성공으로 보고 admin 페이지로 날림