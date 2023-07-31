import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';

function Content({ className = '',auth, post, children, ...props }) {

    const profileIcon = '/img/account.png';
    // const profileIcon = post.profile_image;
    // const postImage = post.post_image;
    const nonLikeIcon = '/img/heart.png';
    const likedIcon = '/img/liked.png';
    const commentIcon = '/img/comment.png';
    const trashIcon = '/img/icon_trash_.png';
    const reloadIcon = '/img/icon_reload_.png';

    const createdAt = new Date(post.created_at);

    // const [newPostFlg, setNewPostFlg] = useState(false);

    // モーダルの本文を管理するためのuseStateフック
    // const [modalText, setModalText] = useState('');

    // function handleTextChange (e) {
    //     setText(e.target.value);
    // }

    // function showEditModal(post) {
    //     if(!newPostFlg) {
    //         setNewPostFlg(true);
    //     }else {
    //         setNewPostFlg(false);
    //     }
    //     setModalText(post.text);
    //     setEditModalFlg(true);
    // }

    // function handleSubmit() {
    //     if (!auth.user) {
    //         // ログインしていない場合のエラーハンドリング
    //         console.log("ログインしていません");
    //         return;
    //     }
    //     console.log('テキスト：', text);
    //     console.log('画像', image);
    //     // console.log('ID', auth.user.id);

    //     const formData = new FormData();
    //     formData.append('text', text);
    //     // formData.append('image', image);
    //     formData.append('id', auth.user.id);
        
    //     axios.post('/post', formData)
    //          .then((response) => {
    //             console.log('APIレスポンス：', response.data);
    //             // 投稿処理が成功した後に画面をリロード
    //             location.reload();

    //          })
    //          .catch((error) => {
    //             console.log('APIエラー：', error);
    //          });

    //     showPostModal();
    // }
    return(
        <>
            {/* <Link href="/detail"> */}
                <div className="w-4/5 py-12 border-y-2">
                    <div className="mx-20 flex justify-between">
                        <div className="flex items-center">
                            <img src={profileIcon} className="w-12 h-12" alt="example" />
                            <p className="ml-4 text-lg">{auth.user.name}さん</p>
                        </div>
                        <div className="flex self-center">
                            <p>{createdAt.toDateString()}</p>
                        </div>
                    </div>
                    <div className="mt-8 mx-32 flex justify-between">
                        <p>{post.text}</p>
                        <div className="flex self-center">
                            <button>
                                <img src={reloadIcon} className="w-7 h-7 ml-4 mr-4" alt="example" />
                            </button>
                            <button>
                                <img src={trashIcon} className="w-7 h-7 " alt="example" />
                            </button>
                        </div>
                        {/* <img className="mt-8" src={postImage} alt="postImage" /> */}
                    </div>
                    
                    {/* コメント数/いいね
                        <div className="mt-8 mx-32 flex items-center">
                        <img className="ml-4 h-8 w-8" src={commentIcon} alt="" /><span>2</span>
                        <img className="ml-8 h-8 w-8" src={nonLikeIcon} alt="" /><span>1</span>
                    </div> */}
                </div>

                {/* 更新モーダル  */}
                {/* <Modal show={newPostFlg} maxWidth="sm" onClose={() => showEditModal()}>
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                        <div className="flex flex-col">
                            <label>本文</label>
                            <textarea id="post-text" value={text} rows={4} onChange={(e) => handleTextChange(e)} />
                        </div>
                        <button onClick={() => handleSubmit()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            投稿
                        </button>
                    </div>
                </Modal> */}

                {/* 削除モーダル */}
                {/* <Modal show={newPostFlg} maxWidth="sm" onClose={() => showPostModal()}>
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">モーダルのタイトル</h3>
                        <div className="flex flex-col">
                            <label>本文</label>
                            <textarea id="post-text" value={text} rows={4} onChange={(e) => handleTextChange(e)} />
                        </div>
                        <button onClick={() => handleSubmit()} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            投稿
                        </button>
                    </div>
                </Modal> */}
            {/* </Link> */}
        </>
    )
}

export default Content
