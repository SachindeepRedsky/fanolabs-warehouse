<template>
  <Page class="main-page" actionBarHidden="true">
    <StackLayout orientation="vertical" class="main-page">
      <GridLayout height="10%" width="100%" backgroundColor="#e9e9e9">
        <GridLayout
          height="100%"
          width="60%"
          rows="auto,auto"
          horizontalAlignment="center"
          verticalAlignment="middle"
        >
          <Label
            row="0"
            height="60%"
            text="OVERVIEW"
            fontSize="24"
            fontWeight="700"
            color="#ef7e14"
            textTransform="none"
            horizontalAlignment="center"
          ></Label>
          <Label
            row="1"
            height="40%"
            text="Checked at: July 4th, 12:00:30"
            fontSize="15"
            textTransform="none"
            horizontalAlignment="center"
          ></Label>
        </GridLayout>

        <Image
          src="res://menu"
          height="50%"
          width="10%"
          horizontalAlignment="left"
          verticalAlignment="middle"
          @tap="openDrawer()"
          marginLeft="10"
        ></Image>
      </GridLayout>

      <StackLayout height="90%" width="100%">
        <ListView for="(wareshouse,index) in wareshouses" class="main-page">
          <v-template>
            <StackLayout orientation="vertical">
              <GridLayout
                orientation="horizontal"
                marginTop="0"
                marginBottom="0"
                backgroundColor="#ee7e13"
                height="60"
                @tap="selectedIndex=index"
              >
                <Image
                  src="res://f1_base"
                  verticalAlignment="middle"
                  horizontalAlignment="left"
                  height="40"
                  width="40"
                  marginLeft="10"
                  @tap="selectedIndex=index"
                ></Image>
                <Label
                  :text="wareshouse.name"
                  fontSize="18"
                  color="white"
                  fontWeight="200"
                  verticalAlignment="middle"
                  horizontalAlignment="left"
                  marginLeft="60"
                  @tap="selectedIndex=index"
                ></Label>
                <Image
                  :class="right_arrow"
                  src="res://right_arrow"
                  height="25"
                  width="25"
                  verticalAlignment="middle"
                  horizontalAlignment="right"
                  marginRight="10"
                  @tap="onArrowTap"
                ></Image>
              </GridLayout>
              <StackLayout backgroundColor="#e9e9e9">
                <template v-for="section in wareshouse.sections">
                  <GridLayout columns="auto,*" backgroundColor="white" margin="10" borderRadius="2">
                    <Image
                      col="0"
                      src="res://fl_scout"
                      height="75"
                      width="75"
                      vericalAlignment="middle"
                      horizontalAlignment="left"
                    ></Image>
                    <StackLayout col="1" width="100%">
                      <template v-for="(unit,index) in section.units">
                        <GridLayout
                          class="border"
                          orientation="horizontal"
                          height="75"
                          width="100%"
                        >
                          <GridLayout v-if="index==0" marginTop="5">
                            <Label
                              text="GLP-20-1"
                              fontSize="10"
                              horizontalAlignment="left"
                              verticalAlignment="top"
                              marginLeft="10"
                            ></Label>
                            <Label
                              col="1"
                              text="Report 3 Minute Ago"
                              horizontalAlignment="center"
                              verticalAlignment="top"
                              fontSize="10"
                            ></Label>
                            <GridLayout
                              horizontalAlignment="right"
                              verticalAlignment="top"
                              columns="auto,auto"
                              marginRight="10"
                            >
                              <Image
                                col="0"
                                src="res://plug"
                                verticalAlignment="top"
                                horizontalAlignment="left"
                                height="18"
                                width="18"
                              ></Image>
                              <Image
                                col="1"
                                src="res://battery"
                                verticalAlignment="top"
                                horizontalAlignment="right"
                                height="18"
                                width="18"
                                marginLeft="10"
                              ></Image>
                            </GridLayout>
                          </GridLayout>
                          <Label
                            :text="unit.unitName"
                            fontSize="10"
                            horizontalAlignment="left"
                            verticalAlignment="middle"
                            marginLeft="10"
                          ></Label>
                          <StackLayout
                            orientation="horizontal"
                            horizontalAlignment="center"
                            verticalAlignment="middle"
                          >
                            <Label
                              verticalAlignment="top"
                              :text="unit.minValue"
                              marginTop="12"
                              fontSize="10"
                              marginLeft="10"
                              padding="0"
                            ></Label>
                            <Label
                              :text="unit.currentValue+unit.readingUnit"
                              fontSize="22"
                              color="green"
                            ></Label>
                            <Label
                              :text="unit.maxValue"
                              verticalAlignment="top"
                              marginTop="12"
                              fontSize="10"
                              padding="0"
                            ></Label>
                          </StackLayout>
                          <StackLayout
                            orientation="horizontal"
                            horizontalAlignment="right"
                            verticalAlignment="middle"
                            marginRight="10"
                          >
                            <Label
                              col="0"
                              :text="unit.readAt"
                              fontSize="22"
                              padding="0"
                              margin="0"
                              color="red"
                            ></Label>
                            <Label
                              col="1"
                              text="Minute Ago"
                              verticalAlignment="top"
                              marginTop="12"
                              fontSize="10"
                            ></Label>
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
