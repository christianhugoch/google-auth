// Mobile never runs the real OAuth strategy - the server does that. Mobile
// only reads auth_methods[method].module_name to find the capacitor plugin,
// so a real Strategy (and its Node-only passport-oauth2/util dependency)
// isn't needed here - just enough shape to keep index.js from crashing.
class Strategy {
  constructor() {}
}

module.exports = { Strategy };
