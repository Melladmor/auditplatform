import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "./globals.css";
import Header from "@/components/ui/Header/Header";
import { Tajawal } from "next/font/google";
import { Toaster } from "react-hot-toast";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.layout");

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.svg",
    },
    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim()),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={tajawal.className}
      suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div>
            <Toaster position={locale === "ar" ? "top-left" : "top-right"} />
            <div className="absolute inset-0 z-[-999999] overflow-x-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary opacity-10"></div>
              <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-secondary opacity-10"></div>
              <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary opacity-5"></div>
            </div>
            <div className="pt-32 custom_header_p">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
