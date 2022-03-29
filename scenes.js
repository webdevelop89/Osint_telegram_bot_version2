const {Scenes} = require('telegraf')
//подключение клавиатуры маркуп
const getMainMenu = require('./keybords.js')

//- text
const all_markup_text = require('./src/main_text');
//const { text } = require("telegraf/typings/button");
const phone_ru_mark = all_markup_text.phone_ru_text
const payments_mark_text = all_markup_text.payments_text
const avto_markup_text = all_markup_text.avto_text
const fn_name_text = all_markup_text.first_name_text
const nick_mark_text = all_markup_text.nick_text
const adres_mark_text = all_markup_text.adres_text
const cloud_mark_text = all_markup_text.cloud_text
const docs_mark_text = all_markup_text.docs_text
const poiskovik_mark_text = all_markup_text.poiskovik_text
const biometria_mark_text = all_markup_text.biometria_text
const acckount_mark_text = all_markup_text.acckount_text
const bazi_mark_text = all_markup_text.bazi_text
const email_mark_text = all_markup_text.email_text
const qwert_text = all_markup_text.qwert_text

module.exports = {

    start_scene () {

        const starts = new Scenes.BaseScene('starts')

        starts.enter((ctx)=> {
            //--проверка подписан ли на канал
    ctx.telegram.getChatMember('@efil_xam', ctx.chat.id )
    .then(s => {
        if(s.status === 'left') {
    //-- если не подписан вывод сообщение с кнопками
    ctx.telegram.sendMessage(ctx.chat.id, 'Вы не подписаны на наш канал, подпишитесь и нажмите кнопку для доступа к боту!',
    {
        reply_markup: {
            inline_keyboard: [
                //- первая кнопка редерект на канал
               [{text:"Наш канал\n", callback_data: "LK"},
               //-- вторая кнопка, повторная проверка подписки
               {text:"Я, подписался!", callback_data: "KK"}]
            
           ]
        }
    });
    } else {
        //ctx.reply("Приятного пользования 1 ", enter('menus'))
        ctx.scene.enter('menus')
    }

        console.log('logs', s.status)
    })
    .catch(e => {
        console.log('error', e)
    })
        })

        //--реагирования на ввод любого текста
        starts.on('text', (ctx)=>{
           ctx.reply('Бот уже запущен воспользуйтесь другими командами')
            
        })
        //-- реагирования на ввод с инлайн клавиатуры
        starts.action('LK', (ctx)=> {
            ctx.replyWithHTML("https://t.me/efil_xam")
        })
        starts.action('KK', (ctx)=> {
              //--проверка подписан ли на канал
        ctx.telegram.getChatMember('@efil_xam', ctx.chat.id )
        .then(s => {
    if(s.status === 'left') {
        //-- если не подписан вывод сообщение с кнопками
        ctx.telegram.sendMessage(ctx.chat.id, 'Вы не подписаны на наш канал, подпишитесь и нажмите кнопку для доступа к боту!',
        {
            reply_markup: {
                inline_keyboard: [
                    //- первая кнопка редерект на канал
                   [{text:"Наш канал\n", callback_data: "LK"},
                   //-- вторая кнопка, повторная проверка подписки
                   {text:"Я, подписался!", callback_data: "KK"}]
                
               ]
            }
        });
        } else {
            //-- тут вывод главного меню плюс функция для маркуп клавиатуры
            //ctx.reply("Приятного пользования", enter('menus'))
            ctx.scene.enter('menus')

        }
    
            console.log('logs', s.status)
        })
        .catch(e => {
            console.log('error', e)
        })
        
        })
        return starts
    },

    menu_scene () {

        const menus = new Scenes.BaseScene('menus')

        menus.enter((ctx)=> {
            ctx.reply('Что известно ?', getMainMenu())
               
        })
        menus.on('text', (ctx)=>{
            const vvod = ctx.message.text
                    
                    
               if(vvod==='📞 Номер телефона'){//3
                   
                 //await ctx.deleteMessage(j)
               
                  
                  ctx.replyWithHTML(phone_ru_mark)
                 
                 
                 //my_inline(ctx, all_markup_text.tutu_text, all_markup_text.third_keyboard)
                 
                 
               } 
                else if(vvod === '💰Номер кошелька'){//6
                  
           
                   ctx.replyWithHTML(payments_mark_text )
                  
                  
               } else if(vvod === '🚗 Авто'){
                   ctx.replyWithHTML(avto_markup_text)
               } else if(vvod === '👨 ФИО'){
                   ctx.replyWithHTML(fn_name_text)
   
               } else if(vvod === 'Ник'){
                   ctx.replyWithHTML(nick_mark_text)
               
               } else if(vvod === '🏡 Адрес'){
                   ctx.replyWithHTML(adres_mark_text)

               } else if(vvod === 'Облоко'){
                   ctx.replyWithHTML(cloud_mark_text)
                   
               } else if(vvod === 'Документ📄'){
                   ctx.replyWithHTML(docs_mark_text)
                  
               }
               else if(vvod === '🔍Поисковики'){
                   ctx.replyWithHTML(poiskovik_mark_text)
                   
               }
               else if(vvod === '👱 Биометрия'){
                   ctx.replyWithHTML(biometria_mark_text)
                  
               }
               else if(vvod === 'Аккаунт'){
                   ctx.replyWithHTML(acckount_mark_text)
                   
               }
               else if(vvod === 'Базы 🗄'){
                   ctx.replyWithHTML(bazi_mark_text)
                  
               }
               else if(vvod === 'E-mail📧'){
                   ctx.replyWithHTML(email_mark_text)
                
               }
               else if(vvod === 'Пароль 🔥'){
                   ctx.replyWithHTML(qwert_text)
                   
               }
               else if(vvod === 'Текст ​�'){
                   ctx.replyWithHTML(all_markup_text.text_mark_text)
                   
               }
               else if(vvod === 'Трекер💻'){
                   ctx.replyWithHTML(all_markup_text.trecer_text)
                   
               }
               else if(vvod === 'Домен🗺'){
                   ctx.replyWithHTML(all_markup_text.domains_text)
                   
               }
               else if(vvod === 'Чеки 💶'){
                   ctx.replyWithHTML(all_markup_text.cheki_text)
                   
               }
               else if(vvod === '🛠 Инструменты'){
                   ctx.replyWithHTML(all_markup_text.toolsing_text)
                   
               }
               else if(vvod === 'Файл⌨️'){
                   ctx.replyWithHTML(all_markup_text.fails_text)
                   
               }
               else if(vvod === 'Симки'){
                   ctx.replyWithHTML(all_markup_text.simki_text)
                   
               }
               else if(vvod === 'Сайт'){
                   ctx.replyWithHTML(all_markup_text.site_mark_text)
                   
               }
               else if(vvod === '🔙 Назад'){
                   ctx.scene.enter('starts')
               }
               else if(vvod === '😎Контакты'){
                   ctx.scene.enter('sozd')

               } else if(vvod === '/start'){
                   ctx.scene.enter('starts')

               } else if(vvod === '/help'){
                   ctx.scene.enter('help')
               }
                else {
                   console.log('ochibka menus scene')
                       ctx.replyWithHTML(all_markup_text.pusto_text)
                    }

                       
            
        
        })
        return menus
    },
    
    help_scene() {

        const helps = new Scenes.BaseScene('help')
        helps.enter( async (ctx)=> {
            ctx.replyWithHTML(all_markup_text.opisania_help)
        })
           helps.on('text', (ctx) =>{
            
               const vvods = ctx.message.text
               if(vvods === '/help'){
                ctx.scene.enter('help')
               } else if(vvods === '/start') {
                ctx.scene.enter('starts')
                //ctx.replyWithHTML(all_markup_text.pusto_text)
               } else {
                ctx.replyWithHTML(all_markup_text.pusto_text)
               }
               
           })
           return helps
    },

    sozdal_scene() {

        const sozdal = new Scenes.BaseScene('sozd')
        sozdal.enter(async (ctx)=>{
            ctx.reply('Задайте свой воопрос тут ?')
        })
        sozdal.on ('text', async (ctx)=>{
            const vods = ctx.message.text
            if(vods){
                await ctx.telegram.sendMessage(2023864971,`Задан вопрос '#вопрос':${vods}`)
                    ctx.scene.enter('menus')
               } else {
                ctx.replyWithHTML(all_markup_text.pusto_text)
               }
           
            
        })
        return sozdal
    }
} 
