export const BROADCASTS = {
  RESET_APP: 'settings.resetApp',
};

class Broadcasts {
  broadcasts: {};

  constructor() {
    this.broadcasts = {};
  }

  addBroadcasts(newBroadcasts) {
    this.broadcasts = {
      ...this.broadcasts,
      ...newBroadcasts,
    };
  }

  addBroadcast(id, fn) {
    if (this.broadcasts[id]) {
      throw new Error(`Broadcast ${id} is already registered`);
    }
    this.broadcasts[id] = fn;
  }

  broadcast(id, ...data) {
    if (!this.broadcasts[id]) {
      throw new Error(`Broadcast ${id} is not registered`);
    }
    this.broadcasts[id](...data);
  }
}

export default new Broadcasts();
