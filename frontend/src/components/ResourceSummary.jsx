import PropTypes from "prop-types";

const ResourceProps = PropTypes.shape({
  uri: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
});

export default function ResourceSummary({ data }) {
  return (
    <article>
      <Header data={data} />
    </article>
  );
}

ResourceSummary.propTypes = {
  data: ResourceProps.isRequired,
};

function Header({ data }) {
  return (
    <header>
      <h1>{data.uri}</h1>
      <time dateTime={data.updated_at}>{data.updated_at}</time>
    </header>
  );
}

Header.propTypes = {
  data: ResourceProps.isRequired,
};

ResourceSummary.Header = Header;
