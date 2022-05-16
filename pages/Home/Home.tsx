import React from 'react'
import './style.scss'
export const Home = () => {

    return (
        <div className={'content'}>
            <div className="client_welcome">
                Welcome to Accutech's customer portal!

                <p><b>Equipment</b> - <span className="client_desc">Access all your equipment calibration certificates. For any test equipment that requires calibration from a 3rd party, we can upload those certificates so all of your equipment is managed by Accutech's customer portal.
Access all your owned equipment and their calibration certificates. Also see the calibration period set for each unit and as the admin you can change the interval for your units  so that next time it comes in it will be automatically updated.</span>

                </p><p><b>RMA Requests</b> - <span className="client_desc">Please complete this RMA request form for units that have not been in our system before that you would like to send in.</span>

            </p><p>If you have any questions our support team is available to help you at <a
                href="mailto:sales@accutech.ca"
                className="w3-btn"
                target="_system">sales@accutech.ca</a>

            </p>Sincerely,<p>
            </p>Accutech<p>
            </p>
            </div>
        </div>
    )
}
