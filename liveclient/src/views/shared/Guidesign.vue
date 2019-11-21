<template>
    <div class="guidesign">
        <div class="view_form">
            <h3>Whan to be a guide? Tell us about yourself ...</h3>
            <el-form class="form" ref="form" :model="form" label-position="top">
                <el-form-item label="First Name/Last Name:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Identification Number:">
                    <el-input v-model="form.identificationnum"></el-input>
                </el-form-item>
                <el-form-item label="Education:">
                    <el-input v-model="form.education"></el-input>
                </el-form-item>
                <el-form-item label="Phone Number:">
                    <el-input v-model="form.phonenum"></el-input>
                </el-form-item>
                <el-form-item label="Date of Birth">
                    <el-date-picker type="date" placeholder="" v-model="form.birth" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="Guide Exprience:">
                    <el-input v-model="form.guideexprience" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-radio-group v-model="form.attention">
                        <el-radio label="By clicking up ,you are indicating that ..."></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-button type="warning" style="width:100%">Submit your application</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name:"guidesign",
    data(){
        return {
            form:{

            }
        }
    }
}
</script>

<style lang="scss">
.guidesign{
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
                margin-bottom: 5px;
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