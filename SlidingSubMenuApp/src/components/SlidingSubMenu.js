import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { jsonData } from "../utils/content";

const SlidingSubMenu = () => {
  const [filteredData, setFilteredData] = useState(jsonData);
  const [activeFilter, setActiveFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("");
  const [sliderAnimation] = useState(new Animated.Value(0));

  const handleFilter = (filter) => {
    if (filter === activeFilter) {
      setSubFilter("");
    } else {
      setActiveFilter(filter);
      if (filter === "all") {
        setFilteredData(jsonData);
      } else {
        const filtered = jsonData.filter((item) => item.time === filter);
        setFilteredData(filtered);
      }
    }
  };

  const filterByType = (type) => {
    setSubFilter(type); 
  
    if (type === "") {
      if (activeFilter === "all") {
        setFilteredData(jsonData);
      } else {
        const filtered = jsonData.filter((item) => item.time === activeFilter);
        setFilteredData(filtered);
      }
    } else {
      const filtered = jsonData.filter(
        (item) => item.time === activeFilter && item.type === type
      );
      setFilteredData(filtered);
    }
  };

  const slideInSubMenu = () => {
    Animated.timing(sliderAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        translateX: sliderAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0],
        }),
      },
    ],
  };

  return (
    <View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => handleFilter("all")}
          style={[
            styles.filterButton,
            activeFilter === "all" && styles.activeFilterButton,
          ]}
        >
          <View style={styles.navbarItems}>
            <Icon name="star" size={30} color="#FFA41B" solid />
            <Text style={styles.filterButtonAll}>Bültenim</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleFilter("now");
            slideInSubMenu();
          }}
          style={[
            styles.filterButton,
            activeFilter === "now" && styles.activeFilterButton,
          ]}
        >
          <View style={styles.menuIcons}>
            <View style={styles.navbarItems}>
              <Icon
                name="hand-point-up"
                size={30}
                color="red"
                style={{ transform: [{ rotate: "-45deg" }] }}
              />
              <Text style={styles.filterButtonNow}>Canlı</Text>
            </View>
            {activeFilter === "now" && (
              <Animated.View style={[styles.subMenu, animatedStyles]}>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "volleyball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() =>filterByType("volleyball")}
                >
                  <Icon name="volleyball-ball" size={20} color="gray" />
                  <Text style={styles.subMenuText}>Volleyball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "mma" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("mma")}
                >
                  <Icon name="hand-rock" size={20} color="red" solid/>
                  <Text style={styles.subMenuText}>MMA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "handball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("handball")}
                >
                  <Icon name="baseball-ball" size={20} color="gray" />
                  <Text style={styles.subMenuText}>Handball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "ice hockey" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("ice hockey")}
                >
                  <Icon name="skating" size={20} color="gray"/>
                  <Text style={styles.subMenuText}>Ice Hockey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "long term" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("long term")}
                >
                  <Icon name="stopwatch" size={20} color="gray"/>
                  <Text style={styles.subMenuText}>Uzun Vadeli</Text>
                </TouchableOpacity>
              </Animated.View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleFilter("before");
            slideInSubMenu();
          }}
          style={[
            styles.filterButton,
            activeFilter === "before" && styles.activeFilterButton,
          ]}
        >
          <View style={styles.menuIcons}>
            <View style={styles.navbarItems}>
              <Icon
                name="hand-pointer"
                size={30}
                color="green"
                style={{ transform: [{ rotate: "-45deg" }] }}
              />
              <Text style={styles.filterButtonBefore}>MaçÖnü</Text>
            </View>
            {activeFilter === "before" && (
              <Animated.View style={[styles.subMenu, animatedStyles]}>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "volleyball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("volleyball")}
                >
                  <Icon name="volleyball-ball" size={20} color="gray" />
                  <Text style={styles.subMenuText}>Volleyball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "mma" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("mma")}
                >
                  <Icon name="hand-rock" size={20} color="red" solid/>
                  <Text style={styles.subMenuText}>MMA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "handball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("handball")}
                >
                  <Icon name="baseball-ball" size={20} color="gray" />
                  <Text style={styles.subMenuText}>Handball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "ice hockey" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("ice hockey")}
                >
                  <Icon name="skating" size={20} color="gray"/>
                  <Text style={styles.subMenuText}>Ice Hockey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "long term" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("long term")}
                >
                  <Icon name="stopwatch" size={20} color="gray"/>
                  <Text style={styles.subMenuText}>Uzun Vadeli</Text>
                </TouchableOpacity>
              </Animated.View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.dataContainer}>
        {filteredData.map((item) => (
          <Text key={item.id} style={styles.dataItem}>
            Maç: {item.id}, Zaman: {item.time}, Türü: {item.type}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    justifyContent: "space-between",
    backgroundColor: "#394867",
  },
  filterButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeFilterButton: {
    backgroundColor: "#F1F6F9",
  },
  filterButtonAll: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#FFA41B",
  },
  filterButtonNow: {
    fontSize: 10,
    fontWeight: "bold",
    color: "red",
  },
  filterButtonBefore: {
    fontSize: 10,
    fontWeight: "bold",
    color: "green",
  },
  dataContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  dataItem: {
    marginBottom: 10,
  },
  navbarItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcons: {
    display: "flex",
    flexDirection: "row",
  },
  subMenu: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  subMenuItem: {
    paddingHorizontal: 6,
    borderRadius: 5,
    backgroundColor: "#EDEFF1",
    marginRight: 5,
  },
  selectedSubMenuItem: {
    backgroundColor: "#F1F6F9",
  },
  subMenuText: {
    fontSize: 8,
    fontWeight: "bold",
  },
});

export default SlidingSubMenu;
