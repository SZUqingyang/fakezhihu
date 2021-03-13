<template>
    <div class="wrapper">
        <div class="icon-item normal-btn" v-if="exists.indexOf('question') >= 0">
            <span class="iconfont icon-huidaa"></span>
            <p>写回答</p>
        </div>
        <div class="icon-item normal-btn" v-if="exists.indexOf('article') >= 0">
            <router-link :to="{name:'editor', params:{articleId:0}}">
            <span class="iconfont icon-icon_A"></span>
            <p>写文章</p>
            </router-link>
        </div>
        <div class="icon-item normal-btn" v-if="exists.indexOf('thinking') >= 0">
            <span class="iconfont icon-xiangfa"></span>
            <p>写想法</p>
        </div>
        <div class="icon-item thunder-btn" v-if="exists.indexOf('live') >= 0">
            <span class="iconfont icon-zhibo"></span>
            <p>Live</p>
        </div>
        <div class="icon-item book-btn" v-if="exists.indexOf('book') >= 0">
            <span class="iconfont icon-shudianjiangou"></span>
            <p>书店</p>
        </div>
        <div class="icon-item desk-btn" v-if="exists.indexOf('desk') >= 0">
            <span class="iconfont icon-yuanzhuo"></span>
            <p>圆桌</p>
        </div>
        <div class="icon-item pen-btn" v-if="exists.indexOf('expert') >= 0">
            <span class="iconfont icon-columnszhuanlan"></span>
            <p>专栏</p>
        </div>
        <div class="icon-item money-btn" v-if="exists.indexOf('consult') >= 0">
            <span class="iconfont icon-renminbi"></span>
            <p>付费咨询</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['exists'], // 传入exists参数，包含了要展示ICON的名称
    };
</script>