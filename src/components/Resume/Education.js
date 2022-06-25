import React from "react";

const Education = (data) => {
  const education = data.data;
  console.log(education);

  return (
    <div className="resume-education-div">
      <ul>
        {education.map(
          ({ university, graduation, degree, research, location }, index) => (
            <li key={index} className="education-item">
              <div className="education-details">
                <div className="education-title">
                  <p className="education-university">{university}</p>
                  <p className="education-degree">{degree}</p>
                  <p className="education-graduation">
                    Graduated: {graduation}
                  </p>
                  <p className="education-description-location">{location}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Education;
