import { getCurrentUser } from "@cap/database/auth/session";
import { LogoBadge } from "@cap/ui";
import { redirect } from "next/navigation";
import { Onboarding } from "./Onboarding";

export default async function OnboardingPage() {
  const user = await getCurrentUser();

  if (
    user &&
    user.name &&
    user.name.length > 1 &&
    user.activeSpaceId &&
    user.activeSpaceId.length > 1
  ) {
    redirect("/dashboard");
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="overflow-hidden relative p-4 space-y-6 w-full max-w-lg sm:rounded-2xl">
        <a href="/">
          <LogoBadge className="mx-auto w-auto h-14" />
        </a>
        <div className="flex flex-col justify-center items-center space-y-1 text-center">
          <h1 className="text-3xl font-semibold">Let's get you started</h1>
          <p className="text-2xl text-gray-500">What's your name?</p>
        </div>
        <div className="flex flex-col space-y-3">
          <Onboarding user={user ?? null} />
        </div>
      </div>
    </div>
  );
}
