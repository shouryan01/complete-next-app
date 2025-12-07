"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {session?.user && (
          <p className="mt-2 text-muted-foreground">
            Welcome, {session.user.name || session.user.email}
          </p>
        )}
      </div>
      <Button
        variant="outline"
        onClick={async () => {
          await signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
