import classNames from "classnames";
export default function Banner({
  variant = "success",
  title,
  children,
  ...rest
}) {
  const className = classNames("banner", `variant-${variant}`);

  const icons = {
    default: <img src="./icon-success.svg" />,
    success: <img src="./icon-success.svg" />,
    warning: <img src="./icon-info.svg" />,
    neutral: <img src="./icon-natural.svg" />,
    danger: <img src="./icon-danger.svg" />,
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="icon">{icons[variant]}</div>
        <div>
          <h2 className="title">{title}</h2>
          <p className="text">{children}</p>
        </div>
      </div>
    </>
  );
}
