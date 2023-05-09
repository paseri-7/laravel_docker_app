import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import {useImage} from 'react-image';

function SideMenu({ className = '', children, ...props }) {
    let { src } = useImage({
        srcList: '/img/account.png',
    })

    return (
        <>
            <div className="">
                <img src={src} alr="example" />
            </div>
        </>
    );
}

export default SideMenu
