import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  createAirLine,
  getAirLine,
  updateAirLine,
} from "@/store/slices/airLineSlice";
import {
  Box,
  Button,
  Chip,
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
import FileDropZone from "./FileDropZone";
import { fileUpload } from "@/utils/fileUpload";
interface Props {
  open: boolean;
  setOpen: (data: any) => void;
  airLineData?: DefaultAirLine;
}

export interface DefaultAirLine {
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

const defaultAirLine: DefaultAirLine = {
  name: "",
  address: "",
  phoneNumber1: "",
  cityId: 0,
  to: 0,
  isAvailable: true,
};
export default function NewAirLine({ open, setOpen, airLineData }: Props) {
  const [newAirLine, setNewAirLine] = useState(defaultAirLine);
  const dispatch = useAppDispatch();
  const cities = useAppSelector((store) => store.city.items);
  const [image, setImage] = useState<File>();
  const onFileSelected = (files: File[]) => {
    setImage(files[0]);
  };
  const onSuccess = () => {
    dispatch(getAirLine());
    setOpen(false);
    setNewAirLine(defaultAirLine);
  };
  const handleUpdate = () => {
    dispatch(
      updateAirLine({ id: airLineData?.id as number, ...newAirLine, onSuccess })
    );
  };
  const handleConfirm = async () => {
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(
      createAirLine({
        ...newAirLine,
        assetUrl,
        onSuccess() {
          dispatch(getAirLine());
          setOpen(false);
        },
      })
    );
  };

  useEffect(() => {
    if (airLineData) {
      setNewAirLine(airLineData);
    } else {
      setNewAirLine(defaultAirLine);
    }
  }, [open, airLineData]);

  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Air Line</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            type="input"
            fullWidth
            defaultValue={newAirLine.name}
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
            fullWidth
            defaultValue={newAirLine.address}
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
            fullWidth
            defaultValue={newAirLine.phoneNumber1}
            onChange={(evt) =>
              setNewAirLine({ ...newAirLine, phoneNumber1: evt.target.value })
            }
          />
          <FormControl sx={{ mt: 3 }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Departure Point
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newAirLine.cityId}
              label="Departure Point"
              defaultValue={newAirLine.cityId}
              onChange={(evt) =>
                setNewAirLine({
                  ...newAirLine,
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
              value={newAirLine.to}
              label="Destination "
              defaultValue={newAirLine.to}
              onChange={(evt) =>
                setNewAirLine({
                  ...newAirLine,
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
            sx={{ mt: 3, width: "80%" }}
            control={
              <Switch
                defaultChecked={newAirLine.isAvailable}
                onChange={(evt, value) =>
                  setNewAirLine({ ...newAirLine, isAvailable: value })
                }
              />
            }
            label="Available"
          />
          {!airLineData && (
            <FormControl sx={{ mt: 3 }}>
              <Box>
                <FileDropZone onFileSelected={onFileSelected} />
                {image && (
                  <Chip
                    sx={{ mt: 2 }}
                    label={image.name}
                    onDelete={() => setImage(undefined)}
                  />
                )}
              </Box>
            </FormControl>
          )}
        </DialogContent>
        <DialogActions sx={{ pb: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          {airLineData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={!newAirLine.name || !newAirLine.address}
              onClick={handleUpdate}
            >
              Update
            </Button>
          ) : (
            <Button
              disabled={
                !newAirLine.address ||
                !newAirLine.name ||
                !newAirLine.phoneNumber1 ||
                !newAirLine.cityId ||
                !newAirLine.to
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
