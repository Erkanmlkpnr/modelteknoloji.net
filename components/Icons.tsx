/* Stroke-icon set of the new corporate design.
   Icons are plain path lists rendered as 24×24 stroke SVGs. */

export function Icon({
  paths,
  size = 24,
  strokeWidth = 1.6,
}: {
  paths: string[];
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export const CATEGORY_PATHS: Record<string, string[]> = {
  CAD: ["M12 2 L21 7 V17 L12 22 L3 17 V7 Z", "M3 7 L12 12 L21 7", "M12 12 V22"],
  Electrical: ["M13 2 L3 14 H11 L9 22 L21 10 H13 Z"],
  Simulation: [
    "M2 7 C4.5 3.5 7 3.5 9.5 7 C12 10.5 14.5 10.5 17 7 C18.5 5 20.5 4.5 22 5.5",
    "M2 13 C4.5 9.5 7 9.5 9.5 13 C12 16.5 14.5 16.5 17 13 C18.5 11 20.5 10.5 22 11.5",
    "M2 19 C4.5 15.5 7 15.5 9.5 19 C12 22.5 14.5 22.5 17 19 C18.5 17 20.5 16.5 22 17.5",
  ],
  Visualization: [
    "M2 12 C5 6.5 9 4.5 12 4.5 C15 4.5 19 6.5 22 12 C19 17.5 15 19.5 12 19.5 C9 19.5 5 17.5 2 12 Z",
    "M12 15 A3 3 0 1 0 12 9 A3 3 0 0 0 12 15 Z",
  ],
  PDM: [
    "M4 6 C4 4.3 7.6 3 12 3 C16.4 3 20 4.3 20 6 C20 7.7 16.4 9 12 9 C7.6 9 4 7.7 4 6 Z",
    "M4 6 V18 C4 19.7 7.6 21 12 21 C16.4 21 20 19.7 20 18 V6",
    "M4 12 C4 13.7 7.6 15 12 15 C16.4 15 20 13.7 20 12",
  ],
  CAM: ["M12 3 V7", "M12 17 V21", "M3 12 H7", "M17 12 H21", "M12 16 A4 4 0 1 0 12 8 A4 4 0 0 0 12 16 Z"],
  "2D": ["M4 4 H20 V20 H4 Z", "M4 14 L14 4", "M10 20 L20 10"],
};

export function CategoryIcon({ cat, size = 44 }: { cat: string; size?: number }) {
  return <Icon paths={CATEGORY_PATHS[cat] ?? CATEGORY_PATHS.CAD} size={size} />;
}

export const SHIELD_CHECK = [
  "M12 2 L20 6 V11 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 11 V6 Z",
  "M9 12 L11 14 L15 10",
];
export const SHIELD = ["M12 2 L20 6 V11 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 11 V6 Z"];
export const CLOCK = ["M12 21 A9 9 0 1 0 12 3 A9 9 0 0 0 12 21 Z", "M12 7 V12 L15.5 14"];
export const SCOPE = ["M4 4 H20 V20 H4 Z", "M4 9 H20 M9 9 V20"];
export const BOLT = ["M13 2 L3 14 H11 L9 22 L21 10 H13 Z"];
export const LAYERS = ["M12 2 L2 7 L12 12 L22 7 Z", "M2 17 L12 22 L22 17", "M2 12 L12 17 L22 12"];
export const GRADUATION = [
  "M22 10 L12 5 L2 10 L12 15 Z",
  "M6 12.5 V17 C6 17 8.5 19 12 19 C15.5 19 18 17 18 17 V12.5",
  "M22 10 V15",
];
export const MODULES = ["M4 4 H10 V10 H4 Z", "M14 4 H20 V10 H14 Z", "M4 14 H10 V20 H4 Z", "M14 14 H20 V20 H14 Z"];
export const LINK = ["M9 12 H15", "M6 8 A4 4 0 0 0 6 16 H9", "M18 8 A4 4 0 0 1 18 16 H15"];
export const TREND = ["M3 17 L9 11 L13 15 L21 7", "M15 7 H21 V13"];
export const HEADSET = [
  "M12 2 A9 9 0 0 1 21 11 V16 A2 2 0 0 1 19 18 H17 V11 A5 5 0 0 0 7 11 V18 H5 A2 2 0 0 1 3 16 V11 A9 9 0 0 1 12 2 Z",
  "M17 18 A3 3 0 0 1 14 21 H12",
];
export const USERS = [
  "M20 21 V19 C20 16.8 18.2 15 16 15 H8 C5.8 15 4 16.8 4 19 V21",
  "M12 11 A4 4 0 1 0 12 3 A4 4 0 0 0 12 11 Z",
];
export const USER_PLUS = [
  "M16 21 V19 C16 16.8 14.2 15 12 15 H6 C3.8 15 2 16.8 2 19 V21",
  "M9 12 A4 4 0 1 0 9 4 A4 4 0 0 0 9 12 Z",
  "M19 8 V14 M22 11 H16",
];
export const BULB = [
  "M9 18 H15",
  "M10 22 H14",
  "M12 2 A7 7 0 0 0 8 14 C8.7 14.7 9 15.2 9 16 H15 C15 15.2 15.3 14.7 16 14 A7 7 0 0 0 12 2 Z",
];
export const RECYCLE = [
  "M17 8 C19 10 19 14 17 16 C15 18 11 18 9 16",
  "M7 16 C5 14 5 10 7 8 C9 6 13 6 15 8",
  "M15 4 L15 8 L19 8",
  "M9 20 L9 16 L5 16",
];
export const AWARD = [
  "M12 15 A6 6 0 1 0 12 3 A6 6 0 0 0 12 15 Z",
  "M8.5 13.9 L7 22 L12 19 L17 22 L15.5 13.9",
];
export const MAIL = ["M4 4 H20 V20 H4 Z", "M4 6 L12 13 L20 6"];
export const PHONE = [
  "M22 16.9 V19.9 C22 21 21.1 21.9 20 21.8 C10.4 21.1 2.9 13.6 2.2 4 C2.1 2.9 3 2 4.1 2 H7.1 C8.1 2 8.9 2.7 9.1 3.7 L9.7 6.7 C9.8 7.4 9.6 8.1 9.1 8.6 L7.6 10.1 C9 13 11 15 13.9 16.4 L15.4 14.9 C15.9 14.4 16.6 14.2 17.3 14.3 L20.3 14.9 C21.3 15.1 22 15.9 22 16.9 Z",
];
export const PIN = ["M20 10 C20 16 12 22 12 22 S4 16 4 10 A8 8 0 0 1 20 10 Z", "M15 10 A3 3 0 1 0 9 10 A3 3 0 0 0 15 10 Z"];
