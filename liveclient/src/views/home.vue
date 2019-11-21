<template>
    <div>
        <div class="content" :style="bgimg">
            <div class="title">Welcome!</div>
            <div class="search">
                <gmap-autocomplete ref="input" placeholder="Tell us where is the destination of your dream vacation..." class="introInput el-input__inner" @place_changed="setPlace">
                </gmap-autocomplete>
                <el-button type="primary" icon="el-icon-search" @click="search" style="margin-left:10px;"></el-button>
            </div>
            <div class="map">
                <GmapMap
                  :center="center"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 700px; height: 350px"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  />
                </GmapMap>
            </div>
        </div>
        <div class="popular">
          <div class="pop_title">
              <h2>
              <span>Recommended Channels</span>
              <a class="formore" title="for more">click for more</a>
              </h2>
          </div>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Popular Attractions:</span>
                </div>
                <div v-for="o in 3" :key="o" class="text item">
                  <i class="el-icon-view" style="font-size:32px"></i>
                  <a href="" style="font-size:32px;text-decoration:none;">xxxxxxxx</a>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Popular Cities:</span>
                </div>
                <div v-for="o in 3" :key="o" class="text item">
                  <i class="el-icon-camera-solid" style="font-size:32px"></i>
                  <a href="" style="font-size:32px;text-decoration:none;">xxxxxxxx</a>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Popular Tour Courses:</span>
                </div>
                <div v-for="o in 3" :key="o" class="text item">
                  <i class="el-icon-guide" style="font-size:32px"></i>
                  <a href="" style="font-size:32px;text-decoration:none;">xxxxxxxx</a>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="hotbroadcast">
            <div class="h_title">
                <h2>
                <span>People are watching...</span>
                </h2>
            </div>
            <div class="h_card">
                <el-row :gutter="7">
                    <el-col :span="4" class="card_item">
                        <el-card :body-style="{padding:'0px'}" shadow="hover">
                        <img src="@/assets/hotbroadcast/1.jpg" class="image">
                        <div class="ctitle">
                            <span>正播CBA-辽宁VS同曦</span>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" class="card_item">
                        <el-card :body-style="{padding:'0px'}" shadow="hover">
                        <img src="@/assets/hotbroadcast/2.jpg" class="image">
                        <div class="ctitle">
                            <span>正播CBA-山东VS天津</span>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" class="card_item">
                        <el-card :body-style="{padding:'0px'}" shadow="hover">
                        <img src="@/assets/hotbroadcast/3.jpg" class="image">
                        <div class="ctitle">
                            <span>最强狂兵🔥爆燃爆热血</span>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" class="card_item">
                        <el-card :body-style="{padding:'0px'}" shadow="hover">
                        <img src="@/assets/hotbroadcast/1.jpg" class="image">
                        <div class="ctitle">
                            <span>正播CBA-辽宁VS同曦</span>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" class="card_item">
                        <el-card :body-style="{padding:'0px'}" shadow="hover">
                        <img src="@/assets/hotbroadcast/2.jpg" class="image">
                        <div class="ctitle">
                            <span>正播CBA-山东VS天津</span>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" class="card_item">
                        <el-card :body-style="{padding:'0px'}" shadow="hover">
                        <img src="@/assets/hotbroadcast/3.jpg" class="image">
                        <div class="ctitle">
                            <span>最强狂兵🔥爆燃爆热血</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name:"client-search",
  data(){
    return {
      bgimg:{
        background: "url(" + require("@/assets/bg.jpg") + ")"
      },
      destination:"",
      //maps
      center: {lat: 10.0, lng: 10.0},
      markers: [{
                    position: {lat: 11.0, lng: 11.0}
                }],
      currentPlace: null
    }
  },
  methods:{
      search(){
        this.$router.push({name:'search',params:{destination:this.$refs.input.$refs.input.value}})
      },
      updateMaker(event){
        console.log('updateMaker, ', event.latLng.lat());
        this.markers[0].position = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        }
      },
      setPlace(place) {
          this.currentPlace = place;
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers=[{ position: marker }];
          this.center = marker;
      },
      geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
  },
  mounted() {
    this.geolocate();
  },
}
</script>
<style lang="scss">
#app {
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.content{
  background-image:'url("@/assets/bg.jpg")' ;
  height: 460px;
  .title{
    display: flex;
    justify-content:center;
    font-size: 30px;
    font-weight: bold;
  }
  .search{
    display: flex;
    justify-content:center;
    margin-top: 10px;
    margin-left: 375px;
    width: 500px;
  }
  .map{
    display: flex;
    justify-content:center;
    margin-top: 5px;
  }
}
.popular{
  margin: 10px 100px;
  .pop_title{
        position: relative;
        .formore{
            position: absolute;
            right: 0;
            font-size: 14px;
            font-weight: 400;
            color: #333;
        }
        .formore:hover{
            cursor: pointer;
            color: #148aff;
        }
    }
}
.hotbroadcast{
  margin: 0 100px;
  .h_card{
    .card_item{
      .el-card{
        border: none;
      }
      .image{
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 4px;
      }
      .ctitle{
        font-weight: 700;
        margin-top: 3px;
      }
    }
    .card_item:hover{
      cursor: pointer;
      img{
        box-shadow: 2px 2px 5px #888888;
      }
      .ctitle{
        color: blue;
      }
      
    }
  }
}
</style>