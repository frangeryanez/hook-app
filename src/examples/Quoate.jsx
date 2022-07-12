import PropTypes from 'prop-types';

export const Quoate = ({ author, quote }) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="mb-2">{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
      </blockquote>
    </>
  );
};

Quoate.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};