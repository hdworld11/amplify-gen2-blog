import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: 'gen2-multi-cursor-demo-app',
  access: allow => ({
    'room/*': [
      allow.authenticated.to(['read','write','delete'])
      // allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});