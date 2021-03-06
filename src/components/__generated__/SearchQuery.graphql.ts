/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SearchQueryVariables = {};
export type SearchQueryResponse = {
    readonly recentQuotes: ReadonlyArray<{
        readonly id: string;
        readonly votes: number;
        readonly content: string;
    }>;
};
export type SearchQuery = {
    readonly response: SearchQueryResponse;
    readonly variables: SearchQueryVariables;
};



/*
query SearchQuery {
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
    "name": "SearchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SearchQuery",
    "id": null,
    "text": "query SearchQuery {\n  recentQuotes {\n    id\n    votes\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '78966cd1677cfcb5f2dc3f92a6172077';
export default node;
