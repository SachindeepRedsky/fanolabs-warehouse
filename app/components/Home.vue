<template>
  <Page class="main-page" actionBarHidden="true">
    <StackLayout orientation="vertical" class="main-page">
      <GridLayout class="action-container">
        <GridLayout class="action-labels-container" rows="auto,auto">
          <Label class="heading-label" row="0" text="OVERVIEW"></Label>
          <Label class="report-label" row="1" text="Checked at: July 4th, 12:00:30"></Label>
        </GridLayout>

        <Image class="menu-icon" src="res://menu" @tap="openDrawer()"></Image>
      </GridLayout>

      <StackLayout class="main-list-container">
        <ListView for="(wareshouse,index) in wareshouses" class="main-page">
          <v-template>
            <StackLayout orientation="vertical">
              <GridLayout
                class="main-list-item"
                orientation="horizontal"
                @tap="selectedIndex=index"
              >
                <Image class="main-list-icon" src="res://f1_base" @tap="selectedIndex=index"></Image>
                <Label
                  class="main-list-warehouse-name"
                  :text="wareshouse.name"
                  @tap="selectedIndex=index"
                ></Label>
                <Image
                  class="main-list-arrow"
                  :class="right_arrow"
                  src="res://right_arrow"
                  @tap="onArrowTap"
                ></Image>
              </GridLayout>
              <StackLayout class="sublist-container">
                <template v-for="section in wareshouse.sections">
                  <GridLayout class="sublist-main-item" columns="auto,*">
                    <Image class="sublist-main-icon" col="0" src="res://fl_scout"></Image>
                    <StackLayout col="1" width="100%">
                      <template v-for="(unit,index) in section.units">
                        <GridLayout class="minilist-main-item border" orientation="horizontal">
                          <GridLayout v-if="index==0" marginTop="5">
                            <Label class="minilist-main-heading-label-left" text="GLP-20-1"></Label>
                            <Label
                              class="minilist-main-heading-label-center"
                              col="1"
                              text="Report 3 Minute Ago"
                            ></Label>
                            <GridLayout class="minilist-main-heading-icons" columns="auto,auto">
                              <Image
                                class="minilist-main-heading-plug-icon"
                                col="0"
                                src="res://plug"
                              ></Image>
                              <Image
                                class="minilist-main-heading-battery-icon"
                                col="1"
                                src="res://battery"
                              ></Image>
                            </GridLayout>
                          </GridLayout>
                          <Label class="minilist-reading-name" :text="unit.unitName"></Label>
                          <StackLayout class="minilist-center-container" orientation="horizontal">
                            <Label class="minilist-min-value-label" :text="unit.minValue"></Label>
                            <Label
                              class="minilist-current-value-label"
                              :text="unit.currentValue+unit.readingUnit"
                            ></Label>
                            <Label class="minilist-max-value-label" :text="unit.maxValue"></Label>
                          </StackLayout>
                          <StackLayout
                            class="minilist-reported-at-container"
                            orientation="horizontal"
                          >
                            <Label class="minilist-reported-at-label" col="0" :text="unit.readAt"></Label>
                            <Label class="minilist-reported-at-ago-label" text="Minute Ago" col="1"></Label>
                          </StackLayout>
                        </GridLayout>
                      </template>
                    </StackLayout>
                  </GridLayout>
                </template>
              </StackLayout>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
// import Home from "./home";
import sideDrawer from "~/mixins/sideDrawer";

export default {
  mixins: [sideDrawer],
  mounted() {},
  data() {
    return {
      selectedIndex: -1,
      right_arrow: "expand",
      isExpanded: true,
      wareshouses: [
        {
          name: "Warehouse QR Area",
          sections: [
            {
              units: [
                {
                  maxValue: "15",
                  minValue: "-30",
                  currentValue: "25.5",
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "56.8",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "54.6",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "5"
                }
              ]
            },
            {
              units: [
                {
                  maxValue: "15",
                  minValue: "-30",
                  currentValue: "25.5",
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "56.8",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "54.6",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "5"
                }
              ]
            },
            {
              units: [
                {
                  maxValue: "15",
                  minValue: "-30",
                  currentValue: "25.5",
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "56.8",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "54.6",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "5"
                }
              ]
            },
            {
              units: [
                {
                  maxValue: "15",
                  minValue: "-30",
                  currentValue: "25.5",
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "56.8",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "4"
                },
                {
                  maxValue: "80",
                  minValue: "25",
                  currentValue: "54.6",
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: "5"
                }
              ]
            }
          ]
        },
        {
          name: "Warehouse QR Area",
          sections: [
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            },
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            },
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            },
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            }
          ]
        },
        {
          name: "Warehouse QR Area",
          sections: [
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            },
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            },
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            },
            {
              units: [
                {
                  maxValue: 15,
                  minValue: -30,
                  currentValue: 25.5,
                  readingUnit: "C",
                  unitName: "Temperature",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 56.8,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 4
                },
                {
                  maxValue: 80,
                  minValue: 25,
                  currentValue: 54.6,
                  readingUnit: "%",
                  unitName: "Humidity",
                  readAt: 5
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onItemTap(index) {
      this.selectedIndex = index;
      console.log("clicked", index);
    },
    onArrowTap() {
      console.log("clicked");

      if (!this.isExpanded) {
        this.right_arrow = "expand";
        this.isExpanded - true;
        console.log("clicked", "y");
      } else {
        this.right_arrow = "collapse";
        console.log("clicked", "x");

        this.isExpanded - false;
      }
    }
  }
};
</script>

<style scoped>
@keyframes down-ninty {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-90);
  }
}

