import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import SideMenu from '@/Components/SideMenu';
import { useState, useEffect } from 'react';

function User({ auth }) {
    // モーダル表示/非表示フラグ
    const [modalFlg, setModalFlg] = useState(false);

    function showModal() {
        if(!modalFlg) {
            setModalFlg(true);
        }else {
            setModalFlg(false);
        }
    }

    return (
        <>
            <h1>ユーザー管理画面</h1>
            <SideMenu></SideMenu>
            <button onClick={() => showModal()}>
                Show Modal
            </button>
            <Modal show={modalFlg} maxWidth="sm" onClose={() => console.log('モーダルを閉じました。')}>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                    <p>モーダルの内容</p>
                    <button onClick={() => showModal()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        ボタン
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default User