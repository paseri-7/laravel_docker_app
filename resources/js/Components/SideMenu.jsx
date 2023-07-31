import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import axios from 'axios';

function SideMenu({ className = '', auth, children, ...props }) {
    const profileIcon = '/img/account.png';
    const homeIcon = '/img/home.png';
    const searchIcon = '/img/search.png';
    const logoutIcon = '/img/logout.png';
    const postIcon = '/img/post.png';

    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const [searchModalFlg, setSearchModalFlg] = useState(false);
    const [newPostFlg, setNewPostFlg] = useState(false);

    function handleTextChange (e) {
        setText(e.target.value);
    }

    // function handleImageChange (e) {
    //     const file = e.target.files[0];
    //     setImage(file);
    // }

    // function showSearchModal() {
    //     if(!searchModalFlg) {
    //         setSearchModalFlg(true);
    //     }else {
    //         setSearchModalFlg(false);
    //     }
    // }

    function showPostModal() {
        if(!newPostFlg) {
            setNewPostFlg(true);
        }else {
            setNewPostFlg(false);
        }
    }

    function handleSubmit() {
        if (!auth.user) {
            // ログインしていない場合のエラーハンドリング
            console.log("ログインしていません");
            return;
        }
        console.log('テキスト：', text);
        console.log('画像', image);
        // console.log('ID', auth.user.id);

        const formData = new FormData();
        formData.append('text', text);
        // formData.append('image', image);
        formData.append('id', auth.user.id);
        
        axios.post('/post', formData)
             .then((response) => {
                console.log('APIレスポンス：', response.data);
                // 投稿処理が成功した後に画面をリロード
                location.reload();

             })
             .catch((error) => {
                console.log('APIエラー：', error);
             });

        showPostModal();
    }

    return (
        <>
            <div className="w-1/4 h-screen border-r-2 p-10 sticky top-0 left-0">
                <div className="flex items-center">
                    {/* <Link href="/user" as="button"> */}
                        <img src={profileIcon} alt="example" />
                    {/* </Link> */}
                    {/* <p className="ml-4">{auth.user.name}</p> */}
                </div>
                <div className="mt-6 ml-4">
                    <ul className="space-y-1">
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link
                                href="/"
                                className="flex items-center"
                            >
                                <img
                                    src={homeIcon}
                                    className="w-10"
                                    alt="home"
                                />
                                <a className="ml-8">ホーム
                                </a>
                            </Link>
                        </li>
                        {/* <li className="block p-2 hover:bg-gray-200 rounded-md" onClick={() => showSearchModal()}>
                            <div className="flex items-center">
                                <img src={searchIcon} className="w-10" alt="search" />
                                <a className="ml-8">検索</a>
                            </div>
                        </li> */}
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link href={route("logout")} method="post" as="button" className="flex items-center">
                                <div className="flex items-center">  
                                    <img src={logoutIcon} className="w-10" alt="logout" />
                                    <a className="ml-8">ログアウト</a>
                                </div>
                                
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
            {/* <Modal show={searchModalFlg} maxWidth="sm" onClose={() => console.log('モーダルを閉じました。')}>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                    <p>モーダルの内容</p>
                    <button onClick={() => showSearchModal()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        ボタン
                    </button>
                </div>
            </Modal> */}
            <Modal show={newPostFlg} maxWidth="sm" onClose={() => showPostModal()}>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                    <div className="flex flex-col">
                        <label>本文</label>
                        <textarea id="post-text" value={text} rows={4} onChange={(e) => handleTextChange(e)} />
                    </div>
                    {/* <div>
                        <label>画像</label>
                        <input type="file" id="post-image" accept="image/*" onChange={(e) => handleImageChange(e)}></input>
                    </div> */}
                    <button onClick={() => handleSubmit()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        投稿
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default SideMenu;
