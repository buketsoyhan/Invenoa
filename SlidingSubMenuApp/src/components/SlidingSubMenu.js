import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { jsonData } from "../utils/content";

const SlidingSubMenu = () => {
  const [filteredData, setFilteredData] = useState(jsonData);
  const [activeFilter, setActiveFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("");

  const handleFilter = (filter) => {
    setActiveFilter(filter);

    if (filter === "all") {
      setFilteredData(jsonData);
    } else {
      const filtered = jsonData.filter((item) => item.time === filter);
      setFilteredData(filtered);
    }

    setSubFilter("");
  };

  const filterByType = (type) => {
    if (type === "") {
      setFilteredData(jsonData);
    } else {
      const filtered = jsonData.filter((item) => item.type === type);
      setFilteredData(filtered);
    }
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
          onPress={() => handleFilter("now")}
          style={[
            styles.filterButton,
            activeFilter === "now" && styles.activeFilterButton,
          ]}
        >
          <View style={styles.navbarItems}>
            <Icon
              name="hand-point-up"
              size={30}
              color="red"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
            <Text style={styles.filterButtonNow}>Canlı</Text>
            {activeFilter === "now" && (
              <View style={styles.subMenu}>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "volleyball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("volleyball")}
                >
                  <Text style={styles.subMenuText}>Volleyball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "mma" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("mma")}
                >
                  <Text style={styles.subMenuText}>MMA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "handball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("handball")}
                >
                  <Text style={styles.subMenuText}>Handball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "ice hockey" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("ice hockey")}
                >
                  <Text style={styles.subMenuText}>Ice Hockey</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilter("before")}
          style={[
            styles.filterButton,
            activeFilter === "before" && styles.activeFilterButton,
          ]}
        >
          <View style={styles.navbarItems}>
            <Icon
              name="hand-pointer"
              size={30}
              color="green"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
            <Text style={styles.filterButtonBefore}>MaçÖnü</Text>
            {activeFilter === "before" && (
              <View style={styles.subMenu}>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "volleyball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("volleyball")}
                >
                  <Text style={styles.subMenuText}>Volleyball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "mma" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("mma")}
                >
                  <Text style={styles.subMenuText}>MMA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "handball" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("handball")}
                >
                  <Text style={styles.subMenuText}>Handball</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subMenuItem,
                    subFilter === "ice hockey" && styles.selectedSubMenuItem,
                  ]}
                  onPress={() => filterByType("ice hockey")}
                >
                  <Text style={styles.subMenuText}>Ice Hockey</Text>
                </TouchableOpacity>
              </View>
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

const styles = {
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    justifyContent: "space-between",
    backgroundColor: "#394867",
  },
  filterButton: {
    paddingHorizontal: 10,
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
};

export default SlidingSubMenu;
