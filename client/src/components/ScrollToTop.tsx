import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use instant for navigation, smooth for back-to-top button
    });
  }, [location]);

  return null;
}
