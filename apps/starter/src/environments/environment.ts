// Copyright 2022 Meta Mind AB
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @file A skeleton environment, which is replaced via Angular's build configurations.
 *
 * This file should not be edited unless required properties have been added to the interface.
 * @see {@link https://github.com/normative-io/business-carbon-calculator#setup}
 */

import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  styleguide: false, // Set to false unless actively using the styleguide

  // Normative API URLs
  NORMATIVE_AUTH_URL: '',
  NORMATIVE_DATA_UPLOAD_URL: '',

  // Authentication
  AUTH0_CLIENT_ID: '',
  AUTH0_DOMAIN: '',
  AUTH0_REDIRECT_URI: '',
  AUTH0_AUDIENCE: '',

  // Analytics & Monitoring
  GA_MEASUREMENT_ID: '',
  HOTJAR_ID: '',
  HOTJAR_SNIPPET_VERSION: '',
  SENTRY_DSN: '',
  SENTRY_ENVIRONMENT: '',
};

