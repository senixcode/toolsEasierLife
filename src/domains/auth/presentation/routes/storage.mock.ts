function storageMock() {
    let storage:any = {};

    return {
      setItem: function(key:string, value:string) {
        storage[key] = value || '';
      },
      getItem: function(key:string) {
        return key in storage ? storage[key] : null;
      },
      removeItem: function(key:string) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function(i:any) {
        const keys = Object.keys(storage);
        return keys[i] || null;
      }
    }
  }

  export default storageMock