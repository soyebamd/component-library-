import classNames from "classnames";
import Icons from "./icon";
export default function Banner({ variant = "success", title, children }) {
  const className = classNames("banner", `variant-${variant}`);

  return (
    <>
      <div className={className}>
        <Icons icon={variant} />
        <div>{children}</div>
      </div>
    </>
  );
}
