import {JSX} from 'react';
import {useFetchBookOwners} from '../../shared/apiHooks/useFetchBookOwners';

const BookListPage = (): JSX.Element => {
  const {data, isLoading, error} = useFetchBookOwners();

  // // Map onwer books data to data list inf
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Book List</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default BookListPage;
