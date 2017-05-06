import './App.css'
import {
  ApolloClient,
  ApolloProvider
} from 'react-apollo'
import React, { Component } from 'react'
import ChannelsList from './channels.js'
import logo from './logo.svg'
import mockNetworkInteface from './mock-network-interface'

const client = new ApolloClient({ networkInterface: mockNetworkInteface })

class App extends Component {
   render() {
     return (
       <ApolloProvider client={client}>
         <div className="App">
           <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2>Welcome to Apollo</h2>
           </div>
           <ChannelsList />
         </div>
       </ApolloProvider>
     );
   }
 }
export default App
