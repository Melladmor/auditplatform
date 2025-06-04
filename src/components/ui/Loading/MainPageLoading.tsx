"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const MainPageLoading = () => {
  const { theme } = useTheme();
  return (
    <div className="h-[100vh] w-full flex justify-center items-center pb-32">
      <div className="w-40 h-40 border-8 text-blue text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        {theme === "dark" ? (
          <Image
            src="/logos/auditlogo.svg"
            alt="Logo"
            className="w-28 h-28 animate-pulse"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src="/logos/auditlogoblack.svg"
            alt="Logo"
            className="w-28 h-28 animate-pulse"
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
};

export default MainPageLoading;
