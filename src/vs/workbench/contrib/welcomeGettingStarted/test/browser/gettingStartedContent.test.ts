/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import assert from 'assert';
import { ensureNoDisposablesAreLeakedInTestSuite } from '../../../../../base/test/common/utils.js';
import { walkthroughs } from '../../common/gettingStartedContent.js';

suite('Getting Started Content', () => {

	ensureNoDisposablesAreLeakedInTestSuite();

	test('SetupWeb walkthrough contains remote compute step', () => {
		const setupWebWalkthrough = walkthroughs.find(w => w.id === 'SetupWeb');
		assert(setupWebWalkthrough, 'SetupWeb walkthrough should exist');
		assert(setupWebWalkthrough.content.type === 'steps', 'SetupWeb walkthrough should have steps');
		
		const remoteComputeStep = setupWebWalkthrough.content.steps.find(s => s.id === 'remoteComputeWeb');
		assert(remoteComputeStep, 'remoteComputeWeb step should exist in SetupWeb walkthrough');
		assert.strictEqual(remoteComputeStep.title, 'Remote Compute', 'Remote compute step should have correct title');
		assert(remoteComputeStep.description.includes('Hello world'), 'Remote compute step should contain hello world message');
		assert.strictEqual(remoteComputeStep.when, 'isWeb && remoteName', 'Remote compute step should have correct condition');
	});

	test('remoteComputeWeb step has correct media configuration', () => {
		const setupWebWalkthrough = walkthroughs.find(w => w.id === 'SetupWeb');
		const remoteComputeStep = setupWebWalkthrough!.content.steps.find(s => s.id === 'remoteComputeWeb');
		
		assert(remoteComputeStep, 'remoteComputeWeb step should exist');
		assert.strictEqual(remoteComputeStep.media.type, 'svg', 'Remote compute step should use SVG media');
		assert.strictEqual(remoteComputeStep.media.path, 'terminal.svg', 'Remote compute step should use terminal.svg');
		assert(remoteComputeStep.media.altText.includes('Remote compute'), 'Remote compute step should have appropriate alt text');
	});
});