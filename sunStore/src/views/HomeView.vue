<template>
  <div class="page">
    <section class="banner">
      <div class="left-part">
        <div class="language">
          <button class="lang">en</button>
        </div>
        <img src="../assets/logo.png" alt="" class="logotype">
        <div class="bottom-action">
          <span class="copyright">2024 © кладовая солнца</span>
          <button class="buy">Купить</button>
        </div>
      </div>
      <div class="right-part">
        <img src="../assets/curvedText_1.svg" alt="" class="curvedText">
        <div class="scrolldown">
          <div class="icon-container">
            <img class="icon" src="../assets/scroll.svg" alt="">
          </div>
          <p class="scroll-text">Листай</p>
        </div>
        <div class="text-header">
          <h1>быстро снимает воспаление, отёк, зуд и раздражение.</h1>
          <img src="../assets/blob1.svg" alt="" class="blob">
        </div>

        
      </div>
    </section>

    <section class="components">
      <div class="title">
        <div class="title-circle"></div>
        <p class="title">компоненты</p>
      </div>
      
      <div class="components-left-part">
        <img src="../assets/components1.svg" alt="">
        <p class="subtitle"></p>
      </div>
      <div class="components-right-part">
        <h1>уменьшает зуд и раздражение, снижает отечность</h1>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.page{
  overflow-y: scroll;
}
.icon-container{
  border: solid 1px #262B2D;
  border-radius: 50%;
  width: 2.6vw;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon{
  width: 20px;
}
.scroll-text{
  color: #262B2D;
  font-size: 20px;
  font-weight: 500;
}
.scrolldown:hover{
  transform: translateY(10px);
}
.scrolldown{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: fit-content;
  position: absolute;
  /* transform: translateX(50%); */
  width: 90%;
  bottom: 50px;
  transition: all .2s ease;
}
.blob:hover{
  rotate: 5deg;
}
.blob{
  position: absolute;
  right: 0;
  top: 0;
  scale: 1.2;
  rotate: 0deg;
  transition: rotate .2s ease;
}
.text-header{
  position: absolute;
  right: -100px;
  top: -80px;
  width: 500px;
  text-align: end;
}

.text-header h1{
  color: #262B2D;
  font-size: 60px;
  font-weight: 500;
  position: absolute;
  right: 150px;
  top: 80px;
}
.curvedText{
  width: 70%;
  position: absolute;
  transform: translateX(10%);
  bottom: -330px;
}
.right-part{
  width: 100%;
}
.banner{
  display: flex;
  position: relative;
  height: 100vh;
  border: 2px solid red;
}
.components{
  display: flex;
  position: relative;
  height: fit-content;
  border: 2px solid red;
}
.language{
  display: flex;
  width: 100%;
  justify-content: right;
}
.lang{
  background: none;
  font-family: 'Montserrat Alternates';
  border: none;
  color: #262B2D;
  border: 1px solid transparent;
  font-size: 14px;
  width: 2vw;
  aspect-ratio: 1;
  border-radius: 1vw;
  margin-right: 20px;
  transition: all .2s ease;
}
.lang:hover{
  cursor: pointer;
  border: 1px solid #262B2D;
  accent-color: none;
  box-sizing: border-box;
}
.copyright{
  color: #262B2D;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
}
.language{
  margin-top: 50px;
}
.buy{
  background-color: #8F8F76;
  width: 15vw;
  height: 2.6vw;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 1.3vw;
  font-family: 'Montserrat Alternates';
  transition: all .2s ease;
  margin-bottom: 50px;
}
.buy:hover{
  cursor: pointer;
  background-color: #71715d;
}
.left-part{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 20%;
  border-right: solid 1px #8F8F76;
}
.bottom-action{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logotype{
  width: 70%;
}
</style>