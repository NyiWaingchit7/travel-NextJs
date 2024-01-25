import { useAppDispatch } from "@/store/hook";
import { getContactUs, updateContactUs } from "@/store/slices/contactUsSlice";
import { Box, Button, Paper, Typography } from "@mui/material";

interface Props {
  name: string;
  contact: string;
  advice: string;
  isRead: boolean;
  id: number;
}

export default function ItemCard({ name, contact, advice, isRead, id }: Props) {
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(getContactUs());
  };
  const handleRead = () => {
    isRead = true;
    dispatch(updateContactUs({ isRead, id, onSuccess }));
  };
  const handleUnRead = () => {
    isRead = false;
    dispatch(updateContactUs({ isRead, id, onSuccess }));
  };
  return (
    <Box sx={{ width: { xs: "100%", sm: "80%" }, m: 1 }}>
      <Paper
        elevation={3}
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          borderRadius: 3,
          bgcolor: "secondary.main",
          px: { xs: 1, sm: 5 },
          "&:hover": { bgcolor: "secondary.dark" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "success.main",
                fontSize: { xs: "0.9rem", sm: "1.5rem" },
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "info.light",
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
              }}
            >
              {contact}
            </Typography>
          </Box>
          {isRead ? (
            <Box>
              {" "}
              <Button
                size="small"
                variant="contained"
                sx={{
                  bgcolor: "green",
                  maxHeight: "22px",
                  fontSize: { xs: "7px", sm: "9px", md: "12px" },
                }}
                onClick={handleUnRead}
              >
                Mark As Unread
              </Button>{" "}
            </Box>
          ) : (
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: "red",
                maxHeight: "22px",
                fontSize: { xs: "7px", sm: "9px", md: "12px" },
              }}
              onClick={handleRead}
            >
              Mark As Read
            </Button>
          )}
        </Box>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "info.light",
            fontSize: { xs: "0.7rem", sm: "0.8rem" },
            mb: 3,
            ml: { xs: 1, sm: 3 },
          }}
        >
          {advice}
        </Typography>
      </Paper>
    </Box>
  );
}
