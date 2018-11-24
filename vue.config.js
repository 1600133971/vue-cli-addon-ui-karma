const { clientAddonConfig } = require('@vue/cli-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'org.vue.st.karma.client-addon',
    port: 8042
  })
}
