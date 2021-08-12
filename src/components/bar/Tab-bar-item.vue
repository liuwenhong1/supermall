<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-show="!isActive"><slot name='item-icon'></slot></div>
        <div v-show="isActive"><slot name='item-active-icon'></slot></div>  
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<style>
    .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 49px;
    background-color: #e2d5d5;
    padding-top: 8px;
    }

    .tab-bar-item img{
        width: 24px;
        vertical-align: middle;
    }
</style>

<script>
    export default{
        name:"TabBarItem",
        // data(){
        //     return{
        //         isActive: false
        //     }
        // },
        props: {
            path: {
			type: String,
            required: true
            },
            activeColor: {
                type: String
            }
        },
        computed: {
            activeStyle() {
				return this.isActive ? {"color": 'blue'} : {}
            },
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            }
        },
        methods:{
            itemClick(){
                this.$router.replace(this.path).catch(err=>err)
            }
        }
    }
</script>