<template>
    <div class="main">
        <div class="left">
            <div class="layout-Player-title">
                <div class="avat">
                    <el-avatar shape="square" :size="124" :src="avatarurl"></el-avatar>
                </div>
                <div class="player-title">
                    <div class="p_title">
                        <h3>{{playertitle}}</h3>
                    </div>
                    <div class="p_type">
                        <a href="#">{{playertype.type}}</a>
                        <span><i class="el-icon-caret-right" style="font-size:14px;color:#838c9a;"></i></span>
                        <a href="#">{{playertype.subtype}}</a>
                    </div>
                    <div class="p-info">
                        <span>{{playerinfo.name}}</span>
                    </div>
                </div>
            </div>
            <div class="player-body">
                <video src="https://www.w3school.com.cn/i/movie.ogg" controls="controls" height="380" width="818" poster="@/assets/bg.jpg">
                    your browser does not support the video tag
                </video>
            </div>
        </div>
        <div class="right">
            <div class="r_b_head">
                <el-button type="danger" style="width:48%">Follow</el-button>
                <el-button type="danger" style="width:48%">Donate</el-button>
            </div>
            <el-divider></el-divider>
            <div class="chathistory">
                <span class="user">Tom:</span>good
                <br>
                <span class="user">Jerry:</span>very good
            </div>
            <div class="r_b_foot">
                <el-button style="width:100%">Send a message to your guide  <font-awesome-icon :icon="['far', 'smile']"></font-awesome-icon></el-button>
            </div>
            <div class="r_b_foot">
                <el-button style="width:100%">Push to talk privatedly(VIP)</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"detail",
    data(){
        return{
            avatarurl:require('@/assets/Avatar/avater.jpg'),
            playertitle:"John Simth is talking you on a tour at attraction 1",
            playertype:{
                type:"Online games",
                subtype:"League of Legends"
            },
            playerinfo:{
                name:'John Simth'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    position: relative;
    margin-left: 100px;
    margin-top: 10px;
    .left{
        margin-right: 346px;
        .layout-Player-title{
            position: relative;
            margin-bottom: 10px;
            background-color: #fff;
            min-height: 124px;
            border: 1px solid #e5e4e4;
            border-radius: 4px;
            .avat{
                position: absolute;
                left: 0;
                top: 0;
                width: 124px;
                height: 124px;
                z-index: 1;
            }
            .player-title{
                margin-left: 129px;
                .p_type{
                    a{
                        text-decoration: none;
                        color: #838c9a;
                    }
                    font-size: 12px;
                }
            }
        }
    }
    .right{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 336px;
        border: 1px solid #e5e4e4;
        border-radius: 4px;
        .r_b_head,.r_b_foot{
            margin: 8px
        }
        .chathistory{
            position:relative;
            border-bottom: 1px solid #e5e4e4;
            left: 0;
            top: 0;
            bottom: 90px;
            height: 300px;
            padding: 0 0 0 10px ;
            font-size: 13px;
            .user{
                color:blue;
            }
        }
    }
}
</style>