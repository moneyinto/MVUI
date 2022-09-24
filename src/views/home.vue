<template>
    <div class="demo-body">
        <div class="demo-menu">
            <div
                class="demo-menu-item"
                :class="item.path === route.path && 'active'"
                v-for="item in menuList"
                :key="item.path"
            >
                {{ item.name }}
            </div>
        </div>
        <div class="demo-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menuList = ref([
    {
        name: "button 按钮",
        path: "/button"
    }
]);
</script>

<style lang="scss" scoped>
.demo-body {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.demo-menu {
    width: 220px;
    padding: 20px 10px;
    height: 100%;
    overflow-y: auto;
    .demo-menu-item {
        padding: 10px 16px;
        line-height: 1.5;
        font-size: 14px;
        border-radius: 8px;
        color: #606266;
        cursor: pointer;
        &:hover {
            color: #409eff;
        }
        &.active {
            color: #409eff;
            background-color: #409eff1a;
        }
    }
}

.demo-content {
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow-y: auto;
}
</style>
