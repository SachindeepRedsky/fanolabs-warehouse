<template>
  <Page class="main-page" actionBarHidden="true">
    <GridLayout class="main-page">
      <StackLayout class="main-page" orientation="vertical">
        <Image class="logo" src="res://logo"></Image>
        <StackLayout class="email-element" orientation="vertical">
          <Label class="email-heading" text="E-MAIL"></Label>
          <StackLayout class="email-input-container" orientation="horizontal">
            <TextField
              class="normalized-textfield email-textfield"
              hint="Enter your email"
              @textChange="onEmailTextChange"
            ></TextField>
            <Image class="email-icon" src="res://email"></Image>
          </StackLayout>
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="password-element" orientation="vertical">
          <Label class="password-heading" text="Password"></Label>
          <StackLayout class="password-input-container" orientation="horizontal">
            <TextField
              class="normalized-textfield password-textfield"
              hint="Enter your password"
              secure="true"
              @textChange="onPasswordTextChange"
            ></TextField>
            <Image class="password-icon" src="res://password"></Image>
          </StackLayout>

          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <Button class="normalized-button login-button" text="LOGIN" @tap="onLogin"></Button>
      </StackLayout>
      <!-- <GridLayout v-if="isLoading" width="100%" height="100%">
        <ActivityIndicator
          horizontalAlignment="center"
          verticalAlignment="middle"
          [busy]="isLoading"
          rowspan="1"
          colspan="1"
        ></ActivityIndicator>
      </GridLayout>-->
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

.logo {
  width: 33%;
  height: 33%;
  margin-top: 8%;
}

.email-element {
  width: 80%;
  margin-top: 5%;
}

.email-heading {
  font-weight: 700;
  font-size: 12%;
}

.email-input-container {
  width: 100%;
}

.email-textfield {
  font-size: 18%;
  width: 92%;
  height: 10%;
}

.email-icon {
  width: 6%;
  height: 6%;
}

.password-element {
  width: 80%;
  margin-top: 2%;
}

.password-heading {
  font-weight: 700;
  font-size: 12%;
}

.password-input-container {
  width: 100%;
}

.password-textfield {
  font-size: 18%;
  width: 92%;
  height: 10%;
}

.password-icon {
  width: 8%;
  height: 6%;
}

.login-button {
  font-weight: 700;
  color: white;
  text-transform: none;
  margin-top: 5%;
  border-radius: 0;
  background-color: #ef7e14;
  width: 80%;
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
