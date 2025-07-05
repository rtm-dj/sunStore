<template>
    <div class="head">
        <BurgerMenu id="burger"/>
    </div>
    <div class="aboutpage">
        <div class="company">
            <div class="bigLogo">
                <img src="../assets/logo.png" alt="" class="logo">
                <h1>ИП Токмачева Е. Н.</h1>
                <div class="info">
                    <p>Карамышевская набережная, д. 22А</p>
                </div>
            </div>
            <div class="description">
                <p><span>Кладовая Солнца</span> – это бренд натуральной косметики, которая<br>разрабатывается, опираясь на научные данные</p>
                <p>В своей работе мы в первую очередь руководствуемся принципом<br>«не навреди» и не даем пустых обещаний — наша косметика работает</p>
                <p>Состав косметики содержит<br>максимум натуральных компонентов</p>
            </div>
            <div class="documents">
                <p class="naming" :style="{backgroundColor: article === 1 ? '#8F8F76' : '#F0EDE0', color: article === 1 ? '#ffffff' : '#262B2D'}" @click="article = 1">Сертификат<br>качества</p>
                <p class="naming" :style="{backgroundColor: article === 2 ? '#8F8F76' : '#F0EDE0', color: article === 2 ? '#ffffff' : '#262B2D'}" @click="article = 2">Инструкция<br>по применению</p>
                <p class="naming" :style="{backgroundColor: article === 3 ? '#8F8F76' : '#F0EDE0', color: article === 3 ? '#ffffff' : '#262B2D'}" @click="article = 3">Состав</p>
            </div>
            <div class="certificate" v-if="article == 1">
                <p>Здесь представлена ссылка на сертификат качества нашего продукта.</p>
                <div style="width: 100%; text-align: center;">
                    <button id="download">Скачать</button>
                </div>
            </div>
            <div class="instruction" v-else-if="article == 2">
                <p><span>Способ применения:</span> Нанесите небольшое количество крема в<br>месте укуса. Повторять по мере необходимости.</p>
                <div style="width: 100%; text-align: center;">
                    <img src="../assets/photo.png" alt="">
                </div>
                <p><span>Меры предосторожности:</span> Возможна индивидуальная непереносимость ингредиентов, входящих в крем. Избегать попадания в глаза.</p>
                <p><span>Условия хранения:</span> Хранить при температуре от +5 до +250С.</p>
            </div>
            <div class="consist" v-else-if="article == 3">
                <p style="text-align: center; font-size: 18px; width: 60vw; font-weight: 500;">В своем составе Крем-гель содержит: Aqua (вода), Propylene Glycol (пропиленгликоль), Glycine Soja (Soybean) Oil (соевое масло),  Panthenol (пантенол), Alcohol Denat., Tocopheryl Acetate (витамин Е), Hamamelis virginiana (Witcn Hazel) Extract (экстракт гамамелиса виргинского), Arctium Lappa Root Extract (экстракт корней лопуха), Tilia Cordata Flower Extract (экстракт цветков липы), Melilotus Officinalis Extract (экстракт донника), Soy Lecithin (лецитин соевый), Eugenia Сaryophyllus (Clove) Leaf Oil (эфирное масло гвоздики), Ocimum Basilicum (Sweet Basil) Essential Oil (эфирное масло базилика), Carbomer (карбомер), Polyethylsiloxane Fluid (жидкость полиэтилсилоксановая),  DiazolidinylUrea (мочевина), Methylparaben (метилпарабен), Propylparaben (пропилпарабен), Sodium Hydroxide (натрия гидроксид).</p>
                
                <div style="width: 100%; display:flex; flex-direction: column; align-items: center;">
                    <LabelText style="max-width: 430px;" :title="'Два вида фасовки 50 и 30 мл, компактный размер, точечное нанесение – экономный расход'"/>
                    <div class="sizes">
                        <div class="size-item" style="align-items: end;">
                            <div class="green-block">
                                <h1>50 мл</h1>
                                <p>Больше объема для<br>длительного ухода!</p>
                            </div>
                            <img src="../assets/big.png" alt="">
                        </div>
                        <div class="divider"></div>
                        <div class="size-item" style="align-items: start;">
                            <div class="green-block">
                                <h1>30 мл</h1>
                                <p>Компактно и удобно —<br>всегда под рукой!</p>
                            </div>
                            <img src="../assets/small.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div style="text-align: center; font-weight: 500; margin-bottom: 50px;">
                <p>Изготовитель. ООО «Адванс», 127106, г.Москва, Алтуфьевское шоссе, д.27</p>
                <p>Организация, принимающая претензии.</p>
                <p>ИП Токмачева Е.Н., 123423, г.Москва, Карамышевская наб., 22А, кв.64</p>
                <p>По всем вопросам, возникающим у Вас при использовании продукта, просьба<br>обращаться на почту: client@kladovayasun.ru. Мы с удовольствием Вам ответим.</p>
            </div>
        </div>
        <Footer/>
    </div>
  
