import { useAppSelector } from "@/store/hook";
import { Box } from "@mui/material";
import { TouristGuide } from "@prisma/client";
import { useEffect, useState } from "react";
interface Prop {
  data?: TouristGuide[];
  id?: number;
}
const UserTouristGuides = ({ data, id }: Prop) => {
  const touristGuides = useAppSelector((store) => store.touristGuide.items);
  const [showData, setShowData] = useState<TouristGuide[]>(touristGuides);
  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(touristGuides);
    }
  }, [id, touristGuides]);
  if (!touristGuides) return null;
  return <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap" }}></Box>;
};
export default UserTouristGuides;
