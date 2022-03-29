
//--dotenv
require('dotenv').config();
//--includ telegraf плюс маркуп клавиатура
const {Telegraf,  Markup, Scenes, Stage, session} = require('telegraf')
//include scene
const all_scene = require('./scenes.js')
const starts_scene = all_scene.start_scene()
const menu_scenes = all_scene.menu_scene()
const help_scene = all_scene.help_scene()
const sozdal_scene = all_scene.sozdal_scene()
//Using scenes
const stage = new Scenes.Stage([starts_scene, menu_scenes, help_scene, sozdal_scene])

//--express server 
const server = require('./server.js')
server()

//--telegraff connect bot telegramm
const bot = new Telegraf(process.env.BOT_TOKEN)

//---
bot.use(session())
bot.use(stage.middleware())
//---

// Scene zarabotalo 
bot.start( (ctx) => {
    ctx.scene.enter('starts')
})


bot.command('/help', (ctx) =>{ 
    ctx.scene.enter('help')
})

//--telegraff cones telegramm 
bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
//---dotenv

