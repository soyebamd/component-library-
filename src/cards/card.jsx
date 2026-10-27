import classNames from "classnames";

export default function Card({ children, variant = "default" }) {
  return (
    <div className={`card variant-${variant}`}>
      <span className="card__icon">
        <img src="./upload.svg" />
      </span>

      <div className="card__content">{children}</div>
    </div>
  );
}
