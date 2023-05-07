import { Head } from '@inertiajs/react';

export default function Regist({ auth, data }) {
    return (
        <>
            <div class="mx-10 mt-4">
                <h1>新規登録画面</h1>
                <p>{data.message}</p>
            </div>
        </>
    );
}
