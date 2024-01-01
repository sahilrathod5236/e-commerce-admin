import { redirect } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";

import { ThemeToggle } from "@/components/theme-toggle";
import prismadb from "@/lib/prismadb";

import { MainNav } from "./main-nav";
import { StoreSwitcher } from "./store-switcher";

export const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b flex px-2">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
