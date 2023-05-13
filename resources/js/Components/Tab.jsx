import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

function Tab() {
    const [activeTab, setActiveTab] = useState('posts');
    
    return (
        <>
            <div className="mt-20 w-1/2 mx-auto flex justify-between">
                <div className={`${activeTab === 'likes' ? 'border-b-2 border-blue-500' : ''}`}>
                    <button onClick={() => setActiveTab('likes')}>自分の投稿</button>
                </div>
                <div className={`mr-12 ${activeTab === 'posts' ? 'border-b-2 border-blue-500' : ''}`}>
                    <button onClick={() => setActiveTab('posts')}>いいね一覧</button>
                </div>
            </div>
        </>
    );
}

export default Tab;