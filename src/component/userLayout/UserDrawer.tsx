import { Box, Typography } from "@mui/material";

import { cates } from "./UserNavBar";
import Link from "next/link";

const UserDrawer = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ color: "info.light", fontWeight: "bold" }}>
        {cates.map((d) => (
          <Link href={d.linkTag} key={d.id} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                m: 1,
                p: 1,
                cursor: "pointer",
                color: "info.light",
              }}
            >
              <Box
                sx={{
                  p: 1,
                  "&:hover": { bgcolor: "secondary.main" },
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ".Mui-selected": {
                    bgcolor: "secondary.main",
                    color: "red",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", lg: "1rem" },
                    mr: 1,
                  }}
                >
                  {d.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "1px",
                  bgcolor: "info.light",
                  width: "100%",
                  mt: 1,
                }}
              ></Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default UserDrawer;
