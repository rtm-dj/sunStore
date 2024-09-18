<template>
  <div>
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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  font-size: 20px;
  width: 2vw;
  aspect-ratio: 1;
  border-radius: 1vw;
  transition: all .2s ease;
  margin-right: 30px;
}
.lang:hover{
  width: 2vw;
  aspect-ratio: 1;
  cursor: pointer;
  border-radius: 1vw;
  border: 1px solid #262B2D;
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