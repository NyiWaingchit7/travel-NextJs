import { useAppDispatch } from "@/store/hook";
import { userAppData } from "@/store/slices/appSlice";
import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import UserNavBar from "./UserNavBar";
import UserFooter from "./UserFooter";
interface prop {
  children: ReactNode;
}

const UserLayout = ({ children }: prop) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userAppData());
  }, []);
  return (
    <Box>
      <UserNavBar />
      <Box sx={{ width: "100%" }}>{children}</Box>
      <UserFooter />
    </Box>
  );
};
export default UserLayout;
