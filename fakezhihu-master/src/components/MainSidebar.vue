<template>
    <div>
        <el-card class="no-padding m-b-15">
            <icon-buttons :exists="['question','article','thinking']"></icon-buttons>
            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="iconfont icon-caogaoxiang middle-icon"></span>
                        我的草稿
                    </span>
                    <span class="num">2</span>
                </a>
            </div>
        </el-card>

        <el-card class="no-padding m-b-15">
            <icon-buttons :exists="['live','book','desk','expert','consult']"></icon-buttons>
        </el-card>

        <el-card class="no-padding m-b-15">
            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="####################"></span>
                        我的收藏
                    </span>
                    <span class="num">20</span>
                </a>
            </div>

            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="####################"></span>
                        我关注的问题
                    </span>
                    <span class="num">20</span>
                </a>
            </div>
                        
            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="####################"></span>
                        我的邀请
                    </span>
                    <span class="num">20</span>
                </a>
            </div>
                        
            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="####################"></span>
                        我的余额
                    </span>
                </a>
            </div>
                                    
            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="####################"></span>
                        站务中心
                    </span>
                </a>
            </div>
                                    
            <div class="nav-link">
                <a href="#">
                    <span class="text">
                        <span class="####################"></span>
                        帮助中心
                    </span>
                </a>
            </div>
        </el-card>

        <sidebar-footer />

    </div>
</template>

<script>
    import IconButtons from '@/components/IconButtons.vue';
    import SidebarFooter from '@/components/SidebarFooter.vue';
    export default {
        components: {
            IconButtons,
            SidebarFooter,
        },
        data() {
            return {

            };
        },
    };

</script>