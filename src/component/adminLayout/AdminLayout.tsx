import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import AdminTopBar from "./AdminTopBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AdminSideBar from "./AdminSideBar";
interface Prop {
  children: ReactNode;
}

const AdminLayout = ({ children }: Prop) => {
  const { data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!data) {
      router.push("/admin");
    }
  }, [data]);

  return (
    <Box>
      <AdminTopBar />

      <Box sx={{ display: "flex" }}>
        {data && (
          <Box
            sx={{
              width: "20%",
              bgcolor: "secondary.dark",
              minHeight: "100vh",
              borderTopRightRadius: 5,
            }}
          >
            <AdminSideBar />
          </Box>
        )}
        <Box sx={{ p: 3, width: "100%", height: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};
export default AdminLayout;
