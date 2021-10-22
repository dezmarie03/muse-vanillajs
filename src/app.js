import Inventory from "./views/Inventory.js";

const router = async () => {
  const routes = [
    { path: "/", view: Inventory },
  ];

  // Tests route for match
  const matchRoutes = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname == route.path
    }
  });

  let match = matchRoutes.find(matching => matching.isMatch);

  // Match not found
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});
