// const lambdaTunnel = require("@lambdatest/node-tunnel");
import lambdaTunnel from '@lambdatest/node-tunnel';

// Replace these with your LambdaTest credentials
const tunnelArguments = {
  user: process.env.LT_USERNAME || '<lambdatest-user>',
  key: process.env.LT_ACCESS_KEY || '<lambdatest-accesskey>',
};

// Start the tunnel
(async function () {
  try {
    const tunnelInstance = new lambdaTunnel();
    const isTunnelStarted = await tunnelInstance.start(tunnelArguments);
    if (isTunnelStarted) {
      console.log('Tunnel is Running Successfully');
      // Run your tests here
    }
  } catch (error) {
    console.error('------------------->Error starting the tunnel:', error);
  }
})();
