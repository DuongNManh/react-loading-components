import React from "react";
import type { LoadingSpinnerProps } from "../types";

/**
 * A customizable loading spinner component
 *
 * @example
 * ```tsx
 * <LoadingSpinner size={50} color="#ff6b6b" speed={0.8} />
 * ```
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = "#3b82f6",
  speed = 1,
  thickness = 4,
  className = "",
  ariaLabel = "Loading...",
  showText = false,
  text = "Loading...",
}) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
    border: `${thickness}px solid ${color}20`,
    borderTop: `${thickness}px solid ${color}`,
    borderRadius: "50%",
    animation: `spin ${speed}s linear infinite`,
  };

  const containerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={containerStyle} className={className}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={spinnerStyle}
        role="status"
        aria-label={ariaLabel}
        data-testid="loading-spinner"
      />
      {showText && (
        <span style={{ fontSize: "14px", color: color }}>{text}</span>
      )}
    </div>
  );
};
