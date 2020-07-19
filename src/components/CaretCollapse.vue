<template>
    <div class="d-inline-flex">
        <span class="when-opened">
            <b-icon-caret-down/>
        </span>
        <span class="when-closed">
            <b-icon-caret-right/>
        </span>
    </div>
</template>

<script>
    export default {
        name: "CaretCollapse"
    }
</script>

<style lang="scss" scoped>
    .collapsed > a > div > .when-opened {
        display: none !important;
    }
    .not-collapsed > a > div > .when-closed {
        display: none !important;
    }
</style>