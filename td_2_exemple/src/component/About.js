import React from "react";
import './About.css';


export default class About extends React.Component {

    render () {

        return (
            <div className="container-about">
                <div className="card-about">
                    <div class="txt-about">
                        <p>Membres de l'équipe</p>
                        <p>Teddy</p>
                        <p>Hugo</p>
                        <p>Ivann</p>
                    </div>
                </div>
            </div>
        );
    }
}