import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { LocaleProvider } from "antd";

import registerServiceWorker from "./registerServiceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://barkme-server.herokuapp.com/graphql" }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </LocaleProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
