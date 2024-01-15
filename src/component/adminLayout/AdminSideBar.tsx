import BookmarkIcon from "@mui/icons-material/Bookmark";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const AdminSideBar = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ color: "info.light", fontWeight: "bold" }}>
        {sidebars.map((d) => (
          <Link href={d.link} key={d.id} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                m: 1,
                p: 1,
                cursor: "pointer",
                color: "info.light",
              }}
            >
              <Box
                sx={{
                  p: 1,
                  "&:hover": { bgcolor: "secondary.main" },
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ".Mui-selected": {
                    bgcolor: "secondary.main",
                    color: "red",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", lg: "1rem" },
                    mr: 1,
                  }}
                >
                  {d.name}
                </Typography>
                <Box>{d.icon}</Box>
              </Box>
              <Box
                sx={{
                  height: "1px",
                  bgcolor: "info.light",
                  width: "100%",
                  mt: 1,
                }}
              ></Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default AdminSideBar;

const sidebars = [
  {
    id: 1,
    name: "City",
    icon: <LocationCityIcon />,
    link: "/admin/city",
  },
  {
    id: 3,
    name: "Hotel",
    icon: <MapsHomeWorkIcon />,
    link: "/admin/hotel",
  },

  {
    id: 4,
    name: "Tourist Guides",
    icon: <PersonIcon />,
    link: "/admin/tourist-guide",
  },
  {
    id: 5,
    name: "AirLine Ticket",
    icon: <FlightTakeoffIcon />,
    link: "/admin/airLine-ticket",
  },
  {
    id: 6,
    name: "Bus",
    icon: <DirectionsBusFilledIcon />,
    link: "/admin/bus",
  },
];
