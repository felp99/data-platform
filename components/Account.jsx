'use client';

import { Button } from '@/ui/Button/Button';

const { useSession, signIn } = require('next-auth/react');

function Account() {
  const { data: session } = useSession();

  if (session) {
    return (
      <p>{session.user.name}</p>
    );
  }

  return (
    <Button onClick={() => signIn()} label="Login" />
  );
}

export { Account };
