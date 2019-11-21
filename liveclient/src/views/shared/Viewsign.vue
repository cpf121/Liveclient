<template>
    <div class="viewsign">
        <div class="view_form">
            <h3 style="margin-top:32px;margin-bottom:24px">Join us and take your adventure today!</h3>
            <el-form class="form" ref="form" :model="form" label-width="80px" label-position="top">
                <el-form-item label="Username:">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="Password:">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="Email:">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="Phone Number">
                    <el-input v-model="form.pnumber"></el-input>
                </el-form-item>
                <el-form-item label="Date of Birth">
                    <el-date-picker type="date" placeholder="" v-model="form.birth" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-radio-group v-model="form.attention">
                        <el-radio label="By clicking up ,you are indicating that ..."></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-button type="warning" style="width:100%">Sign up</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name:"viewsign",
    data(){
        return {
            form:{
                name:""
            }
        }
    }
}
</script>

<style lang="scss">
.viewsign{
    display: flex;
    width: 100%;
    justify-content: center;
    .view_form{
        align-items: center;
        .form{
            border: 1px solid #DCDFE6;
            border-radius: 4px;
            padding: 20px;
            .el-form-item{
                margin-bottom: 10px;
                .el-form-item__label{
                    font-size: bold;
                    line-height: 0;
                    padding: 0
                }
            }
        }
    }
}
</style>