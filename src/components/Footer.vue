<template>
    <div class="footer">
        <p>Author: <span class="name">Andrey Kozik</span></p>
        <p>GitHub: <a href="https://github.com/extriton/gamedev-vue" target="_blank">https://github.com/extriton/gamedev-vue</a></p>
        <p>http://: <a href="https://akgamedev.herokuapp.com" target="_blank">https://akgamedev.herokuapp.com</a></p>
    </div>  
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #222;
    color: #fff;
    padding: 10px 30px;
    text-align: left;
    p {
        margin-bottom: 2px;
    }
    .name {
        font-style: italic;
        color: yellow;
    }
  }
</style>
