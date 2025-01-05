import React from 'react'
import style from "./contactform.module.css"
function ContectForm() {
  return (
    <div className={style.formcontainer}>
        <h1>Send a message to us!</h1>
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phoneumber" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContectForm