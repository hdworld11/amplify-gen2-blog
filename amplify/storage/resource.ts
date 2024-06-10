import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: 'gen2-multi-cursor-demo-app',
  access: allow => ({
    // 'room/*': [
    //   allow.authenticated.to(['get', 'write', 'delete']),
    // ]
    'room/{entity_id}/*': [
      // {entity_id} is the token that is replaced with the user identity id
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});