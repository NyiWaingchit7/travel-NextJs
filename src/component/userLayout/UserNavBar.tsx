import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";

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
          <Zoom
            in={true}
            style={{
              transitionDelay: "1000ms",
              transitionDuration: "1000ms",
            }}
          >
            <Box sx={{ width: "70px" }}>
              <Box component="img" src="/userLogo.png" sx={{ width: "100%" }} />
            </Box>
          </Zoom>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cates.map((d) => (
                <Zoom
                  key={d.id}
                  in={true}
                  style={{
                    transitionDelay: "1000ms",
                    transitionDuration: "1000ms",
                  }}
                >
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
                        "&:hover": {
                          borderBottom: 2,
                          borderColor: "info.main",
                        },
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
                </Zoom>
              ))}
            </Box>
          </Box>
          <Zoom
            in={true}
            style={{
              transitionDelay: "1000ms",
              transitionDuration: "1000ms",
            }}
          >
            <Box>
              <TextField
                sx={{
                  bgcolor: "info.main",
                  mx: { md: 1 },
                  mr: 1,
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
          </Zoom>
          <Zoom
            in={true}
            style={{
              transitionDelay: "1000ms",
              transitionDuration: "1000ms",
            }}
          >
            <Box
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: "2.5rem",
                  color: "info.main",
                }}
              />
            </Box>
          </Zoom>
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
    linkTag: "/",
  },
  {
    id: 2,
    name: "Cities",
    linkTag: "/user/city",
  },
  {
    id: 3,
    name: "Contact Us",
    linkTag: "/user/contact-us",
  },
  {
    id: 4,
    name: "About Us",
    linkTag: "/user/about-us",
  },
];
