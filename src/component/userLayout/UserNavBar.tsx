import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/router";

const UserNavBar = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        px: { md: 8 },
        bgcolor: "secondary.dark",
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "70px" }}>
          <Box component="img" src="../userLogo.png" sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cates.map((d) => (
            <Link href={`${d.linkTag}`} style={{ textDecoration: "none" }}>
              <Box
                key={d.id}
                sx={{
                  mx: 2,
                  cursor: "pointer",
                  "&:hover": { borderBottom: 2, borderColor: "info.main" },
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "info.light" }}>
                  {" "}
                  {d.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
        <Box>
          <TextField
            sx={{
              bgcolor: "info.main",
              mx: 1,
              borderRadius: 2,
            }}
            size="small"
            placeholder={`Search .... `}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "success.main" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default UserNavBar;
export const cates = [
  {
    id: 1,
    name: "Home",
    linkTag: "/user/home",
  },
  {
    id: 2,
    name: "Cities",
    linkTag: "/user/city",
  },
  {
    id: 3,
    name: "About Us",
    linkTag: "",
  },
  {
    id: 4,
    name: "Contact Us",
    linkTag: "",
  },
];
