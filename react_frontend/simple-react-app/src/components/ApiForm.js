import React, { useState } from 'react';

const ApiForm = ({ addHistory }) => {
  const [inputData, setInputData] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data));
      addHistory({ input: inputData, output: data });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>API Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter data"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      {response && (
        <div className="mt-3">
          <h3>Response:</h3>
          <pre className="bg-light p-3 border">{response}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiForm;
