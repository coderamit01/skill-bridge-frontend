"use client";
import { LoginForm } from "@/components/authentication/login-form";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const { data: session, isPending } = authClient.useSession();
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}
