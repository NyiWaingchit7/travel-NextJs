import { useAppDispatch } from "@/store/hook";
import { createCity, getCity } from "@/store/slices/citySlice";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
interface props {
  open: boolean;
  setOpen: (data: any) => void;
}
const defaultCity = { name: "", description: "" };

const NewCity = ({ open, setOpen }: props) => {
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
          />
          <TextField
            placeholder="Description..."
            onChange={(e) =>
              setNewCity({ ...newCity, description: e.target.value })
            }
            sx={{ mb: 1 }}
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
          <Button
            variant="contained"
            color="success"
            sx={{ mx: 1 }}
            disabled={!newCity.name || !newCity.description}
            onClick={handleCreateCity}
          >
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewCity;
