"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    // 从localStorage读取保存的语言设置
    const savedLanguage = localStorage.getItem("treasure-chamber-language") as Language
    if (savedLanguage && ["zh", "en", "ja", "ko"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      // 根据浏览器语言自动设置
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("en")) setLanguage("en")
      else if (browserLang.startsWith("ja")) setLanguage("ja")
      else if (browserLang.startsWith("ko")) setLanguage("ko")
      else setLanguage("zh")
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("treasure-chamber-language", lang)
  }

  const t = (key: string) => getTranslation(language, key)

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
