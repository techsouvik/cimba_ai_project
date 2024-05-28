import React, { useEffect } from 'react';

const History = ({ history, setHistory }) => {
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, [setHistory]);

  return (
    <div className="container mt-5">
      <h2>History</h2>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        <ul className="list-group">
          {history.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>Input:</strong> {item.input} <br />
              <strong>Response:</strong> {JSON.stringify(item.output)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
