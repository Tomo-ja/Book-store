

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const { CognitoIdentityServiceProvider } = require("aws-sdk");
 const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
 const USER_POOL_ID = "ca-central-1_CZWdw0Zdb";
 const stripe = require("stripe")("sk_test_51LGt3tD8Xqz5qk8QomeFC4kSg4pgbuJttFbm71D56s4wrCy5hN5N9qnY0TfWokmlJMcLbTiBzuyF3cBthNrb62t500A2btM3Jg");
 
 const getUserEmail = async (event) => {
   const params = {
     UserPoolId: USER_POOL_ID,
     Username: event.identity.claims.username
   };
   const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
   const { Value: email } = user.UserAttributes.find((attr) => {
     if (attr.Name === "email") {
       return attr.Value;
     }
   });
   return email;
 };
 
 /*
  * Get the total price of the order
  * Charge the customer
  */
 exports.handler = async (event) => {
   try {
     const { id, cart, total, address, token } = event.arguments.input;
     const { username } = event.identity.claims;
     const email = await getUserEmail(event);
 
     await stripe.charges.create({
       amount: total * 100,
       currency: "usd",
       source: token,
       description: `Order ${new Date()} by ${email}`
     });
     return { id, cart, total, address, username, email };
   } catch (err) {
     throw new Error(err);
   }
 };