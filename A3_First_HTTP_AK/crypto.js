const crypto = require('crypto')

//const { createHmac } = await import('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);