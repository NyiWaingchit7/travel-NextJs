import Profiles from "@/component/Profiles";
import { useAppDispatch } from "@/store/hook";
import { createContactUs, getContactUs } from "@/store/slices/contactUsSlice";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const defaultForm = {
  name: "",
  contact: "",
  advice: "",
};
const ContactUs = () => {
  const [form, setForm] = useState(defaultForm);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const onSuccess = () => {
    dispatch(getContactUs());

    setOpen(true);
  };

  const handleSend = () => {
    dispatch(createContactUs({ ...form, onSuccess }));
  };
  return (
    <Box>
      <Box>
        <Profiles />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: { xs: "100vh", sm: "89.2vh", md: "85vh" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "3rem",
              fontWeight: "700",
            },

            m: 1,
            mt: 3,
          }}
        >
          Contact Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "80%", sm: "55%" },
          }}
        >
          <Box
            component="form"
            sx={{
              py: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "secondary.dark",
              borderRadius: 5,
              width: "400px",
            }}
          >
            <TextField
              placeholder={`Your name ....`}
              sx={{
                mt: 3,
                width: "70%",
                bgcolor: "info.main",
                borderRadius: 2,
              }}
              required
              onChange={(evt) => setForm({ ...form, name: evt.target.value })}
              defaultValue={form.name}
            />
            <TextField
              sx={{
                mt: 3,
                width: "70%",
                bgcolor: "info.main",
                borderRadius: 2,
              }}
              placeholder={`Your contact ....`}
              required
              onChange={(evt) =>
                setForm({ ...form, contact: evt.target.value })
              }
              defaultValue={form.contact}
            />
            <TextField
              sx={{
                mt: 4,
                width: "70%",
                bgcolor: "info.main",
                borderRadius: 2,
              }}
              placeholder={`Advices .... `}
              multiline
              rows={3}
              required
              onChange={(evt) => setForm({ ...form, advice: evt.target.value })}
              defaultValue={form.advice}
            />
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "flex-end",
                border: 1,
                borderRadius: "5px",
                borderColor: "info.main",
              }}
            >
              <Button
                variant="contained"
                disabled={!form.name || !form.contact || !form.advice}
                onClick={handleSend}
                color="success"
                sx={{ color: "info.main" }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{ fontWeight: "bold" }}>
            Your Message Was Sent !
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Thanks for messaging us</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setOpen(false);
                setForm(defaultForm);
              }}
              autoFocus
            >
              close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ContactUs;
