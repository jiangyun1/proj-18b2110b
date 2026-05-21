<template>
    
    <div class="sidebar">
        
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
            unique-opened router>
            <template v-for="item in items" >
                <el-submenu :index="item.index" :key="item.index" style="border-right:'none';padding-top: 50px;font-size: 100px;">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

    <script>
import bus from '../common/bus';
import * as sidebar from '@/api/mock/sidebar';
import * as user from '@/api/usercenter/user'
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    index: "",
                    title: '学能训练',
                    icon: ''
                },
                {
                    index: "",
                    title: '阶段测试',
                    icon: ''
                },
                {
                    index: "",
                    title: '思维导图',
                    icon: ''
                },
                {
                    index: "",
                    title: '实力养护',
                    icon: ''
                },
                {
                    index: "",
                    title: '帮助中心',
                    icon: ''
                },
            ]
        };
    },
    computed: {

    },
    created() {

    },
    methods: {


    },
    mounted() {

    }
};
</script>

    <style scoped>
    element.style {
        padding-left: 90px !important;
    }
    

    
    .el-col:hover {
        transform: none;
    }
    
    /* .sidebar::-webkit-scrollbar {
                width: 0;
            } */
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 230px;
    }
    
    .sidebar>ul {
        height: 100%;
    }
    
    
    /deep/ .el-icon-arrow-down:before {
        content: "\25BC";
        font-size: 5px;
    
    }
    
    /deep/.el-menu-item:hover {
        /* border-top-left-radius: 100px;
                border-bottom-left-radius: 100px; */
        border-left: 4px solid #21e686;
        /* box-shadow: 3px 0px 5px rgb(209, 209, 209) inset; */
        background-image: linear-gradient(to right, #d7fafa, #e5faf0);
        color: #05e7e8 !important;
    
    }
    
    /deep/.el-submenu__title:hover {
        border-left: 4px solid #21e686 !important;
        background-image: linear-gradient(to right, #d7fafa, #e5faf0);
        color: #05e7e8 !important;
    }
    
    /deep/ .el-menu-item.is-active {
        border-left: 4px solid #21e686 !important;
        background-image: linear-gradient(to right, #d7fafa, #e5faf0);
        color: #05e7e8 !important;
    }
    
    /deep/ .el-submenu__title.is-active {
        border-left: 4px solid #21e686 !important;
        background-image: linear-gradient(to right, #d7fafa, #e5faf0);
        color: #05e7e8 !important;
    }
    </style>
