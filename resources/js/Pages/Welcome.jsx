import { Link, Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

function Login({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="w-full h-screen flex flex-col">
                <div className="mx-auto my-auto w-1/2 text-center">
                    <h1 className="text-5xl font-bold text-blue-500">
                        Vwitter
                    </h1>
                    <p className="mt-4 text-2xl">
                        Twitterのパクリアプリケーションへようこそ！
                    </p>
                    <div className="mt-4">
                        <input
                            className="w-1/2 rounded-xl"
                            type="text"
                            placeholder="ユーザー名"
                        ></input>
                    </div>
                    <div className="mt-4">
                        <input
                            className="w-1/2 rounded-xl"
                            type="text"
                            placeholder="パスワード"
                        ></input>
                    </div>
                    <div className="mt-4">
                        <Link href={route("post_list")} method="get">
                            <PrimaryButton disabled={false}>
                                ログイン
                            </PrimaryButton>
                        </Link>
                    </div>
                    <div className="mt-2">
                        <Link href={route("regist")} method="get">
                            <PrimaryButton disabled={false}>
                                新規登録
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
