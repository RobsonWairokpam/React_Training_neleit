import "../Flex.css";
import { ReactComponent as Logo } from "../logo.svg";

const Item = (props) => (
  <li>
    <a>{props.itemname}</a>
  </li>
);

// const ItemChildren = ({ url, children }) => (
//   <li>
//     <a href={url}>{children}</a>
//   </li>
// );

const Home2 = () => {
  return (
    <div className="main-nav">
      <img
        style={{
          // marginTop: "10px",
          height: "5%",
          width: "5%",
          backgroundColor: "rgb(63, 159, 189)",
        }}
        src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
      ></img>
      <Item itemname="Home" />
      <Item itemname="Aout" />
      <Item itemname="Contact" />
    </div>
  );
};
//   <div className="nav" href="header">
//     <a href="#">
//       <img
//         style={{
//           marginTop: "1 0px",
//           height: "5%",
//           width: "5%",
//           backgroundColor: "rgb(63, 159, 189)",
//         }}
//         src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
//       ></img>
//       {/* <img className="logo" src={Logo} /> */}
//     </a>
//     <ul className="main-nav">
//       {/* <ItemChildren url="https://www.google.com">
//         <div>Home</div>
//       </ItemChildren> */}
//       <Item itemname="About" />
//       {/* <ItemChildren>Help</ItemChildren> */}
//     </ul>
//   </div>
// );

export default Home2;
