import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import SideMenu from '@/Components/SideMenu';
import { useState, useEffect } from 'react';
import Content from '@/Components/Content';

function User({ auth }) {

    const profileIcon = '/img/account.png';
    // モーダル表示/非表示フラグ
    const [modalFlg, setModalFlg] = useState(false);
    const [activeTab, setActiveTab] = useState('posts');

    function showModal() {
        if(!modalFlg) {
            setModalFlg(true);
        }else {
            setModalFlg(false);
        }
    }

    return (
        <>
            <div className="flex">
                <SideMenu></SideMenu>
                <div className="w-3/4">
                    <div className="w-3/4 mx-auto">
                        <div className="flex justify-between h-36">
                            <div className="flex items-center">
                                <img src={profileIcon} className="w-32 h-32" alt="example" />
                                <p className="ml-12 text-2xl">本間由樹</p>
                            </div>
                            <div className="flex items-center mr-20">
                                <button className="tracking-widest scale-x-110 text-lg text-blue-500 px-4 h-12 border border-blue-500 rounded-3xl">
                                    プロフィールを編集
                                </button>
                            </div>
                        </div>
                        <div className="w-3/4 ml-20 mt-4">
                            <p className="">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </p>
                        </div>
                    </div>
                    <div className="mt-20 mb-10 w-1/2 mx-auto flex justify-between">
                        <div className={`${activeTab === 'likes' ? 'border-b-2 border-blue-500' : ''}`}>
                            <button onClick={() => setActiveTab('likes')}>自分の投稿</button>
                        </div>
                        <div className={`mr-12 ${activeTab === 'posts' ? 'border-b-2 border-blue-500' : ''}`}>
                            <button onClick={() => setActiveTab('posts')}>いいね一覧</button>
                        </div>
                    </div>
                    <Content></Content>
                    <Content></Content>
                    <Content></Content>
                </div>
            </div>

            {/* <button onClick={() => showModal()}>
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
            </Modal> */}
        </>
    );
}

export default User