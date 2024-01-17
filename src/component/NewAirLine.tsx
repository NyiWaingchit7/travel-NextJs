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
import { AirLine } from "@prisma/client";
import { useState } from "react";
interface Props {
  open: boolean;
  setOpen: (data: any) => void;
  airLineData?: AirLine;
}
const defaultAirLine = {
  name: "",
  address: "",
  phoneNumber1: "",
  phoneNumber2: "",
  cityId: 1,
};
export default function NewAirLine({ open, setOpen, airLineData }: Props) {
  const [newAirLine, setNewAirLine] = useState(defaultAirLine);
  const dispatch = useAppDispatch();
  const handleConfirm = () => {
    dispatch(
      createAirLine({
        ...newAirLine,
        onSuccess() {
          console.log("success");
        },
      })
    );
  };

  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Air Line</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center0",
            flexDirection: "column",
          }}
        >
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            type="input"
            onChange={(evt) =>
              setNewAirLine({ ...newAirLine, name: evt.target.value })
            }
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Address"
            type="input"
            onChange={(evt) =>
              setNewAirLine({ ...newAirLine, address: evt.target.value })
            }
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Phone Number"
            type="input"
            onChange={(evt) =>
              setNewAirLine({ ...newAirLine, phoneNumber1: evt.target.value })
            }
          />

          <TextField
            autoFocus
            margin="dense"
            label="Second Phone Number"
            type="input"
            onChange={(evt) =>
              setNewAirLine({ ...newAirLine, phoneNumber2: evt.target.value })
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
            disabled={
              !newAirLine.address ||
              !newAirLine.name ||
              !newAirLine.phoneNumber1
            }
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
