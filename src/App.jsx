import React, { useState } from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App(){

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({})
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(true);
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);
    setRequestParams(requestParams);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Header />
      <div data-testid="app-method" className="divvy">Request Method: {requestParams.method}</div>
      <div data-testid="app-url" className="divvy">URL: {requestParams.url}</div>
      { 
        requestParams.json
        ? <div className="divvy">Sent JSON: {requestParams.json}</div>
        : <div></div>
      }
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
