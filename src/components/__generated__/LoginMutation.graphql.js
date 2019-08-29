/**
 * @flow
 * @relayHash 3422234bccb21291b4332335957b498b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginMutationVariables = {|
  username: string,
  password: string,
|};
export type LoginMutationResponse = {|
  +login: string
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $username: String!
  $password: String!
) {
  login(username: $username, password: $password)
}
*/

const node/*: ConcreteRequest*/ = (function () {
    var v0 = [
            {
                "kind": "LocalArgument",
                "name": "username",
                "type": "String!",
                "defaultValue": null
            },
            {
                "kind": "LocalArgument",
                "name": "password",
                "type": "String!",
                "defaultValue": null
            }
        ],
        v1 = [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "login",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "password",
                        "variableName": "password"
                    },
                    {
                        "kind": "Variable",
                        "name": "username",
                        "variableName": "username"
                    }
                ],
                "storageKey": null
            }
        ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "LoginMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0/*: any*/),
            "selections": (v1/*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "LoginMutation",
            "argumentDefinitions": (v0/*: any*/),
            "selections": (v1/*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "LoginMutation",
            "id": null,
            "text": "mutation LoginMutation(\n  $username: String!\n  $password: String!\n) {\n  login(username: $username, password: $password)\n}\n",
            "metadata": {}
        }
    };
})();
// prettier-ignore
(node/*: any*/).hash = '837fd4c628438f6596482a0293977909';
module.exports = node;
