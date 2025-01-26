
import React, { createContext, useContext, useState } from 'react';

// Create context
 export const StudentContext = createContext();

// Create a provider component
export const StudentProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); 


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <StudentContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </StudentContext.Provider>
  );
};


// export const useStudentContext = () => useContext(StudentContext);