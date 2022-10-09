import { Fragment, useState } from "react"
import data from "../data/classes.json"
import "./ClassCards.css";

function ClassCards() {

    //take the data from the json file 
    const [showData, setSowData] = useState(data);

    //split the title and return the two first words
    const splitDataPrincipal = (data) => {
        let container = data.split(" ");
        return container[0] + " " + container[1];
    }

    //split the title and return the rest of the words
    const splitDataSecondary = (data) => {
        let container = data.split(" ");
        return container.slice(2).toString().replace(/,/g, " ");
    }

    //change the class of a specific card when the user hover it
    let hovered = (e, footerId, bodyId) => {
        if (e) {
            document.getElementById(bodyId).className = "classCards-body-contend-animation";
            document.getElementById(footerId).className = "classCards-footer-link-animation";

        } else {
            document.getElementById(bodyId).className = "classCards-body-contend";
            document.getElementById(footerId).className = "classCards-footer-link";
        }
    }

    return (
        <Fragment>
            <div className="classCards-container">
                {
                    showData.map(d => (
                        <div
                            key={d.id}
                            className="classCards-box" 
                            onMouseEnter={() => hovered(true, "footer-" + d.id, "content-" + d.id)}
                            onMouseLeave={() => hovered(false, "footer-" + d.id, "content-" + d.id)}
                        >
                            <div className="classCards-header-img">
                                <img src={'img/' + d.image} alt={d.classname} />
                            </div>
                            <div className="classCards-body borders">
                                <div className="classCards-body-contend" id={"content-" + d.id}>
                                    <p>
                                        <span className="classCards-body-contend-title">{splitDataPrincipal(d.classname)}</span>
                                        <br />
                                        <span className="classCards-body-contend-subtitle">{splitDataSecondary(d.classname)}</span>
                                    </p>
                                </div>
                                <div className="classCards-footer-link" id={"footer-" + d.id}>
                                    <a href='google.com' target="_blank" className="">VOIR LES COURS →</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default ClassCards
