<template>
    <div class="content">
        <div class="r_header">
            <h2>
                <span>7 guides are live streaming at {{destination}}</span>
            </h2>
        </div>
        <div class="result">
            <el-row :gutter="7">
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/1.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Liaoning vs Tongxi</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/2.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Shangdong vs Tianjin</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/3.jpg" class="image">
                    <div class="ctitle">
                        <span>The strongest maniac</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/1.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Liaoning vs Tongxi</span>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="7">
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/2.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Shangdong vs Tianjin</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/3.jpg" class="image">
                    <div class="ctitle">
                        <span>The strongest maniac</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/1.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Liaoning vs Tongxi</span>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <el-divider></el-divider>
        <div class="recom_header">
            <h2>
                <span>35 VODS are available to watch...</span>
                <a class="formore" title="for more">click for more</a>
            </h2>
        </div>
        <div class="recom">
            <el-row :gutter="7">
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/1.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Liaoning vs Tongxi</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/2.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Shangdong vs Tianjin</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/3.jpg" class="image">
                    <div class="ctitle">
                        <span>The strongest maniac</span>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="6" class="card_item">
                    <el-card :body-style="{padding:'0px'}" shadow="hover" @click.native="showdetail">
                    <img src="@/assets/hotbroadcast/1.jpg" class="image">
                    <div class="ctitle">
                        <span>Broadcasting CBA Liaoning vs Tongxi</span>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'search',
    props:{
        destination:{
            type:String,
            default:""
        }
    },
    methods:{
        showdetail(){
            this.$router.push({name:'detail'})
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    margin: 0 100px;
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
    .recom_header{
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
</style>