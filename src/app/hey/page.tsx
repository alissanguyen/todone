import { SignInWithGoogleButton } from '@/components/SignInWithButton/SignInWithGoogle'
import SignOutButton from '@/components/SignInWithButton/SignOutButton'
import { authOptions } from '@/lib/features/next-auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function Home() {
    const session = await getServerSession(authOptions)
    console.log(session)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session && session.user ? (<div>
        <p>Hey, ur logged in and ur name is {session.user.name}</p>
        <p>btw, ur cute</p>

        <hr></hr>
        <Image src={session.user.image || ''} width="40" height="40" alt=""/>
        <SignOutButton/>
      </div>) : (<SignInWithGoogleButton/>)}
    </main>
  )
}
