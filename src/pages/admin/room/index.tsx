import NewRoom from "@/component/NewRoom";
import RoomCard from "@/component/cards/RoomCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Room = () => {
  const [open, setOpen] = useState(false);
  const rooms = useAppSelector((store) => store.room.items);
  const router = useRouter();
  const hotelId = Number(router.query.id);
  const data = rooms.filter((d) => d.hotelId === hotelId);
  if (!data) return null;
  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Rooms
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
          size="small"
        >
          Add new Room
        </Button>
      </Box>
      {data && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {data.map((d) => (
            <RoomCard key={d.id} data={d} />
          ))}
        </Box>
      )}
      <NewRoom open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Room;
