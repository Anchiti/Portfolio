import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular  } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    ".Net",
    "ASP.Net",
    "VB.Net",
    "ADO.Net",
    ".Net MVC",
    "Entity Framework",
    "SQL",
    "SQL Server",
    "Swagger",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "SonarQube",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                    <div className="skill">
                        <div style={{ display: "flex", gap:20, alignItems:"center", color:"white"}}>
                            <svg height={70} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M-.134-.326h512.002v512.002H-.134z"/><path d="M91.122 326.786c-3.62 0-6.698-1.206-9.232-3.619-2.534-2.475-3.8-5.413-3.8-8.815 0-3.465 1.266-6.434 3.8-8.908 2.534-2.475 5.612-3.712 9.232-3.712 3.68 0 6.787 1.237 9.321 3.712 2.595 2.474 3.892 5.443 3.892 8.908 0 3.402-1.297 6.34-3.892 8.815-2.534 2.413-5.64 3.619-9.321 3.619zM235.844 324.745h-23.532l-61.996-97.807a43.764 43.764 0 01-3.892-7.703h-.543c.483 2.847.724 8.94.724 18.28v87.23h-20.817v-133.07h25.07l59.916 95.487c2.534 3.96 4.163 6.682 4.887 8.166h.362c-.603-3.525-.905-9.495-.905-17.91v-85.743h20.726v133.07zM337.213 324.745h-72.856v-133.07h69.96v18.745h-48.42v37.675h44.62v18.652h-44.62v39.346h51.316v18.652zM440.757 210.42h-37.289v114.325h-21.54V210.42H344.73v-18.745h96.027v18.745z" fill="#fff" fillRule="nonzero"/></svg>
                            <p style={{fontSize:25}}>&#43;</p>
                            <FontAwesomeIcon icon={faAngular as IconProp} size="3x" />
                        </div>
                    <h3>.Net Full Stack Development</h3>
                    <p>I have been working on few of the web applications using modern technologies. I have a decent proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;