import routes from "./routes.js";

async function launchController(controllerName) {
  try {
    const module = await import(`./controler/${controllerName}.js`);
    module.init();
  } catch (error) {
    console.log(error);
  }
}

function setAnchorEventListener() {
  const anchors = document.querySelectorAll("a");

  anchors.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(elem.pathname);
    });
  });
}

function setCurrentRoute({ path, controller }) {
  routes.currentPath.path = path;
  routes.currentPath.controller = controller;
}

function handlePopState({ state }) {
  const route = state || routes.home;

  setCurrentRoute(route);
  launchController(route.controller);
}

function navigate(path, firstLoad = false) {
  if (path === routes.currentPath.path) {
    return;
  }

  const routeKey = Object.keys(routes).find((key) => routes[key].path === path);
  const route = routes[routeKey] || routes.home;

  setCurrentRoute(route);

  firstLoad
    ? history.replaceState(route, "", route.path)
    : history.pushState(route, "", route.path);
  launchController(route.controller);
}

function init() {
  const path = window.location.pathname;

  navigate(path, true);
  addEventListener("popstate", handlePopState);
  setAnchorEventListener();
}

export default { init, navigate };
