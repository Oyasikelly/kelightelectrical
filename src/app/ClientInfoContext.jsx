"use client";
import React, { createContext, useState } from "react";

// Create the context
export const ClientInfoContext = createContext();

// Provider component
export const ClientInfoProvider = ({ children }) => {
  const [clientInfo, setClientInfo] = useState({
    clientImg: "",
    clientName: "",
    clientTestimonial: "",
  });

  return (
    <ClientInfoContext.Provider value={{ clientInfo, setClientInfo }}>
      {children}
    </ClientInfoContext.Provider>
  );
};
