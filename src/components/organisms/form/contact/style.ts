// bulging "pillow" outline in objectBoundingBox units (0–1), so it scales with the card
// every joint lies on the line between its two neighbouring control points, so no corner has a kink
export const CARD_SHAPE_ID = "contact-card-shape";
export const CARD_SHAPE_PATH = [
  "M 0.086 0.031",
  "Q 0.5 -0.01 0.919 0.026", // top edge
  "Q 0.96 0.03 0.962 0.072", // top-right corner
  "Q 0.985 0.5 0.962 0.919", // right edge
  "Q 0.96 0.96 0.919 0.965", // bottom-right corner
  "Q 0.5 1.015 0.095 0.969", // bottom edge
  "Q 0.055 0.965 0.051 0.923", // bottom-left corner
  "Q 0.015 0.5 0.042 0.077", // left edge
  "Q 0.045 0.035 0.086 0.031 Z", // top-left corner
].join(" ");
