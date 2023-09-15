import { toast } from "react-hot-toast";

interface ToastOptions {
  icon?: string;
  style?: React.CSSProperties;
}

// Function to show a toast message with custom options
export const showToast = (
  message: string,
  options: ToastOptions = {}
): void => {
  toast(message, {
    duration: 4000, // Duration in milliseconds
    ...options, // Merge custom options with default options
  });
};