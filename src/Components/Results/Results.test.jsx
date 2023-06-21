import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Results from '.';

describe('results', () => {

  it('renders results as expected', () => {
    const data = {
        count: 2,
        results: [
          {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ],
      };

    render(<Results data={data}/>);

    let results = screen.getByTestId('results-section');
    expect(results).toHaveTextContent(`{ "count": 2, "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ] }`);
    
  })

})