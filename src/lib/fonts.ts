import { Instrument_Serif, Manrope, Caveat } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-caveat",
  display: "swap",
});
