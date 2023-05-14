import { Link, Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import SideMenu from "@/Components/SideMenu";
import { useState, useEffect } from "react";
import TextInput from "@/Components/TextInput";

function User({ auth }) {
    const profileIcon = "/img/account.png";
    // モーダル表示/非表示フラグ
    const [modalFlg, setModalFlg] = useState(false);
    const [activeTab, setActiveTab] = useState("posts");

    function showModal() {
        if (!modalFlg) {
            setModalFlg(true);
        } else {
            setModalFlg(false);
        }
    }

    return (
        <>
            <div className="flex">
                <SideMenu></SideMenu>
                <div className="w-3/4">
                    <h1 className="mt-10 text-3xl font-bold text-blue-500">
                        プロフィール編集
                    </h1>
                    <div className="w-3/4 my-auto flex flex-col justify-center">
                        <div className="flex items-center">
                            <img
                                src={profileIcon}
                                className="w-32 h-32"
                                alt="example"
                            />
                        </div>
                        <label htmlFor="">ユーザ名</label>
                        <input type="text" />
                        <label htmlFor="">パスワード</label>
                        <input type="password" name="" id="" />
                        <label htmlFor="">ひとこと</label>
                        <input type="textarea" />
                    </div>
                    <button onClick={() => showModal()}>変更を保存</button>
                    <Link href="/user">
                        <button>キャンセル</button>
                    </Link>
                </div>
            </div>

            <Modal
                show={modalFlg}
                maxWidth="sm"
                onClose={() => console.log("モーダルを閉じました。")}
            >
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">
                        モーダルのタイトル
                    </h3>
                    <p>モーダルの内容</p>
                    <button
                        onClick={() => showModal()}
                        className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        ボタン
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default User;
