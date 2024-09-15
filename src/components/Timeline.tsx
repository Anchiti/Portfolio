import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JUL 2021 - Present"
            iconStyle={{ background: '#4d4271', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ZI Systech Pvt Ltd, Mumbai</h4>
            <ul>
              <li> Worked with software development team members to design and develop robust solutions to meet requirements for functionality, scalability, and performance.</li>
              <li>Updated old code bases to modern development standards.</li>
              <li>Implemented agile methodologies to streamline development processes and enhance collaboration within the team.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;