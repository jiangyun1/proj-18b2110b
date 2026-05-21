<template>
    <div class="login-wrap">
    </div>
</template>
    <script>
import * as login from '@/api/usercenter/login';
export default {
    components: {

    },
    data() {
        return {

        };
    },
    created() {
        let time = setTimeout(() => {
          this.$router.push('/')
        },2000)
        
    },
    methods: {

    }
};
</script>

    <style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/img/newimg/rukou.jpg);
        background-size: 100% 100%;
        border: 1px solid #67e0e3;
    }
    </style>
