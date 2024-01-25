const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === 'zulva') {
    req.user = { id: 1, name: 'zulva' };
    console.log(req.user);
    next();
  } else {
    res.status(401).send('Unauthorized!');
  }
};

export default authorize;
