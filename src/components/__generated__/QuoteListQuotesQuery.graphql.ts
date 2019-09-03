/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type QuoteListQuotesQueryVariables = {};
export type QuoteListQuotesQueryResponse = {
    readonly recentQuotes: ReadonlyArray<{
        readonly id: string;
        readonly votes: number;
        readonly content: string;
    }>;
};
export type QuoteListQuotesQuery = {
    readonly response: QuoteListQuotesQueryResponse;
    readonly variables: QuoteListQuotesQueryVariables;
};



/*
query QuoteListQuotesQuery {
  recentQuotes {
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
    "name": "recentQuotes",
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
    "name": "QuoteListQuotesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "QuoteListQuotesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "QuoteListQuotesQuery",
    "id": null,
    "text": "query QuoteListQuotesQuery {\n  recentQuotes {\n    id\n    votes\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '13cd4f95a8558ee49615642ac189357b';
export default node;
