import { AdminPanel } from "@/components/AdminPanel";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminProgramariPage() {
  return <AdminPanel />;
}
