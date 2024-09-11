import React, { useEffect, useState } from 'react';
import { getCompanies } from '../../services/api';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const response = await getCompanies();
        setCompanies(response?.data?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching companies: {error.message}</p>;

  return (
    <ul>
      {companies.length > 0 ? (
        companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))
      ) : (
        <p>No data found.</p>
      )}
    </ul>
  );
};

export default CompanyList;