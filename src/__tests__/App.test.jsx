import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from '../App';


const server = setupServer(
    rest.get('/testGet', (req, res, ctx) => {
        return res(ctx.json({ greeting: 'Hello World' }))
}),
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('App Component Integretion', () => {
    // it.todo('App tests to do!')

    it('renders app as expected', () => {
        render(<App />);
    
        let method = screen.getByTestId('app-method');
        let url = screen.getByTestId('app-url');
        expect(method).toHaveTextContent('Request Method:');       
        expect(url).toHaveTextContent('URL:');      
    })

    it('allows form use & renders results', async () => {
        render(<App />);

        let method = screen.getByTestId('app-method');
        let url = screen.getByTestId('app-url');
        let get = screen.getByTestId('form-get');
        let urlInput = screen.getByTestId('form-input');
        let button = screen.getByTestId('form-button');
        
        fireEvent.change(urlInput, { target: { value: 'https://pokeapi.co/api/v2/pokemon'}});
        fireEvent.click(get);
        fireEvent.click(button);
        
        let results = await screen.findByTestId('results-section');
        
        expect(method).toHaveTextContent('Request Method: GET');   
        expect(url).toHaveTextContent('URL: https://pokeapi.co/api/v2/pokemon');
        expect(results).toHaveTextContent(``);
    })

    it('testing GET method', async () => {
        render(<App />);

        let method = screen.getByTestId('app-method');
        let url = screen.getByTestId('app-url');
        let get = screen.getByTestId('form-get');
        let urlInput = screen.getByTestId('form-input');
        let button = screen.getByTestId('form-button');
        
        fireEvent.change(urlInput, { target: { value: '/testGet'}});
        fireEvent.click(get);
        fireEvent.click(button);
        
        let results = await screen.findByTestId('results-section');
        
        expect(method).toHaveTextContent('Request Method: GET');   
        expect(url).toHaveTextContent('URL: /testGet');
        expect(results).toHaveTextContent(``);
    })
    
})
