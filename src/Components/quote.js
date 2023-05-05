import '../App.css';
import React, { useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const category = 'success';
  const getQuotes = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    try {
      setLoading(true);
      fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
          'X-Api-Key': 'OKpI3STpcOaUiYWpVrjg9Q==yE7SfUxIe8yPriO5',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // print error to console for debugging purposes
    }
  };

  useState(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
  };

  return (
    <div className="quote-container">
      <h2>
        {quote}
        <span className="author">
                &nbsp;(
          { author}
          )
        </span>
      </h2>
      <button
        type="button"
        onClick={handleClick}
        className="quote-button"
      >
        {loading ? 'Loading..' : 'New Quote'}
      </button>
    </div>
  );
}

export default Quote;
