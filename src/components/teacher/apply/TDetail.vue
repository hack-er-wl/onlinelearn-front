<template>
  <!-- 内容区 -->
  <el-container class="tdetail">
    <el-card class="tdetail_card">
      <template #header>
        <div class="tdetail_card_header">
          <h4><i style="color:#89d1e5" class="bi bi-credit-card-2-front-fill"/> 资质信息</h4>
          <el-tag size="large" class="ml-2" type="danger"><i style="color: #fd0000" class="bi bi-shield-lock-fill"/> 请认真填写资质信息</el-tag>
        </div>
      </template>
      <el-form
          ref="tstatusFormRef"
          :model="tstatusForm"
          :rules="tstatusRules">
        <el-form-item label="手机" prop="usertel">
          <el-input prefix-icon="Iphone" v-model="tstatusForm.usertel" placeholder="请输入手机号"/>
        </el-form-item>
        <div style="display: flex;justify-content: space-between">
          <el-form-item style="width: 48%" label="讲课领域" prop="field">
            <el-select style="width: 100%" suffix-icon="Notebook" v-model="tstatusForm.field" placeholder="请选择讲课领域">
              <el-option
                  v-for="item in fields"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item style="width: 48%" label="讲课内容" prop="class">
            <el-select style="width: 100%" suffix-icon="Reading" v-model="tstatusForm.class" placeholder="请选择讲课内容">
              <el-option
                  v-for="item in contents[tstatusForm.field =='' ? 0 : tstatusForm.field == 'IT行业' ? 1 : 2]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
            </el-select>
          </el-form-item>
        </div>
        <div style="display: flex;justify-content: space-between">
          <el-form-item style="width: 30%" label="性别" prop="usersex">
            <el-select style="width: 100%" suffix-icon="Male" v-model="tstatusForm.usersex" placeholder="请选择性别">
              <el-option
                  v-for="item in genders"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item style="width: 30%" label="年龄" prop="userage">
            <el-select style="width: 100%" suffix-icon="Calendar" v-model="tstatusForm.userage" itemprop="age" placeholder="请选择年龄">
              <el-option
                  v-for="item in ages"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item style="width: 30%" label="教龄" prop="usertage">
            <el-select style="width: 100%" suffix-icon="Calendar" v-model="tstatusForm.usertage" placeholder="请选择教龄">
              <el-option
                  v-for="item in tages"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="简介" prop="userbrief">
          <el-input
              v-model="tstatusForm.userbrief"
              :rows="15"
              type="textarea"
              placeholder="请输入你的教学经历及经验..."
          />
        </el-form-item>
      </el-form>
    </el-card>
    <ButtonCard btnA="确定" v-on:submit="submit" btnB="取消" v-on:cancel="cancel"/>
  </el-container>
</template>

<script setup>
import {reactive, ref, toRaw} from "vue";
import {useI18n} from "vue-i18n";
import router from "@/router";
import ButtonCard from "@/components/teacher/apply/ButtonCard.vue";
import {useStore} from "vuex";
import {getUser} from "@/api/user";
import useNotification from "@/hooks/useNotification";
const store = useStore();
const { t } = useI18n();
const genders = [{value:'0',label:'男'},{value:'1',label:'女'}];
const ages = [{value:23,label:23},{value:24,label:24},{value:25,label:25},{value:26,label:26},{value:27,label:27},{value:28,label:28},
  {value:29,label:29},{value:30,label:30},{value:31,label:31},{value:32,label:32},{value:33,label:33}];
const tages = [{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6},{value:7,label:7},{value:8,label:8},
  {value:9,label:9},{value:10,label:10},{value:11,label:11},{value:12,label:12},{value:13,label:13}];
const fields = [{value:"IT行业",label:"IT行业"},{value:"其他",label:"其他"}];
const contents = [[{value:"请选择领域",label:"请选择领域"}],[{value:"数据结构",label:"数据结构"},{value:"Java程序设计",label:"Java程序设计"},{value:"计算机网络",label:"计算机网络"}],[{value:"高等数学",label:"高等数学"},{value:"大学物理",label:"大学物理"},{value:"中国近代史",label:"中国近代史"}]];
const tstatusFormRef = ref(null);
// 表单数据
const tstatusForm = reactive({
  userid:"",
  userage:"",
  usertage:"",
  usersex:"",
  field:"",
  class:"",
  usertel:"",
  userbrief:""
});
// 表单的校验规则
const tstatusRules = reactive({
  userage: [{ required: true, message: t("ageError"), trigger:["blur","change"]}],
  usertage: [{ required: true, message: t("tageError"), trigger: ["blur",'change']}],
  usersex: [{ required: true, message: t("genderError"), trigger: ["blur",'change']}],
  field: [{ required: true, message: t("fieldError"), trigger: ["blur",'change']}],
  class: [{ required: true, message: t("contentError"), trigger:["blur",'change']}],
  usertel: [{ required: true, message: t("phoneError"), trigger: "blur" },],
  userbrief:[{ required: true, message: t("interestError"), trigger: "blur" }]
});
async function submit() {
  tstatusForm.userid = getUser().user_id;
  console.log(toRaw(tstatusForm));
  await store.dispatch("handleApply", toRaw(tstatusForm)).then((res) => {
    if(res){
        useNotification('success','系统通知','入住成功,请等待资质审核!');
        router.push({path:'/home'});
    }else{
        useNotification('error','系统通知','入住失败!');
    }
  })
}
function cancel(){
  router.push({
    path:"/home",
    //params:{}传参
  })
}
</script>

<style lang="scss" scoped>
.tdetail_card{
  width: 100%;
  margin: 0 0 2% 0;
}
.tdetail_card_header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tdetail{
  display: flex;
  flex-direction: column;
  margin: 2%;
}
</style>