import './Results.scss';
import JSONPretty from 'react-json-pretty';
const JSONPrettyTheme = require('react-json-pretty/dist/adventure_time');

function Results(props){
  return (
    <section data-testid="results-section">
      {
        props.loading
        ? <div>Waiting for search query OR loading...!</div>
        : <JSONPretty id="json-pretty" theme={JSONPrettyTheme} data={props.data}></JSONPretty>
      }
    </section>
  );
}
export default Results;
