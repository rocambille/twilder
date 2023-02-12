import ResourceSummary from "./ResourceSummary";

export default function ResourceDetails({ data }) {
  return (
    <article>
      <ResourceSummary.Header data={data} />
    </article>
  );
}

ResourceDetails.propTypes = ResourceSummary.propTypes;
