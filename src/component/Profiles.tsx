import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";

const Profiles = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        maxWidth: "100%",
        mt: 3,
      }}
    >
      {profiles.map((d) => (
        <Box sx={{ width: { xs: "90%", md: "45%" }, mt: 3 }}>
          <Box sx={{ width: { xs: "35%", sm: "30%", md: "25%" }, mx: "auto" }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 3,
              }}
              src="../nwc.jpg"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              mt: 1,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "25%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
              }}
            >
              Name
            </Typography>
            <Typography sx={{ width: "10px" }}>-</Typography>
            <Typography
              sx={{ width: "60%", fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              {d.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              mt: 1,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "25%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
              }}
            >
              Phone
            </Typography>
            <Typography sx={{ width: "10px" }}>-</Typography>
            <Typography
              sx={{ width: "60%", fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              {d.phone}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              mt: 1,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "25%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
              }}
            >
              Email
            </Typography>
            <Typography sx={{ width: "10px" }}>-</Typography>
            <Typography
              sx={{ width: "60%", fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              {d.emial}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              mt: 1,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "25%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
              }}
            >
              Address
            </Typography>
            <Typography sx={{ width: "10px" }}>-</Typography>
            <Typography
              sx={{ width: "60%", fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              {d.address}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              mt: 1,
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                width: "25%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
              }}
            >
              Skill
            </Typography>
            <Typography sx={{ width: "10px" }}>-</Typography>
            <Box
              sx={{
                width: "60%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {d.techStack.map((t) => (
                <Typography
                  sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                  key={t}
                >
                  {t},{" "}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: 2,
              mt: 1,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "25%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
              }}
            >
              Contact
            </Typography>
            <Typography sx={{ width: "10px" }}>-</Typography>
            <Box
              sx={{
                width: "60%",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {d.social.map((t) => (
                <Link
                  href={t.linkTag}
                  style={{ textDecoration: "none" }}
                  key={t.id}
                  target="_blink"
                >
                  <Typography
                    sx={{
                      color: "success.main",
                      mx: { xs: 0, sm: 1 },
                      fontWeight: "bold",
                      "&:hover": { color: "success.dark" },
                    }}
                  >
                    {t.icon}{" "}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default Profiles;

export const profiles = [
  {
    id: 1,
    image: "",
    name: "Kyaw Zin Thet",
    phone: "09790833940",
    emial: "kyawzinthett7@gmail.com",
    address: "Minbu",
    social: [
      {
        id: 1,
        icon: <FacebookIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />,
        linkTag: "https://www.facebook.com/Chit.24007",
      },
      {
        id: 2,
        icon: <InstagramIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />,
        linkTag: "https://www.instagram.com/nyiwaingchit/",
      },
      {
        id: 3,
        icon: <TelegramIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />,
        linkTag: "",
      },
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ReactJs",
      "NextJs",
      "ExpressJs",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
      "MaterialUI",
    ],
    description: "",
  },
  {
    id: 2,
    image: "../nwc.jpg",
    name: "Nyi Waing Chit",
    phone: "09757573132",
    emial: "nyiwaingchit5@gmail.com",
    address: "Myeik",
    social: [
      {
        id: 1,
        icon: <FacebookIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />,
        linkTag: "",
      },
      {
        id: 2,
        icon: <InstagramIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />,
        linkTag: "",
      },
      {
        id: 3,
        icon: <TelegramIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />,
        linkTag: "",
      },
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ReactJs",
      "NextJs",
      "ExpressJs",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
      "MaterialUI",
    ],
    description: "",
  },
];
