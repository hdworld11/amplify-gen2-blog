import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Stack } from 'aws-cdk-lib';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage
});

// Override generated resources
backend.storage.resources.cfnResources.cfnBucket.lifecycleConfiguration = {
  rules: [{
    expirationInDays: 1,
    prefix: 'room/',
    status: 'Enabled'
  }]
}