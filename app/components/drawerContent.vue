<template lang="html">
 
    <GridLayout
    class='main'
        rows="auto,auto"
      >
        <GridLayout class="profile-container" row="0" rows="auto,auto" >
          <Button
            row="0"
            class="normalized-button cross-button"
            @tap="closeDrawer()"
          ></Button>
          <StackLayout class="user-details" row="1" orientation="vertical">
            <Image class="user-image" src="res://icon"></Image>
            <Label class="user-name" text="Zhiyong Li"></Label>
            <Label
            class="user-email"
              text="dev@zhiyongli.com"
            ></Label>
          </StackLayout>
        </GridLayout>
        <StackLayout class="drawer-options" row="1" orienation="vertical">
          <Button class="normalized-button drawer-button home-button" @tap="onHomeTap()" text="Home"></Button>
          <Button class="normalized-button drawer-button settings-button" @tap="onSettingTap()" text="Setting"></Button>
          <Button class="normalized-button drawer-button logout-button" @tap="onLogoutTap()" text="Logout"></Button>
        </StackLayout>
      </GridLayout>
</template>

<script>
import sideDrawer from "~/mixins/sideDrawer";
export default {
  mixins: [sideDrawer],
  data() {
    return {
      pages: [
        { name: "Home", component: this.$routes.Home },
        { name: "Login", component: this.$routes.Login }
      ]
    };
  },
  methods: {
    goToPage(pageComponent) {
      this.$navigateTo(pageComponent);
      this.closeDrawer();
    },
    onHomeTap() {
      console.log("Home Clicked");
      this.closeDrawer();
      this.$navigateTo(this.$routes.Home);
      this.closeDrawer();
    },
    onSettingTap() {
      console.log("Setting Clicked");
      this.closeDrawer();
    },
    onLogoutTap() {
      console.log("Logout Clicked");
      this.$navigateTo(this.$routes.Login);
      this.closeDrawer();
    }
  }
};
</script>

<style lang="css">
.main {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}

.profile-container {
  height: 30%;
  width: 100%;
  background-color: #ef7e14;
}

.user-details {
  height: 80%;
  width: 100%;
}

.user-name {
  color: #ffffff;
  font-size: 18%;
  margin-left: 10%;
  margin-top: 5%;
}

.user-email {
  font-size: 14%;
  margin-left: 10%;
  color: #ffffff;
  opacity: 0.7;
  margin-bottom: 2%;
}

.drawer-options {
  height: 75%;
  width: 100%;
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
