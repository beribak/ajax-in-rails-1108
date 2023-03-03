import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="add-review"
export default class extends Controller {
 
  static targets = ["form", "list"]
  
  connect() {
    console.log(this.formTarget)
    console.log(this.listTarget) 
  }

  send(event) {
    event.preventDefault()
    // console.log(this.formTarget.action)
    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json"},
      body: new FormData(this.formTarget)
    })
    .then(request => request.json())
    .then((data) => {
      console.log(data)
      this.listTarget.insertAdjacentHTML("beforeend", data.inserted_item)
      this.formTarget.outerHTML = data.form 
    })
  }
}
