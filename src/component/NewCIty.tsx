import { useAppDispatch } from "@/store/hook";
import { createCity, getCity, updateCity } from "@/store/slices/citySlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { City } from "@prisma/client";

import { useEffect, useState } from "react";
interface props {
  open: boolean;
  setOpen: (data: any) => void;
  cityData?: City;
}
const defaultCity = { name: "", description: "" };

const NewCity = ({ open, setOpen, cityData }: props) => {
  const [newCity, setNewCity] = useState(defaultCity);
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(getCity());
    setOpen(false);
    setNewCity(defaultCity);
  };
  const handleCreateCity = () => {
    dispatch(createCity({ ...newCity, onSuccess }));
  };
  const handleUpdateCity = () => {
    dispatch(updateCity({ id: cityData?.id as number, ...newCity, onSuccess }));
  };
  useEffect(() => {
    if (cityData) {
      setNewCity(cityData);
    } else {
      setNewCity(defaultCity);
    }
  }, [open]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Player</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Name..."
            onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
            sx={{ mb: 1 }}
            defaultValue={newCity.name}
          />
          <TextField
            placeholder="Description..."
            onChange={(e) =>
              setNewCity({ ...newCity, description: e.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={newCity.description}
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
              setNewCity(defaultCity);
            }}
          >
            Cancel
          </Button>
          {cityData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newCity.name || !newCity.description}
              onClick={handleUpdateCity}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newCity.name || !newCity.description}
              onClick={handleCreateCity}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewCity;
