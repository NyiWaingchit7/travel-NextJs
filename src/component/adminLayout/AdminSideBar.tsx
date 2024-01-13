import { Box, Typography } from "@mui/material";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PersonIcon from "@mui/icons-material/Person";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
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
    id: 2,
    name: "Location",
    icon: <LocationOnIcon />,
    link: "/admin/location",
  },
  {
    id: 3,
    name: "Hotel",
    icon: <MapsHomeWorkIcon />,
    link: "/admin/hotel",
  },

  {
    id: 5,
    name: "Tourist Guides",
    icon: <PersonIcon />,
    link: "/admin/tourist-guide",
  },
  {
    id: 6,
    name: "AirLine Ticket",
    icon: <FlightTakeoffIcon />,
    link: "/admin/airLine-ticket",
  },
  {
    id: 7,
    name: "Bus",
    icon: <DirectionsBusFilledIcon />,
    link: "/admin/bus",
  },
  {
    id: 8,
    name: "Booking",
    icon: <BookmarkIcon />,
    link: "/admin/booking",
  },
];
