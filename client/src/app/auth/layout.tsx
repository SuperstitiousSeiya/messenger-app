import { Button } from "@/components/ui/button";
import { MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center container top-0 fixed bg-background backdrop-blur-md backdrop-opacity-50">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MessageCircleIcon className="h-6 w-6" />
          <span className="sr-only">Messaging App</span>
        </Link>
      </header>
      {children}
    </div>
  );
}
