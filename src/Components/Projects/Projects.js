import React, { Component } from "react";
import "./Projects.css";
// import ProjectsJumbotron from "./ProjectsJumbotron";

let response = [
  {
    name: "Calculator Project",
    url: "https://gfran23.github.io/calculator2Project/",
    description: "Class Project For Nebula Academy",
    imgUrl:
      "https://lh3.googleusercontent.com/pRDjoi4qeWRT9bze_3Erkj02kxZS5wiJin-zpZLYTnm81zu3FTDgTDhjUvrN1p1fC3VMfq803H1b8sIGCxLuTXaJJygM4rgkZxbi9kYaQyOdH_egp2AdO4KNjIDFUIYr5kUL_fk1S88EZrNBkKtt3Rt4ekhwsAac_dvYQ-546FfWCyraNN3Pe1GmxWt2ow8eAMdk8Dg_iC8YbD4kgr7mt27fQUd1VMWPMUdsP-wZtxlZetMVctfI2XvteOtr4sx07jRO7W4zOHcIYFb8tKJz9-dK-PIyozi35gji78TQ5f_CRiRKukv1UN_acPkEVlXbaN6R2Nm1X7wI-Yr27p_S_vXwKJRb2_ThmtSQ78uB3TAm2LvCQSN_-6SokLcx6BF147rK_-RwXK-yZ2THNoT5ztW6Bo8z4uojwGMu6YvAn6MkbBL-h5WT2JAawCyes-Mq8AzrNygRMPsvLRnaVGkFNzMUayBMXN37v9R57HJs7OQPxRoWDEt_ALmGGGFVqo5tDqqcTHkrb_Okjct1lJ9V0Hafk6oDW4WD44j6Y8pqVEANg99DZV56O30BhGduuXZ2wAgxl60R95Te730zSlprtL6Z4VE3FSmTRnmwu8WwZAlGiEfo--VlIPdMe7KzUF_OXxBEa1yozdBxURaDKfYp2UAz3diWrRnAJi7xW2yxlOrGTK-9c9WpKAPcgco=w1124-h633-no?authuser=0",
    techUsed: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Air Hockey Project",
    url: "https://gfran23.github.io/airHockeyProject/",
    description: "Class Project For Nebula Academy",
    imgUrl:
      "https://lh3.googleusercontent.com/TqWccH_3f9ytcPHpH1UXgzmWKf5FR5vwCCrLTg7BMpnbY2EsIeWyleFKlZqIwVL_dtaxmzC6upqQthK--2heahK6kNg-F_A8cZi2U84yD2aH9ScTpn94qa7wnHewwLWi5mOUh2tcugDOgw0PQGmn2RgvifRA_x2M4p-3xGhY1PpLzWZn2BsPzfHOuM4BV3E2HcJpXKoTrtxa6IjWbgm-o2g0a43En1gLpxMy-EMRieHdE3aGoxvUevY6BqlKH-GPDm9VmBc6ZYunZXl7cqj18oz1nKlv63tl2ObzouPihQ1w-2684OQ5rUEbp3z2qGB_-7wp74aGdeJEfo6EfCB6zfcp_y14v6XofTgzp1LM0IP5nHHMgB1zL7pa_TYLfDW8glx5H4beYodWthZnDGdChn925h9iC5RWxppUDKKIvfUnVFoIdM63cdzs8HEGK3-IRq32BOoBe0BRHTnjb8HL5m1EkWK6G7SqYpBjcs_8ead3qpQo_ZsC2ZTqZPjPIb1ZQuicjgdZYtmWH5FsQtVnHwZ54JWXFJU6i160l9KfGnFfW0MJsgg57O-SWgg-zql0TNlBnYpIsr7Ic3dh3y_jOFJsX_8wGh7BbHl-Pb_z1nDGs_7r04Eu_W7DNQ15YGT2wO_THrxVVfV40kvD7O8QIO6qaHYZpr8EKgu0gKtCP3nqD4hTK3Tw80ztxHw=w1780-h1001-no?authuser=0",
    techUsed: ["JavaScript", "HTML", "CSS", "Canvas"],
  },
  {
    name: "NotFlix Project",
    url: " ",
    description: "OMDB Class Project For Nebula Academy",
    imgUrl:
      "https://lh3.googleusercontent.com/YY0Df7l39D1T2tzFok7emX-faDzTLuwqRN8CpawstAizm0MvEHmTM-wXdUFKEnWMkm84U-do2X8epP8wYlEPDHEULWt4Gpo4LP2lqSBY5dqSReepz85di1UXDnO7y1UB2Q5T-WlHFDe_5s9ASUw2lRVaC5YbU4ZjTrYU32gmLAP0lgDnU0k-adcvm4zCCXt2eclywcsHcsEMrLPkQETl2BLk30QTcYHVOG8vRp3XLmifnKays_yrY1MOZLcmxxKunXt0QmF-bdDI5Pl_7XkDMx6LNfyw6s6ImnDVp1dCHdPTzgsfpjwg8gaIOVU9I1wfz0TRFGtC6oFZ8175VRoGWN_HzTIHxZiIXaAw6Flr5XSYemlXjgonZZsDA2fHcz0VNNVI46xmpa_Kj_cyrIuWaBLIVVxGbicwkyZ6cPSH7yeaCwhydOtX_X40Zn1sZMrZmDcrZ0-ePn4C8Zu7vfR_-1T7ba8VzVoiuIT2lSmYb8VMN9xdt3a8qTGCsVWTFkQR5i-rAhIzIPdFFdc0qf1LIBXkIzRAZh4jcUiATdiuQaTlyECuGWVqQRL-ePZMXzAU3x3JZE6eMRY5B09aZRWvHF6mdKSnM0TbDM9Pk2vinKHO-q9WYbkZYl7tH0i404-FssZtBYcMbLu06QWbXbJisJULZiRwx7xWD97iGO28W_t5qVt3OJxEjTdcudQ=w1780-h1001-no?authuser=0",
    techUsed: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Music API Project ",
    url: "https://project4.io",
    description: "PostgresSQL Project For Nebula Academy",
    imgUrl:
      "https://lh3.googleusercontent.com/320NnnQdm5a3Opi2zcr4dIOOxZtonhjBHELNauRuCMZ-c138raqoJGf7lQEj5dWhhPg-qpLmrkalW35_0lG7KEBlskzRhWT9DOpKCemn4bJAOB6COyn5URMsJ1WCdZJ5FDzpvOLCz3wohaj2Hlly_KZoJSWYqr4jOQHaCOmUa2hd2Fs2Z91Of7w56F0K_TMqLSGxZOJq4W2DIMwKnR81kOag8lTUxH8Y-AwnuptyFgEg4IIY0KPPBKLQTrKbeaBLfKSNBix2610q742D-gtIn83x7ONO2rbAyevnH_rkvozGhNhVAU2pijv2G7rFsftoqdKNDjo3JJ-jtvfyHN8XksERc9Q6JxQh3kG-pXjcN6fz-xZ1i8AnkIZQgDbFLiBYJil05dGHl-YfcLUnH4kSH-OvCiQ_B7l4Cht6rAUxPztUMuJ-68iY7VHuW1X_c5lNs1ScEeGUI4Pb-1qKHPlfCmPoPj7wDEueWFpX9jvM0bAxN95-c1dSHl1F0JXDpn3Psl4aCwZbjIaG4pHPhV-x7foQ1EV6Afi3arLBBdBt6EUk13oUR_cJYBkjbcKP8FSIcwNSmG6fWzBQhq4nsame41nvHBgQug-LWIj_bsn686gWRWEm69M8JaJfSkDf6Qz1cZjrfLGCEW5gfoYn0zefSu700Jnw0vtgDPESFUYnACrPyCm1ShX_EQWMVlU=w1012-h570-no?authuser=0",
    techUsed: ["JavaScript", "HTML", "CSS", "PostgresSQL", "AWS"],
  },
];

class Projects extends Component {
  state = {};

  getAllProjects() {
    //fetch goes here in the future
    let allProjects = [];

    for (let i = 0; i < response.length; i++) {
      console.log(response[i].imgUrl);
      allProjects.push(
        <div className="projectCard" key={i}>
          <h1>{response[i].name}</h1>
          <h6>{response[i].description}</h6>
          <img
            src={response[i].imgUrl}
            height="170px"
            alt={response[i].name}
          ></img>
          <p>Tech: {response[i].techUsed.join(", ")}</p>
        </div>
      );
    }
    return allProjects;
  }

  render() {
    return (
      <>
        {/* <ProjectsJumbotron /> */}
        <div className="container">{this.getAllProjects()}</div>;
      </>
    );
  }
}
export default Projects;
