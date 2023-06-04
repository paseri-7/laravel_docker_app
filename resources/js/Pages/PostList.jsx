import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import SideMenu from '@/Components/SideMenu';
import Content from '@/Components/Content';

function PostList({auth, posts, className = '', children, ...props}) {

    const [postInfoList, setPostInfoList] = useState(posts);

    console.log(postInfoList);
    console.log(auth);

    return(
        <>
            <div className="flex">
                <SideMenu auth={auth}></SideMenu>
                <div className="w-3/4">
                    {postInfoList.map((post, index) => (
                        <Content post={post} key={post.id}></Content>
                    ))}
                </div>
            </div>
        </>
    );

}

export default PostList
