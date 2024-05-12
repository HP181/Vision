import { UserButton} from "@clerk/nextjs";

import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser;

  if (!user) {
    return <SignIn />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <UserButton userProfileMode="modal" afterSignOutUrl="/"/>
 
    </main>
  );
}
