import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';
import Modal from '@/Components/Modal';
import { useState } from 'react';

function SideMenu({ className = '', children, ...props }) {
    const profileIcon = '/img/account.png';
    const homeIcon = '/img/home.png';
    const searchIcon = '/img/search.png';
    const logoutIcon = '/img/logout.png';
    const postIcon = '/img/post.png';

    const [searchModalFlg, setSearchModalFlg] = useState(false);
    const [newPostFlg, setNewPostFlg] = useState(false);

    function showSearchModal() {
        if(!searchModalFlg) {
            setSearchModalFlg(true);
        }else {
            setSearchModalFlg(false);
        }
    }

    function showPostModal() {
        if(!newPostFlg) {
            setNewPostFlg(true);
        }else {
            setNewPostFlg(false);
        }
    }

    return (
        <>
            <div className="w-1/4 h-screen border-r-2 p-10 sticky top-0 left-0">
                <div className="flex items-center">
                    <img src={profileIcon} alt="example" /><p className="ml-4">本間由樹</p>
                </div>
                <div className="mt-6 ml-4">
                    <ul className="space-y-1">
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link href="/" className="flex items-center">
                                <img src={homeIcon} className="w-10" alt="home" />
                                <a className="ml-8">ホーム</a>
                            </Link>
                        </li>
                        <li className="block p-2 hover:bg-gray-200 rounded-md" onClick={() => showSearchModal()}>
                            <div className="flex items-center">
                                <img src={searchIcon} className="w-10" alt="search" />
                                <a className="ml-8">検索</a>
                            </div>
                        </li>
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link href="/" className="flex items-center">
                                <img src={logoutIcon} className="w-10" alt="logout" />
                                <a className="ml-8">ログアウト</a>
                            </Link>
                        </li>
                        <li className="block p-2 hover:bg-gray-200 rounded-md" onClick={() => showPostModal()}>
                            <div href="/new-post" className="flex items-center">
                                <img src={postIcon} className="w-10" alt="post" />
                                <a className="ml-8">新規投稿</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal show={searchModalFlg} maxWidth="sm" onClose={() => console.log('モーダルを閉じました。')}>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                    <p>モーダルの内容</p>
                    <button onClick={() => showSearchModal()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        ボタン
                    </button>
                </div>
            </Modal>
            <Modal show={newPostFlg} maxWidth="sm" onClose={() => console.log('モーダルを閉じました。')}>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                    <p>モーダルの内容</p>
                    <button onClick={() => showPostModal()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        ボタン
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default SideMenu
