import { useEffect, useState } from "react";

export default function Loader({ isLoading }) {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className={`loader-container ${isLoading ? "show" : "hide"}`}>
      <div className="loader"></div>
    </div>
  );
}
