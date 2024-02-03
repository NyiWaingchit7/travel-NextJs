import { useAppDispatch, useAppSelector } from "@/store/hook";
import { createHotel, getHotel, updateHotel } from "@/store/slices/hotelSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Hotel } from "@prisma/client";

import { useEffect, useState } from "react";
interface props {
  open: boolean;
  setOpen: (data: any) => void;
  hotelData?: Hotel;
}
const defaultHotel = { name: "", description: "" };

const NewHotel = ({ open, setOpen, hotelData }: props) => {
  const [newHotel, setNewHotel] = useState(defaultHotel);
  const [value, setValue] = useState<number>(0);
  const cities = useAppSelector((store) => store.city.items);
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(getHotel());
    setOpen(false);
    setNewHotel(defaultHotel);
  };
  const handelCreateHotel = () => {
    dispatch(createHotel({ ...newHotel, cityId: value, onSuccess }));
  };
  const handleUpdateHotel = () => {
    dispatch(
      updateHotel({
        id: hotelData?.id as number,
        ...newHotel,
        cityId: value,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (hotelData) {
      setNewHotel(hotelData);
      setValue(hotelData?.cityId);
    } else {
      setNewHotel(defaultHotel);
    }
  }, [open, hotelData]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Hotel</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="Name..."
            autoFocus
            required
            margin="dense"
            label="Name"
            type="input"
            onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
            sx={{ mb: 1 }}
            defaultValue={newHotel.name}
            fullWidth
          />
          <TextField
            placeholder="Description..."
            autoFocus
            required
            margin="dense"
            label="Description"
            type="input"
            onChange={(e) =>
              setNewHotel({ ...newHotel, description: e.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={newHotel.description}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value || ""}
              label="Age"
              onChange={(e) => setValue(Number(e.target.value))}
            >
              {cities?.map((d) => (
                <MenuItem value={d.id} key={d.id}>
                  {d.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
              setNewHotel(defaultHotel);
              setValue(0);
            }}
          >
            Cancel
          </Button>
          {hotelData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newHotel.name || !newHotel.description || !value}
              onClick={handleUpdateHotel}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newHotel.name || !newHotel.description || !value}
              onClick={handelCreateHotel}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewHotel;
