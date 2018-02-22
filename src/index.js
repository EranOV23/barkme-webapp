import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { LocaleProvider } from "antd";

import registerServiceWorker from "./registerServiceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:9090/graphql" }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
