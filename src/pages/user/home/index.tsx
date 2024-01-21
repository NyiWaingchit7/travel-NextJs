import UserCity from "@/component/UserCitySection";
import UserHome from "@/component/UserHome";
import UserLocation from "@/component/UserLocationSection";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <UserHome />
      <UserCity />
      <UserLocation />
    </Box>
  );
};
export default Home;
