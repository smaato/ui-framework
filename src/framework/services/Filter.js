
export default class Filter {

  constructor(config) {
    this.name = config.name;
    this.getValue = config.getValue;
    this.methods = config.methods;
  }

}
