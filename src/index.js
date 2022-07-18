import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store, persistor, sagaMiddleware } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from "react-dom/client";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//Configuracion del cliente para usarlo en toda la aplicacion. 
const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<PersistGate loading={null} persistor={persistor}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</PersistGate>
		</ApolloProvider>,
	</Provider>,
	document.getElementById('root')

);

 
reportWebVitals();
