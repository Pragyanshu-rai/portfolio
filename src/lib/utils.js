import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const downloadFile = async () => {
  const response = await fetch("https://github.com/Pragyanshu-rai/Pragyanshu-rai/blob/master/PragyanshuRaiResume.pdf");
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  // this will be new file name 
  a.download = 'PragyanshuRaiResume.pdf';
  a.click();
  // Cleanup
  window.URL.revokeObjectURL(url);
};