/**
 * @flow
 * @relayHash 92b2c170be04f29e1eccb59f4f528686
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuoteSubmitMutationVariables = {|
  quote: string
|};
export type QuoteSubmitMutationResponse = {|
  +newQuote: {|
    +id: string,
    +content: string,
    +votes: number,
    +visible: boolean,
    +user: ?{|
      +username: string,
      +isAdmin: boolean,
    |},
  |}
|};
export type QuoteSubmitMutation = {|
  variables: QuoteSubmitMutationVariables,
  response: QuoteSubmitMutationResponse,
|};
*/


/*
mutation QuoteSubmitMutation(
  $quote: String!
) {
  newQuote(quote: $quote) {
    id
    content
    votes
    visible
    user {
      username
      isAdmin
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "quote",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "newQuote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "quote",
        "variableName": "quote"
      }
    ],
    "concreteType": "Quote",
    "plural": false,
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
        "name": "content",
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
        "name": "visible",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isAdmin",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuoteSubmitMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "QuoteSubmitMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "QuoteSubmitMutation",
    "id": null,
    "text": "mutation QuoteSubmitMutation(\n  $quote: String!\n) {\n  newQuote(quote: $quote) {\n    id\n    content\n    votes\n    visible\n    user {\n      username\n      isAdmin\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8bb2e826f450efb8702b5dbe0379f6a9';
module.exports = node;
