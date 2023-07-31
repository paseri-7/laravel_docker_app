import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        console.log(data.email);
        console.log(data.password);

        post(route("login"));
    };

    return (
        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && (
        //         <div className="mb-4 font-medium text-sm text-green-600">
        //             {status}
        //         </div>
        //     )}

        <form onSubmit={submit}>
            <div className="w-full h-screen flex flex-col">
                <div className="mx-auto my-auto w-1/2 text-center">
                    <h1 className="text-5xl font-bold text-blue-500">
                        Vwitter
                    </h1>
                    <p className="mt-4 text-2xl">
                        簡易掲示板へようこそ!!!
                    </p>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-1/2 rounded-xl"
                            placeholder="メールアドレス"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="w-1/2 rounded-xl"
                            placeholder="パスワード"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    {/* <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div> */}

                    <div className="flex items-center justify-center mt-4">
                        {/* {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )} */}
                        <div className="m-4">
                            <PrimaryButton disabled={processing} >
                                ログイン
                            </PrimaryButton>
                        </div>
                        <div className="m-4">
                            <Link href={route("register")} method="get">
                                <PrimaryButton disabled={false}>
                                    新規登録
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="mt-4">
                            <input
                                className="w-1/2 rounded-xl"
                                type="text"
                                placeholder="ユーザー名"
                            ></input>
                        </div> */}
                    {/* <div className="mt-4">
                            <input
                                className="w-1/2 rounded-xl"
                                type="text"
                                placeholder="パスワード"
                            ></input>
                        </div> */}
                    {/* <div className="mt-4">
                            <Link href={route("post_list")} method="get">
                                <PrimaryButton disabled={false}>
                                    ログイン
                                </PrimaryButton>
                            </Link>
                        </div>
                        <div className="mt-2">
                            <Link href={route("regist")} method="get">
                                <PrimaryButton disabled={false}>
                                    新規登録
                                </PrimaryButton>
                            </Link>
                        </div> */}
                </div>
            </div>
            {/* <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div> */}

            {/* <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div> */}

            {/* <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton> */}
            {/* </div> */}
        </form>
        // </GuestLayout>
    );
}
