import TwildSummary from "./TwildSummary";

export default function TwildDetails({ data }) {
  return (
    <article>
      <TwildSummary.Header data={data} />
    </article>
  );
}

TwildDetails.propTypes = TwildSummary.propTypes;
