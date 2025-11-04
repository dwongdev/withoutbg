/**
 * SecondaryButton Component
 * 
 * A versatile secondary button component that supports both link and click functionality.
 * Can be used as a navigation link or as an action button.
 */
export const SecondaryButton = (props) => {
  const baseClasses = "inline-block px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-75 bg-white dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-800/30 dark:bg-gray-800 text-center";

  // If href prop is provided, render as anchor tag
  if (props.href) {
    const { href, children, className = "", onClick, target, rel } = props;
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  const { onClick, children, className = "", disabled, type = "button", ...buttonProps } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;

