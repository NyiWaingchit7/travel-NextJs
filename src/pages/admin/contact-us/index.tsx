import MessageCard from "@/component/cards/MessageCard";
import { useAppSelector } from "@/store/hook";
import { Box } from "@mui/material";

const contactUs = () => {
  const data = useAppSelector((store) => store.contactUs.items);
  if (!data) return null;
  return (
    <Box>
      {data && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {data.map((item) => (
            <MessageCard
              key={item.id}
              name={item.name}
              advice={item.advice}
              contact={item.contact}
              isRead={item.isRead}
              id={item.id}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
export default contactUs;
