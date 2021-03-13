<template>
    <div class="answer-main">

        <!-- 根据showPart判断是否展示标题 -->
        <div class="title" v-if="showPart.includes('title')">
            <h2>{{transtedInfo.title}}</h2>
        </div>

        <!-- 根据showPart判断是否展示作者 -->
        <div class="creater-info" v-if="showPart.includes('creater')">
            <div class="avatar">
                <img src="item.author.avatar_url">
            </div>
            <div class="userinfo">
                <p class="username">
                    {{item.author.name}}
                </p>
                <p class="headlin">
                    {{item.author.headline}}
                </p>
            </div>
        </div>

        <!-- 根据关键字判断是否展示支持人数 -->
        <div class="vote" v-if="showPart.includes('votes')>=0">
            <span>
                {{item.voteup_count}}人赞同了该回答
            </span>
        </div>


        <div class="content-wrapper clearfix">
            <!-- 核心内容部分 -->
            <!-- 根据showType判断是否展示简介 -->
            <div class="shortCut" v-if="showType == 'excerpt'">
                <div class="cover" v-if="transtedInfo.cover">
                    <img src="transtedInfo.cover" alt="">
                </div>
                <div class="experct">
                    <span>
                        <!-- 简介内容 -->
                        <span v-html="item.excerpt"></span>
                        <el-button type="text" class="btn-no-padding" icon="el-icon-arrow-down" @click="showType='all'">阅读全文</el-button>
                    </span>
                </div>
            </div>

            <!-- 根据showType判断是否展示正文 -->
            <div class="content" v-if="showType == 'all'">
                <!-- 简介内容 -->
                <span v-html="item.content"></span>
                <el-button type="text" class="btn-no-padding" icon="el-icon-arrow-up" @click="showType='excerpt'">收起</el-button>
            </div>

        </div>

        <list-item-actions :thanks_count="22" :comment_count="22" :voteup_count="22" :showActionItems="['vote', 'thanks', 'comment', 'share', 'favorite','more']"></list-item-actions>
    </div>
</template>
<script>
    import ListItemActions from '@/components/ListItemActions.vue';

    export default {
        props: ['item', 'showPart', 'type'],
        data() {
            return {
                showType: 'excerpt',
            };
        },
        computed: {
            transtedInfo() {
                if (this.type === 0) {
                    return {
                        title: this.showPart.includes('title') ? this.item.title : '',
                        cover: this.item.cover || '',
                    };
                } else if (this.type === 'answer') {
                    return {
                        title: this.item.question.title,
                        cover: this.item.thumbnail || '',
                    };
                }
            },
        },
        components:{
            ListItemActions,
        },
    };
</script>