/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TopQuoteListQuotesQueryVariables = {};
export type TopQuoteListQuotesQueryResponse = {
    readonly topQuotes: ReadonlyArray<{
        readonly id: string;
        readonly votes: number;
        readonly content: string;
    }>;
};
export type TopQuoteListQuotesQuery = {
    readonly response: TopQuoteListQuotesQueryResponse;
    readonly variables: TopQuoteListQuotesQueryVariables;
};



/*
query TopQuoteListQuotesQuery {
  topQuotes {
    id
    votes
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "topQuotes",
    "storageKey": null,
    "args": null,
    "concreteType": "Quote",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "votes",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TopQuoteListQuotesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TopQuoteListQuotesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TopQuoteListQuotesQuery",
    "id": null,
    "text": "query TopQuoteListQuotesQuery {\n  topQuotes {\n    id\n    votes\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '388359c1b71a29ad9bf15f3d4edd62db';
export default node;
