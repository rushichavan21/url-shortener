import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContextHook';
import { fetchAllUrls } from '../../api/shortUrl.api';
import { useQuery } from '@tanstack/react-query';
import UrlCard from '../urlCard/UrlCard';
import "./viewall.css"
const ViewAll = () => {
  const { user } = useAuthContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['urls'],
    queryFn: () => fetchAllUrls(user.token),
    enabled: !!user?.token,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="viewall-container">
     {data?.urls.map((url) => (
    <UrlCard key={url.shortUrl} data={url} />
  ))}
      </div>
    
    </div>
  );
};

export default ViewAll;
