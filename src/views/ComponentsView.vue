<template>
    <section class="components">
        <HeaderText :title="'компоненты'"/>
        <div class="components-wrapper">
        <div class="components-left-part">
            <img src="../assets/components1.svg" alt="">
            <LabelText :title="'травы, согретые солнцем и напоенные дождем, передают свою энергию'" style="position: absolute; top: 30px; right: 60px;"/>
            <LabelText :title="'aктивный отдых и натуральный компоненты идут рука об руку'" style="position: absolute; bottom: 60px; right: -80px;"/>
        </div>
        <div class="components-right-part">
            <h1>уменьшает зуд и раздражение, <br> снижает <br> отечность</h1>
        </div>
        <img src="../assets/curvedText_2.svg" alt="" class="curvedTextComponents">
        </div>
    </section>
</template>

<script>
import HeaderText from "../components/HeaderText.vue";
import LabelText from "../components/LabelText.vue";
export default {
    components: { HeaderText, LabelText },
    methods:{
        handleWheel(event) {
            if (event.deltaY < 0) {
                this.hideBannerAnimation()
                setTimeout(() => {
                this.$router.push('/')
                }, 500);
            }
        },
    }
}
</script>

<style scoped>
.components{
  padding: 56px;
}

.components-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
  margin-top: -20px;
}

.components-right-part h1{
  color: #262B2D;
  font-size: 60px;
  font-weight: 500;
  text-align: right;
}
.components-left-part img{
  width: 100%;
  scale: 1.2;
}
.components-left-part{
  position: relative;
  margin-left: 40px;
}

.curvedTextComponents{
  width: 70%;
  position: absolute;
  transform: translateX(50%);
  bottom: -330px;
}
</style>