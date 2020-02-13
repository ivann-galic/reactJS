import React from "react";
import './About.css';


export default class About extends React.Component {

    render () {

        return (
            <div className="container-about">
                <div className="card-about">
                    <div class="txt-about">
                        <p><span>Membres de l'équipe</span></p>
                        <p>Teddy</p>
                        <p>Hugo</p>
                        <p>Ivann</p>
                    </div>
                </div>
            </div>
        );
    }
}