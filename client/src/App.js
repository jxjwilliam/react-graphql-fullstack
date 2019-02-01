import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'
import {
  gql,
  graphql,
  ApolloProvider
} from 'react-apollo'


const client = new ApolloClient();

const channelsListQuery = gql`
  query channelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return <ul className="Item-list">
    { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
  </ul>;
};

class App extends Component {
  render() {
    const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList)
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
