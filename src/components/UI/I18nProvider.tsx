'use client';
import { useEffect } from "react";
import i18n from "@/i18n/config";

const STORAGE_KEY = "prd_lang";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // After hydration, switch to the user's saved language.
    // This runs client-only so it never causes a hydration mismatch.
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, []);

  return <>{children}</>;
}
