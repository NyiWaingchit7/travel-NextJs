import { useAppDispatch } from "@/store/hook";
import { deleteRoom, getRoom } from "@/store/slices/roomSlice";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Room } from "@prisma/client";
import { useState } from "react";
import NewRoom from "../NewRoom";

interface Props {
  data: Room;
}

export default function RoomCard({ data }: Props) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ width: "200px", m: 1 }}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          opacity: data.isAvailable === false ? 0.4 : 1,
          borderRadius: 3,
          bgcolor: "secondary.main",
          p: 1,
          "&:hover": { bgcolor: "secondary.dark" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            color: "success.main",
          }}
          onClick={() => {
            dispatch(
              deleteRoom({
                id: data.id,
                onSuccess: () => {
                  dispatch(getRoom());
                },
              })
            );
          }}
        >
          <ClearIcon sx={{ fontWeight: "bold" }} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: { xs: "100px", md: "130px" },
            p: 1,
            mb: 1,
          }}
        >
          <Box
            component="img"
            sx={{ width: "100%", height: "100%", borderRadius: 3 }}
            src={data.assetUrl || "../../default-room.jpg"}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.7rem", md: "1rem" },
              color: "info.main",
            }}
          >
            {data.type}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.7rem", md: "1rem" },
              my: 1,
              color: "info.main",
            }}
          >
            {" "}
            $ {data.price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ maxWidth: "10px" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <EditIcon
              sx={{
                fontSize: { xs: "1rem", sm: "1.3rem" },
                color: "info.main",
              }}
            />
          </Button>
        </Box>
      </Paper>
      <NewRoom open={open} setOpen={setOpen} roomData={data} />
    </Box>
  );
}
