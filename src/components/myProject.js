import { NavLink } from 'react-router-dom';

function MyProject() {
    const style1 = ({ isActive }) => ({
        background: isActive ? "linear-gradient(to right , rgb(102, 52, 94), rgb(46, 6, 80))" : "transparent",
    });

    return (
        <section className="myProject" id="projects">
            <div className="container">
                <h1>My Projects</h1>
                <p>My Name is Menna Allah Hany, I live in Cairo, This is My First Project in React</p>

                <div className='linkGroup'>
                    <NavLink className='left NavLink' to="/Cards" style={style1}>
                        1st Section
                    </NavLink>

                    <NavLink className='middle NavLink' to="/GetInTouch" style={style1}>
                        3rd Section
                    </NavLink>

                    <NavLink className='right NavLink' to="/ThirdSection" style={style1}>
                        2nd Section
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default MyProject;
