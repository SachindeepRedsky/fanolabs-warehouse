<template>
  <Page actionBarHidden="true">
    <RadSideDrawer ref="drawer" height="100%" width="100%">
      <GridLayout
        ~drawerContent
        backgroundColor="white"
        rows="auto,auto"
        height="100%"
        width="100%"
      >
        <GridLayout row="0" rows="auto,auto" height="30%" width="100%" backgroundColor="#ef7e14">
          <Button
            row="0"
            class="normalized-button cross-button"
            @tap="$refs.drawer.nativeView.closeDrawer()"
          ></Button>
          <StackLayout height="80%" width="100%" orientation="vertical" row="1">
            <Image class="user-image" src="res://icon"></Image>
            <Label text="Zhiyong Li" color="white" fontSize="18%" marginLeft="10%" marginTop="5%"></Label>
            <Label
              text="dev@zhiyongli.com"
              fontSize="14%"
              marginLeft="10%"
              color="white"
              opacity="0.7"
              marginBottom="2%"
            ></Label>
          </StackLayout>
        </GridLayout>
        <StackLayout row="1" height="75%" width="100%" orienation="vertical">
          <Button class="normalized-button drawer-button home-button" text="Home"></Button>
          <Button class="normalized-button drawer-button settings-button" text="Setting"></Button>
          <Button class="normalized-button drawer-button logout-button" text="Logout"></Button>
        </StackLayout>
      </GridLayout>

      <GridLayout ~mainContent columns="*" rows="*">
        <!-- <Label
          class="message"
          @tap="$refs.drawer.nativeView.showDrawer()"
          :text="msg"
          col="0"
          row="0"
        />-->
        <!-- <Login></Login> -->
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script >
import Login from "./Login";
import Home from "./Home";

export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  mounted() {
    this.$navigateTo(Home);
  },
  components: {
    Login,
    Home
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #53ba82;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}

.normalized-button {
  z-index: 0;
  border-width: 0.1;
  border-color: transparent;
  background-repeat: no-repeat;
}

.cross-button {
  width: 18%;
  height: 12%;
  margin-top: 6%;
  background-image: url("res://cross");
  background-position: center;
  background-size: contain;
  horizontal-align: right;
  vertical-align: top;
}

.user-image {
  horizontal-align: left;
  vertical-align: top;
  width: 40%;
  height: 55%;
  margin-top: 6%;
  margin-left: 5%;
}

.drawer-button {
  background-position: 10% 50%;
  background-size: 10% 50%;
  text-align: left;
  padding-left: 65%;
  font-weight: 400;
}

.home-button {
  background-image: url("res://home");
}

.settings-button {
  background-image: url("res://settings");
}

.logout-button {
  background-image: url("res://logout");
}
</style>
