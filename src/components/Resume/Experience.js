import React from "react";

const Experience = (data) => {
  const experience = data.data;
  console.log(experience);

  return (
    <div className="resume-experience-div">
      <ul>
        {experience.map(
          ({ company, date, role, description, location }, index) => (
            <li key={index} className="experience-item">
              <div className="experience-details">
                <div className="experience-title">
                  <p className="experience-company">{company}</p>
                  <p className="experience-role">{role}</p>
                  <p className="experience-date">{date}</p>
                </div>
                <div className="experience-description-div">
                  <div className="experience-description">
                    <ul>
                      {description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="experience-description-location">{location}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Experience;
