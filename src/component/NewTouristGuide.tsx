import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  createTouristGuide,
  getTouristGuide,
  updateTouristGuide,
} from "@/store/slices/touristGuideSlice";
import { fileUpload } from "@/utils/fileUpload";

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
  Switch,
  TextField,
} from "@mui/material";
import { TouristGuide } from "@prisma/client";

import { useEffect, useState } from "react";
import FileDropZone from "./FileDropZone";
interface Props {
  open: boolean;
  setOpen: (data: any) => void;
  touristGuideData?: TouristGuide;
}
interface DefaultTouristGuide {
  name: string;
  phoneNumber: string;
  price: number;
  language: string;
  isAvailable: boolean;
}
const defaultTouristGuide: DefaultTouristGuide = {
  name: "",
  phoneNumber: "",
  price: 0,
  language: "",
  isAvailable: true,
};

const NewTouristGuide = ({ open, setOpen, touristGuideData }: Props) => {
  const [newTouristGuide, setNewTouristGuide] = useState(defaultTouristGuide);
  const dispatch = useAppDispatch();
  const cities = useAppSelector((store) => store.city.items);
  const onSuccess = () => {
    setOpen(false);
    setNewTouristGuide(defaultTouristGuide);
    dispatch(getTouristGuide());
  };
  const [image, setImage] = useState<File>();
  const onFileSelected = (files: File[]) => {
    setImage(files[0]);
  };
  const handleCreateTourist = async () => {
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(createTouristGuide({ ...newTouristGuide, assetUrl, onSuccess }));
  };
  const handleUpdate = () => {
    dispatch(
      updateTouristGuide({
        id: touristGuideData?.id as number,
        ...newTouristGuide,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (touristGuideData) {
      setNewTouristGuide(touristGuideData);
    } else {
      setNewTouristGuide(defaultTouristGuide);
    }
  }, [open, touristGuideData]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Tourist Guide</DialogTitle>
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
              setNewTouristGuide({ ...newTouristGuide, name: evt.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={newTouristGuide.name ? newTouristGuide.name : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="price"
            type="input"
            onChange={(evt) =>
              setNewTouristGuide({
                ...newTouristGuide,
                price: Number(evt.target.value),
              })
            }
            sx={{ mb: 1 }}
            defaultValue={newTouristGuide.price ? newTouristGuide.price : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Phone Number"
            type="input"
            onChange={(evt) =>
              setNewTouristGuide({
                ...newTouristGuide,
                phoneNumber: evt.target.value,
              })
            }
            sx={{ mb: 1 }}
            defaultValue={
              newTouristGuide.phoneNumber ? newTouristGuide.phoneNumber : ""
            }
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="Language"
            type="input"
            onChange={(evt) =>
              setNewTouristGuide({
                ...newTouristGuide,
                language: evt.target.value,
              })
            }
            sx={{ mb: 1 }}
            defaultValue={
              newTouristGuide.language ? newTouristGuide.language : ""
            }
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked={newTouristGuide.isAvailable}
                onChange={(evt, value) =>
                  setNewTouristGuide({ ...newTouristGuide, isAvailable: value })
                }
              />
            }
            label="Available"
          />
          {!touristGuideData && (
            <FormControl>
              <Box sx={{ mt: 2 }}>
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
              setNewTouristGuide(defaultTouristGuide);
            }}
          >
            Cancel
          </Button>
          {touristGuideData ? (
            <Button
              variant="contained"
              color="success"
              sx={{ mx: 1 }}
              disabled={
                !newTouristGuide.name ||
                !newTouristGuide.language ||
                !newTouristGuide.price ||
                !newTouristGuide.phoneNumber
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
                !newTouristGuide.name ||
                !newTouristGuide.language ||
                !newTouristGuide.price ||
                !newTouristGuide.phoneNumber
              }
              onClick={handleCreateTourist}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewTouristGuide;
