import React from "react";

//const NavBar = props => {
//props as argument is necesary because it will now work in span(this.props.totalCOunters works only in class)
//Below is destucturing exapmle for simplifyng code(no need to repeat props everywhere) and we will implement it
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

//same way of writing stateless components
// in header needs import React, {Component} from "react"; for lower example

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
