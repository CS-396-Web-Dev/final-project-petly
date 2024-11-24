import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "New User",
  description: "New User",
};

export default function NewUserLayout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
