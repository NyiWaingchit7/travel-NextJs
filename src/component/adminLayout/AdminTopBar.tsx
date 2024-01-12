import { Box, Button, Drawer, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import AdminSideBar from "./AdminSideBar";

const AdminTopBar = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "secondary.dark",
          p: 1,
        }}
      >
        <Box sx={{ width: "60px" }}>
          <Box component="img" sx={{ width: "100%" }} src="../../tlogo.png" />
        </Box>
        <Box>
          <Typography
            sx={{ color: "info.light", fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Admin DashBoard
          </Typography>
        </Box>
        {data ? (
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                onClick={() => signOut({ callbackUrl: "/admin" })}
                color="success"
              >
                Log out
              </Button>
            </Box>
            <Box
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: "2rem",
                  color: "info.main",
                  display: { xs: "block", md: "none" },
                }}
              />
            </Box>
          </Box>
        ) : (
          <span></span>
        )}
      </Box>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            bgcolor: "secondary.dark",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={() => signOut({ callbackUrl: "/admin" })}
            color="success"
            sx={{ mt: 4 }}
          >
            Log out
          </Button>
          <AdminSideBar />
        </Box>
      </Drawer>
    </Box>
  );
};
export default AdminTopBar;
