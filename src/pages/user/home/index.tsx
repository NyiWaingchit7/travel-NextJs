import UserAirLineSection from "@/component/UserAirLineSection";

import UserBusSection from "@/component/UserBusSection";
import UserCity from "@/component/UserCitySection";
import UserHome from "@/component/UserHome";
import UserLocation from "@/component/UserLocationSection";
import UserTouristGuideSection from "@/component/UserTouristGuideSection";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <UserHome />
      <UserCity />
      <UserLocation />
      <UserBusSection />
      <UserAirLineSection />
      <UserTouristGuideSection />
    </Box>
  );
};
export default Home;
