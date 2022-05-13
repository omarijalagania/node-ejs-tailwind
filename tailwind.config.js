const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["**/*.html", "views/*.ejs", "**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
