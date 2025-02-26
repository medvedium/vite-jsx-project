class BaseComponent {
  constructor(...args) {
    if (this.constructor === BaseComponent) {
      throw new Error("Нельзя создать объект базового класса")
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]
        target[prop] = newValue
        if (oldValue !== newValue) {
          this.updateUI()
        }
        return true
      },
    })
  }

  /*
   * Перерисовка UI в ответ на обновление состояния
   * */

  updateUI() {
    throw new Error("Необходимо реализовать метод updateUI ")
  }
}

export default BaseComponent
