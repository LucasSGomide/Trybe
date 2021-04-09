import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';


describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

  });
  test('Setting initial value for counter and checking text', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks from 0 to 1', () => {
    const { queryByText, queryByRole } = renderWithRedux(<App />)
    const buttonAdicionar = queryByRole('button');

    fireEvent.click(buttonAdicionar)

    expect(queryByText('1')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks from 10 to 11', () => {
    const { queryByText, queryByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByRole('button');
    const divNumero = document.querySelector('.counter');

    console.log(divNumero.innerHTML);

    fireEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  });
});