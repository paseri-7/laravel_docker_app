import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import SideMenu from '@/Components/SideMenu';
import Content from '@/Components/Content';

function PostDetail({ className = '', children, ...props }) {

    const arrowIcon = '/img/arrow.png'
    const profileIcon = '/img/account.png'
    return(
        <>
            <div className="flex">
                <SideMenu></SideMenu>
                <div className="w-3/4">
                    <div>
                        <img src={arrowIcon} />
                    </div>
                    <div>
                        <Content></Content>
                    </div>
                    <div className="w-4/5 flex items-center border-b-1 justify-between">
                        <div className="w-10/12 flex items-center">
                            <img src={profileIcon} />
                            <input className="mx-8 h-8 w-full border border-blue-500 placeholder-blue-300 rounded-lg"
                             type="text" placeholder="コメントを入力">   
                             </input>
                        </div>
                        <button className="w-28 mr-4 text-white px-2 py-1 bg-blue-500 border border-blue-500 rounded-3xl">コメント</button> 
                    </div>
                    <div>
                        <Content></Content>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail
