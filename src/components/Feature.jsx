import React from 'react';

import Resume from "../assets/resume.jpg";
import ChoseIcon from "../assets/chose.png";
import CheckListIcon from "../assets/checklist.png";
import CustomizeIcon from "../assets/customize.png";
import ResumeIcon from "../assets/get-resume.png";

import Styles from "../landing.module.css";
const Feature = () => {
    const stepperContent = [
        {
            level: 1,
            content: "random text"
        },
        {
            level: 2,
            content: "random text"
        },
        {
            level: 3,
            content: "random text"
        },
        {
            level: 4,
            content: "random text"
        }
    ]
    return (
        <div className='my-4 py-4'>
            <div className={`${Styles["feature-title"]} fw-bold pt-4`}>
                Create your resume in just few minutes
            </div>
            <div className="row my-4 py-2">
                <div className="col-4">
                    <div className={`d-flex ${Styles['stack-container']} mb-4 `}>
                        <img src={ChoseIcon} className={Styles["htw-icon"]} />
                        <div>
                            <div className="step-name fw-bold">Choose your template</div>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${Styles['stack-container']} `}>
                        <img src={CustomizeIcon} className={Styles["htw-icon"]} />
                        <div>
                            <div className="step-name fw-bold">Customize template</div>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img src={Resume} className={Styles["resume-img"]} alt="resume img" />
                </div>
                <div className="col-4">
                    <div className={`d-flex ${Styles['stack-container']} mb-4`}>
                        <img src={CheckListIcon} className={Styles["htw-icon"]} />
                        <div>
                            <div className="step-name fw-bold">Fill the details</div>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${Styles['stack-container']} `}>
                        <img src={ResumeIcon} className={Styles["htw-icon"]} />
                        <div>
                            <div className="step-name fw-bold">Resume ready</div>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                    {/*stepper component */}
                </div>
            </div>
        </div >
    )
}

export default Feature