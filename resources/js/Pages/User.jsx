import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import SideMenu from '@/Components/SideMenu';

function User({ auth }) {
    return (
        <>
            <h1>ユーザー管理画面</h1>
            <SideMenu></SideMenu>
            <Modal show={false} maxWidth="sm" onClose={() => console.log('モーダルを閉じました。')}>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                    <p>モーダルの内容</p>
                    <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        ボタン
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default User