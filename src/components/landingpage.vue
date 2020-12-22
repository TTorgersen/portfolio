<template>
  <div class ="frontpage">
      <div class="header">
        <v-row>
        <v-col>
        <div  id="tittel" class="text-h2">Velkommen til min side. </div>
        <div id ="tittel" class="text-h5">Her viser jeg frem mine kunnskaper, erfaringer, meninger og oppnåelser. </div>
        </v-col> <v-col>
        <img id="frontimage" src="../assets/bw_portrett.jpg"/>
        </v-col>  
        </v-row>
      </div>
        <div class="body">
        <!-- presentere apper i Card-format --> 
        <v-card class="maincard">
        <div id="tittel2" class="text-h5"> Mine prosjekter </div>
        <v-row>
            <v-col class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for="(cardinfo, index) in cardInfos" :key="index">
                <v-card>
                    <v-card-title>{{cardinfo.title}}</v-card-title>
                    <v-img :src="cardinfo.image"> </v-img>
                    <v-card-text>{{cardinfo.description}}</v-card-text>
                    <v-card-text primary class="text-subtitle-2"> {{cardinfo.details}} </v-card-text>

                </v-card>
            </v-col>
        </v-row>

        </v-card>
        </div>
        <div class="footer">
            <!-- Link til sosiale medier -->
            <v-col>
                <v-row  v-for="(info, index) in social" :key=index>
                    <div>
                    <!-- <v-icon>{{info.image}}</v-icon> -->
                        <a target="_blank" :href="info.link">
                            <p class="text-subtitle-2">{{info.tittel}}</p>
                        </a>
                    </div>
                </v-row> 
            </v-col>
        </div> 
  </div>
  
</template>

<script>
var cardData = [{
    title: "Bachelor", 
    description: "Drone, 3D, visualisering", 
    details: "My bachelor project 2019", 
    image: require('../assets/bachelor.png')
},
{
    title: "WMT", 
    description: "Cloud, AWS", 
    details: "Deltidsjobb", 
    image: require('../assets/wmt.png')
},
{
    title: "Retro game", 
    description: "p5.js", 
    details: "Prosjekt fra Griffith University", 
    image: require("../assets/galaga.png")
},
{
    title: "Capgemini Capathon 2020", 
    description : "team collab for capathon", 
    details: "hosted by cap", 
    image: require("../assets/capathon.png")
},
{
    title: "Portfolio", 
    description: "Vuetify, Vue", 
    details: "Hobby", 
    image: require("../assets/builder2.png")
}]
var socialmedia =  [{
    tittel : "linkedin", 
    image : "mdi-linkedin", 
    link : "www.linkedin.com/in/ttorgersen"
}, 
{
    tittel : "youtube", 
    image : "mdi-youtube", 
    link : "https://www.youtube.com/channel/UC7uV7gHS_asCTxY1HGlWYBg/videos"
}, 
{
    tittel : "github", 
    image : "mdi-github", 
    link : "https://github.com/TTorgersen"
}, 
{
    tittel : "UiS Ambassadørside", 
    image : "mdi-linkedin", 
    link : "https://www.uis.no/nb/heia-tor-fredrik"
}, 
]
export default {
    name: 'Landing', 
    data(){
        return{
            cardInfos: cardData, 
            social : socialmedia,
        }
    }
}
</script>

<style>
.frontpage{
    overflow-y: scroll; 

}
.header{
    background-color: lightblue;
    z-index: 0;
    padding: 80px; 
    overflow: hidden;
    height: 60vh;
}
#tittel {
    left: 2%; 
    position: relative;
}
#frontimage{
    height: 250px; 
    width: 300px; 
    float: right; 
    border-radius: 25px;
    position: relative;

}
.maincard{
    background-color: white; 
    width: 90%; 
    left: 5%; 
    z-index: 3; 
    height: 92%; 
    position: relative;
    margin: -60px 30px -30px 30px;
    padding: 20px; 

}
.infoCard{
    background-color: #696969;
    padding: 20px; 
}
.footer {
    background-color: lightblue;
    z-index: 0;
    padding: 80px; 
    overflow: hidden;
    height: 50vh;
}
.frontpage::-webkit-scrollbar {
  display: none;
}

.frontpage {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>