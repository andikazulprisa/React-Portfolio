import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-black z-50">
      <ThreeCircles
        height="100"
        width="100"
        color="#8b5cf6"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};

export default Preloader;
