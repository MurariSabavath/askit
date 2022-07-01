import React, { useEffect, useState } from "react";

const ProtectedComponent = ({ children, userId }) => {
  const [isAllowed, setIsAllowed] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(userId, user);
    if (user) {
      setIsAllowed(userId === user._id);
    }
  }, []);
  if (!isAllowed) return null;

  return <>{children}</>;
};

export default ProtectedComponent;
