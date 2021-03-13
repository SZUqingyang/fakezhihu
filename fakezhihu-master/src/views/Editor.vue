<template>
    <div class="editor">
        <!-- 编辑页面头、绑定文章发布方法 -->
        <editor-header class="editor-header-content"
            @relaseArticles=relaseArticles />

        <div class="content m-t-50">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </div>
        
        <rich-text-editor
            ref="textEditor"
            :content="content"
            :placeHolder="placeHolder"
            @updateContent=updateContent
        />

    </div>
</template>

<script>
    import EditorHeader from '@/components/EditorHeader.vue';
    import RichTextEditor from '@/components/RichTextEditor.vue';
    import request from '@/service';
    import { getCookies } from '@/lib/utils';

    export default {
        components: {
            EditorHeader,
            RichTextEditor,
        },

        data() {
            return {
                title:'',
                content:'',
                contentText:'',
                placeHolder:'请输入正文',
            };
        },

        methods: {
            relaseArticles() {
                // 判断当前路由参数的articleId是否为0，为0则新建文章，不为0则修改文章
                if (parseFloat(this.$route.params.articleId) !== 0) {
                    // 调用修改文章的方法
                    this.updateArticle();
                } else {
                    // 调用新建文章的方法
                    this.createArticle();
                }
            },

            async createArticle() {
                await request.post('/articles', {
                    content: this.content,
                    // 文章内容长于100个字符则取前100个字符作为内容简介
                    excerpt: this.contentText.slice(0, 100),
                    title: this.title,
                    userId: getCookies('id'),
                }).then((res) => {
                    if (res.status === 201) {
                        this.$message.success('文章新建成功！');
                        this.$router.push({
                            name: 'peopleArticles',
                        });
                    } else {
                        this.$message.error(res.error);
                    }
                });
            },


            updateContent(content, contentText) {
                this.content=content;
                this.contentText=contentText;
            }
        }
    }

</script>