</template>

<script>
import HeaderText from "../components/HeaderText.vue";
import Footer from "../components/FooterContent.vue";
import LabelText from "../components/LabelText.vue";
export default {
    components: { HeaderText, Footer, LabelText },
    data(){
        return{
            article: null,
        }
    }
}
</script>

<style scoped>
.size-item img{
    height: 390px;
    width: 330px;
    object-fit: cover;
    border-radius: 50px;
}
.divider{
    background-color: #8F8F76;
    width: 1px;
    height: 500px;
}
.green-block h1{
    font-size: 30px;
    color: #262B2D;
    font-weight: 500;
    margin: 0;
}
.green-block p{
    text-align: center;
    font-size: 15px;
    color: #ffffff;
}
.green-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: #8F8F76;
    border-radius: 24px;
    height: 90px;
    width: 200px;
}
.size-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}
.sizes{
    display: flex;
    align-items: center;
    gap: 15px;
}
#download:hover{
    filter: brightness(90%);
    cursor: pointer;
}
#download{
    height: 34px;
    padding: 10px 28px;
    background-color: #FFFDEF;
    color: #512D38;
    border: 1px solid #512D38;
    border-radius: 17px;
    font-family: 'Montserrat Alternates';
    font-size: 12px;
    cursor: pointer;
    transition: all .2s ease;
}
.certificate, .instruction, .consist{
    margin-bottom: 100px;
}
.instruction img{
    width: 20vw;
    border-radius: 50px;
    margin: 20px 0;
}
.instruction{
    font-size: 18px;
}
span{
    font-weight: bold;
}
#burger{
  display: none;
}
.aboutpage{
    overflow: hidden;
}
.naming{
    padding: 5px;
    color: #262B2D;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: #F0EDE0;
    border-radius: 10px;
    margin: 0;
    transition: all .2s ease;
    cursor: pointer;
}
.naming:hover{
    filter: brightness(90%);
}
.documents{
    height: fit-content;
    border: none;
    border-radius: 20px;
    background-color: #F0EDE0;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 44px;
    margin-bottom: 40px;
}   
.bigLogo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.bigLogo h1{
    font-size: 20px;
    margin: 0;
}
.company{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    gap: 70px;
}   
.logo{
    width: 270px;
    margin-bottom: 16px;
}
.info{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    margin: 0;
}
.description p{
    font-size: 24px;
    text-align: center;
}
@media (max-width: 768px){
    .divider{
        width: 1px;
        height: 400px;
    }
    .size-item img{
        height: 210px;
        width: 40vw;
        object-fit: cover;
        border-radius: 50px;
    }
    .green-block{
        padding: 10px;
        border-radius: 24px;
        height: fit-content;
        width: 35vw;
    }
    .consist p{
        width: 90% !important;
        margin-bottom: 20px !important;
    }
    .certificate p{
        text-align: center;
        margin: 0 !important;
        margin-bottom: 20px !important;
    }
    .certificate p, .instruction p, .consist p{
        margin: 0 20px;
    }

    .instruction img{
        width: 80vw;
        border-radius: 50px;
        margin: 20px 0;
    }
    .documents{
        width: 90%;
        display: flex;
        border-radius: 30px;
        justify-content: space-between;
        gap: 0;
    }
    .naming{
        font-size: 10px;
        border-radius: 20px;
        height: 40px;
        padding: 10px;
    }
    #burger{
        display: block;
    }
    .company{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 10%;
        gap: 70px;
    }   
    .logo{
        width: 200px;
    }
    h1{
        font-size: 16px;
        color: #262B2D;
    }
    .description{
        padding: 0 40px;
    }
    .description p{
        font-size: 18px;
        width: 100%;
    }
    .head{
        display: flex;
        align-items: center;
        gap: 12px;
        /* position: fixed; */
        background-color: #FFFDEF;
        margin-top: 54px;
        margin-left: 12px;
    }
}
</style>