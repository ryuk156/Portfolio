import Experience_Details from "../../data/experiencedetails";
import Link from "next/link"
const Experience = () => {
  return (
    <div className="exp-content">
      <div className="exp-board">
        <div className="exp-board-content">
          {Experience_Details.map((experience, index) => {
            const image = "/images/" + `${experience.logo}`;
            return (
              <div key={index} className="exp-card">
                <div className="exp-start-content">
                  <div className="exp-item-a">
                    <img src={image} className="exp-img" />
                  </div>
                  <div className="exp-item-b">
                    <div className="exp-title">{experience.title}</div>
                    {/* <div className="modal-excerpt">{postdata.excerpt}</div> */}
                  </div>
                </div>

                <div className="modal-main-content">
                  <div className="job-description">
                    {experience.job_description}
                  </div>
                  <div className="exp-link">
                      <Link href={experience.link} passHref>
                      <i className="fa fa-github" aria-hidden="true"></i>
                      </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
