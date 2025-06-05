import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="min-h-[80vh] custom_header_p flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="w-full ">
          <div className="relative w-full h-[300px] lg:h-[500px] mx-auto floating z-10">
            <Image
              src="/images/notFound.svg"
              alt="404"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-xl text-gray-600 text-center md:text-center font-bold lg:text-start xl:text-start mb-6">
          {t("description")}
        </h4>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:opacity-90 transition">
          {t("goHome")}
        </Link>
      </div>
    </section>
  );
}
