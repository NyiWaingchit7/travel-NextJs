import { Box, Typography } from "@mui/material";
interface Props {
  title?: string;
  href?: string;
  assetUrl?: string;
}
export default function UserLocationSectionCard({
  title,
  href,
  assetUrl,
}: Props) {
  return (
    <Box
      className="location-parent"
      sx={{ width: "40%", position: "relative" }}
    >
      {" "}
      <Box
        className="location-title"
        sx={{
          width: { xs: "fit-content", sm: "100%" },
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          left: "-49.25%",
          top: "28%",
          transform: "rotate(270deg)",
        }}
      >
        <Box
          className="locationtitle-bg"
          sx={{
            width: { xs: "130px", sm: "100%" },
            height: { xs: "35px", sm: "50px" },
            bgcolor: "success.main",
            opacity: 0.75,
            position: "absolute",
            borderRadius: "5px",
          }}
        ></Box>
        <Typography
          className="location-text"
          textAlign="center"
          sx={{
            fontSize: { xs: "0.65rem", sm: "0.8rem", md: "1rem" },
            fontWeight: "bold",
            color: "info.main",
            position: "absolute",
            mt: { sm: 1 },
            width: "100%",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "340px", md: "500px" },
          objectFit: "cover",
          borderBottom: "blue",
        }}
        component="img"
        src="/Yangon.jpg"
        className="location"
      />
    </Box>
  );
}
