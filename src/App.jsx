import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  data: null,
  loading: false,
  history: [],
}

export const dataReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD DATA':
      return {
        ...state, 
        data: action.payload}
    case 'LOADING':
      return {...state, 
       loading: action.payload}
    case 'HISTORY':
      return {...state,
        history: [...state.history, action.payload]}
    default:
      return state;
  }
}

function App(){

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [history, setHistory] = useState([]);
  // const [input, setInput] = useState('');
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    console.log('An Event Occured');
  });

  useEffect(() => {
    try{
      dispatch({type: 'LOADING', payload: true });
      async function getData(){
        if(requestParams.method === 'GET'){
          let response = await axios.get(requestParams.url);
          dispatch({type: 'ADD DATA', payload: response.data });
          let historyData = [requestParams, response.data];
          dispatch({type: 'HISTORY', payload: historyData });
        }
        // if(requestParams.method === 'POST'){
          //   let response = await axios.post(requestParams.url, requestParams.json)
          //   setData(response.data)
          // }
          // if(requestParams.method === 'PUT'){
            //   let response = await axios.put(requestParams.url, requestParams.json)
            //   setData(response.data)
            // }
        // if(requestParams.method === 'DELETE'){
        //   let response = await axios.delete(requestParams.url)
        //   setData(response.data)
        // }
      }
      if(requestParams.method && requestParams.url){
        getData();
        dispatch({type: 'LOADING', payload: false });
      }
    } catch {
      dispatch({type: 'ADD DATA', payload: 'no data available' });
      dispatch({type: 'LOADING', payload: false });
    }
  }, [requestParams])
  
  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  }

  const historyClickHandler = (results) => {
    dispatch({type: 'ADD DATA', payload: results})
  }
  
  return (
    <>
      <Header />
      <div data-testid="app-method" className="divvy">Request Method: {requestParams.method}</div>
      <div data-testid="app-url" className="divvy">URL: {requestParams.url}</div>
      { 
        requestParams.json
        ? <div className="divvy">Sent JSON: {requestParams.json}</div>
        : <div></div>
      }
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <History history={state.history} historyClickHandler={historyClickHandler}/>
      <Footer />
    </>
  );
}

export default App;
