// // const obj = {
// // 	name:'Ogogo',
// // 	age:2,
// // 	course:'JS',
// // }
// // // const name = obj.name
// // // деструктуризация
// // const {name , age} = obj
// // console.log(name, age, course)

// // const arr = [1,2,3,4,5]
// // const [one, two] = arr
// // console [one, two]

// const { Telegraf, Markup } = require ('telegraf')
// require('dotenv').config()

// const text = require('./constants')

// const bot = new Telegraf(process.env.BOT_TOKEN)

// bot.start (ctx => {
// 	ctx.reply(
// 		`Привет ${
// 			ctx.message.from.username ? ctx.message.from.username:
// 			'Рома'
// 		}`
// 	)
// })

// bot.help (ctx => ctx.reply(text.commands))

// // Пишем обработчика

// bot.command('course', async ctx => {
//   await ctx.replyWithHTML('<b>Ромаааааа</b>', Markup.inlineKeyboard([
// 		[
// 			Markup.button.callback('Ааааааааааааааа', 'btn_ux'),
// 			Markup.button.callback('html', 'btn_html')
// 		],
// 	]))
// })

// console.log(1)
// setTimeout( () => {
// 	console.log(2)
// }, 1000)
// console.log(3)
// // START
// bot.launch()

const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const text = require('./constants')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
  ctx.reply(
    `Привет${
      ctx.message.from.first_name ? ctx.message.from.username : '...'
    }`
  )
})

bot.help(ctx => ctx.reply(text.commands))

//Пишем обработчика

bot.command('aliya', async ctx => {
  // console.log(text.kor)
try {
  await ctx.replyWithHTML(
    '<b>Мои курсы</b>',
    // inlineKeyboard
    Markup.inlineKeyboard([
			
				[Markup.button.callback('Korean', 'btn_kor')],
				[Markup.button.callback('English', 'btn_eng')],
        [Markup.button.callback('Russian', 'btn_rus')],
			

		])
  )
}catch(e) {
	console.error(e)
}
})
// Обработчик


const handlerAction = (btnName, photo, txt) => {
bot.action(btnName, async ctx =>{
  try {
    // Убирает тайминг с кнопки
    await ctx.answerCbQuery()
    if(photo !== false) {
      await ctx.replyWithPhoto({
        source: photo,
      })
    }
    await ctx.replyWithHTML(txt)
  }catch(e){
    console.error(e)
  }
})
}

handlerAction('btn_kor', './img/korean.jpg', text.kor)
handlerAction('btn_eng', './img/english.jpg', text.eng)
handlerAction('btn_rus', './img/russian.jpg', text.rus)

//Start
bot.launch()