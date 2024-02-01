import { Box, Typography } from "@mui/material";
import Link from "next/link";
interface Props {
  title: string;
  href: string;
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
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          left: "-49.25%",
          top: "40%",
          transform: "rotate(270deg)",
          bgcolor: "red",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            className="location-text"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.8rem", md: "1rem" },
              fontWeight: "bold",
              color: "info.main",
              position: { xs: "static", sm: "absolute" },
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Link style={{ textDecoration: "none" }} href={href}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "340px", md: "500px" },
            objectFit: "cover",
            borderBottom: "blue",
          }}
          component="img"
          src={assetUrl ? assetUrl : "/Yangon.jpg "}
          className="location"
        />
      </Link>
    </Box>
  );
}
