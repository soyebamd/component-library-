export default function Badge(
  { children, variant = null, shape = "pill" },
  ...rest
) {
  return (
    <>
      <span className={`badge badge-${variant} shape-${shape}`} {...rest}>
        {children}
      </span>
    </>
  );
}
