import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/path" },
};

export default function AboutRedirectPage() {
  redirect("/path");
}
