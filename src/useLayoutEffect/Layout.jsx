import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Loading, Quoate } from '../examples';
import { useCounter, useFetch } from '../hooks';

export const Layout = ({ initialValue }) => {
  const { counter, increment } = useCounter(initialValue);
  const { data, loading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];
  
  return (
    <>
      <h1>Breaking Back Quotes</h1>
      <hr />
      { loading 
        ? <Loading />
        : <Quoate author={ author } quote={ quote } />
      }
      <Button 
        className="ms-1" 
        variant="info"
        onClick={ () => increment(1) }
        disabled={ loading }
      >
        Next Quote
      </Button>
    </>
  );
};

Layout.propTypes = {
  initialValue: PropTypes.number.isRequired
};

Layout.defaultProps = {
  initialValue: 1
};