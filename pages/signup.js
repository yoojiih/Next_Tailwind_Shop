import Axios from "axios";
import { useRouter } from "next/router";

import { LockClosedIcon } from '@heroicons/react/solid'

export default function Signup() {
    const router = useRouter();
    // 로그인 버튼 클릭
    function login() {
        Axios.post("/api/login").then((res) => {
        if (res.status === 200) {
            //회원가입 성공
            router.push("/login");
        }
        });
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Sign up</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                로그인에 사용할 Email 입력
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

                    <div className="col-span-6">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Password 입력
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


                <div>
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={login}
                    >
                    Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}
