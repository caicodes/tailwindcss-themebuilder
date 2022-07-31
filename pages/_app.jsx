import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeSelect from "../components/ThemeSelect";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeSelect />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
