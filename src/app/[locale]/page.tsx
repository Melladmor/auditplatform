import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations("auditTitle");
  const lang = await getLocale();

  return (
    <section className="relative xl:h-[80vh] lg:h-[80vh] md:h-full sm:h-full xs:h-full">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row xl:flex-row h-auto lg:h-[80vh] gap-10 !overflow-y-hidden">
         
          <div className="w-full flex items-center custom_padding justify-center lg:justify-start">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark leading-tight flex flex-wrap custom_align">
                {lang === "ar" && (
                  <p>
                    <span>{t("first")} </span>
                    <span className="text-primary">{t("second")} </span>
                    <span>{t("third")}</span>
                  </p>
                )}
                {(lang === "en" || lang === "fr") && (
                  <p>
                    <span className="text-primary">{t("second")} </span>
                    <span className="text-dark">{t("first")} </span>
                    <span className="text-dark">{t("third")}</span>
                  </p>
                )}
              </h1>

              <p className="text-xl text-gray-600 text-center md:text-center lg:text-start xl:text-start">
                {t("subTitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 justify-center lg:justify-start w-full">
                <Link
                  href="#"
                  className="flex items-center justify-center overflow-hidden rounded-md hover:opacity-90 transition w-full sm:w-[200px] h-[70px] app-button shine"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/appstore.svg"
                    alt="Download on the App Store"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </Link>

                <Link
                  href="#"
                  className="flex items-center justify-center overflow-hidden rounded-md hover:opacity-90 transition w-full sm:w-[200px] h-[70px] app-button shine"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/images/googleplay.svg"
                    alt="Get it on Google Play"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="relative w-full h-[300px] lg:h-full max-w-[400px] mx-auto floating z-10">
              <Image
                src="/images/mockup.svg"
                alt="App Mockup"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
