<template>
    <el-card class="signup-content">
        <router-link :to="{name: 'home'}">
            <img src="./../assets/imgs/logo.png" alt="">
        </router-link>
        <p class="slogen">FakeZhihu Project</p>


        <!-- 登录表单 -->
        <div class="login" v-show="nowStatus === 'login'">
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="">

                <el-form-item prop="name">
                    <el-input placeholder="请输入账号" v-model="loginForm.name"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" style="width: 100%;">登录</el-button>
                </el-form-item>

            </el-form>

        </div>


        <!-- 注册表单 -->
        <div class="register" v-show="nowStatus === 'register'">
            <el-form :model="registerForm" :rules="registerRules" ref="registerForm" class="">
                <el-form-item prop="name">
                    <el-input placeholder="请输入用户名" v-model="registerForm.name"></el-input>
                </el-form-item>

                <el-form-item prop="email">
                    <el-input placeholder="请输入邮箱" v-model="registerForm.email"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" v-model="registerForm.password" type="password"></el-input>
                </el-form-item>

                <el-form-item prop="passwordEnsure">
                    <el-input placeholder="请再次输入密码" v-model="registerForm.passwordEnsure" type="password">
                    </el-input>
                </el-form-item>

                <!-- 将表单提交给验证并提交给服务器 -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')" style="width: 100%;">注册
                    </el-button>
                </el-form-item>
            </el-form>

            <div class="footer register-footer">
                <span>
                    注册即代表同意
                    <a href="#">《Fake协议》</a>
                    <a href="#">《隐私保护指引》</a>
                </span>
                <a href="#">注册机构号</a>
            </div>

        </div>

        <div class="existingAccount">
            {{tips[nowStatus].base}}
            <span @click="nowStatus = nowStatus === 'register' ? 'login' : 'register'">
                {{tips[nowStatus].link}}
            </span>
        </div>

    </el-card>

</template>

<script>
    import request from '@/service';
    import md5 from 'md5';
    export default {
        data() {

            // 自定义校验规则

            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.registerForm.passwordEnsure !== '') {
                        this.$refs.registerForm.validateField('passwordEnsure');
                    }
                    callback();
                }
            };

            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };

            return {
                nowStatus: 'login',
                tips: {
                    register: {
                        base: '已有账号？',
                        link: '登录',
                    },
                    login: {
                        base: '没有账号？',
                        link: '注册',
                    }
                },

                // 打包登录数据
                loginForm: {
                    name: '',
                    password: '',
                },
                // 设置登录验证规则
                loginRules: {
                    name: [
                        { required: true, message: '请输入用户名或邮箱', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                },

                // 打包注册数据
                registerForm: {
                    name: '',
                    email: '',
                    password: '',
                    passwordEnsure: '',
                },
                // 设置注册验证规则
                registerRules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', required: true, message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }

                    ],
                    passwordEnsure: [
                        { required: true, message: '请再次输入密码', trigger: 'blur' },
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }

            };

        },
        methods: {
            async register() {
                await request.post('/users/create', {
                    name: this.registerForm.name,
                    pwd: md5(this.registerForm.password), // 使用md5进行加密
                    email: this.registerForm.email,
                }).then((res) => {
                    if (res.status === 201) {
                        this.$message.success('注册成功');
                        this.$router.push({ name: 'home' });
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },

            async login(){
                await request.post('/users/login',{
                    name: this.loginForm.name,
                    pwd: md5(this.loginForm.password),
                }).then((res)=> {
                    if(res.status === 200) {
                        console.log(res)
                        this.$message.success('登录成功');
                        this.$router.push({ name: 'home' });
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },


            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(formName === 'registerForm') {
                            this.register();
                        } else {
                            this.login();
                        }                        
                    } else {
                        this.$message.error('error submit!!!');
                        return false;
                    }
                });
            },


        }
    }
</script>