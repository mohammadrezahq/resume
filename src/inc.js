const getRoutesNames = (router) => {
  let routes = [];

  router.options.routes.forEach((r) => {
    if (r.name) {
      routes.push(r.name);
    }
  });

  return routes;
};

export { getRoutesNames };
