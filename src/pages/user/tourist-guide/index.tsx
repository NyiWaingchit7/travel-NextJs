import UserTouristGuideCard from "@/component/cards/UserTouristGuideCard";
import { useAppSelector } from "@/store/hook";
import { Box } from "@mui/material";

const UserTouristGuide = () => {
  const touristGuides = useAppSelector((store) => store.touristGuide.items);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {touristGuides.map((item) => (
        <UserTouristGuideCard
          name={item.name}
          phoneNumber={item.phoneNumber}
          price={item.price}
          key={item.id}
          language={item.language}
        />
      ))}
    </Box>
  );
};

export default UserTouristGuide;
