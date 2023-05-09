import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';

function SideMenu({ className = '', children, ...props }) {
    let { src } = useImage({
        srcList: '/img/account.png',
    })

    return (
        <>
            <div className="flex items-center">
                <img src={src} alr="example" /><p>本間由樹</p>
            </div>
        </>
    );
}

export default SideMenu
