import { Box } from "@mui/material";
import { ReactNode } from "react";
import AdminTopBar from "./AdminTopBar";
interface Prop {
  children: ReactNode;
}

const AdminLayout = ({ children }: Prop) => {
  return (
    <Box>
      <AdminTopBar />
      <Box>this admin layout</Box>
    </Box>
  );
};
export default AdminLayout;