@keyframes up-ninty {
  from {
    transform: rotate(-90);
  }
  to {
    transform: rotate(0);
  }
}
.main-page {
  height: 100%;
  width: 100%;
}

.normalized-textfield {
  border-width: 0.1;
  border-color: transparent;
  padding: 0;
}

.normalized-button {
  z-index: 0;
  border-width: 0.1;
  border-color: transparent;
  background-repeat: no-repeat;
}

.action-container {
  height: 10%;
  width: 100%;
  background-color: #e9e9e9;
}

.action-labels-container {
  height: 100%;
  width: 60%;
  horizontal-align: center;
  vertical-align: middle;
}

.heading-label {
  height: 60%;
  font-size: 24;
  font-weight: 700;
  color: #ef7e14;
  text-transform: none;
  horizontal-align: center;
}

.report-label {
  height: 40%;
  font-size: 15;
  text-transform: none;
  horizontal-align: center;
}

.menu-icon {
  height: 50%;
  width: 10%;
  horizontal-align: left;
  vertical-align: middle;
  margin-left: 10;
}

.main-list-container {
  height: 90%;
  width: 100%;
}

.main-list-item {
  margin-top: 0;
  margin-bottom: 0;
  background-color: #ee7e13;
  height: 60;
}

.main-list-icon {
  vertical-align: middle;
  horizontal-align: left;
  height: 40;
  width: 40;
  margin-left: 10;
}

.main-list-warehouse-name {
  font-size: 18;
  color: white;
  font-weight: 200;
  vertical-align: middle;
  horizontal-align: left;
  margin-left: 60;
}

.main-list-arrow {
  height: 25;
  width: 25;
  vertical-align: middle;
  horizontal-align: right;
  margin-right: 10;
}

.sublist-container {
  background-color: #e9e9e9;
}

.sublist-main-item {
  background-color: white;
  margin: 10;
  border-radius: 2;
}

.sublist-main-icon {
  height: 75;
  width: 75;
  vertical-align: middle;
  horizontal-align: left;
}

.minilist-main-item {
  height: 75;
  width: 100%;
}

.minilist-main-heading-label-left {
  font-size: 10;
  horizontal-align: left;
  vertical-align: top;
  margin-left: 10;
}

.minilist-main-heading-label-center {
  horizontal-align: center;
  vertical-align: top;
  font-size: 10;
}

.minilist-main-heading-icons {
  horizontal-align: right;
  vertical-align: top;
  margin-right: 10;
}

.minilist-main-heading-plug-icon {
  vertical-align: top;
  horizontal-align: left;
  height: 18;
  width: 18;
}

.minilist-main-heading-battery-icon {
  vertical-align: top;
  horizontal-align: right;
  height: 18;
  width: 18;
  margin-left: 10;
}

.minilist-reading-name {
  font-size: 10;
  horizontal-align: left;
  vertical-align: middle;
  margin-left: 10;
}

.minilist-center-container {
  horizontal-align: center;
  vertical-align: middle;
}

.minilist-min-value-label {
  vertical-align: top;
  margin-top: 12;
  font-size: 10;
  margin-left: 10;
  padding: 0;
}

.minilist-current-value-label {
  font-size: 22;
  color: green;
}

.minilist-max-value-label {
  vertical-align: top;
  margin-top: 12;
  font-size: 10;
  padding: 0;
}

.minilist-reported-at-container {
  horizontal-align: right;
  vertical-align: middle;
  margin-right: 10;
}

.minilist-reported-at-label {
  font-size: 22;
  padding: 0;
  margin: 0;
  color: red;
}

.minilist-reported-at-ago-label {
  vertical-align: top;
  margin-top: 12;
  font-size: 10;
}

.border {
  border-bottom-width: 1;
  border-bottom-color: #e9e9e9;
  border-left-width: 1;
  border-left-color: #e9e9e9;
}

.expand {
  animation-name: down-ninty;
  animation-direction: 0.8s;
  animation-timing-function: linear;
}

.collapse {
  animation-name: up-ninty;
  animation-direction: 0.8s;
  animation-timing-function: linear;
}
</style>
