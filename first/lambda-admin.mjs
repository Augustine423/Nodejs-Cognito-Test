export const handler = async (event) => {
  console.log (JSON.stringify(event))
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

export const handler = async (event) => {
    if (isAdmin(event)){
        return {
            statusCode: 200,
            body:JSON.stringify('Oh Amin my admin!'),
        };
    }
    return {
        statusCode: 403,
        body: JSON.stringify('Forbidden, you are not an Admin!!!'),
    } ;
}

function isAdmin(event){
    const groups = event.requestContext.authorizer?.claims['cognito:groups'];
    if (groups) {
        return (groups).includes('admins');
    }
    return false;
}