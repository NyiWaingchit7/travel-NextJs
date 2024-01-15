import { useRouter } from "next/router";
import AdminLayout from "../adminLayout/AdminLayout";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import UserLayout from "../userLayout/UserLayout";
interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  const router = useRouter();
  const isAdmin = router.pathname.includes("admin");
  const isUser = router.pathname.includes("user");

  if (isAdmin) {
    return (
      <AdminLayout>
        <Box>{children}</Box>
      </AdminLayout>
    );
  }
  if (isUser) {
    return (
      <UserLayout>
        <Box>{children}</Box>
      </UserLayout>
    );
  }
  return <Box>{children}</Box>;
};
export default Layout;
