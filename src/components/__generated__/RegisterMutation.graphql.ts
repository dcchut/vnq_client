/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type RegisterMutationVariables = {
    readonly username: string;
    readonly password: string;
};
export type RegisterMutationResponse = {
    readonly signup: string;
};
export type RegisterMutation = {
    readonly response: RegisterMutationResponse;
    readonly variables: RegisterMutationVariables;
};



/*
mutation RegisterMutation(
  $username: String!
  $password: String!
) {
  signup(username: $username, password: $password)
}
*/

const node: ConcreteRequest = (function(){
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
    "name": "signup",
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
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $username: String!\n  $password: String!\n) {\n  signup(username: $username, password: $password)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '507d4161f646e39b6dfc8fe0621020f4';
export default node;
