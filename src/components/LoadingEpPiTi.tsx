import React from "react";
import type { LoadingEpPiTiProps } from "../types";

/**
 * A 3D rotating loading component with three colored items
 *
 * @example
 * ```tsx
 * <LoadingEpPiTi 
 *   size={1.2} 
 *   colors={["#ff6b6b", "#4ecdc4", "#45b7d1"]} 
 *   showText={true}
 *   text="Loading Data..." 
 * />
 * ```
 */
export const LoadingEpPiTi: React.FC<LoadingEpPiTiProps> = ({
  size = 1,
  colors = ["#1169B0", "#F27227", "#16B14B"],
  speed = 0.3,
  className = "",
  ariaLabel = "Loading...",
  showText = false,
  text = "Loading...",
}) => {
  const baseWidth = 45 * size;
  const baseHeight1 = 60 * size;
  const baseHeight2 = 80 * size;
  const gap = 10 * size;

  const containerStyle: React.CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  };

  const wrapStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const innerStyle: React.CSSProperties = {
    perspective: "500px",
  };

  const logolistStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: `${gap}px`,
  };

  const getItemStyle = (index: number): React.CSSProperties => ({
    width: baseWidth,
    height: index === 1 ? baseHeight2 : baseHeight1,
    backgroundColor: colors[index],
    borderRadius: "35% 0% 35% 0%",
    transformStyle: "preserve-3d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
    animation: `spin${index + 1} ${speed}s linear infinite`,
  });

  return (
    <div style={containerStyle} className={className}>
      <style>
        {`
          @keyframes spin1 {
            from { transform: skewX(-15deg) rotateY(0deg); }
            to { transform: skewX(-15deg) rotateY(360deg); }
          }

          @keyframes spin2 {
            from { transform: skewX(-15deg) rotateY(120deg); }
            to { transform: skewX(-15deg) rotateY(480deg); }
          }

          @keyframes spin3 {
            from { transform: skewX(-15deg) rotateY(240deg); }
            to { transform: skewX(-15deg) rotateY(600deg); }
          }
        `}
      </style>
      <div style={wrapStyle}>
        <div style={innerStyle}>
          <div
            style={logolistStyle}
            role="status"
            aria-label={ariaLabel}
            data-testid="loading-eppiti"
          >
            {colors.map((_, index) => (
              <div
                key={index}
                style={getItemStyle(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {showText && (
        <span style={{ fontSize: `${14 * size}px`, color: colors[0] }}>{text}</span>
      )}
    </div>
  );
};
