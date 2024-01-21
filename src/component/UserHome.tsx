import { Box, Typography } from "@mui/material";

const UserHome = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1300px",
          mx: "auto",
        }}
      >
        <Box sx={{ width: "25%", mt: 3 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "3rem",
                md: "4rem",
                fontWeight: "bold",
              },
              mx: 2,
            }}
          >
            Explore Beautiful World
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            width: { xs: "150px", sm: "200px", md: "300px" },
            height: { xs: "150px", sm: "200px", md: "300px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            component="img"
            src="../userLogo.png"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default UserHome;
