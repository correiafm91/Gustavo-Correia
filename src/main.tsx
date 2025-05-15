
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Load the Respondi form script
const loadRespondiScript = () => {
  const script = document.createElement('script');
  script.src = "https://form.respondi.app/static/embed.js";
  script.async = true;
  return document.head.appendChild(script);
};

// Load script when page loads
document.addEventListener('DOMContentLoaded', loadRespondiScript);

createRoot(document.getElementById("root")!).render(<App />);
