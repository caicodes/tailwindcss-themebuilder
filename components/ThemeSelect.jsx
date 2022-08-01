import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Cog, Adjustments } from "./svg/icons/Heroicons";

// import { Cog } from "./svg/icons/Heroicons";

const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: "light" },
    { name: "dark" },
    { name: "cupcake" },
    { name: "bumblebee" },
    { name: "emerald" },
    { name: "corporate" },
    { name: "synthwave" },
    { name: "retro" },
    { name: "cyberpunk" },
    { name: "valentine" },
    { name: "halloween" },
    { name: "garden" },
    { name: "forest" },
    { name: "aqua" },
    { name: "lofi" },
    { name: "pastel" },
    { name: "fantasy" },
    { name: "wireframe" },
    { name: "black" },
    { name: "luxury" },
    { name: "dracula" },
    { name: "cmyk" },
    { name: "autumn" },
    { name: "business" },
    { name: "acid" },
    { name: "lemonade" },
    { name: "night" },
    { name: "coffee" },
    { name: "winter" },
  ];

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl hover:bg-primary hover:text-primary-content font-extrabold">
          <Adjustments />
          <div className="ml-2">tailwindcss themebuilder 🌼</div>
          <div className="ml-1 opacity-60">{theme}</div>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="btn btn-ghost btn-circle avatar hover:bg-primary-focus/50"
          >
            <div className="w-8 p-1 flex justify-center items-center rounded-full text-primary">
              <Cog />
            </div>
          </label>

          <div
            tabIndex="0"
            className="mt-3 p-2 rounded-lg shadow-2xl menu dropdown-content w-96 bg-primary -top-4"
          >
            <div className="bg-primary text-primary-content pt-2 pb-4 px-4">
              <div className="flex gap-4 place-items-center justify-between w-full  ">
                <div>
                  The current theme is:{" "}
                  <strong className="uppercase">{theme}</strong>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-base-100/50 text-base-content p-4 ">
              {themes.map((daisyuiTheme, index) => (
                <div
                  key={index}
                  data-theme={daisyuiTheme.name}
                  className="btn text-xs"
                  onClick={() => setTheme(daisyuiTheme.name)}
                >
                  {daisyuiTheme.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
