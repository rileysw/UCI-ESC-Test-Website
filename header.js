document.write(`
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <!--ESC Logo-->
            <a href="index.html" class="logo"
            ><img
                src="assets/img/logos/esc-logo-white-gold.png"
                alt=""
                class="img-fluid"
            /></a>

            <!--ESC Name-->
            <h1 class="logo">
            <a href="index.html">Engineering Student Council</a>
            </h1>

            <nav id="navbar" class="navbar">
            <ul>
                <!--Events Dropdown-->
                <li class="dropdown">
                <a href="#"><span>Events</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                    <!--Upcoming Events Tab-->
                    <li class="dropdown">
                    <a href="#"
                        ><span>Upcoming Events (TBA)</span> <i class="bi"></i
                    ></a>
                    <ul>
                        <!--Add Upcoming Events Here-->
                    </ul>
                    </li>
                    <div class="nav-divider"></div>
                    <!--Past Events Tab-->
                    <li class="dropdown">
                    <a href="#"
                        ><span>Past Events</span> <i class="bi bi-chevron-right"></i
                    ></a>
                    <ul>
                        <li>
                        <a href="summer-2021.html">Summer 2021</a>
                        </li>
                    </ul>
                    </li>
                    <!--Annual Events Tab-->
                    <li class="dropdown">
                    <a href="#"
                        ><span>Annual Events</span> <i class="bi bi-chevron-right"></i
                    ></a>
                    <ul>
                        <li>
                        <a href="network-dinner.html">Networking Dinner Night</a>
                        </li>
                        <li><a href="deans-picnic.html">Dean's Picnic</a></li>
                        <li><a href="research-fair.html">Research Fair</a></li>
                        <a href="engitech.html">EngiTech Career Fair</a>
                        </li>
                        <div class="nav-divider"></div>
                        <li><a href="eweek.html">E-Week</a></li>
                    </ul>
                    </li>
                    <!--Add Calendar Tab Here-->
                    <!--<li><a href="calendar.html">Calendar</a></li>-->
                </ul>
                </li>

                <!--Committees Dropdown-->
                <li class="dropdown">
                <a href="#"
                    ><span>Committees</span> <i class="bi bi-chevron-down"></i
                ></a>
                <ul>
                    <!--ECOM and Cabinet Tabs-->
                    <li>
                    <a href="ecomm.html">Executive Committee Members</a>
                    </li>
                    <li><a href="cabinet.html">Cabinet Members</a></li>
                    <div class="nav-divider"></div>
                    <!--Cabinet Committee Tabs-->
                    <li>
                    <a href="outreach.html">Community Outreach</a>
                    </li>
                    <li>
                    <a href="corporate.html">Corporate Affairs</a>
                    </li>
                    <li>
                    <a href="faculty.html">Faculty Engagement</a>
                    </li>
                    <li>
                    <a href="studs.html">Student Involvement</a>
                    </li>
                    <li>
                    <a href="communications.html">Communications</a>
                    </li>
                    <div class="nav-divider"></div>
                    <!--LIFE and EMF Tabs-->
                    <li>
                    <a href="life.html">Leaders in Freshman Engineering</a>
                    </li>
                    <li>
                    <a href="emf.html">Engineers Mentoring the Future</a>
                    </li>
                </ul>
                </li>

                <!--Add Application Dropdown Here (If Needed)-->

                <!--Add Company Info Dropdown Here (If Needed)-->

                <!--About Us Dropdown-->
                <li class="dropdown">
                <a href="#"
                    ><span>About Us</span> <i class="bi bi-chevron-down"></i
                ></a>
                <ul>
                    <!--About Us Tabs-->
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="mission.html">Our Mission</a></li>
                    <div class="nav-divider"></div>
                    <li><a href="http://esc.eng.uci.edu/p-council/index.html" target="_blank" rel="noopener noreferrer">P-Council</a></li>
                    <div class="nav-divider"></div>
                    <!--FAQs Tab-->
                    <li><a href="faq.html">FAQs</a></li>
                </ul>
                </li>

                <!--Contact Us Button-->
                <li><a class="getstarted scrollto" href="#footer">Contact Us</a></li>

            </ul>

            <!--Boostrap Mobile Navigation Bar-->
            <i class="bi bi-list mobile-nav-toggle"></i>
            
            </nav>
        </div>
    </header>
`);
