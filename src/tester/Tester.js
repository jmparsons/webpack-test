class Tester {
  post = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ event, context }),
    });
  };
}

export default Tester;
