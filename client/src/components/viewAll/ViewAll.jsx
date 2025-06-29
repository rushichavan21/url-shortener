import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContextHook.js';
import { fetchAllUrls } from '../../api/shortUrl.api';
import { useQuery } from '@tanstack/react-query';
import UrlCard from '../urlCard/UrlCard';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner.jsx';
import './viewall.css';

const ViewAll = () => {
  const { user } = useAuthContext();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['urls'],
    queryFn: () => fetchAllUrls(user.token),
    enabled: true,
    refetchOnWindowFocus: false, // prevents unnecessary refetches
  });

  const urls = data?.urls || [];

  return (
    <div className='viewall-wrapper'>
      {isLoading || isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <div className="error-message">
          <p>Something went wrong: {error.message}</p>
          <button onClick={() => refetch()} className="retry-button">
            Retry
          </button>
        </div>
      ) : urls.length === 0 ? (
        <p className='viewall-para'>You haven’t created any URLs yet.</p>
      ) : (
        <div className="viewall-container">
          {urls.map((url) => (
            <UrlCard key={url.shortUrl} data={url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAll;
