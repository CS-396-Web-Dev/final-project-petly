import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "Home",
  description: "Home",
};

export default function HomeLayout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
