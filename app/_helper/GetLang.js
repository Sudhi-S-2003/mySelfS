//GetLang.js
"use client";

import { useSearchParams } from 'next/navigation';

export default function GetLang() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang'); // Retrieve the lang query parameter

  return lang;
}
