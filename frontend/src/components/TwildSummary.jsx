import PropTypes from "prop-types";

const TwildProps = PropTypes.shape({
  url: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
});

export default function TwildSummary({ data }) {
  return (
    <article>
      <Header data={data} />
    </article>
  );
}

TwildSummary.propTypes = {
  data: TwildProps.isRequired,
};

function Header({ data }) {
  return (
    <header>
      <h1>{data.url}</h1>
      <time dateTime={data.updated_at}>{data.updated_at}</time>
    </header>
  );
}

Header.propTypes = {
  data: TwildProps.isRequired,
};

TwildSummary.Header = Header;
