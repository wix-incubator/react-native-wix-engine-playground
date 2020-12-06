export default class DemoModuleB {
  prefix() {
    return 'settings';
  }

  tabs() {
    return [
      {
        id: 'settings',
        label: 'Settings',
        screen: 'settings.settingsScreen',
        icon: require('../tab.png'),
        selectedIcon: require('../tabSelected.png'),
      },
    ];
  }

  components() {
    return [
      {
        id: 'settings.settingsScreen',
        generator: () => require('./SettingsScreen').default,
      },
    ];
  }

  registerBroadcasts(register) {
    const broadcasts = require('./broadcastManager').default;
    const {RESET_APP} = require('./broadcastManager').BROADCASTS;
    broadcasts.addBroadcast(
      RESET_APP,
      register(RESET_APP, 'notify all modules to reset their data'),
    );
  }

  methods() {
    return [];
  }
}
