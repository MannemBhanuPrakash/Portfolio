import { useEffect } from "react";
import { hotjar } from "react-hotjar";

const HotjarInit = () => {
  useEffect(() => {
    const hotjarId = 5278045; // Replace with your Hotjar ID
    const version = 6; // Hotjar version

    // Initialize Hotjar
    hotjar.initialize(hotjarId, version);

    // Optional: You can use these methods for additional tracking
    hotjar.identify('123', { name: 'John Doe', email: 'john.doe@example.com' });
    // hotjar.event('event_name');
  }, []);

  return null; // No visible UI needed
};

export default HotjarInit;
