import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import AdminTopBar from "./AdminTopBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AdminSideBar from "./AdminSideBar";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { fetchAppData } from "@/store/slices/appSlice";
interface Prop {
  children: ReactNode;
}

const AdminLayout = ({ children }: Prop) => {
  const { data } = useSession();
  const { isReady, ...router } = useRouter();
  const dispatch = useAppDispatch();
  const { init } = useAppSelector((state) => state.app);
  useEffect(() => {
    if (data && !init) {
      localStorage.setItem("login", data?.user?.name as string);
      dispatch(fetchAppData());
    } else {
      const check = localStorage.getItem("login");
      if (!check) {
        router.push("/admin");
      }
    }
  }, [data, isReady]);

  return (
    <Box>
      <AdminTopBar />

      <Box sx={{ display: "flex" }}>
        {data && (
          <Box
            sx={{
              width: "25%",
              bgcolor: "secondary.dark",
              minHeight: "100vh",
              borderTopRightRadius: 5,
              display: { xs: "none", md: "block" },
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
