import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Skills(){
  return(
    <section className="skills" id="skills">
        <div className="container">
             <h1>Skills</h1>
             <p>You Can See My Skills Here</p>



             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                            <div className="row d-flex justify-content-between"  >
                            <div className="col col-lg-4 ">
                                <div className="Skill_progress ">
                                    <h2 className="skills_h2"> 90%</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                </div>
                        
                                <h5>BackEnd Developer</h5>
                            </div>

                            <div className="col col-lg-4">
                                <div className="Skill_progress ">
                                    <h2 className="skills_h2"> 80%</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <h5>FrontEnd Developer</h5>
                            </div>

                        <div className="col col-lg-4">
                                <div className="Skill_progress ">
                                    <h2 className="skills_h2"> 98%</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <h5>Web Developer</h5>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="row "  >
                            <div className="col col-lg-4">
                                <div className="Skill_progress  ">
                                    <h2 className="skills_h2"> 90%</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                </div>
                        
                                <h5>BackEnd Developer</h5>
                            </div>

                            <div className="col col-lg-4">
                                <div className="Skill_progress ">
                                    <h2 className="skills_h2"> 80%</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                    </svg>
                                        </div>
                                        <h5>FrontEnd Developer</h5>
                                    </div>

                                <div className="col col-lg-4">
                                        <div className="Skill_progress ">
                                            <h2 className="skills_h2"> 98%</h2>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="svg" version="1.1" width="160px" height="160px">
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                    <stop offset="0%" stop-color="#e91e63" />
                                                    <stop offset="100%" stop-color="#673ab7" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <h5>Web Developer</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                
                </div>
                </div>

        
    </section>
  )
}
export default Skills;