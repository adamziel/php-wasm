import { PhpBase } from './PhpBase';

const PhpBinary = require('./php-worker');

export class PhpWorker extends PhpBase
{
	constructor(args = {})
	{
		super(PhpBinary, args);
	}
}
