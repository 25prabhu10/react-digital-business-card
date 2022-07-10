export const Section = ({ head, desc }) => {
  return (
    <div className="section">
      <h3 className="section__head">{head}</h3>
      <p className="section__desc">{desc}</p>
    </div>
  );
};
