import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  connect() {
    this.hideMenu()
  }

  toggle() {
    if (this.menuTarget.classList.contains("hidden")) {
      this.showMenu()
    } else {
      this.hideMenu()
    }
  }

  showMenu() {
    this.menuTarget.classList.remove("hidden", "opacity-0", "scale-95")
    this.menuTarget.classList.add("opacity-100", "scale-100")
  }

  hideMenu() {
    this.menuTarget.classList.add("hidden", "opacity-0", "scale-95")
    this.menuTarget.classList.remove("opacity-100", "scale-100")
  }
}
