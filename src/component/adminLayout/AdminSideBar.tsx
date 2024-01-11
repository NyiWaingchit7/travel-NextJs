import { Box, Typography } from "@mui/material";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PersonIcon from "@mui/icons-material/Person";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const AdminSideBar = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ color: "info.light", fontWeight: "bold" }}>
        {sidebars.map((d) => (
          <Box
            sx={{
              m: 1,
              p: 1,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                p: 1,
                "&:hover": { bgcolor: "secondary.main" },
                borderRadius: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{d.name}</Typography>
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
  },
  {
    id: 2,
    name: "Location",
    icon: <LocationOnIcon />,
  },
  {
    id: 3,
    name: "Hotel",
    icon: <LocalHotelIcon />,
  },
  {
    id: 4,
    name: "Room",
    icon: <MeetingRoomIcon />,
  },
  {
    id: 5,
    name: "Tourist Guides",
    icon: <PersonIcon />,
  },
  {
    id: 6,
    name: "AirLine Ticket",
    icon: <FlightTakeoffIcon />,
  },
  {
    id: 7,
    name: "Bus",
    icon: <DirectionsBusFilledIcon />,
  },
  {
    id: 8,
    name: "Booking",
    icon: <BookmarkIcon />,
  },
];
