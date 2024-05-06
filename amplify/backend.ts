import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storageBucket1 } from './storage/resource';

defineBackend({
  auth,
  data,
  storageBucket1
});
