import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

// import { rest } from 'msw'
// import { setupServer } from 'msw/node'

// const server = setupServer(
//     // NOT "/user", nothing to be relative to!
//     rest.get('https://api.backend.dev/user', (req, res, ctx) => {
//       return res(ctx.json({ firstName: 'John' }))
//     }),
//   )

// beforeAll(() => server.listen())

// afterEach(() => server.resetHandlers())

// afterAll(() => server.close())

describe('App Component Integretion', () => {
    // it.todo('App tests to do!')

    it('renders app as expected', () => {
        render(<App />);
    
        let method = screen.getByTestId('app-method');
        let url = screen.getByTestId('app-url');
        expect(method).toHaveTextContent('Request Method:');       
        expect(url).toHaveTextContent('URL:');      
    })

    it('allows form use & renders results', () => {
        render(<App />);

        let method = screen.getByTestId('app-method');
        let url = screen.getByTestId('app-url');
        let get = screen.getByTestId('form-get');
        let urlInput = screen.getByTestId('form-input')
        let button = screen.getByTestId('form-button')
        let results = screen.getByTestId('results-section')

        fireEvent.change(urlInput, { target: { value: 'https://pokeapi.co/api/v2/pokemon'}})
        fireEvent.click(get);
        fireEvent.click(button);

        expect(method).toHaveTextContent('Request Method: GET');   
        expect(url).toHaveTextContent('URL: https://pokeapi.co/api/v2/pokemon');
        expect(results).toHaveTextContent(``);
    })
    
})
