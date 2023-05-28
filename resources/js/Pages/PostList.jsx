import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import SideMenu from '@/Components/SideMenu';
import Content from '@/Components/Content';

function PostList({auth, className = '', children, ...props}) {

    const [postInfoList, setPostInfoList] = useState({});

    return(
        <>
            <div className="flex">
                <SideMenu></SideMenu>
                <div className="w-3/4">
                    <p>おかえりなさい。{auth.user.name}さん</p>
                    <Content post={postInfoList}></Content>
                    <Content post={postInfoList}></Content>
                </div>
            </div>
        </>
    );

}

export default PostList
