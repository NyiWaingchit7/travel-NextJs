import { useAppDispatch, useAppSelector } from "@/store/hook";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import NewLocation from "@/component/NewLocation";
import {
  deleteLocation,
  getLocation,
  updateLocation,
} from "@/store/slices/locationSlice";
import { fileUpload } from "@/utils/fileUpload";
import { Location } from "@prisma/client";

const LocationDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  const locations = useAppSelector((store) => store.location.items);
  const location = locations.find((item) => item.id === id) as Location;
  const [open, setOpen] = useState(false);
  const cityName = useAppSelector(
    (store) =>
      store.city.items?.find((item) => item.id === location?.cityId)?.name
  );
  const handleUpdateImage = async (e: any) => {
    const image = e.target.files[0];

    const assetUrl = await fileUpload(image);
    console.log(assetUrl);

    dispatch(
      updateLocation({
        ...location,
        assetUrl,
        onSuccess: () => {
          dispatch(getLocation());
        },
      })
    );
  };
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
            sx={{
              width: "100%",
              p: 1,
              mb: 1,
              borderRadius: 3,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: 3 }}
              src={location.assetUrl || "/default-image.jpg"}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{ width: "fit-content", mt: 2 }}
              size="small"
            >
              Upload File
              <input
                type="file"
                hidden
                onChange={(e) => {
                  handleUpdateImage(e);
                }}
              />
            </Button>
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
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.1rem" }}
          >
            {location.name}
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
