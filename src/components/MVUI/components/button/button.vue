<template>
    <div class="mv-button" :class="[ns.b(), ns.m(_type)]">1111</div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { useNamespace } from "../../hooks/useNameSpace";

const props = defineProps({
    type: {
        type: String,
        default: "default"
    }
});

const ns = useNamespace("button");
const _type = computed(() => props.type || "");
</script>

<style lang="scss" scoped>
@import url("./button.scss");
</style>
