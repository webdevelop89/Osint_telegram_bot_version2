

module.exports = {

    opisania_help: `<b>ОПИСАНИЕ</b>

    <b> └Бот содержит в себе каталог из бесплатных инструментов и методик
    ├для поиска данных во всем Интернете. </b>
     └<b>Совокупность всего списка дает наибольшее число полезной информации 
     ├чем множество платных сайтов.</b>
     └Продолжить - /start
    `,

    pusto_text:`🚫 Не отправляйте прямых сообщений боту! Бот не ищет за вас, а даёт ссылки на ресурсы для поиска.

    Для навигации используйте кнопки которые находятся под полем ввода сообщения. Подробнее – /help
    
    Если бот не отвечает, то обновите меню, нажав /start
    `,
    
    tutu_text:` Нажми для возврата в меню
    `,
    

    third_keyboard: [
		[ {text: '⏪️Назад', callback_data: 'cancel'}]
	],

    errsor:`🚫 Не отправляйте прямых сообщений боту! Бот не ищет за вас, а даёт ссылки на ресурсы для поиска.

    Для навигации используйте кнопки которые находятся под полем ввода сообщения. Подробнее – /help
    
    Если бот не отвечает, то обновите меню, нажав /start
    `,
    vvod_text:`🗄  <b>*Базы данных*</b>\n
    
    `,

    phone_ru_text:`📲 <b>* MOBILE TELEPHONE: *</b>
    <b>----------Телеграмм боты----------</b>\n
    <b>1.  @Smart_SearchBot</b> — найдет ФИО, дату рождения и адрес.
    <b>2.  @SafeCallsBot</b> — бесплатные анонимные звонки на любой номер телефона с подменой Caller ID.
    <b>3.  @mailsearchbot</b> — найдет часть пароля.
    <b>4.  @AvinfoBot</b> – делает отчет где есть данные из социальных сетей, недвижимости, автомобилей, объявлений и телефонных книжек. Нужно пригласить другой аккаунт для отчета.
    <b>5.  @get_kontakt_bot</b> — найдет как записан номер в контактах, большая база контактов
    <b>6.  @MyGenisBot</b> — найдет имя и фамилию владельца номера.
    <b>7.  @usersbox_bot</b> — бот найдет аккаунты в ВК у которых в поле номера телефона указан искомый номер.
    <b>8.  @get_caller_bot</b> — поиск по утечкам персональных данных и записным книгам абонентов, может найти ФИО, дату рождения, e-mail.
    <b>9.  @GetPhone_bot</b> — поиск номера телефона в утекших базах.
    <b>10. @ProbivBigDuglas_bot</b> - один из мощнейших ботов пробива в телеграмм.
    <b>11. @clerkinfobot</b> — бот берет данные из приложения getcontact, показывает как записан номер телефона в контактах.
    <b>12. @PhoneNumFinder_bot</b> — бот берет данные из приложения getcontact, показывает как записан номер телефона в контактах.
    <b>-----Мобильные Приложения-----</b>\n
    <b>1. GetContact</b><i> — найдет информацию о том как записан номер в контактах.</i>
    <b>2. NumBuster!</b><i> — найдет информацию о том как записан номер в контактах, а также покажет принадлежность сотового оператора связи.</i>
    <b>----------Интернет сайты----------</b>\n
    <b>1. getcontact.com</b><i> — найдет информацию о том как записан номер в контактах.</i>
    <b>2. (demo.phoneinfoga.crvx.fr/#/)</b><i> — определят тип номера, дает дорки для номера, определяет город.</i>
    <b>3. truecaller.com</b><i> — телефонная книга, найдет имя и оператора телефона.</i>
    <b>4. mirror.bullshit.agency</b><i> — поиск объявлений по номеру телефона.</i>
    <b>5. bases-brothers.ru</b><i> — поиск номера в объявлениях.</i>
    <b>6. account.live.com</b><i> — проверка привязанности номера к microsoft аккаунту.</i>
    <b>7. avinfo.guru</b><i> — проверка телефона владельца авто, иногда нужен VPN.</i>
    <b>8. telefon.stop-list.info</b><i> — поиск по всем фронтам, иногда нет информации.</i>
    <b>9. spravnik.com</b><i> — поиск по городскому номеру телефона, найдет ФИО и адрес.</i>
    `,
    payments_text:`💵 <b>* Поиск по данным платёжных систем: *</b>
    <b><i>Платёжные системы</i></b>\n
    <b>1. passport.webmoney.ru</b> (https://passport.webmoney.ru/asp/VerifyWMID.asp) — поиск по WM идентификатору или кошельку, покажет инфо о кошельке webmoney.
    <b><i>Номер пластиковой карты</i></b>\n
    <b>1. binlist.net</b> — определит к какому банку принадлежит карта.
    <b>2. Scylla </b> (https://github.com/josh0xA/Scylla) (t) — найдет упоминания номера карты в утечках
    `,

    avto_text:`🚙​ <b>* AVTO: *</b>
    <b>----------Телеграмм боты----------</b>\n
    <b>1. @AvinfoBot</b> — поиск по российским VIN, получить бесплатный отчет возможно только если вы пригласите другой аккаунт в бот
    <b>2. @AntiParkonBot</b> — найдет номер телефона владельца, маловероятно что результат будет
    <b>3. @Smart_SearchBot</b> — поиск по ГРЗ и VIN, находит собственника, ПТС, нома шасси, VIN, марку и т.д.
    <b>----------Интернет сайты----------</b>\n
    <b>1. shtrafometr.ru</b> — найдет штрафы, поиск по ТС (VIN) или номера кузова или шасси
    <b>2. dkbm-web.autoins.ru</b> — дает сведения о договоре ОСАГО, поиск по VIN и по номеру авто, а так же можно искать по номеру кузова или шасси, необходимо знать дату, на которую запрашиваются сведения договора ОСАГО
    <b>3. nomerogram.ru</b> — найдет фото автомобиля, поиск по госномеру
    <b>4. vin01.ru</b> — найдет VIN и по нему покажет историю регистраций, историю ДТП, пробег, ОСАГО и многое другое
    <b>5. mirror.bullshit.agency</b> — поиск на Avito
    <b>6. vinformer.su</b> — проверка ПТС, поиск по VIN
    `,
    first_name_text:`👨 <b>*Поиск по ФИО России:*</b>
    <b>----------Телеграмм боты----------</b>\n
    <b>1. @egrul_bot</b> — найдет ИП и компании.
    <b>2. @EyeGodBot</b> — обратный поиск по GetContact, находит часть номера телефона.
    <b>---------- Интернет сайты ----------</b>\n
    <b><i>Если не открываются включите VPN.</i></b>
    <b>1. reestr-zalogov.ru</b> — поиск по залогодателям, даст паспортные данные, место и дату рождения и т.д.
    <b>2. zytely.rosfirm.info</b> (zytely.rosfirm.info/m/) — найдет адрес прописки и дату рождения, необходимо знать город.
    <b>3. mmnt.ru</b> — найдет упоминания в документах.
    <b>4. kad.arbitr.ru</b> — дела, рассматриваемые арбитражными судами.
    <b>5. bankrot.fedresurs.ru</b> — поиск по банкротам, можно узнать ИНН, СНИЛС и адрес.
    <b>6. sudact.ru</b> — судебные и нормативные акты РФ, поиск по участникам и судам.
    <b>7. nomer.center</b> — телефонный справочник, иногда нужен VPN.
    <b>8. spra.vkaru.net</b> — телефонный справочник по России, Украине, Белоруссии, Казахстану, Литве и Молдове.
    <b>9. fssprus.ru (fssprus.ru/iss/ip/)</b> — проверка задолженностей, для физ. лица.
    <b>10. fio.stop-list.info</b> — поиск по ИП и судам, если есть ИНН, то можно узнать больше.
    <b>11. gcourts.ru</b> — поиск решений судов общей юрисдикции.
    <b>12. service.nalog.ru (service.nalog.ru/inn.do)</b> — найдет ИНН, нужно знать полное ФИО, дату рождения и документ удостоверяющий личность.
    <b>13. reestr-dover.ru (www.reestr-dover.ru/revocations)</b> — поиск в списке сведений об отмене доверенности.
    <b>14. судебныерешения.рф  (xn--90afdbaav0bd1afy6eub5d.xn--p1ai/)</b> — найдет судебные решения, документы с ФИО датой и статьей.
    <b>15. notariat.ru (data.notariat.ru/directory/succession/search?last_name=%D0%BF%D0%B5%D1%82%D1%80%D0%B5%D0%BD%D0%BA%D0%BE&first_name=&middle_name=#)</b> — поиск в реестре наследственных дел, найдет дату смерти человека и адрес нотариуса оформившее дело.
    `,

    nick_text:`<b>Поиск по нику</b>\n
    <b>1. namecheckup.com</b> — найдет аккаунты с искомым ником
    <b>2. instantusername.com</b> — проверка по сайтам и приложениям
    <b>3. suip.biz</b> (https://suip.biz/ru/?act=sherlock) — osintframework онлайн, автоматический поиск по 300 сервисам, работает очень медленно, дождитесь ответа
    <b>4. namechk.com</b> — проверка по сайтам, приложениям и доменам
    <b>5. sherlock</b> (http://github.com/sherlock-project/sherlock) (t) — поиск аккаунтов с таким ником
    <b>6. @mailsearchbot</b> — найдет часть пароля, поиск по логину
    <b>7. whatsmyname.app</b> — очень быстрый поиск по сотням сайтов
    <b>8. boardreader.com</b> — поисковик по форумам, ищет и по нику
    <b>9. leakedsource.ru</b> — покажет в каких базах есть ник
    <b>10. dumpedlqezarfife.onion</b> — найдет почту с паролем
    <b>11. leakprobe.net</b> (https://leakprobe.net/search.php) — найдет почту и источник слитой базы 
    <b>12. yasni.com</b> (http://www.yasni.com/) — автоматический поиск по интернету
    <b>13. social-searcher.com</b> — найдет упоминания в соц. сетях и на сайтах
    <b>14. socialmention.com</b> — найдет упоминания
    <b>15. osintbot</b> (http://vk.com/osintbot) — бот в ВК, находит пароли
    <b>16. @StealDetectorBOT</b> — найдет утекшие пароли аккаунта
    <b>17. pastebeen.com</b> (r) — поиск в базе текстов pastebin, поиск может занять несколько часов.
        <b><i>Через URL</i></b>\n
    <b>1. https://rocketbank.ru/api/vanguard/clients/NICKNAME</b> —  ФИО клиента Рокетбанка
В ссылке замените NICKNAME

    
    `,
    adres_text:`<b>Физический адрес</b>\n
    <b>1. Рос.реестр</b> (https://rosreestr.ru/wps/portal/p/cc_ib_portal_services/online_request) — справочная информация по объектам недвижимости
    <b>2. address.stop-list.info</b> — проверка на залог недвижимости или ипотеку, кадастровая стоимость объекта, судебные дела
    <b>3. zytely.rosfirm.info</b> (https://zytely.rosfirm.info/m/) — найдет всех жителей их ФИО и дату рождения
    <b>4. photo-map.ru</b> — найдет фото из VK, радиус поиска от 10 метров
    <b>5. snradar.azurewebsites.net</b> — найдет фото из VK, радиус поиска от 10 метров, фильтры дат
    <b>6. wigle.net</b> — покажет SSID и BSSID Wi-Fi точки
    <b>7. osintcombine.com</b> (https://www.osintcombine.com/facebook-geo-pages) — найдет Facebook страницы организаций
    <b>8. omnisci.com</b> (https://www.omnisci.com/demos/tweetmap/) — покажет твитты на карте
    <b>9. trendsmap.com</b> — карта трендов в Twitter
    <b>10. dom.gosuslugi.ru</b> (https://dom.gosuslugi.ru/#!/houses) — даст паспорт здания
    <b>11. kamerka</b> (https://github.com/woj-ciech/kamerka) (t) — найдет на карте камеры, устройства интернета вещей, принтеры, твиты, Instagram фото, flickr и другие открытые устройства
    <b>12. mattw.io</b> (https://mattw.io/youtube-geofind/location) — находит видео на YouTube
    <b>13. bo.nalog.ru</b> — найдет организацию и полную информацию о ней включая финансы
    <b>14. @VipiskaEGRNbot</b> — находит по кадастровый карте данные стоимости и площади
    <b>15. sanstv.ru</b> (http://sanstv.ru/photomap/) — найдет фото и твиты, есть фильтр по дате
    
    `,
    cloud_text:`*<b>Cloud</b>*
    
    `,
    docs_text:`<b>Документы</b>\n
    <b><i>Поиск по паспорту гражданина России</i></b>
    <b>1. fms.gov.ru</b> (http://services.fms.gov.ru/info-service.htm?sid=2000) — проверка действительности паспортов гражданина РФ
    <b>2. fssp.online</b> — поиск задолженности по СНИЛС, ИНН, СТС, номеру ИП, ВУ и паспорта, поиск бесплатный
    <b>3. service.nalog.ru</b> (https://service.nalog.ru/inn.do) — найдет ИНН, нужно знать полное ФИО и дату рождения.
        <b><i>Восстановление доступа</i></b>
    <b>1. esia.gosuslugi.ru</b> (https://esia.gosuslugi.ru/recovery/) — даст часть адреса почты и номера телефона

    
    `,
    poiskovik_text:`*<b>Cloud</b>*
    
    `,
    biometria_text:`<b>Поиск по фото с лицом</b>
    <b>1. Findclone.ru</b> — поиск по базе из VK
    <b>2. @AvinfoBot</b> — найдет аккаунты в ВК, содержащие фотографии с лицом, просто пришлите ему фото с лицом
    <b>3. pimeyes.com</b> — индексирует фото с сайтов, не точен, ограниченные возможности
    <b>4. vk.watch</b> — поиск по базе из VK, не точен
    <b>5. search4faces.com</b> — поиск по базам лиц VK и OK. Не точен
    <b>6. @Smart_SearchBot</b> — находит страницу в ВК, бесплатный период несколько дней после старта бота.
    <b>7. azure.microsoft.com</b> — соотнесение лиц, определит вероятность того, что на двух разных изображениях изображен один и тот же человек, и выдаст оценку достоверности.
    <b>8. news.myseldon.com</b> — не точен, ищет в фото из СМИ.
    `,

    acckount_text:`<b>ACCOUNTS</b>\n
    <b><i>Поиск по аккаунту в VK</i></b>
    <b>1. searchlikes.ru</b> — найдет где есть лайки и комментарии, дает статистику друзей
    <b>2. tutnaidut.com</b> — информация аккаунта несколько лет назад
    <b>3. 220vk.com</b> — определит средний возраст друзей, скрытых друзей, города друзей, дата регистрации и т.д
    <b>4. @Smart_SearchBot</b> — найдет почту, ФИО, номер телефона и адрес
    <b>5. @VKUserInfo_bot</b> — бот скачивает всю информацию об аккаунте
    <b>6. vk5.city4me.com</b> — cтатистика онлайн активности, скрытые друзья
    <b>7. vk.watch</b> — покажет историю аккаунта с 2016 года, ограниченная информация, покажет фото в низком качестве, можно уменьшить масштаб фото, тем самым распознать что там изображено
    <b>8. vk-photo.xyz</b> — частные фото аккаунта
    <b>9. VKAnalysis</b> (https://github.com/migalin/VKAnalysis) — анализ круга общения, текста, фото, онлайна и интересов аккаунта
    <b>10. vk-express.ru</b> — слежка за аккаунтом, после добавления будут доступны аватары, лайки, комментарии, друзья группы и т.д.
    <b>11. archive.org</b> — покажет архивированную версию аккаунта
    <b>12. InfoApp</b> (https://vk.com/app7183114) — найдет созданные группы, упоминания в комментариях, созданные приложения и комментарии к фото
    <b>13. yasiv.com</b> (http://yasiv.com/vk) (r) — создает граф из друзей аккаунта, после регистрации добавьте в граф аккаунт того кого хотите просмотреть
    <b>14. archive.is</b> — архивированная страница аккаунта
    <b>15. @InfoVkUser_bot</b> — бот покажет наиболее частые места учебы друзей аккаунта
    <b>16. @FindNameVk_bot</b> — история изменений имени аккаунта
    <b>17. yzad.ru</b> — находит владельца группы
    <b>18. vkdia.com</b> — определит с кем из друзей переписывается человек
    <b>19. @EyeGodBot</b> — бот умеет находить email, номер телефона и другие личные данные
    <b>20. @GetPhone_bot</b> — поиск в утекших базах
    <b><i>Поиск через URL</i></b>
    <b>1. https://www.yandex.ru/yandsearch?text=%22id123456789%22</b> — поиск упоминания ID страницы на других сайтах. Замените 123456789 на ID аккаунта VK
    <b>2. https://online-vk.ru/pivatfriends.php?id=123456789</b> — поиск друзей закрытого аккаунта, замените 123456789 на ID аккаунта VK.
    <b>3. https://vk.com/feed?obj=ID&q=&section=mentions</b> — упоминания аккаунта.
        <i>Замените ID на ID аккаунта VK.</i>
    <b>4. https://ruprofile.pro/vk_user/id12345</b> — сохраненная информация об аккаунте за 2017-18 год, замените 12345 на ID аккаунта VK
    <b>5. https://rusfinder.pro/vk/user/id12345</b> — сохраненная информация об аккаунте за 2017-18 год, замените 12345 на ID аккаунта VK
    
    `,
    bazi_text:`🗄  <b>*Базы данных*</b>\n
    <b>*Базы данных*</b> 
    <b>1. databases.today</b> (https://web.archive.org/web/20190409132908/https://cdn.databases.today) — слитые базы, из них  есть большие, ссылка на архивированную версию сайта
    <b>2. raidforums.com</b> — ссылки на скачивание разных баз с 1995 года
    <b>3. Базы данных (https://t.me/basetelega)</b> — множество бесплатных баз
    <b>4. ebaza.pro</b> — Бесплатные базы с email,  телефонами предприятий и физ.  лиц.
    <b>5. phreaker.pro</b> — большое разнообразие баз, начиная от номеров домофонов до данных банков
    <b>6. xss.is</b> — список баз, 3,5B записей, 52 базы
    <b>7. hub.opengovdata.ru</b> — каталог и хранилище открытых данных России
    `,
    email_text:`<b>*Анонимные и бесплатные почтовые адреса*</b>\n
    <b>----------Телеграмм боты----------</b>\n
    <b>1. @etlgr_bot</b> — бот для приема и отправки почты, без регистрации, можно зарезервировать более 100 адресов
    <b>2. @TempGMailBot</b> — бот для приема почты с адресом gmail.com, полностью бесплатный и анонимный
    <b>---------- Интернет сайты ----------</b>\n
    <b>3. emkei.cz</b> — онлайн фальшивый почтовик с вложениями, шифрованием, HTML-редактор и расширенные настройки, можно установить любой адрес отправителя
    `,
    qwert_text:` <b> *Поиск по паролю*</b>\n
    <b>1. @StealDetectorBOT</b> — найдет e-mail в крупной базе leakcheck
    <b>2. pwndb2am4tzkvold.onion</b>  — найдет e-mail
    `,

    text_mark_text:`🗄  <b>*Базы данных*</b>\n
    <b>1. Поиск в базе</b>
    `,
    trecer_text:`  <b>*Базы данных*</b>\n
    
    `,
    domains_text:`🗄  <b>*Базы данных*</b>\n
    
    `,
    cheki_text:`🗄  <b>*Базы данных*</b>\n
    
    `,
    toolsing_text:`🗄  <b>*Базы данных*</b>\n
    
    `,
    fails_text:`🗄  <b>*Файл*</b>\n
    <b><i>Для файла формата PNG & JPEG</i></b>
    <b>1. metapicz.com</b> — покажет EXIF
    <b>2. stolencamerafinder.com</b> — определит EXIF и по этим данным найдет какие еще фото были сделаны
        этим аппаратом.
    <b>3. exif.regex.info</b> — извлекает META-данные
    <b>4. cameratrace.com</b> — аналог stolencamerafinder
    <b>5. www.get-metadata.com</b> — извлекает META-данные
    <b>6. 29a.ch</b> (https://29a.ch/photo-forensics/#level-sweep) —  фото-форензика, анализ изображения на изменения.
    `,
    contakts_text:`🗄  <b>*Базы данных*</b>\n
    
    `,
    simki_text:`🗄  <b>*Номер онлайн*</b>\n
    <b>-----Мобильные Приложения-----</b>\n
    <b>1. SafeUM</b> (https://play.google.com/store/apps/details?id=com.safeum.android) — android, дает номер Литвы, не принимает СМС
    <b>2. textPlus</b> (https://play.google.com/store/apps/details?id=com.gogii.textplus) — android, номера США, номера бывают уже использованы
    <b>---------- Интернет сайты ----------</b>\n
    <b>1. onlinesim.ru</b> — возможно получить СМС и зарегистрировать аккаунт.
    
    `,

    tools_metodanie_text:`  <b>*Метаданные*</b>\n
    <b>*Извлечение META-данных*</b>\n
    <b>1. PDFCandy</b> (https://pdfcandy.com/edit-pdf-meta.html) — для .PDF
    <b>2. metapicz.com</b> — EXIF у картинки/
    <b>3. stolencamerafinder.com</b> — определяет камеру по серийному номеру и ищет в интернете, какие еще фото были сделаны ею
    <b>4. exif.regex.info</b> — извлекает META-данные различных расширений файлов
    
    
    `,
    tools_explooer_twxt:`<b>*Расширения для браузера*</b>\n
    <b>1. gobackintime</b> (https://chrome.google.com/webstore/detail/go-back-in-time/hgdahcpipmgehmaaankiglanlgljlakj) — позволяет просматривать кэшированную версию веб-страницы через разные сервисы
    <b>2. mitaka</b> (https://chrome.google.com/webstore/detail/mitaka/bfjbejmeoibbdpfdbmbacmefcbannnbg) — поиск/сканирование сайта через контекстное меню
    <b>3. IP Whois</b> (https://chrome.google.com/webstore/detail/ip-whois-flags-chrome-web/kmdfbacgombndnllogoijhnggalgmkon) — whois, сколько посетителей посещают, отзывы о репутации, проверка на вирусы, Alexa
    <b>4. Wayback Machine</b> (https://chrome.google.com/webstore/detail/save-to-the-wayback-machi/eebpioaailbjojmdbmlpomfgijnlcemk) — быстро сохраняйте веб-страницы в интернет архиве
    <b>5. Sputnik</b> (https://chrome.google.com/webstore/detail/sputnik/manapjdamopgbpimgojkccikaabhmocd) — быстрый и простой поиск IP-адресов, доменов, файловых хешей и URL-адресов
    <b>6. invid</b> (https://www.invid-project.eu/tools-and-services/invid-verification-plugin/) — анализ видео на хостингах
    <b>7. HackerTarget</b> (https://chrome.google.com/webstore/detail/ip-dns-security-tools-hac/phjkepckmcnjohilmbjlcoblenhgpjmo) — Быстрый доступ к IP, DNS и сетевым инструментам. Проверьте DNS, Whois, ASN, Traceroute, Ping и многое другое. Инструменты для технических операторов.
    <b>8. reveye</b> (https://chrome.google.com/webstore/detail/reveye-reverse-image-sear/keaaclcjhehbbapnphnmpiklalfhelgf) — реверс поиск фото по 5 сайтаv
  
  
    `,
    site_mark_text:`<b>Поиск по сайту</b>\n
    <b>1. xinit.ru</b> (https://xinit.ru/whois/) — тотальный скан сайта по всем направлениям
    <b>2. hunter.io</b> — поиск email у сайта
    <b>3. @WhoisDomBot</b> — узнайте информацию об домене
    <b>4. riskiq.com</b> — автоматизированный поиск по всем фронтам
    <b>5. Knock Subdomain Scan (https://github.com/guelfoweb/knock)</b> — находит субдомены и FTP
    <b>6. builtwith.com</b> — технологический профиль сайта, взаимосвязи между сайтами
    <b>7. crimeflare.org</b> (http://www.crimeflare.org:82/cfs.html) — cloudflare раскрыватель
    <b>8. cyber-hub.net</b> (https://cyber-hub.net/domain_resolver.php) — распознаватель cloudflare, статус DNS, перебор поддоменов и многое другое
    <b>9. suip.biz</b> (https://suip.biz/ru/?act=amass) — быстрый и мощный поиск субдоменов, найдет все
    <b>10. urlscan.io</b> — сервис для сканирования и анализа сайтов
    <b>11. dnsdumpster.com</b> — инструмент исследования домена который может обнаружить хосты связанные с доменом
    <b>12. cachedview.com</b> — поиск по кэшу Google
    <b>13. recon.secapps.com</b> (https://recon.secapps.com/) — автоматический поиск и создание карт взаимосвязей
    <b>14. censys.io</b> — находит какие серверы и устройства выставлены в сети
    <b>15. virustotal.com</b> — служба пассивного DNS, поиск суб-доменов, поиск в whois и история сертификатов SSL
    <b>16. atsameip.intercode.ca</b> — найдет одинаковые IP у сайта, можно узнать субдомены
    <b>17. spiderfoot.net</b> — автоматический поиск с использованием огромного количества методов, можно использовать в облаке если пройти регистрацию
    <b>18. oldweb.today</b> —  просмотреть исторические версии сайтов, можно выбрать вид браузера и дату
    <b>19. crimeflare.net</b> (http://crimeflare.net:83/repeats.html) — дает возможность узнать настоящий IP адрес сайта за CloudFlare
    <b>20. dirhunt (https://github.com/Nekmo/dirhunt)</b> — поиск директорий сайта без брута
    <b>21. Amass (https://github.com/OWASP/Amass)</b> — сетевое картирование поверхностей атаки и обнаружение внешних ресурсов с использованием методов сбора информации с открытым исходным кодом и активных методов разведки
    <b>22. Photon (https://github.com/s0md3v/Photon)</b> — найдет на сайте файлы, секретные ключи, JS файлы, URL с параметрами 
    <b>23. spyse.com</b> (https://spyse.com/search/subdomain) — поиск поддоменов 
    <b>24. webcookies.org</b> — анализ cookies сайта.
    <b>25. dnslytics.com</b> (https://dnslytics.com/reverse-analytics) — сайт помогает найти трекеры на сайте
    <b>26. domainwat.ch</b> — может искать информацию такую как имя регистранта, адрес, номер телефона, адрес электронной почты из информации WHOIS и историю изменений
    <b>27. findomain (https://github.com/Edu4rdSHL/findomain)</b> — ищет поддомены
    <b>28. yuleak.com</b> — найдет серверы, домены, поддомены, услуги, darkweb, пароли, уязвимости, идентификаторы и многое другое
    <b>29. shodan.io</b> — найдет IP адреса и сайты с упоминанием искомого сайта
    <b>30. phonebook.cz</b> — найдет e-mails, субдомены, директории сайта
    <b>31. visualsitemapper.com</b> (http://www.visualsitemapper.com/) — визуализация карты сайта одним грфиком

    
    `
}
