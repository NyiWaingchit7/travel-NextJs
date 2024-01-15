import { useAppDispatch } from "@/store/hook";
import { createAirLine } from "@/store/slices/airLineSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Bus } from "@prisma/client";
import { useState } from "react";
interface Props {
  open: boolean;
  setOpen: (data: any) => void;
  busData?: Bus;
}
const defaultBus = {
  name: "",
  address: "",
  phoneNumber1: "",
  phoneNumber2: "",
  cityId: 1,
};
export default function NewAirLine({ open, setOpen, busData }: Props) {
  const [newBus, setNewBus] = useState(defaultBus);
  const dispatch = useAppDispatch();
  const handleConfirm = () => {
    dispatch(
      createAirLine({
        ...newBus,
        onSuccess() {
          console.log("success");
        },
      })
    );
  };

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
            onChange={(evt) => setNewBus({ ...newBus, name: evt.target.value })}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Address"
            type="input"
            fullWidth
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
            onChange={(evt) =>
              setNewBus({ ...newBus, phoneNumber1: evt.target.value })
            }
          />

          <TextField
            autoFocus
            margin="dense"
            label="Second Phone Number"
            type="input"
            fullWidth
            onChange={(evt) =>
              setNewBus({ ...newBus, phoneNumber2: evt.target.value })
            }
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
          <Button
            disabled={!newBus.address || !newBus.name || !newBus.phoneNumber1}
            variant="contained"
            color="success"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
