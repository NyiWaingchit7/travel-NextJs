import { Box, Button, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";

const AdminTopBar = () => {
  const { data } = useSession();
  return (
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
        <Box component="img" sx={{ width: "100%" }} src="../tlogo.png" />
      </Box>
      <Box>
        <Typography
          sx={{ color: "info.light", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Admin DashBoard
        </Typography>
      </Box>
      {data ? (
        <Box>
          <Button
            variant="contained"
            onClick={() => signOut({ callbackUrl: "/admin" })}
            color="success"
          >
            Log out
          </Button>
        </Box>
      ) : (
        <span></span>
      )}
    </Box>
  );
};
export default AdminTopBar;
