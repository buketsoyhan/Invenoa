import React, { useState } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SlidingSubMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [subMenuExpanded, setSubMenuExpanded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const scaleValue = new Animated.Value(1);

  const menuItems = [
    {
      id: 1,
      label: "Bültenim",
      subMenuItems: [""],
    },
    {
      id: 2,
      label: "Canlı",
      subMenuItems: ["Voleybol", "Buz Hokeyi", "Hentbol", "Uzun Vadeli", "MMA"],
    },
    {
      id: 3,
      label: "MaçÖnü",
      subMenuItems: ["Voleybol", "Buz Hokeyi", "Hentbol", "Uzun Vadeli", "MMA"],
    },
  ];

  const handleMenuItemPress = (index) => {
    setActiveMenuItem(index);
    setSubMenuExpanded(!subMenuExpanded);
    setExpanded(!expanded);
    Animated.timing(scaleValue, {
      toValue: expanded ? 1 : 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSubMenuIconPress = (menuItem) => {
    console.log("Seçilen alt menü öğesi:", menuItem);
  };

  return (
    <View>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <View>
            <TouchableOpacity
              key={item.id}
              onPress={() => handleMenuItemPress(index)}
              style={[
                styles.menuItem,
                activeMenuItem === index && styles.activeMenuItem,
              ]}
            >
              <Animated.Text
                style={[
                  styles.menuItemLabel,
                  { transform: [
                    { scale: scaleValue },
                    { rotate: '270deg' }, // Metni 180 derece döndürüyoruz
                  ], },
                ]}
              >
                {item.label}
                {subMenuExpanded && index===activeMenuItem &&(
                  <View style={styles.subMenuContainer}> 
                    {item.subMenuItems.map((subItem, index) => (
                    <TouchableOpacity key={index} style={styles.subMenuItem}>
                      <Animated.Text style={styles.subMenuItemLabel}>{subItem}</Animated.Text>
                    </TouchableOpacity>
                  ))}
                  </View>
                )}
              </Animated.Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SlidingSubMenu;

const styles = {
  menuContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f1f1f1",
    width:"100%",
    justifyContent:"space-between",
  },
  menuItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeMenuItem: {
    backgroundColor: "#ccc",
    
  },
  menuItemLabel: {
    fontSize: 10,
    fontWeight: "bold",
  },
  activeMenuItemLabel: {
    color: "white",
 
  },
  subMenuContainer: {
    display: "flex",
    flexDirection: "row",
  },
  subMenuItem: {
    border: "1px solid aqua",
    margin:2,
  },
  subMenuItemLabel: {
    fontSize: 10,
    color: "#333",
    backgroundColor:"#ccc"
  },
};
