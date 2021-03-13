<template>

    <el-card class="list-nav-card">
        <el-menu :default-active="activeIndex" mode="horizontal" class="listNav">
            <el-menu-item index="1">
                <router-link :to="{name:'home'}">推荐</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{name:'hot'}">热榜</router-link>
            </el-menu-item>
        </el-menu>
    </el-card>

</template>

<script>
    export default {
        props: ['type'],
        data() {
            return {
                routerNametoIndex: {
                    // 根据路由匹配高亮菜单
                    home: '1',
                    hot: '2',
                },
                activeIndex: '1',
            }
        },
        mounted() {
            // 初始化修改高亮菜单
            this.activeIndex = this.routerNametoIndex[this.$route.name]
        }
    }
</script>