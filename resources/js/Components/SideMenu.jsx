import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';

function SideMenu({ className = '', children, ...props }) {
    let { src } = useImage({
        srcList:[
            '/img/account.png',
            '/img/vwitter.png',
        ] 
    })
    const profileIcon = '/img/account.png';
    const homeIcon = '/img/home.png';
    const searchIcon = '/img/search.png';
    const logoutIcon = '/img/logout.png';
    const postIcon = '/img/post.png';

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
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link href="/search" className="flex items-center">
                                <img src={searchIcon} className="w-10" alt="search" />
                                <a className="ml-8">検索</a>
                            </Link>
                        </li>
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link href="/logout" className="flex items-center">
                                <img src={logoutIcon} className="w-10" alt="logout" />
                                <a className="ml-8">ログアウト</a>
                            </Link>
                        </li>
                        <li className="block p-2 hover:bg-gray-200 rounded-md">
                            <Link href="/new-post" className="flex items-center">
                                <img src={postIcon} className="w-10" alt="post" />
                                <a className="ml-8">新規投稿</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideMenu
