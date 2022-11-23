import React, { useEffect } from "react";
import TutoRules from "./components/TutoRules";

const Rules = () => {
  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);
  return (
    <div>
      <TutoRules />
    </div>
  );
};

export default Rules;
