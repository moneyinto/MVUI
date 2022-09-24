<template>
    <button
        :class="[
            ns.b(),
            ns.m(_type),
            ns.is('plain', _plain),
            ns.is('round', _round),
            ns.is('circle', _circle),
            ns.is('disabled', _disabled),
            ns.is('text', _text)
        ]"
        :disabled="_disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import "./button.scss";
import { computed, defineProps } from "vue";
import { useNamespace } from "../../hooks/useNameSpace";

const props = defineProps({
    type: {
        type: String,
        default: "default"
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    text: {
        type: Boolean,
        default: false
    }
});

const ns = useNamespace("button");
const _type = computed(() => props.type);
const _plain = computed(() => props.plain);
const _round = computed(() => props.round);
const _circle = computed(() => props.circle);
const _disabled = computed(() => props.disabled);
const _text = computed(() => props.text);
</script>
