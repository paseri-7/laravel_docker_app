import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="w-full flex flex-col">
                <div className="mx-auto w-1/2 text-center">
                <h1 className="text-4xl font-bold text-blue-500">Vwitter</h1>
                    <div className="mt-2">
                        <input className="w-full" type="text" placeholder="ユーザー名"></input>
                    </div>
                    <div className="mt-2">
                        <input className="w-full" type="text" placeholder="パスワード"></input>
                    </div>
                    <div className="mt-2">
                        <Link href={route('regist')} method="get">
                            <PrimaryButton disabled={false}>
                                ログイン
                            </PrimaryButton>
                        </Link>
                    </div>
                    <div className="mt-2">
                        <Link href={route('regist')} method="get">
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

export default Welcome