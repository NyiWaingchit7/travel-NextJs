import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  createLocation,
  getLocation,
  updateLocation,
} from "@/store/slices/locationSlice";

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
import { Location } from "@prisma/client";

import { useEffect, useState } from "react";
interface Props {
  open: boolean;
  setOpen: (data: any) => void;
  locationData?: Location;
}
interface DefaultLocation {
  name: string;
  title: string;
  description: string;
  cityId: number;
}
const defaultLocation: DefaultLocation = {
  name: "",
  title: "",
  description: "",
  cityId: 0,
};

const NewLocation = ({ open, setOpen, locationData }: Props) => {
  const [newLocation, setNewLocation] = useState(defaultLocation);
  const dispatch = useAppDispatch();
  const cities = useAppSelector((store) => store.city.items);
  const onSuccess = () => {
    setOpen(false);
    setNewLocation(defaultLocation);
    dispatch(getLocation());
  };
  const handleCreateLocation = () => {
    dispatch(createLocation({ ...newLocation, onSuccess }));
  };
  const handleUpdate = () => {
    dispatch(
      updateLocation({
        id: locationData?.id as number,
        ...newLocation,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (locationData) {
      setNewLocation(locationData);
    } else {
      setNewLocation(defaultLocation);
    }
  }, [open]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Location</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            type="input"
            onChange={(evt) =>
              setNewLocation({ ...newLocation, name: evt.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={newLocation.name ? newLocation.name : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="title"
            type="input"
            onChange={(evt) =>
              setNewLocation({ ...newLocation, title: evt.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={newLocation.title ? newLocation.title : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="description"
            type="input"
            onChange={(evt) =>
              setNewLocation({ ...newLocation, description: evt.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={
              newLocation.description ? newLocation.description : ""
            }
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newLocation.cityId}
              label="Age"
              onChange={(evt) =>
                setNewLocation({
                  ...newLocation,
                  cityId: Number(evt.target.value),
                })
              }
            >
              {cities.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
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
              setNewLocation(defaultLocation);
            }}
          >
            Cancel
          </Button>
          {locationData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={
                !newLocation.name ||
                !newLocation.description ||
                !newLocation.title ||
                !newLocation.cityId
              }
              onClick={handleUpdate}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={
                !newLocation.name ||
                !newLocation.description ||
                !newLocation.title ||
                !newLocation.cityId
              }
              onClick={handleCreateLocation}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewLocation;
