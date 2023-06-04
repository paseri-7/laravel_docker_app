import { Link, Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Regist() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        console.log(data.name);
        console.log(data.password);

        post(route('regist'));
    }

    // 新規登録ボタン押下時の処理
    // const handleRegist = () => {

    //     console.log(username);
    //     console.log(password);

    //     // APIリクエスト送信
    //     axios.post('/regist', { username, password })
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    // }

    return (
        <>
            <div className="w-full h-screen flex flex-col">
                <div className="mx-auto my-auto w-1/2 text-center">
                <h1 className="text-5xl font-bold text-blue-500">Vwitter</h1>
                    <p className="mt-4 text-2xl">Twitterのパクリアプリケーションへようこそ！</p>
                    <div className="mt-4">
                        <input id="name" name="name" value={data.name}
                        className="w-1/2 rounded-xl" type="text" placeholder="ユーザー名" 
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)} required>                            
                        </input>
                    </div>
                    <div className="mt-4">
                        <input id="password" name="password" value={data.password}
                        className="w-1/2 rounded-xl" type="text" placeholder="パスワード" 
                        autoComplete="password" 
                        onChange={(e) => setData('password', e.target.value)} required>
                        </input>
                    </div>
                    <div className="mt-4">
                            <PrimaryButton disabled={false} onClick={() => submit()}>
                                新規登録
                            </PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}
