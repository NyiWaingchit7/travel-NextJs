import { Box, Typography } from "@mui/material";

const FAQPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {" "}
      <Box
        sx={{
          maxWidth: "900px",
          m: 3,
          minHeight: "60vh",
          boxShadow: 2,
          padding: 1,
        }}
      >
        <Typography sx={{ mt: 2, fontWeight: "bold" }}>FAQ</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              mx: 1,
              fontWeight: "700",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            What are the must-visit attractions in Myanmar?
          </Typography>
          <Typography
            sx={{
              mx: 2,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "primary.dark",
            }}
          >
            Nulla molestias nostrum sint sapiente eligendi quia iusto! Natus
            placeat, illo blanditiis soluta aliquam rerum voluptas ut, numquam
            dolor ipsa iure sapiente, debitis fugit saepe officiis odio.
            Dignissimos, tenetur assumenda! Iure non eum expedita eaque minima
            optio alias corrupti neque error natus, distinctio
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              mx: 1,
              fontWeight: "700",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            How can I find the best accommodation options within my budget?
          </Typography>
          <Typography
            sx={{
              mx: 2,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "primary.dark",
            }}
          >
            Nulla molestias nostrum sint sapiente eligendi quia iusto! Natus
            placeat, illo blanditiis soluta aliquam rerum voluptas ut, numquam
            dolor ipsa iure sapiente, debitis fugit saepe officiis odio.
            Dignissimos, tenetur assumenda! Iure non eum expedita eaque minima
            optio alias corrupti neque error natus, distinctio
          </Typography>
        </Box>{" "}
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              mx: 1,
              fontWeight: "700",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            What is the best time to visit Myanmar for favorable weather and
            fewer crowds?
          </Typography>
          <Typography
            sx={{
              mx: 2,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "primary.dark",
            }}
          >
            Nulla molestias nostrum sint sapiente eligendi quia iusto! Natus
            placeat, illo blanditiis soluta aliquam rerum voluptas ut, numquam
            dolor ipsa iure sapiente, debitis fugit saepe officiis odio.
            Dignissimos, tenetur assumenda! Iure non eum expedita eaque minima
            optio alias corrupti neque error natus, distinctio
          </Typography>
        </Box>{" "}
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              mx: 1,
              fontWeight: "700",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            What local cuisines and restaurants should I try in Myanmar
          </Typography>
          <Typography
            sx={{
              mx: 2,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "primary.dark",
            }}
          >
            Nulla molestias nostrum sint sapiente eligendi quia iusto! Natus
            placeat, illo blanditiis soluta aliquam rerum voluptas ut, numquam
            dolor ipsa iure sapiente, debitis fugit saepe officiis odio.
            Dignissimos, tenetur assumenda! Iure non eum expedita eaque minima
            optio alias corrupti neque error natus, distinctio
          </Typography>
        </Box>{" "}
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              mx: 1,
              fontWeight: "700",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            What transportation options are available, and how can I navigate
            [destination] efficiently?
          </Typography>
          <Typography
            sx={{
              mx: 2,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "primary.dark",
            }}
          >
            Nulla molestias nostrum sint sapiente eligendi quia iusto! Natus
            placeat, illo blanditiis soluta aliquam rerum voluptas ut, numquam
            dolor ipsa iure sapiente, debitis fugit saepe officiis odio.
            Dignissimos, tenetur assumenda! Iure non eum expedita eaque minima
            optio alias corrupti neque error natus, distinctio
          </Typography>
        </Box>{" "}
      </Box>
    </Box>
  );
};
export default FAQPage;
