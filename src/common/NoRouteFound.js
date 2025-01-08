import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h1" component="h1" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={goHome}
        sx={{ mt: 2 }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFoundPage;
