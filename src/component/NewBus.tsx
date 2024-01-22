import { useAppDispatch, useAppSelector } from "@/store/hook";
import { createBus, getBus, updateBus } from "@/store/slices/busSlice";
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
import { useEffect, useState } from "react";
interface Props {
  open: boolean;
  setOpen: (data: any) => void;
  busData?: DefaultBus;
}

export interface DefaultBus {
  id?: number;
  assetUrl?: string;
  name: string;
  address: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  cityId: number;
  to: number;
  isAvailable: boolean;
}

const defaultBus: DefaultBus = {
  name: "",
  address: "",
  phoneNumber1: "",
  cityId: 0,
  to: 0,
  isAvailable: true,
};
export default function NewAirLine({ open, setOpen, busData }: Props) {
  const [newBus, setNewBus] = useState(defaultBus);
  const dispatch = useAppDispatch();
  const cities = useAppSelector((store) => store.city.items);
  const onSuccess = () => {
    dispatch(getBus());
    setOpen(false);
    setNewBus(defaultBus);
  };
  const handleUpdate = () => {
    dispatch(updateBus({ id: busData?.id as number, ...newBus, onSuccess }));
  };
  const handleConfirm = () => {
    dispatch(
      createBus({
        ...newBus,
        onSuccess() {
          dispatch(getBus());
          setOpen(false);
        },
      })
    );
  };

  useEffect(() => {
    if (busData) {
      setNewBus(busData);
    } else {
      setNewBus(defaultBus);
    }
  }, [open]);

  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Bus</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            type="input"
            fullWidth
            defaultValue={newBus.name}
            onChange={(evt) => setNewBus({ ...newBus, name: evt.target.value })}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Address"
            type="input"
            fullWidth
            defaultValue={newBus.address}
            onChange={(evt) =>
              setNewBus({ ...newBus, address: evt.target.value })
            }
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Phone Number"
            type="input"
            fullWidth
            defaultValue={newBus.phoneNumber1}
            onChange={(evt) =>
              setNewBus({ ...newBus, phoneNumber1: evt.target.value })
            }
          />
          <FormControl sx={{ mt: 3 }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Departure Point
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newBus.cityId}
              label="Departure Point"
              defaultValue={newBus.cityId}
              onChange={(evt) =>
                setNewBus({
                  ...newBus,
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
          <FormControl sx={{ mt: 3 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Destination </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newBus.to}
              label="Destination "
              defaultValue={newBus.to}
              onChange={(evt) =>
                setNewBus({
                  ...newBus,
                  to: Number(evt.target.value),
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
          <FormControlLabel
            control={
              <Switch
                defaultChecked={newBus.isAvailable}
                onChange={(evt, value) =>
                  setNewBus({ ...newBus, isAvailable: value })
                }
              />
            }
            label="Available"
          />
        </DialogContent>
        <DialogActions sx={{ pb: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          {busData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={
                !newBus.address ||
                !newBus.name ||
                !newBus.phoneNumber1 ||
                !newBus.cityId ||
                !newBus.to
              }
              onClick={handleUpdate}
            >
              Update
            </Button>
          ) : (
            <Button
              disabled={
                !newBus.address ||
                !newBus.name ||
                !newBus.phoneNumber1 ||
                !newBus.cityId ||
                !newBus.to
              }
              variant="contained"
              color="success"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
