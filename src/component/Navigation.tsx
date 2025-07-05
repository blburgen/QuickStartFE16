export default function Navigation() {
    return (
    <div className="container-fluid navbar-expand-md ">
        <nav className="navbar navbar-nav d-flex justify-content-evenly" data-bs-theme="dark">
            <a className="text-center bg-primary nav-link col-md-2 col-12 border border-dark rounded-3 active" href=".\">Home Page Week 16-18</a>
            <a className="text-center bg-primary nav-link col-md-2 col-12 border border-dark rounded-3" href="https://blburgen.github.io/">Home Page</a>
            <a className="text-center bg-primary nav-link col-md-2 col-12 border border-dark rounded-3" href="https://blburgen.github.io/projects/">Projects</a>
            <ul className="navbar-nav col-md-3 col-12">
                <li className="nav-item dropdown col-md text-center bg-primary border border-dark rounded-3">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Quick Start Front End <br/>&dArr; Projects  &dArr;
                    </a>
                    <ul className="dropdown-menu col-12">
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartProjects/">Quick Start Front End Projects Home</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE01/">Quick Start Front End Week 01</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE02/">Quick Start Front End Week 02</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE03/">Quick Start Front End Week 03</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE07/">Quick Start Front End Week 07</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE08/">Quick Start Front End Week 08</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE09/">Quick Start Front End Week 09</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE10/">Quick Start Front End Week 10</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE11/">Quick Start Front End Week 11</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE12/">Quick Start Front End Week 12</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE13/">Quick Start Front End Week 13</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center" href="https://blburgen.github.io/QuickStartFE14/">Quick Start Front End Week 14-16</a></li>
                        <li><a className="nav-link bg-primary border border-dark rounded-3 text-center active" href="https://blburgen.github.io/QuickStartFE16/">Quick Start Front End Week 16-18</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    )
}