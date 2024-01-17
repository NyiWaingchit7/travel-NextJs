import { Box, Typography } from "@mui/material";

const UserHome = () => {
  return (
    <Box sx={{ bgcolor: "secondary.dark", minHeight: "100vh", width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={{ width: "30%" }}>
          <Box component="img" src="../cover.png" sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: "40%" }}></Box>
      </Box>
      <Box sx={{ width: "900px" }}>
        <Typography
          sx={{
            maxWidth: "500px",
            fontWeight: "bold",
            color: "success.main",
            bgcolor: "info.light",
            p: 1,
            borderRadius: 3,
            mt: 5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          architecto doloremque cumque saepe distinctio nam eaque a, nemo dolore
          minus earum iste, odit neque impedit. Rem atque enim quo mollitia. Sed
          soluta perspiciatis maiores nobis labore similique laudantium alias at
          magnam consequatur repellat modi architecto, natus corporis ab!
          Necessitatibus nisi similique, optio repellat doloremque nulla
          possimus veritatis quos dolor magni.
        </Typography>
      </Box>
    </Box>
  );
};
export default UserHome;
