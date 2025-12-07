"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {session.user && (
          <p className="mt-2 text-muted-foreground">
            Welcome, {session.user.name || session.user.email}
          </p>
        )}
      </div>
      <Button
        variant="outline"
        onClick={async () => {
          await signOut();
          router.push("/");
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
