module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "standard",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react", "standard", "promise"
  ],
  "rules": {
    "indent": [
      "error", 2
    ],
    "linebreak-style": [
      "error", "unix"
    ],
    "quotes": [
      "error", "single"
    ],
    "semi": [
      "error", "always"
    ],
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error"
  }
};