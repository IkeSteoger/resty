import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Form from '../Components/Form'

describe('results', () => {
    // it.todo('App tests to do!')

    it('renders app as expected', () => {
        render(<App />);
    
        let method = screen.getByTestId('app-method');
        let url = screen.getByTestId('app-url');
        expect(method).toHaveTextContent('Request Method:');       
        expect(url).toHaveTextContent('URL:');      
    })

    // it('app changes properly when event fired', () => {
    // render(<App />);
    // render(<Form />);

    // let method = screen.getByTestId('app-method');
    // let url = screen.getByTestId('app-url');


    // expect(method).toHaveTextContent('Request Method:');   
    // expect(url).toHaveTextContent('URL:');

    // const get = screen.getByTestId('form-get');
    // fireEvent.click(get);

    // expect(method).toHaveTextContent('Request Method: GET');   
    // expect(url).toHaveTextContent('URL: https://pokeapi.co/api/v2/');
    // })
    
})
