import {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faMapMarkedAlt, faUniversity} from "@fortawesome/free-solid-svg-icons";

export default function PersonalInformation({name, address, schoolInfo, workInfo}) {
    return (
        <Fragment>
            <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Hi there 👋, I'm <span className="font-bold text-4xl">{name}</span>
            </h3>
            <div
                className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 uppercase">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2"/>{" "}
                {address}
            </div>
            <div className="mb-2 text-blueGray-600">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>{" "}
                {workInfo}
            </div>
            <div className="mb-2 text-blueGray-600">
                <FontAwesomeIcon icon={faUniversity} className="mr-2"/>{" "}
                {schoolInfo}
            </div>
        </Fragment>
    )
}
