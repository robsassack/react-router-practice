import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true, state: "Error not found" });
    }, 1000);
  }, []);

  return <h1>Not found</h1>;
}
