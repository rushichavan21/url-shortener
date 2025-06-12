import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContextHook.js';
import { fetchAllUrls } from '../../api/shortUrl.api';
import { useQuery } from '@tanstack/react-query';
import UrlCard from '../urlCard/UrlCard';
import "./viewall.css";

const ViewAll = () => {
  const { user } = useAuthContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['urls'],
    queryFn: () => fetchAllUrls(user.token),
    enabled: !!user?.token,
  });

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const urls = data?.urls || [];

  return (
    <div className='viewall-wrapper'>
      <h2>All Short URLs</h2>
      {urls.length === 0 ? (
        <p>You haven’t created any URLs yet.</p>
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
