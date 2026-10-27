import classNames from "classnames";

export default function Badge({
  children,
  variant = "success",
  shape = "square",
  size = "sm",

  ...rest
}) {
  const allClasses = classNames(
    "badge",
    `variant-${variant}`,
    `badge-${shape}`,
    `badge-${size}`,
  );

  return (
    <>
      <span className={allClasses} {...rest}>
        {children}
      </span>
    </>
  );
}
