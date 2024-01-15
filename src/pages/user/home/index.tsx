import { Box, Typography } from "@mui/material";

const UserHome = () => {
  return (
    <Box sx={{ bgcolor: "secondary.dark", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "30%" }}>
          <Box component="img" src="../cover.png" sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: "30%" }}>
          <Typography
            sx={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "info.light",
            }}
          >
            Explore Beautiful and Wonderful Places
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default UserHome;
