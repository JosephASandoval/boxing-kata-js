import { useState } from "react";

function useDisable() {
  const [isStarterDisabled, setIsStarterDisabled] = useState(false);
  const [isRefillDisabled, setIsRefillDisabled] = useState(false);

  function disableStarterLink() {
    setIsStarterDisabled(true);
    setIsRefillDisabled(false);
  }

  function disableRefillLink() {
    setIsRefillDisabled(true);
    setIsStarterDisabled(false);
  }

  return {
    isStarterDisabled,
    isRefillDisabled,
    disableStarterLink,
    disableRefillLink,
  };
}

export default useDisable;
