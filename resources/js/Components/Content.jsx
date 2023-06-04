import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';

function Content({ className = '', post, children, ...props }) {

    // const profileIcon = '/img/account.png';
    const profileIcon = post.profile_image;
    const postImage = post.post_image;
    // const nonLikeIcon = '/img/heart.png';
    // const likedIcon = '/img/liked.png';
    // const commentIcon = '/img/comment.png';

    const createdAt = new Date(post.created_at);

    return(
        <>
            <Link href="/detail">
                <div className="w-4/5 py-12 border-y-2">
                    <div className="mx-20 flex justify-between">
                        <div className="flex items-center">
                            <img src={profileIcon} className="w-12 h-12" alt="example" />
                            <p className="ml-4 text-lg">{post.name}</p>
                        </div>
                        <div className="flex self-center">
                            <p>{createdAt.toDateString()}</p>
                        </div>
                    </div>
                    <div className="mt-8 mx-32">
                        <p>
                            {post.text}
                        </p>
                        <img className="mt-8" src={postImage} alt="postImage" />
                    </div>
                    
                    {/* コメント数/いいね
                        <div className="mt-8 mx-32 flex items-center">
                        <img className="ml-4 h-8 w-8" src={commentIcon} alt="" /><span>2</span>
                        <img className="ml-8 h-8 w-8" src={nonLikeIcon} alt="" /><span>1</span>
                    </div> */}
                </div>
            </Link>
        </>
    )
}

export default Content
