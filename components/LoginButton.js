// components/LoginButton.js
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.email}</p>
        <button
          onClick={() => {
            signOut();
            router.push('/');
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={async () => {
        await signIn('google', { callbackUrl: '/upload' });
      }}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Sign in with Google
    </button>
  );
}

