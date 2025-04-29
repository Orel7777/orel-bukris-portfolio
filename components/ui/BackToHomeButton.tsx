import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/providers/language-provider";

interface BackToHomeButtonProps {
  className?: string;
}

export default function BackToHomeButton({ className }: BackToHomeButtonProps) {
  const { t } = useLanguage();
  
  return (
    <Link
      href="/"
      className={
        className ||
        "inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
      }
    >
      {t('navigation.backToSite')}
    </Link>
  );
}
