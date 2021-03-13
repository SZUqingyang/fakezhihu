<template>
    <div class="actions">
        <el-button type="text" icon="el-icon-edit" v-if="showActionItems.indexOf('hot') >= 0" class="btn-text-gray">
            111111111111111
        </el-button>
    
        <el-button type="primary" icon="el-icon-delete" v-if="showActionItems.indexOf('vote') >= 0">
            赞同{{voteup_count}}
        </el-button>
    
        <el-button type="text" icon="el-icon-edit">
            2222222222222222
        </el-button>
    
        <el-button type="text" icon="el-icon-edit" v-if="showActionItems.indexOf('comment') >= 0" class="btn-text-gray">
            {{comment_count}}
        </el-button>
    </div>
</template>

<script>
    export default {
        props:['comment_count', 'thanks_count', 'voteup_count', 'metrics_area', 'showActionItems'],
        data(){
            return {

            };
        },
    };
</script>