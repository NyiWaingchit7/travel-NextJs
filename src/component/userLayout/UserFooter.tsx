import { Box, Typography } from "@mui/material";
import { cates } from "./UserNavBar";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";

const UserFooter = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: 2,
        mt: 3,
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        {cates.map((d) => (
          <Link
            href={`${d.linkTag}`}
            key={d.id}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                m: 1,
                cursor: "pointer",
                "&:hover": { borderBottom: 1, borderColor: "info.main" },
                height: "20px",
              }}
            >
              <Typography
                align="center"
                sx={{
                  fontWeight: "bold",
                  color: "info.light",
                }}
              >
                {" "}
                {d.name}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          {footerIcons.map((d) => (
            <Box key={d.id} sx={{ m: 1, color: "info.light" }}>
              {d.icon}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", color: "info.light" }}
          >
            <LocalPhoneIcon sx={{ mx: 1, fontSize: "2rem" }} />
            <Box>
              <Typography>09123456789</Typography>
              <Typography>09123456789</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default UserFooter;
export const footerIcons = [
  {
    id: 1,
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    icon: <TelegramIcon />,
  },
  {
    id: 4,
    icon: <TwitterIcon />,
  },
];
