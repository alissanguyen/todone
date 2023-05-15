'use client'
import { signOut } from 'next-auth/react';
import * as React from 'react';

interface Props {

}

const SignOutButton: React.FC<Props> = ({ }) => {
    return (
        <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 disabled:animate-pulse"
            onClick={() => signOut()}
        >
            Log out
        </button>
    )
}

export default SignOutButton