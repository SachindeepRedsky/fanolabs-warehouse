<template>
  <Page class="main-page" actionBarHidden="true">
    <GridLayout class="main-page">
      <StackLayout class="main-page" orientation="vertical">
        <Image src="res://logo" width="33%" height="33%" marginTop="8%"></Image>
        <StackLayout orientation="vertical" width="80%" marginTop="5%">
          <Label fontWeight="700" text="E-MAIL" fontSize="12%"></Label>
          <StackLayout orientation="horizontal" width="100%">
            <TextField
              class="normalized-textfield"
              hint="Enter your email"
              fontSize="18%"
              width="92%"
              height="10%"
              @textChange="onEmailTextChange"
            ></TextField>
            <Image src="res://email" width="6%" height="6%"></Image>
          </StackLayout>
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout orientation="vertical" width="80%" marginTop="2%">
          <Label fontWeight="700" text="Password" fontSize="12%"></Label>
          <StackLayout orientation="horizontal" width="100%">
            <TextField
              class="normalized-textfield"
              hint="Enter your password"
              fontSize="18%"
              width="92%"
              height="10%"
              secure="true"
              @textChange="onPasswordTextChange"
            ></TextField>
            <Image src="res://password" width="8%" height="6%"></Image>
          </StackLayout>

          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <Button
          class="normalized-button"
          text="LOGIN"
          fontWeight="700"
          color="white"
          textTansform="none"
          @tap="onLogin"
          marginTop="5%"
          borderRadius="0"
          backgroundColor="#ef7e14"
          width="80%"
        ></Button>
      </StackLayout>
      <GridLayout v-if="isLoading" width="100%" height="100%">
        <ActivityIndicator
          horizontalAlignment="center"
          verticalAlignment="middle"
          [busy]="isLoading"
          rowspan="1"
          colspan="1"
        ></ActivityIndicator>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Home from "./Home";
import sideDrawer from "~/mixins/sideDrawer";

export default {
  mixins: [sideDrawer],
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },

  methods: {
    onLogin() {
      if (this.email == "") {
        alert("Email can not be empty");
        return;
      }
      if (this.password == "") {
        alert("Password can not be empty");
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.$navigateTo(Home);
      }, 1500);
    },

    onEmailTextChange(args) {
      const textField = args.object;
      this.email = textField.text;
      console.log("Email:::", textField.text);
    },
    onPasswordTextChange(args) {
      const textField = args.object;
      this.password = textField.text;
      console.log("Pass:::", textField.text);
    }
  }
};
</script>

<style scoped>
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
</style>
