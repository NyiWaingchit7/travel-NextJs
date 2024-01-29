import UserBusAirLineDetailCard from "@/component/cards/UserBusAirLineDetailCard";
import { useAppSelector } from "@/store/hook";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const UserBus = () => {
  const [showAll, setShowAll] = useState(true);
  const [currentCity, setCurrentCity] = useState(0);
  const cities = useAppSelector((store) => store.city.items);

  const buses = useAppSelector((store) => store.bus.items);
  const selectedbuses = buses.filter((item) => item.cityId === currentCity);

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{ fontSize: "1.5rem", fontWeight: "bold", my: 3 }}
      >
        {" "}
        Select your current city to find suitable bus{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "320px", my: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Cities</InputLabel>
            <Select
              value={currentCity}
              label="Cities"
              onChange={(evt) => setCurrentCity(Number(evt.target.value))}
            >
              {cities.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "300px",
          }}
        >
          <Button
            onClick={() => {
              setShowAll(false);
            }}
            variant="contained"
            color="success"
            disabled={!currentCity}
          >
            Search
          </Button>
          <Button
            onClick={() => setShowAll(true)}
            variant="contained"
            color="success"
            disabled={showAll}
          >
            Show All
          </Button>
        </Box>
      </Box>

      {showAll ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {buses.map((item) => (
            <UserBusAirLineDetailCard
              key={item.id}
              name={item.name}
              assetUrl={item.assetUrl}
              address={item.address}
              phoneNumber1={item.phoneNumber1}
              phoneNumber2={item.phoneNumber2}
              to={item.to}
              cityId={item.cityId}
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {selectedbuses.map((item) => (
            <UserBusAirLineDetailCard
              key={item.id}
              name={item.name}
              assetUrl={item.assetUrl}
              address={item.address}
              phoneNumber1={item.phoneNumber1}
              phoneNumber2={item.phoneNumber2}
              to={item.to}
              cityId={item.cityId}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default UserBus;
