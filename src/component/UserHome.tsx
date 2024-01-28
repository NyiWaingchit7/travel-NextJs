import { Box, Slide, Typography } from "@mui/material";

const UserHome = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1300px",
          mx: { xs: 2, lg: "auto" },
        }}
      >
        <Slide
          direction="left"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2000}
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
          </Box>
        </Slide>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2000}
        >
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
        </Slide>
      </Box>
    </Box>
  );
};
export default UserHome;
