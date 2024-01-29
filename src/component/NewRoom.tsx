import { useAppDispatch } from "@/store/hook";

import { createRoom, getRoom, updateRoom } from "@/store/slices/roomSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { Room, RoomType } from "@prisma/client";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
interface props {
  open: boolean;
  setOpen: (data: any) => void;
  roomData?: Room;
}
interface Default {
  type: RoomType;
  price: number;
  isAvailable: boolean;
}
const defaultRoom: Default = {
  type: RoomType.ONE,
  price: 0,
  isAvailable: true,
};

const NewRoom = ({ open, setOpen, roomData }: props) => {
  const [newRoom, setNewRoom] = useState(defaultRoom);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const hotelId = Number(router.query.id);
  const onSuccess = () => {
    setOpen(false);
    setNewRoom(defaultRoom);
    dispatch(getRoom());
  };
  const handleCreateRoom = () => {
    dispatch(createRoom({ ...newRoom, hotelId, onSuccess }));
  };
  const handleUpdate = () => {
    dispatch(
      updateRoom({
        id: roomData?.id as number,
        ...newRoom,
        hotelId,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (roomData) {
      setNewRoom(roomData);
    } else {
      setNewRoom(defaultRoom);
    }
  }, [open]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Room</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newRoom.type || ""}
              label="Room Type"
              onChange={(e) => {
                const valueType = e.target.value as RoomType;
                setNewRoom({ ...newRoom, type: valueType });
              }}
            >
              <MenuItem value={RoomType.ONE}>{RoomType.ONE}</MenuItem>
              <MenuItem value={RoomType.TWO}>{RoomType.TWO}</MenuItem>
              <MenuItem value={RoomType.FAMILY}>{RoomType.FAMILY}</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            label="price"
            placeholder="Price..."
            type="number"
            onChange={(e) =>
              setNewRoom({ ...newRoom, price: Number(e.target.value) })
            }
            sx={{ mb: 1 }}
            defaultValue={newRoom.price ? newRoom.price : ""}
            fullWidth
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked={roomData?.isAvailable}
                onChange={(evt, value) =>
                  setNewRoom({ ...newRoom, isAvailable: value })
                }
              />
            }
            label="Available"
          />
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setOpen(false);
              setNewRoom(defaultRoom);
            }}
          >
            Cancel
          </Button>
          {roomData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newRoom.type || !newRoom.price}
              onClick={handleUpdate}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newRoom.type || !newRoom.price}
              onClick={handleCreateRoom}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewRoom;
