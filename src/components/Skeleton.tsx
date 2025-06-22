import React from "react";
import type { SkeletonProps } from "../types";

/**
 * A skeleton loading placeholder component
 *
 * @example
 * ```tsx
 * <Skeleton width={200} height={24} />
 * <Skeleton width="100%" height={100} borderRadius={8} />
 * ```
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 20,
  borderRadius = 4,
  className = "",
  animate = true,
  speed = 2,
}) => {
  const skeletonStyle: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius:
      typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
    background: animate
      ? "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)"
      : "#f0f0f0",
    backgroundSize: animate ? "200% 100%" : "auto",
    animation: animate ? `shimmer ${speed}s ease-in-out infinite` : "none",
  };

  return (
    <div
      style={skeletonStyle}
      className={className}
      data-testid="skeleton"
      aria-label="Loading content..."
      role="status"
    >
      {animate && (
        <style>
          {`
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
          `}
        </style>
      )}
    </div>
  );
};
