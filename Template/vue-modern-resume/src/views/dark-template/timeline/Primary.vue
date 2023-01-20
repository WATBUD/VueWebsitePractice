<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        id="timeline"
        :title="detailed ? 'Detail Experiences' : 'My Experiences'"
      >
        <template slot="actions">
          <div>
            <v-switch
              v-model="detailed"
              :label="detailed ? 'Detailed' : 'Summary'"
            />
          </div>
        </template>

        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
                      >
                        <div class="mr-1">
                          <span
                            v-if="item.text"
                            class="pre"
                          >{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div
                            v-else-if="item.html"
                            v-html="item.html"
                          />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex
                        v-if="item.image"
                        md5
                        xs12
                      >
                        <div
                          class="mt-2"
                        >
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {
        detailed   : true,
        year       : 'July 2018 - August 2019',
        transparent: true,
        title      : 'ASP.NET Software Engineer',
        html       : `
<p class="list-item-company-name-and-job-type"><span class="list-item-company-name"><a href="https://www.cakeresume.com/orgs/%E7%B7%AF%E5%89%B5%E8%BB%9F%E9%AB%94%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8?id=1158776">緯創軟體股份有限公司</a></span></p>
<p class="list-item-dates">七月&nbsp;2018&nbsp;-&nbsp;八月&nbsp;<span class="middot">2019&nbsp;</span><span class="profile_experience_work-period"><span class="year-count">1 年</span><span class="month-count">2 個月</span></span></p>
<div class="pre-line"><span class="Linkify">● 主要專案有：</span></div>
<div class="pre-line"><span class="Linkify">(1)銀行/保險/證券業系統開發、</span></div>
<div class="pre-line"><span class="Linkify">(2) 半導體/面板/電子產業相關系統開發、</span></div>
<div class="pre-line"><span class="Linkify">(3)通訊業系統開發、</span></div>
<div class="pre-line"><span class="Linkify">(4) 資安系統開發 </span></div>
<div class="pre-line"><span class="Linkify"><a href="http://2.xn--asp-v27fj36s.net/" target="_blank" rel="nofollow noopener noreferrer">2.擅長ASP.NET</a>/C#/<a href="http://asp.net/" target="_blank" rel="nofollow noopener noreferrer">ASP.NET</a>&nbsp;MVC、/SQL/Javascript/HTML </span></div>
<div class="pre-line"><span class="Linkify">開發經歷:中國信託銀行貸後管理系統 台新銀行金流簽合系統 </span></div>
<div class="pre-line"><span class="Linkify">銀行網站維護與開發:多國語系 業務流程修改 前端CSS設計等等 </span></div>
<div class="pre-line"><span class="Linkify">駐點經歷:中國信託銀行專案開發 中國信託自動化測試部門</span></div>`,
        image      : 'img/timeline/Algorithm Light Effects.png',
        iconImage  : 'img/timeline/Algorithm Light Effects.png',
      },
      
      {
        detailed   : true,
        year       : 'October 2019 - May 2022',
        transparent: true,
        title      : 'Senior Full Stack Software Engineer',
        html       : `
<p class="list-item-company-name-and-job-type"><span class="list-item-company-name"><a href="https://www.cakeresume.com/orgs/%E7%82%AC%E7%A2%9F%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8?id=1158784">炬碟有限公司</a></span></p>
<p class="list-item-dates">十月&nbsp;2019&nbsp;-&nbsp;五月&nbsp;<span class="middot">2022</span><span class="profile_experience_work-period"><span class="year-count">2 年</span><span class="month-count">8 個月</span></span></p>
<div class="pre-line"><span class="Linkify">Framework used:Angular/Node.js/Electron/Typescript Web technology used:HTML/CSS/JavaScript </span></div>
<div class="pre-line"><span class="Linkify">☁️ Implement lighting algorithm</span></div>
<div class="pre-line"><span class="Linkify"> ☁️ Use (Git) version control and write technical documents </span></div>
<div class="pre-line"><span class="Linkify">☁️ Develop and implement the template cutting screen function delivered by the front-end (UI/UX) design.。 </span></div>
<div class="pre-line"><span class="Linkify">☁️ Provide team members with technical assistance to solve problems in daily development or maintenance。 </span></div>
<div class="pre-line"><span class="Linkify">☁️ Receive and respond to customer system technical issues。</span></div>
<div class="pre-line"><span class="Linkify"> ☁️ Promote self-developed public version software。</span></div>
<div class="pre-line"><span class="Linkify"> ☁️ Use Adobe XD/Photoshop/Illustrator to cut the version of the screen function。 </span></div>
<div class="pre-line"><span class="Linkify">Main job: </span></div>
<div class="pre-line"><span class="Linkify"> ☁️E-sports App Development、Software Application App Development、Full-stack development of employee websites</span></div>

        `,
        image      : 'img/timeline/Algorithm Light Effects.png',
        imageHeight: 200,
        icon       : 'mdi-web',
      },

      {
        year : 'May 2022 - February 2023',
        title: 'Unilever Food Solutions Senior IT Engineer',
        html : `<h4>One person (Full Stack Web and software) engineer Framework: used:AngularJS/.net/MVC/MSSQL(TSQL)/Wpf/Winform/Console Program/Excel vba</h4>
                <h4>1.Develop and maintain C# Winform/WPF database applications</h4>
                <h4>2.Develop and maintain VBA macro programs</h4>
                <h4>3.Develop Web=&gt;AngularJS,.Net Razor,HTML, CSS, Javascript, jQuery, AJAX</h4>
                <h4>4.Develop Sever&nbsp;<a href="http://asp.net/" target="_blank" rel="nofollow noopener noreferrer">ASP.NET</a>&nbsp;MVC。</h4>
                <h4>5.Develop and maintain MS SQL Server database.</h4>
                <h4>6.Experience with Microsoft Azure Web Hosting</h4>
        `,
        image    : '',
        iconImage: 'img/timeline/vue-registrar-logo.png',
      },

      {
        year : 'So far ...',
        title: 'At least 6 years of software and web related experience',
        html : ``,
        icon: 'mdi-fountain-pen-tip',
      },
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items].reverse()
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>
