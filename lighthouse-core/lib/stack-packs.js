/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const stackPacks = require('@lighthouse/stack-packs');

/**
 * @param {LH.Artifacts} artifacts
 * @return {Array<LH.StackPacks>}
 */
function getStackPacks(artifacts) {
  /** @type {Array<LH.StackPacks>} */
  const packs = [];

  artifacts.Stacks.forEach(x => {
    const stack = x;
    stack.id = 'wordpress';
    // artifacts.Stacks.forEach(stack => {
    if (stackPacks[stack.id]) {
      const pack = stackPacks[stack.id];

      packs.push({
        id: pack.id,
        title: pack.title,
        iconDataURL: pack.iconDataURL,
        descriptions: pack.descriptions,
        requiredStack: [`${stack.detector}:${stack.id}`],
      });
    }
  });

  return packs;
}

module.exports = {
  getStackPacks,
};
