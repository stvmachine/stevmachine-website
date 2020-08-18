/** @jsx jsx */
import { jsx } from "theme-ui";
import { ResumeStyles } from "./Resume.styles";

const Resume = ({ data: { skillmessage, education, work, skills } }) => {
  const Education = education.map((education) => (
    <div key={education.school}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      {education.description && <p>{education.description}</p>}
    </div>
  ));
  const Work = work.map((work) => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));
  // const Skills = skills.map((skills) => {
  //   const className = "bar-expand " + skills.name.toLowerCase();
  //   return (
  //     <li key={skills.name}>
  //       <span style={{ width: skills.level }} className={className}></span>
  //       <em>{skills.name}</em>
  //     </li>
  //   );
  // });

  return (
    <section id="resume" css={ResumeStyles}>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{Education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{Work}</div>
      </div>

      {/* <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{Skills}</ul>
          </div>
        </div>
  </div> */}
    </section>
  );
};

export default Resume;
