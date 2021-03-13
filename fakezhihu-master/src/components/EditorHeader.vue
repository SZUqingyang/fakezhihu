<template>
    <header>
        <div class="editor-header">
            <router-link class="m-r-20 logo-wrapper" :to="{name: 'home'}">
                <img class="logo" src="./../assets/imgs/logo.png" alt="">
            </router-link>
            <div class="header-content">
                <span class="title">写文章</span>
            </div>
            <div class="functions">
                <el-dropdown class="publish m-r-25" placement="bottom">
                    <el-button type="primary" plain size='small' @click="$emit('relaseArticles')">
                        发布<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>测试内容</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="more m-r-25" placement="bottom-end">
                    <i class="el-icon-more-outline"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>草稿</el-dropdown-item>
                        <el-dropdown-item>我的文章</el-dropdown-item>
                        <el-dropdown-item>专栏 · 发现</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </header>
</template>