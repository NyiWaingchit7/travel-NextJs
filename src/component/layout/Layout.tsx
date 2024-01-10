import { useRouter } from "next/router";
import AdminLayout from "../adminLayout/AdminLayout";
import { Box } from "@mui/material";
import { ReactNode } from "react";
interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  const router = useRouter();
  const isAdmin = router.pathname.includes("admin");
  if (isAdmin) {
    return (
      <AdminLayout>
        <Box>{children}</Box>
      </AdminLayout>
    );
  }
  return <Box>{children}</Box>;
};
export default Layout;
