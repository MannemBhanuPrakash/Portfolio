import React, { createContext, useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ open: false, severity: "info", message: "" });

  const showAlert = (severity, message) => {
    setAlert({ open: true, severity, message });
    setTimeout(() => {
      setAlert({ open: false, severity: "info", message: "" });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.open && (
        <Stack sx={{ position: "fixed", top: 100, right: 16, zIndex: 1400, width: "auto" }}>
          <Alert variant="filled" severity={alert.severity}>
            {alert.message}
          </Alert>
        </Stack>
      )}
    </AlertContext.Provider>
  );
};

// Custom hook to use the Alert context
export const useAlert = () => {
  return useContext(AlertContext);
};
