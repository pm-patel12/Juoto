// Generates 10 shades of basecolor

import chroma from "chroma-js";

export function generateColorShades(baseColor) {
      const scale = chroma.scale(["#fff", baseColor, "#000"]).mode("lab").colors(10);

      return {
            50: scale[0],
            100: scale[1],
            200: scale[2],
            300: scale[3],
            400: scale[4],
            500: scale[5],
            600: scale[6],
            700: scale[7],
            800: scale[8],
            900: scale[9],
      };
}