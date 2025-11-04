/**
 * PrimaryButton Component
 * 
 * A versatile primary button component that supports both link and click functionality.
 * Can be used as a navigation link or as an action button.
 */
export const PrimaryButton = (props) => {
  const baseClasses = "inline-block px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transition-all duration-200 text-white dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white shadow-sm hover:shadow-md text-center";

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

export default PrimaryButton;

