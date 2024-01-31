import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  createLocation,
  getLocation,
  updateLocation,
} from "@/store/slices/locationSlice";

import {
  Box,
  Button,
  Chip,
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
import FileDropZone from "./FileDropZone";
import { fileUpload } from "@/utils/fileUpload";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const cityId = Number(router.query.id);
  const [image, setImage] = useState<File>();
  const onFileSelected = (files: File[]) => {
    setImage(files[0]);
  };
  const onSuccess = () => {
    setOpen(false);
    setNewLocation(defaultLocation);
    dispatch(getLocation());
  };
  const handleCreateLocation = async () => {
    let assetUrl;
    console.log(image);

    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(createLocation({ ...newLocation, cityId, assetUrl, onSuccess }));
  };
  const handleUpdate = () => {
    dispatch(
      updateLocation({
        id: cityId,
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
  }, [open, locationData]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Location</DialogTitle>
        <DialogContent>
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
            fullWidth
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
            fullWidth
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
            fullWidth
          />

          {!locationData && (
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
                !newLocation.title
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
