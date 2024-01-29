import { useAppDispatch, useAppSelector } from "@/store/hook";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import NewLocation from "@/component/NewLocation";
import { deleteLocation, getLocation } from "@/store/slices/locationSlice";

const LocationDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  const locations = useAppSelector((store) => store.location.items);
  const location = locations.find((item) => item.id === id);
  const [open, setOpen] = useState(false);
  const cityName = useAppSelector(
    (store) =>
      store.city.items?.find((item) => item.id === location?.cityId)?.name
  );
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(getLocation());
    router.push(`/admin/city/${location?.cityId}`);
  };
  if (!location) return null;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 5,
          width: { xs: "100%", md: "85%" },
        }}
      >
        <Box sx={{ bgcolor: "success.main", p: 1, borderRadius: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "info.light" }}
          >
            City - {cityName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ mx: 1 }}
            onClick={() => {
              dispatch(
                deleteLocation({
                  id,
                  onSuccess,
                })
              );
            }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", sm: "70%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", sm: "50%", lg: "30%" },
            display: "flex",
            flexDirection: "column",

            alignItems: "center",

            borderRadius: 3,
            p: 1,
          }}
        >
          <Box
            sx={{ width: "100%", p: 1, mb: 1, borderRadius: 3, boxShadow: 2 }}
          >
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: 3 }}
              src={location.assetUrl || "../../default-image.jpg"}
            />
          </Box>
        </Box>{" "}
        <Box
          sx={{
            p: 2,
            mt: 3,
            bgcolor: "info.main",
            width: "100%",
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.3rem" }}
          >
            {location.name}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.3rem" }}
          >
            {location.title}
          </Typography>
          {location.description && (
            <Typography sx={{ fontSize: 14, mt: 3 }}>
              {location.description}
            </Typography>
          )}
        </Box>
      </Box>

      <NewLocation open={open} setOpen={setOpen} locationData={location} />
    </Box>
  );
};
export default LocationDetail;
