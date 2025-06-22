import React from "react";
import type { PulseLoaderProps } from "../types";

/**
 * A pulse loading animation with multiple dots
 *
 * @example
 * ```tsx
 * <PulseLoader size={16} color="#10b981" count={5} />
 * ```
 */
export const PulseLoader: React.FC<PulseLoaderProps> = ({
  size = 12,
  color = "#3b82f6",
  speed = 1.4,
  count = 3,
  className = "",
  ariaLabel = "Loading...",
}) => {
  const containerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: `${size * 0.25}px`,
  };

  const dotStyle: React.CSSProperties = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: "50%",
    animation: `pulse ${speed}s ease-in-out infinite`,
  };

  return (
    <div
      style={containerStyle}
      className={className}
      role="status"
      aria-label={ariaLabel}
      data-testid="pulse-loader"
    >
      <style>
        {`
          @keyframes pulse {
            0%, 80%, 100% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          style={{
            ...dotStyle,
            animationDelay: `${(index * speed) / count}s`,
          }}
        />
      ))}
    </div>
  );
};
