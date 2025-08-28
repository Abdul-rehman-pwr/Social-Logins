"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientRedirector() {
  const router = useRouter();
  const defaultLocale = "en";

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const session = await res.json();

        if (session?.user) {
          router.replace(`/${defaultLocale}/news`);
        } else {
          router.replace(`/${defaultLocale}`);
        }
      } catch (e) {
        router.replace(`/${defaultLocale}`);
      }
    };

    checkSession();
  }, [router]);

  return null;
}
