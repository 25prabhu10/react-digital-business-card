export const Button = ({ text, children, secondary }) => {
  return (
    <button className={`btn ${secondary && "btn--sec"}`}>
      {children} {text}
    </button>
  );
};
