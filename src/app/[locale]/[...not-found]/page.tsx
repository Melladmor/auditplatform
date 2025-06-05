import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound(); // This will now trigger your app/[locale]/not-found.tsx
}
