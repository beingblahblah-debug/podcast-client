import { redirect } from "next/navigation";

export default function PublicationsIndexPage() {
  redirect("/profile#publications");
}
