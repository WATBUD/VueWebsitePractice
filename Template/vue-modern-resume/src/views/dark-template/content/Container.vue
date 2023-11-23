<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="Who am I?"
      >
        I'm a Full Stack developer born in Tawain and founder of <br>
        I'm interested and skilled in different topics of Information Technology including programming, web development, and computer.
      </content-section>
      <content-section
        v-if="portfolios"
        title="portfolio"
      >
        <v-layout
          v-for="(proud, i) in portfolios"
          :key="i"
        >
          <!-- <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex> -->
          <v-flex  style="background:#26c6da;"
            md12
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section v-if="educations" title="Education" >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md2>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md10>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section v-if="skills" id="to-timeline" title="Skills" >
        <!-- <template slot="actions">
          (...)
        </template> -->
        <v-layout wrap>
          <template
            v-for="(skill, index) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="index"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="index"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    portfolios: [
      {
        icon  : 'mdi-account-multiple',
        text  : '<div>\
<div>--------- ⌨Basic Skills---------</div>\
<div>⌨Web Skill:HTML/CSS/JavaScript/.NET Webform/Node.js/PHP(self-taught)/Angular/Vue(self-study))/React(self-taught)</div>\
<div>⌨Framework:Winform/.Net MVC/Unity3D game engine/Construct game engine</div>\
<div>⌨Database:MySql/MSSQL</div>\
<div>⌨Computer skill：</div>\
<div>☁️Win7/Win10 system operation Office(Excel Word PowerPoint)/Power Query/VBA Macro/Windows Automation Program</div>\
<div>☁️Refill system/hardware disassembly/assembly computer</div>\
<div>☁️PowerDirector、Adobe Premiere video editing</div>\
<div>⌨Development experience:-At least 6 years of software and web related experience-</div>\
<div>1.PHP+MYSQL+XAMPP Front-end webpage and server setup</div>\
<div>2.APS.NET/WebForm/MVC+MSSQL+IIS Front-end webpage and server setup</div>\
<div>3.Unity3D+MYSQL+Python+Lua Gaming webpage, mobile game development</div>\
<div>4.Construct Game Design and Development</div>\
<div>5.Angular Front-end webpage and Node server setup</div>\
<div>6.Angular/Electron/Typescript/Node.js Computer headset, mouse, keyboard, software design and development</div>\
<div>7.Develop automated reports and programs</div>\
</div>',
        source: '(My awesome colleagues)',
      },
    ],
    educations: [
      {
        from       : '2012',
        to         : '2016',
        title      : 'Bachelor\'s degree, Department of Multimedia and Game Development',
        location   : 'Chung Chou University',
        description: 'University topics:飛絡力拳擊機遊戲程式，使用Unity game engine development，主要利用RS232與電路板連接，以C#陣列寫入指定記憶體位置下Command。\
                      將遊戲以3D動作呈現在拳擊機，根據偵測光影速度表現分數至畫面。\
                      時常利用空餘時間學習程式相關知識，期望從各個方面來完善自己，全面提高自己的綜合素質，鍛鍊了組織能力和溝通協調能力。',
      },
    ],
    skills: [
      
      {
        title: 'C#',
        icon : 'mdi-language-csharp',
        value: 90,
      },
      {
        title: 'Angular',
        icon : 'mdi-language-csharp',
        value: 90,
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        value: 80,
      },
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 60,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 60,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 60,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 60,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 60,
      },
      {
        title: 'C/C++',
        icon : 'mdi-language-cpp',
        value: 38,
      },
      { divider: true },
      {
        title: 'teamwork',
        icon : 'mdi-account-group',
        value: 90,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
