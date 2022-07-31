// ./components/ThemeShowcase.js
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icons from "./Icons";

//  themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk",
//  "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury",
// "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],

import { Cog } from "./svg/icons/Heroicons";
const ThemeShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="p-8" data-theme="">
      <div className="p-4">
        The current theme is: <strong>{theme}</strong>
      </div>

      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center justify-between ">
          <div>Click me to show/hide content</div>

          <div class="flex-none">
            <button class="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <Icons />
          <Icons />
          <Icons />
          <Icons />
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;
