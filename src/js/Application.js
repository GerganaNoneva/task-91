import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat =new Beat();
    this._create();
    this.emit(Application.events.READY);
  }

  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count=0;

    this._beat.on(Beat.events.BIT,() => {
      

        lyrics.forEach(word=> {
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = word;
        document.querySelector(".main").appendChild(message);
      })
  /*
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[start];
      bit++;
      if(count==6) {
        count=0;
      }
      document.querySelector(".main").appendChild(message);})*/
    
    })
}
}

