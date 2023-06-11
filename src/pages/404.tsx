import { navigate } from "gatsby";
import { useEffect } from "react";

export default function NotFoundPage(){
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div>
      <p>
        Redirecting...
      </p>
    </div>
  )
}