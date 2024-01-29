import { useAppDispatch } from "@/store/hook";
import { createCity, getCity, updateCity } from "@/store/slices/citySlice";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { City } from "@prisma/client";

import { useEffect, useState } from "react";
import FileDropZone from "./FileDropZone";
import { fileUpload } from "@/utils/fileUpload";
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
  const [image, setImage] = useState<File>();
  const onFileSelected = (files: File[]) => {
    setImage(files[0]);
  };
  const handleCreateCity = async () => {
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(createCity({ ...newCity, assetUrl, onSuccess }));
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
  }, [open, cityData]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New City </DialogTitle>
        <DialogContent>
          <TextField
            placeholder="Name..."
            autoFocus
            required
            margin="dense"
            label="Name"
            type="input"
            onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
            sx={{ mb: 1 }}
            defaultValue={newCity.name}
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
              setNewCity({ ...newCity, description: e.target.value })
            }
            sx={{ mb: 1 }}
            defaultValue={newCity.description}
            fullWidth
          />
          {!cityData && (
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
