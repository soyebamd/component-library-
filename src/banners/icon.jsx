export default function Icons({ icon }) {
  const icons = {
    default: <img src="./icon-success.svg" />,
    success: <img src="./icon-success.svg" />,
    warning: <img src="./icon-info.svg" />,
    neutral: <img src="./icon-natural.svg" />,
    danger: <img src="./icon-danger.svg" />,
  };

  return <div className="icon">{icons[icon]}</div>;
}
