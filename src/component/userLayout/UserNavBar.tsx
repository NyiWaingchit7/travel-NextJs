import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import UserDrawer from "./UserDrawer";

const UserNavBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        bgcolor: "secondary.dark",
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      <Box>
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
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cates.map((d) => (
                <Link
                  scroll={false}
                  href={`${d.linkTag}`}
                  key={d.id}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      mx: 2,
                      cursor: "pointer",
                      "&:hover": { borderBottom: 2, borderColor: "info.main" },
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
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
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
          <Box
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon
              sx={{
                fontSize: "2rem",
                color: "info.main",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            bgcolor: "secondary.dark",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <UserDrawer />
        </Box>
      </Drawer>
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
