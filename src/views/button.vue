<template>
    <div class="component-content">
        <h1 class="component-title">Button按钮</h1>

        <h2 class="component-title">基础用法</h2>

        <div class="demo-view">
            <mv-button>Default</mv-button>
            <mv-button type="primary">Primary</mv-button>
            <mv-button type="success">Success</mv-button>
            <mv-button type="info">Info</mv-button>
            <mv-button type="warning">Warning</mv-button>
            <mv-button type="danger">Danger</mv-button>

            <br />
            <br />

            <mv-button plain>Default</mv-button>
            <mv-button type="primary" plain>Primary</mv-button>
            <mv-button type="success" plain>Success</mv-button>
            <mv-button type="info" plain>Info</mv-button>
            <mv-button type="warning" plain>Warning</mv-button>
            <mv-button type="danger" plain>Danger</mv-button>

            <br />
            <br />
            
            <mv-button round>Default</mv-button>
            <mv-button type="primary" round>Primary</mv-button>
            <mv-button type="success" round>Success</mv-button>
            <mv-button type="info" round>Info</mv-button>
            <mv-button type="warning" round>Warning</mv-button>
            <mv-button type="danger" round>Danger</mv-button>
        </div>

        <br />
        <v-md-preview :text="baseCodeView"></v-md-preview>

        <h2 class="component-title">禁用按钮</h2>
        
        <div class="demo-view">
            <mv-button disabled>Default</mv-button>
            <mv-button type="primary" disabled>Primary</mv-button>
            <mv-button type="success" disabled>Success</mv-button>
            <mv-button type="info" disabled>Info</mv-button>
            <mv-button type="warning" disabled>Warning</mv-button>
            <mv-button type="danger" disabled>Danger</mv-button>
        </div>

        <br />
        <v-md-preview :text="disabledCodeView"></v-md-preview>
        
        <h2 class="component-title">文字按钮</h2>

        <div class="demo-view">
            <mv-button text>Default</mv-button>
            <mv-button type="primary" text>Primary</mv-button>
            <mv-button type="success" text>Success</mv-button>
            <mv-button type="info" text>Info</mv-button>
            <mv-button type="warning" text>Warning</mv-button>
            <mv-button type="danger" text>Danger</mv-button>

            <br />
            <br />

            <mv-button text disabled>Default</mv-button>
            <mv-button type="primary" text disabled>Primary</mv-button>
            <mv-button type="success" text disabled>Success</mv-button>
            <mv-button type="info" text disabled>Info</mv-button>
            <mv-button type="warning" text disabled>Warning</mv-button>
            <mv-button type="danger" text disabled>Danger</mv-button>
        </div>

        <br />
        <v-md-preview :text="textCodeView"></v-md-preview>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { readFile } from "@/utils";
const baseCodeView = ref("");
const disabledCodeView = ref("");
const textCodeView = ref("");
const render = async () => {
    baseCodeView.value = await readFile("/doc/button/base.md");
    disabledCodeView.value = await readFile("/doc/button/disabled.md");
    textCodeView.value = await readFile("/doc/button/text.md");
};

render();
</script>