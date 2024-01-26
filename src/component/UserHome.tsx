import { Box, Typography } from "@mui/material";

const UserHome = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1300px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            width: "30%",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "3rem",
                md: "4rem",
                fontWeight: "700",
              },
              fontFamily: "cursive",
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
            mt: 3,
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
            src="../cover.jpg"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default UserHome;
