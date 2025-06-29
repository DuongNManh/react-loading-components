export interface LoadingSpinnerProps {
  /**
   * Size of the spinner in pixels
   * @default 40
   */
  size?: number;

  /**
   * Color of the spinner
   * @default "#3b82f6"
   */
  color?: string;

  /**
   * Animation speed in seconds
   * @default 1
   */
  speed?: number;

  /**
   * Thickness of the spinner border
   * @default 4
   */
  thickness?: number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * ARIA label for accessibility
   * @default "Loading..."
   */
  ariaLabel?: string;

  /**
   * Whether to show the loading text
   * @default false
   */
  showText?: boolean;

  /**
   * Custom loading text
   * @default "Loading..."
   */
  text?: string;
}

export interface PulseLoaderProps {
  /**
   * Size of each dot in pixels
   * @default 12
   */
  size?: number;

  /**
   * Color of the dots
   * @default "#3b82f6"
   */
  color?: string;

  /**
   * Animation speed in seconds
   * @default 1.4
   */
  speed?: number;

  /**
   * Number of dots
   * @default 3
   */
  count?: number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * ARIA label for accessibility
   * @default "Loading..."
   */
  ariaLabel?: string;
}

export interface SkeletonProps {
  /**
   * Width of the skeleton
   * @default "100%"
   */
  width?: string | number;

  /**
   * Height of the skeleton
   * @default 20
   */
  height?: string | number;

  /**
   * Border radius
   * @default 4
   */
  borderRadius?: string | number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Whether to animate
   * @default true
   */
  animate?: boolean;

  /**
   * Animation speed in seconds
   * @default 2
   */
  speed?: number;
}

export interface LoadingEpPiTiProps {
  /**
   * Size multiplier for the component
   * @default 1
   */
  size?: number;

  /**
   * Colors for the three items
   * @default ["#1169B0", "#F27227", "#16B14B"]
   */
  colors?: [string, string, string];

  /**
   * Animation speed in seconds
   * @default 0.3
   */
  speed?: number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * ARIA label for accessibility
   * @default "Loading..."
   */
  ariaLabel?: string;

  /**
   * Whether to show the loading text
   * @default false
   */
  showText?: boolean;

  /**
   * Custom loading text
   * @default "Loading..."
   */
  text?: string;
}
