import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ExternalProfiles({profiles}) {
    return (
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
            {profiles.map(profile =>
                <div className="mr-4 p-3 text-center" key={profile.id}>
                    <span
                        className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        <a target="_blank" href={profile.href}
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={profile.icon}/>
                        </a>
                    </span>
                </div>
            )}
        </div>
)
}
