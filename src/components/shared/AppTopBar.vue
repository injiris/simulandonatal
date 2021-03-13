<template>
  <v-card class="">
    <v-app-bar
      absolute
      app
      color="teal darken-4"
      dark
      shrink-on-scroll
      prominent
      src="https://i.pinimg.com/originals/54/9e/ac/549eaceb76f02ecf8ca8aae80095a0de.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>Campeonato Brasileiro</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="background-fodase"
    >
      <v-list nav dense>
        <div v-for="(link, i) in links" :key="i">
          <v-list-item
            v-if="!link.subLinks"
            :to="link.to"
            :key="link.text"
            no-action
            :prepend-icon="link.icon"
            :value="false"
            active-class="white"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title v-text="link.text" />
          </v-list-item>

          <v-list-group
            v-else
            :key="link.text"
            no-action
            :prepend-icon="link.icon"
            :value="false"
            active-class="white"
          >
            <template v-slot:activator>
              <v-list-item-title class="text-fodase">{{
                link.text
              }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="sublink in link.subLinks"
              :to="sublink.to"
              :key="sublink.text"
            >
              <v-list-item-icon>
                <v-img class="mx-auto" :src="sublink.icon"></v-img>
              </v-list-item-icon>
              <v-list-item-title>{{
                sublink.text
              }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container style="height: 1500px">
        <v-container class="d-flex align-center" id="rotas">
          <router-view />
        </v-container>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "AppTopBar",
  data() {
    return {
      clubesTabela: [],
      drawer: false,
      group: null,
      links: [
        {
          text: "Inicio",
          to: "/",
          icon: "mdi-home",
        },
        {
          text: "Classificação",
          to: "/Classificacao",
          icon: "mdi-soccer",
        },
        {
          icon: "account-circle",
          text: "Times",
          subLinks: [
            {
              text: "Corinthians",
              to: "/Corinthians",
              icon: "https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png",
            },
            {
              text: "Flamengo",
              to: "/Flamengo",
              icon: "https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png"
            },
            {
              text: "Fortaleza",
              to: "/Fortaleza",
              icon: "https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png"
            },
            {
              text: "Internacional",
              to: "/Internacional",
              icon: "https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png"
            },
            {
              text: "Santos",
              to: "/Santos",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1045px-Santos_logo.svg.png"
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}

#rotas {
  margin-top: 15vh;
}

a {
  text-decoration: none;
}

.text-fodase {
  color: black;
}

.v-application .primary--text {
    color: black !important;
}

.v-application a {
    color: black;
}

.v-list--dense .v-list-item .v-list-item__icon {
    height: 30px !important;
    max-width: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
