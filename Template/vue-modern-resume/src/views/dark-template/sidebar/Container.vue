<template>
  <v-card
    color="#01579B"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Louis <span class="light-blue--text text--lighten-3">Chih</span>
        </h1>
        <span>
          A challenge-loving Software developer
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" color="yellow"/>
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip color="blue">
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md6
                  sm6
                  xs9
                >
                  <v-progress-circular
                    rotate="360"
                    size="165"
                    width="2"
                    :value="item.value"
                    color="blue"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'z23320785@gmail.com',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'New Taipei City, Taiwan',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-youtube-tv',
              text: 'youtube.com',
              link: 'https://www.youtube.com/playlist?list=PLqWQtwjE91RyJR2sKrK_-TXHVLCdrJno7',
            },
            {
              icon: 'mdi-facebook-box',
              text: 'Facebook.com',
              link: 'https://www.facebook.com/WATERBUD',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'Linkedin.com',
              link: 'https://www.linkedin.com/in/chih-louis-660160242/',
            }
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-biohazard',
              text: 'Challenges',
            },
            {
              icon: 'mdi-teach',
              text: 'Teaching',
            },
            {
              icon: 'mdi-karate',
              text: 'Sports',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-account-group',
              text: 'Leadership',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: 'Tickling Bugs!',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 20,
            },
            {
              text : 'Chinese',
              value: 100,
            }
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
