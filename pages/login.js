import Axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    function login() {
        Axios.post("/api/login").then((res) => {
        if (res.status === 200) {
            //로그인 성공
            router.push("/admin");
        }
        });
    }
    return (
        <div style={{ padding: "100px 0", textAlign: "center" }}>
        
            <p color="blue" onClick={login}>
            Login
            </p>
        </div>
    );
}