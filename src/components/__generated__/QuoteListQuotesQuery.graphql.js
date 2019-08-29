/**
 * @flow
 * @relayHash e5a341b5684fb67c4aebab7e397393f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuoteListQuotesQueryVariables = {||};
export type QuoteListQuotesQueryResponse = {|
  +quotes: $ReadOnlyArray<{|
    +id: string,
    +votes: number,
    +content: string,
  |}>
|};
export type QuoteListQuotesQuery = {|
  variables: QuoteListQuotesQueryVariables,
  response: QuoteListQuotesQueryResponse,
|};
*/


/*
query QuoteListQuotesQuery {
  quotes {
    id
    votes
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function () {
    var v0 = [
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "quotes",
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
            "text": "query QuoteListQuotesQuery {\n  quotes {\n    id\n    votes\n    content\n  }\n}\n",
            "metadata": {}
        }
    };
})();
// prettier-ignore
(node/*: any*/).hash = 'c93fe04c3173e51e843e09774c05d5ba';
module.exports = node;
