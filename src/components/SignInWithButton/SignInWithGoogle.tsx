'use client'
import { signIn } from "next-auth/react"
import SignInWithGoogleIcon from "../../../public/sign-in-with-google-light-enabled.svg"
import Image from "next/image"

export function SignInWithGoogleButton() {
    return (
        <button
            className="flex w-full items-center justify-start gap-3 rounded-md bg-white px-3 py-1.5 text-white drop-shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] disabled:animate-pulse"
            onClick={() => {signIn('google')}}
        >
            <Image alt="" height={20} width={20} src={SignInWithGoogleIcon}></Image>
            <span className="text-sm font-semibold leading-6 text-black">
                Sign in with Google
            </span>
        </button>
    )
}