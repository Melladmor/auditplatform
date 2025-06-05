import Breadcrumb from "@/components/ui/BreadCrump/BreadCrump";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.pages.contact");
  return {
    title: t("title"),
  };
}
export default async function ContactPage() {
  const t = await getTranslations("contactPage");
  const title = await getTranslations();
  const data = await fetchPublicData({ url: "settings" });
  return (
    <div>
      <div>
        <Breadcrumb
          title={title("navbarlinks.contactus")}
          items={[
            { label: title("navbarlinks.home"), href: "/" },
            {
              label: title("navbarlinks.contactus"),
              href: "/contact",
            },
          ]}
        />
      </div>
      <section className="relative min-h-[70vh] mb-4">
        <div className=" relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 mt-10">
            <div className="w-full lg:w-[60%]">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-dark">
                  {t("sendMessage")}
                </h2>

                <ContactForm />
              </div>
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="bg-white h-full rounded-3xl p-6 sm:p-8 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-dark">
                  {t("getInTouch")}
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      ),
                      title: t("phoneTitle"),
                      value: data?.whatsapp_business,
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      ),
                      title: t("emailTitle"),
                      value: data?.email,
                    },
                    {
                      icon: (
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </>
                      ),
                      title: t("addressTitle"),
                      value: (
                        <>
                          <strong>{t("dubai")}</strong>: {data?.head_quarters}
                          <br />
                          <strong>{t("oman")}</strong>: {data?.our_branches}
                          <br />
                        </>
                      ),
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {t("followUs")}
                    </h3>
                    <div className="flex gap-4">
                      {["facebook", "instagram", "linkedin"].map(
                        (network, index) => (
                          <Link
                            href={data?.[network] || "#"}
                            target="_blank"
                            key={index}
                            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition">
                            <svg
                              className="h-6 w-6 text-primary"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              dangerouslySetInnerHTML={{
                                __html: getSocialIcon(network),
                              }}
                            />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function getSocialIcon(network: string) {
  switch (network) {
    case "facebook":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 16 16">
        <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"/>
      </svg>`;

    case "instagram":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M 8 3 C 5.2504839 3 3 5.2504839 3 8 L 3 16 C 3 18.749516 5.2504839 21 8 21 L 16 21 C 18.749516 21 21 18.749516 21 16 L 21 8 C 21 5.2504839 18.749516 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.668484 5 19 6.3315161 19 8 L 19 16 C 19 17.668484 17.668484 19 16 19 L 8 19 C 6.3315161 19 5 17.668484 5 16 L 5 8 C 5 6.3315161 6.3315161 5 8 5 z M 17 6 A 1 1 0 0 0 17 8 A 1 1 0 0 0 17 6 z M 12 7 C 10.416667 7 9.1018922 7.6297556 8.2519531 8.5859375 C 7.402014 9.5421194 7 10.777778 7 12 C 7 13.222222 7.402014 14.457881 8.2519531 15.414062 C 9.1018922 16.370244 10.416667 17 12 17 C 13.583333 17 14.898108 16.370244 15.748047 15.414062 C 16.597986 14.457882 17 13.222222 17 12 C 17 10.777778 16.597986 9.5421194 15.748047 8.5859375 C 14.898108 7.6297556 13.583333 7 12 7 z M 12 9 C 13.083333 9 13.768559 9.3702444 14.251953 9.9140625 C 14.735347 10.457881 15 11.222222 15 12 C 15 12.777778 14.735347 13.542119 14.251953 14.085938 C 13.768559 14.629755 13.083333 15 12 15 C 10.916667 15 10.231441 14.629756 9.7480469 14.085938 C 9.2646532 13.542118 9 12.777778 9 12 C 9 11.222222 9.2646532 10.457881 9.7480469 9.9140625 C 10.231441 9.3702444 10.916667 9 12 9 z"/>
      </svg>`;

    case "linkedin":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.452 20.452h-3.554v-5.568c0-1.327-.028-3.037-1.851-3.037-1.852 0-2.136 1.446-2.136 2.939v5.666H9.357V9h3.414v1.561h.05c.476-.899 1.637-1.848 3.368-1.848 3.6 0 4.265 2.37 4.265 5.451v6.288zM5.337 7.433c-1.144 0-2.067-.928-2.067-2.067a2.067 2.067 0 114.134 0c0 1.14-.926 2.067-2.067 2.067zM6.913 20.452H3.762V9h3.151v11.452z"/>
      </svg>`;

    default:
      return "";
  }
}
