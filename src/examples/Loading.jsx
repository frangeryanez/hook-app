import { Spinner } from 'react-bootstrap';

export const Loading = () => {
  return (
    <>
      <div className="col d-flex justify-content-center">
        <Spinner animation="border" role="status" variant="info" className="mt-2">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};