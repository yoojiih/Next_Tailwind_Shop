import Axios from "axios";
import { useRouter } from "next/router";

import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
    const router = useRouter();
    // 로그인 버튼 클릭
 
    // < 로그인으로 POST 날리기 >
    // 로그인 페이지에서 작업해 로그인 버튼 누르면 로그인 api쪽으로(pagex/api/login.js) POST를 날리는 거 구현
    // 이게 잘 동작하는지 보기 위해선 아무거나 입력하고 로그인 버튼을 누르면 로그인 되는걸로 만듦 (id나 비번체크같은 백엔드 작업은 건너뜀)

    // 1. Axios.post : POST Method로 날려줄거고 
    // 2. ("/api/login") 으로 날림
    // 3. res.status === 200 이면 로그인 성공으로 보고 admin 페이지로 날림
    function login() {
        Axios.post("/api/login").then((res) => {
        if (res.status === 200) {
            //로그인 성공
            router.push("/admin");
        }
        });
    }
    // 계정 없을 때 회원가입 페이지로 이동
    const changeToSignUpModal = () => {
        router.push("/signup");
    };

    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-900 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={login}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-gray-900 group-hover:text-gray-900" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
        </form>
        <p className="">
            계정이 없으신가요? 
        </p>
        <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              role="presentation"
              onClick={changeToSignUpModal}
            >
              간편가입하기
        </button>
      </div>
    </div>
    );
}


  
        // This example requires updating your template:

      
        // <html class="h-full bg-gray-50">
        // <body class="h-full">
