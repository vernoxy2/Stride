import React from 'react';
import SelectProject from "../../../Components/SelectProject";
import { projects } from "../../../Data/Projects";


const ProjectScroll = () => {
  return (
    <div>
      {projects.map((project, index) => (
          <SelectProject
            key={index}
            Display={project.Display}
            DisplayText={project.DisplayText}
            Maintext={project.Maintext}
            address={project.address}
          />
        ))}
    </div>
  );
}

export default ProjectScroll;
