import '../App.css';
import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const category = 'success';
    const getQuotes = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'OKpI3STpcOaUiYWpVrjg9Q==yE7SfUxIe8yPriO5' },
        });
        const data = await response.json();
        setQuote(`${data[0].quote} - ${data[0].author}`);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getQuotes();
  }, []);

  return (

    <div className="quote-container">
      <p>{isLoading ? 'Loading...' : (error || quote)}</p>
    </div>
  );
}

export default Quote;
