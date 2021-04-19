import React from 'react';
import * as AiIcons from 'react-icons/bs';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }
    Open() {
        var container = document.getElementById("chat-container");
        if (container.style.bottom = "-400px") {
            container.style.bottom = "0px";
            container.style.width = "350px";
            document.getElementById("status").style.top = "25px";
            document.getElementById("redPart").style.border = "1px solid white";
            document.getElementById("cloeChatIcon").style.opacity = "100%";
        }
        else if (container.style.bottom = "0px") {
            container.style.bottom = "-400px";
            container.style.width = "260px";
            document.getElementById("status").style.top = "10px";
            document.getElementById("redPart").style.border = "0px";
            document.getElementById("cloeChatIcon").style.opacity = "0%";
        }
    }

    render() {
        return (
            <div className="chatCont" id="chat-container">
                <div className="chatPeek" id="redPart" onClick={this.Open}>
                    <h4 className="desconectado" id="status">Desconectado</h4>
                    <button className="icon" id="cloeChatIcon" onClick={this.TogleChat}><AiIcons.BsX /></button>
                    <h4 className="formulario">Rellene el formulario a continuación y le contestaremos lo antes posible.</h4>
                </div>
                <div className="chatContent">
                    <div className="innerContainer">
                        <input className="cosas"></input>
                        <input></input>
                        <input className="grande"></input>
                        <button className="enviar">Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Chat;