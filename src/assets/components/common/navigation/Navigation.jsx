import s from "./Navigation.module.scss";
import NavigationItem from "./navigationItem/NavigationItem.jsx";

// // стилизация блока навигации
// const styledNavigation = {
//    justifyContent: "space-around",
//    height: "70px"
// }

// const styledBackground = {
//    backgroundColor: "transparent",
//    marginBottom: "30px"   
// }

// // стилизация элементов навигации
// const styledNavItem = {
//    fontSize: "20px",
//    lineHeight: "150%"
// }

function Navigation(props) {
   return (
      <nav className={s.navigation} style={props.styledBackground}>
         <ul className={s.list} style={props.styledNavigation}>
            <NavigationItem itemData={props.navData.data1} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data2} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data3} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data4} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data5} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data6} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data7} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data8} styledNavItem={props.styledNavItem} />
         </ul>
      </nav>
   );
}

export default Navigation;
