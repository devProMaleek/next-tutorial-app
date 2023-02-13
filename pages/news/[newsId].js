import { useRouter } from 'next/router';
import React from 'react';

const DetailsPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;


  return (
    <div>
      <h1>Details Page</h1>
      <p>{newsId}</p>
    </div>
  );
};

export default DetailsPage;
