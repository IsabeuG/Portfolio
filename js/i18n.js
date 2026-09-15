(function () {
  "use strict";

  /* ---------------------------------------------------------
     Rotating hero word (home page only)
  --------------------------------------------------------- */
  var ROTATE_WORDS = {
    en: ["calm", "simple", "clear", "intuitive"],
    ru: ["непростых", "хаотичных", "требовательных", "масштабных"]
  };
  var rotateTimer = null;

  function stopWordRotation() {
    if (rotateTimer) {
      clearInterval(rotateTimer);
      rotateTimer = null;
    }
  }

  function startWordRotation(lang) {
    stopWordRotation();
    var el = document.querySelector("[data-rotate-word]");
    if (!el) return;

    var words = ROTATE_WORDS[lang] || ROTATE_WORDS.en;
    var index = 0;
    el.textContent = words[index];

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    rotateTimer = setInterval(function () {
      index = (index + 1) % words.length;
      el.classList.add("is-swapping");
      setTimeout(function () {
        el.textContent = words[index];
        el.classList.remove("is-swapping");
      }, 280);
    }, 2600);
  }

  /* ---------------------------------------------------------
     Shared strings (nav + case-study boilerplate)
  --------------------------------------------------------- */
  var SHARED = {
    en: {
      "nav.approach": "Approach",
      "nav.work": "Work",
      "nav.contacts": "Contacts",

      "cs.back": "← Back to work",
      "cs.eyebrow.about": "About the project",
      "cs.about.heading": "What the product is and what I was solving",
      "cs.about.context": "Context",
      "cs.about.problem": "Problem",
      "cs.about.myrole": "My role",
      "cs.facts.role": "Role",
      "cs.facts.timeline": "Timeline",
      "cs.facts.platform": "Platform",
      "cs.facts.tools": "Tools",
      "cs.eyebrow.screens": "Selected screens",
      "cs.cta.heading": "See the full case on Behance",
      "cs.cta.text": "Full process, research and the rest of the screens.",
      "cs.cta.button": "Open on Behance",
      "cs.footer.copyright": "© 2026 EGM. All rights reserved."
    },
    ru: {
      "nav.approach": "Подход",
      "nav.work": "Работы",
      "nav.contacts": "Контакты",

      "cs.back": "← Назад к работам",
      "cs.eyebrow.about": "О проекте",
      "cs.about.heading": "Что это за продукт и какую задачу я решала",
      "cs.about.context": "Контекст",
      "cs.about.problem": "Задача",
      "cs.about.myrole": "Моя роль",
      "cs.facts.role": "Роль",
      "cs.facts.timeline": "Сроки",
      "cs.facts.platform": "Платформа",
      "cs.facts.tools": "Инструменты",
      "cs.eyebrow.screens": "Избранные экраны",
      "cs.cta.heading": "Смотрите полный кейс на Behance",
      "cs.cta.text": "Весь процесс, исследование и остальные экраны.",
      "cs.cta.button": "Открыть на Behance",
      "cs.footer.copyright": "© 2026 EGM. Все права защищены."
    }
  };

  /* ---------------------------------------------------------
     Page-specific strings
  --------------------------------------------------------- */
  var PAGES = {

    home: {
      en: {
        "meta.title": "Eliza EGM — Product Designer",
        "meta.description": "I design calm interfaces for products that are anything but. Product design, design systems and 3D work by Elizabeth EGM.",

        "hero.greeting": "Hi, I'm Elizabeth 🤓 Product and 3D Designer based in Moscow",
        "hero.heading.prefix": "I design ",
        "hero.heading.suffix": " interfaces for products that are anything but",
        "hero.tag.uxui": "UX / UI",
        "hero.tag.designSystems": "Design systems",
        "hero.tag.b2b": "B2B",
        "hero.tag.b2c": "B2C",
        "hero.tag.dataHeavyUi": "Data-heavy UI",
        "hero.tag.3d": "3D",
        "hero.status": "Available for work",
        "hero.statusLink": "Let's talk",
        "hero.statusLink.href": "https://www.linkedin.com/in/elizaemg",

        "approach.heading": "Approach",
        "approach.intro": "I aim for balance between classical craft and contemporary design — not chasing trends, but pairing clear, intuitive structure with visuals that pull you in.",
        "approach.note1": "I start with the workflow, not the screens. Understanding how people actually move through a product — the shortcuts they've invented, the steps they skip, the errors they ignore — tells me more than any brief.",
        "approach.note2": "Systems over one-off screens. Every component I design has to work in at least three states and survive an engineer who's never spoken to me. If it can't be handed off without a Loom video, it isn't finished.",
        "approach.note3": "Delivery is part of the design. Annotated specs, motion guidance, edge case documentation: these aren't extras, they're the last 30% of the job. The gap between a good design and a good product usually lives in that 30%.",
        "approach.skill.productDiscovery": "Product discovery",
        "approach.skill.complexWorkflows": "Complex workflows",
        "approach.skill.designSystems": "Design systems",
        "approach.skill.dataHeavyUi": "Data-heavy UI",
        "approach.skill.prototyping": "Prototyping",
        "approach.skill.interactionDesign": "Interaction design",
        "approach.skill.userResearch": "User research",
        "approach.skill.3dVisuals": "3D & product visuals",
        "approach.skill.figma": "Figma",
        "approach.skill.blender": "Blender",

        "work.heading": "Featured projects",
        "work.subhead": "Selected cases from the last two years.",
        "work.tab.design": "Product Design",
        "work.tab.3d": "3D Art",
        "work.viewCase": "View case",

        "proj.tessera.title": "Tessera — Fleet management platform",
        "proj.tessera.desc": "An invisible product with no UI to show, sold to buyers who arrive skeptical rather than curious. Adjectives do not survive that room.",
        "proj.tessera.tag1": "FinTech",
        "proj.tessera.tag2": "Crypto",
        "proj.tessera.tag3": "Corporate Website",

        "proj.liveops.title": "LiveOps — Command center",
        "proj.liveops.desc": "A real-time control room for a live game with millions of players. One dark interface to watch the pulse, balance the economy, and run experiments.",
        "proj.liveops.tag1": "Internal SaaS",
        "proj.liveops.tag2": "Live game operations",
        "proj.liveops.tag3": "Web app",

        "proj.aperture.title": "Aperture — Landing page for a satellite ground‑network API",
        "proj.aperture.desc": "Making invisible infrastructure feel tangible.",
        "proj.aperture.tag1": "Landing",
        "proj.aperture.tag2": "Satellite ground‑network API",

        "proj.echoes.title": "Echoes — Dream journal",
        "proj.echoes.desc": "A mobile dream journal app that helps users capture, reflect on, and find patterns in their dreams.",
        "proj.echoes.tag1": "Mobile App",
        "proj.echoes.tag2": "Immersive glass interface",

        "proj.cryptowallet.title": "JIS — Crypto Wallet",
        "proj.cryptowallet.desc": "Create a crypto wallet that is safe to use: a clear overview of assets, simple exchanges, and a sense of security.",
        "proj.cryptowallet.tag1": "Crypto",
        "proj.cryptowallet.tag2": "Mobile app",

        "proj.tranq.title": "Tranq — Web-app for travel planning",
        "proj.tranq.desc": "To combine all stages of travel planning into one service: selection, itinerary, payment, and monitoring.",
        "proj.tranq.tag1": "Travel",
        "proj.tranq.tag2": "Web app",

        "proj.followlight.title": "Follow the Light",
        "proj.followlight.desc": "Create a 3D promo visual concept for a crypto/NFT product, using a claw machine filled with regular toys as the core metaphor.",
        "proj.followlight.tag1": "3D",
        "proj.followlight.tag2": "Crypto",

        "proj.zombiehand.title": "3D Modeling for online cinema",
        "proj.zombiehand.desc": "Create a 3D illustration based on a sketch by the FeelFactory agency for the online cinema Ivi.",
        "proj.zombiehand.tag1": "3D",
        "proj.zombiehand.tag2": "Cinema",

        "contact.heading": "Looking for a cool designer?",
        "contact.subhead": "Currently open to new projects. Let's talk about what you're building.",
        "footer.copyright": "© 2026 Eliza EMG. All rights reserved."
      },
      ru: {
        "meta.title": "Eliza EGM — продуктовый дизайнер",
        "meta.description": "Интуитивные интерфейсы для непростых продуктов. Продуктовый дизайн, дизайн-системы и 3D-работы от Елизаветы EGM.",

        "hero.greeting": "Привет, я Елизавета 🤓 Продуктовый и 3D-дизайнер из Москвы",
        "hero.heading.prefix": "Я создаю интуитивные интерфейсы для ",
        "hero.heading.suffix": " продуктов",
        "hero.tag.uxui": "UX / UI",
        "hero.tag.designSystems": "Дизайн-системы",
        "hero.tag.b2b": "B2B",
        "hero.tag.b2c": "B2C",
        "hero.tag.dataHeavyUi": "Дата-интерфейсы",
        "hero.tag.3d": "3D",
        "hero.status": "Открыта для работы",
        "hero.statusLink": "Обсудить",
        "hero.statusLink.href": "https://t.me/elizabethemg",

        "approach.heading": "Подход",
        "approach.intro": "Я стремлюсь к балансу между классическим мастерством и современным дизайном — не гонюсь за трендами, а сочетаю понятную, интуитивную структуру с визуалом, который цепляет.",
        "approach.note1": "Я начинаю со сценария использования, а не с экранов. Понимание того, как люди на самом деле взаимодействуют с продуктом — какие обходные пути они находят, какие шаги пропускают, на какие ошибки не обращают внимания — говорит мне больше, чем любое техническое задание.",
        "approach.note2": "Системы важнее разовых экранов. Каждый компонент, который я проектирую, должен работать минимум в трёх состояниях и оставаться понятным инженеру, с которым я ни разу не разговаривала. Если без видео-инструкции в Loom не разобраться — значит, работа ещё не закончена.",
        "approach.note3": "Передача в разработку — часть дизайна. Аннотированные спецификации, гайды по анимации, документация крайних случаев — это не дополнение, а последние 30% работы. Именно в этих 30% чаще всего и кроется разница между хорошим дизайном и хорошим продуктом.",
        "approach.skill.productDiscovery": "Исследование продукта",
        "approach.skill.complexWorkflows": "Сложные сценарии",
        "approach.skill.designSystems": "Дизайн-системы",
        "approach.skill.dataHeavyUi": "Дата-интерфейсы",
        "approach.skill.prototyping": "Прототипирование",
        "approach.skill.interactionDesign": "Дизайн взаимодействия",
        "approach.skill.userResearch": "Пользовательские исследования",
        "approach.skill.3dVisuals": "3D и визуализация продуктов",
        "approach.skill.figma": "Figma",
        "approach.skill.blender": "Blender",

        "work.heading": "Избранные проекты",
        "work.subhead": "Избранные кейсы за последние два года.",
        "work.tab.design": "Продуктовый дизайн",
        "work.tab.3d": "3D-арт",
        "work.viewCase": "Смотреть кейс",

        "proj.tessera.title": "Tessera — платформа управления флотом",
        "proj.tessera.desc": "Невидимый продукт без интерфейса, который приходится продавать покупателям, настроенным скорее скептически, чем с любопытством. Красивые прилагательные в этой комнате не выживают.",
        "proj.tessera.tag1": "Финтех",
        "proj.tessera.tag2": "Крипто",
        "proj.tessera.tag3": "Корпоративный сайт",

        "proj.liveops.title": "LiveOps — командный центр",
        "proj.liveops.desc": "Командный центр в реальном времени для игры с миллионами игроков. Один тёмный интерфейс, чтобы следить за пульсом игры, балансировать экономику и запускать эксперименты.",
        "proj.liveops.tag1": "Внутренний SaaS",
        "proj.liveops.tag2": "Лайв-операции в играх",
        "proj.liveops.tag3": "Веб-приложение",

        "proj.aperture.title": "Aperture — лендинг для API спутниковой наземной сети",
        "proj.aperture.desc": "Как сделать невидимую инфраструктуру осязаемой.",
        "proj.aperture.tag1": "Лендинг",
        "proj.aperture.tag2": "API спутниковой наземной сети",

        "proj.echoes.title": "Echoes — дневник снов",
        "proj.echoes.desc": "Мобильное приложение — дневник снов, которое помогает записывать сны, осмыслять их и находить повторяющиеся паттерны.",
        "proj.echoes.tag1": "Мобильное приложение",
        "proj.echoes.tag2": "Иммерсивный «стеклянный» интерфейс",

        "proj.cryptowallet.title": "JIS — крипто-кошелёк",
        "proj.cryptowallet.desc": "Создать крипто-кошелёк, которым приятно и безопасно пользоваться: понятный обзор активов, простой обмен и ощущение защищённости.",
        "proj.cryptowallet.tag1": "Крипто",
        "proj.cryptowallet.tag2": "Мобильное приложение",

        "proj.tranq.title": "Tranq — веб-приложение для планирования путешествий",
        "proj.tranq.desc": "Объединить все этапы планирования путешествия в одном сервисе: выбор, маршрут, оплату и отслеживание.",
        "proj.tranq.tag1": "Путешествия",
        "proj.tranq.tag2": "Веб-приложение",

        "proj.followlight.title": "Follow the Light",
        "proj.followlight.desc": "Концепция 3D-промо-визуала для крипто/NFT-продукта: в основе — автомат с игрушками, наполненный обычными мягкими зверятами, как ключевая метафора.",
        "proj.followlight.tag1": "3D",
        "proj.followlight.tag2": "Крипто",

        "proj.zombiehand.title": "3D-моделирование для онлайн-кинотеатра",
        "proj.zombiehand.desc": "3D-иллюстрация по эскизу агентства FeelFactory для онлайн-кинотеатра Ivi.",
        "proj.zombiehand.tag1": "3D",
        "proj.zombiehand.tag2": "Кино",

        "contact.heading": "Ищете крутого дизайнера?",
        "contact.subhead": "Сейчас открыта для новых проектов. Расскажите, что вы создаёте — обсудим.",
        "footer.copyright": "© 2026 Eliza EMG. Все права защищены."
      }
    },

    tessera: {
      en: {
        "meta.title": "Tessera — Fleet management platform | Eliza EGM",
        "meta.description": "Tessera clears and settles tokenized assets for banks. A case study on making an invisible fintech product legible to three different readers.",
        "hero.title": "Tessera — Fleet management platform",
        "hero.desc": "Tessera clears and settles tokenized assets for banks. Nothing about the product is visible — no app, no dashboard, just an API and a promise. The website had to make that promise legible to three very different readers in one scroll.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "FinTech",
        "hero.tag3": "Crypto",
        "hero.tag4": "Corporate Website",
        "about.context": "A four-page site built to survive a due-diligence read — an engineer, a risk officer and a compliance lead evaluating the same company from the same scroll, each looking for a different kind of proof.",
        "about.problem": "An invisible product with no UI to show, sold to buyers who arrive skeptical rather than curious. Adjectives do not survive that room.",
        "about.myrole": "I created one narrative arc across four pages, each claim tied to an artifact — a diagram, a code block, a table, a number with a unit.",
        "facts.role": "Product designer",
        "facts.timeline": "3 weeks, 2026",
        "facts.platform": "Web, mobile, tablet",
        "facts.tools": "Figma"
      },
      ru: {
        "meta.title": "Tessera — платформа управления флотом | Eliza EGM",
        "meta.description": "Tessera проводит клиринг и расчёты по токенизированным активам для банков. Кейс о том, как сделать невидимый финтех-продукт понятным для трёх разных читателей.",
        "hero.title": "Tessera — платформа управления флотом",
        "hero.desc": "Tessera проводит клиринг и расчёты по токенизированным активам для банков. У продукта нет ничего видимого — ни приложения, ни дашборда, только API и обещание. Сайт должен был сделать это обещание понятным для трёх совершенно разных читателей в рамках одного скролла.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Финтех",
        "hero.tag3": "Крипто",
        "hero.tag4": "Корпоративный сайт",
        "about.context": "Сайт из четырёх страниц, рассчитанный на придирчивое due diligence-чтение: инженер, риск-менеджер и специалист по комплаенсу изучают одну и ту же компанию по одному и тому же скроллу — и каждый ищет свои доказательства.",
        "about.problem": "Невидимый продукт без интерфейса, который приходится продавать покупателям, настроенным скорее скептически, чем с любопытством. Красивые прилагательные в этой комнате не выживают.",
        "about.myrole": "Я выстроила единую нарративную арку на четырёх страницах: каждое утверждение подкреплено артефактом — диаграммой, блоком кода, таблицей или цифрой с единицей измерения.",
        "facts.role": "Продуктовый дизайнер",
        "facts.timeline": "3 недели, 2026",
        "facts.platform": "Web, мобильные устройства, планшеты",
        "facts.tools": "Figma"
      }
    },

    liveops: {
      en: {
        "meta.title": "LiveOps — Command center | Eliza EGM",
        "meta.description": "A real-time control room for a live game with millions of players. One dark interface to watch the pulse, balance the economy, and run experiments.",
        "hero.title": "LiveOps — Command center",
        "hero.desc": "A real-time control room for a live game with millions of players. One dark interface to watch the pulse, balance the economy, and run experiments.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Internal SaaS",
        "hero.tag3": "Live game operations",
        "hero.tag4": "Web app",
        "about.context": "Live-ops teams run a game the way a control room runs a power grid: dozens of parallel events, an economy that can inflate overnight, experiments that finish while everyone sleeps, and an audience of millions that reacts within minutes. The product had to make that state readable at a glance — and safe to act on.",
        "about.problem": "Four roles with conflicting needs, five tools that did not talk to each other, and a game that never stops running. Structure, priorities and safeguards came first — the dark surface came last.",
        "about.myrole": "What exactly I did: research, UI, design system, prototype, handoff. Name the parts that were mine.",
        "facts.role": "Product designer",
        "facts.timeline": "6 weeks, 2026",
        "facts.platform": "Web app, desktop-first",
        "facts.tools": "Figma"
      },
      ru: {
        "meta.title": "LiveOps — командный центр | Eliza EGM",
        "meta.description": "Командный центр в реальном времени для игры с миллионами игроков. Один тёмный интерфейс для мониторинга, баланса экономики и экспериментов.",
        "hero.title": "LiveOps — командный центр",
        "hero.desc": "Командный центр в реальном времени для игры с миллионами игроков. Один тёмный интерфейс, чтобы следить за пульсом игры, балансировать экономику и запускать эксперименты.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Внутренний SaaS",
        "hero.tag3": "Лайв-операции в играх",
        "hero.tag4": "Веб-приложение",
        "about.context": "Команда лайв-операций управляет игрой так же, как диспетчерская — энергосетью: десятки параллельных событий, экономика, способная раздуться за одну ночь, эксперименты, завершающиеся, пока все спят, и аудитория в миллионы человек, реагирующая за считанные минуты. Продукт должен был сделать это состояние понятным с одного взгляда — и безопасным для принятия решений.",
        "about.problem": "Четыре роли с противоречащими друг другу потребностями, пять инструментов, которые не общались между собой, и игра, которая никогда не останавливается. Сначала — структура, приоритеты и защитные механизмы, тёмный интерфейс появился в последнюю очередь.",
        "about.myrole": "Что именно я делала: исследование, UI, дизайн-система, прототип, передача в разработку — от начала и до конца.",
        "facts.role": "Продуктовый дизайнер",
        "facts.timeline": "6 недель, 2026",
        "facts.platform": "Веб-приложение, desktop-first",
        "facts.tools": "Figma"
      }
    },

    aperture: {
      en: {
        "meta.title": "Aperture — Landing page for a satellite ground‑network API | Eliza EGM",
        "meta.description": "Making invisible infrastructure feel tangible — a landing page for a satellite ground-network API.",
        "hero.title": "Aperture — Landing page for a satellite ground‑network API",
        "hero.desc": "Making invisible infrastructure feel tangible.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Landing",
        "hero.tag3": "Satellite ground‑network API",
        "about.context": "Aperture is a concept for a ground‑station network sold as an API: operators book antenna time on 34 dishes worldwide and get raw data straight into their cloud bucket. The product lives in schedules, telemetry and file transfers — none of which a buyer can see. The task was to design a landing page that makes that work visible, earns the trust of engineers and still converts decision‑makers.",
        "about.problem": "Small‑satellite teams rarely own antennas. They rent contact time from several providers, and every pass is a short, fixed window: miss it and the next one may be hours away, in the wrong hemisphere. The page had to show why this hurts — and why an API fixes it — to people who live in orbital mechanics and to people who sign budgets.",
        "about.myrole": "What exactly I did: research, UI, design system, adaptive versions.",
        "facts.role": "Product designer",
        "facts.timeline": "20 days, 2026",
        "facts.platform": "Web, mobile, tablet",
        "facts.tools": "Figma"
      },
      ru: {
        "meta.title": "Aperture — лендинг для API спутниковой наземной сети | Eliza EGM",
        "meta.description": "Как сделать невидимую инфраструктуру осязаемой — лендинг для API спутниковой наземной сети.",
        "hero.title": "Aperture — лендинг для API спутниковой наземной сети",
        "hero.desc": "Как сделать невидимую инфраструктуру осязаемой.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Лендинг",
        "hero.tag3": "API спутниковой наземной сети",
        "about.context": "Aperture — концепция сети наземных станций, которая продаётся как API: операторы бронируют время антенн на 34 тарелках по всему миру и получают сырые данные прямо в своё облачное хранилище. Продукт живёт в расписаниях, телеметрии и передаче файлов — всё это невидимо для покупателя. Задача была спроектировать лендинг, который делает эту работу видимой, вызывает доверие у инженеров и при этом конвертирует людей, принимающих решения.",
        "about.problem": "Команды, работающие с малыми спутниками, редко владеют собственными антеннами. Они арендуют время связи у нескольких провайдеров, а каждый сеанс — это короткое фиксированное окно: пропустишь его, и следующий может быть через несколько часов, да ещё и в другом полушарии. Страница должна была показать, почему это болезненно — и почему API решает эту проблему — и людям, которые живут орбитальной механикой, и людям, которые подписывают бюджеты.",
        "about.myrole": "Что именно я делала: исследование, UI, дизайн-система, адаптивные версии.",
        "facts.role": "Продуктовый дизайнер",
        "facts.timeline": "20 дней, 2026",
        "facts.platform": "Web, мобильные устройства, планшеты",
        "facts.tools": "Figma"
      }
    },

    echoes: {
      en: {
        "meta.title": "Echoes — Dream journal | Eliza EGM",
        "meta.description": "A mobile dream journal app that helps users capture, reflect on, and find patterns in their dreams.",
        "hero.title": "Echoes — Dream journal",
        "hero.desc": "A mobile dream journal app that helps users capture, reflect on, and find patterns in their dreams.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Mobile app",
        "hero.tag3": "Immersive glass interface",
        "about.context": "I had to design a mobile dream journal app that helps users capture, reflect on, and find patterns in their dreams. It was heavily inspired by Carl Jung.",
        "about.problemList": "<li>— Solve the problem of quickly and easily logging a dream right after waking up;</li><li>— Solve the problem of losing track of recurring dreams and symbols;</li><li>— Help users notice emotional and symbolic patterns across their dreams;</li><li>— Expand engagement through a gentle, atmospheric user experience;</li><li>— Design based on human-centered design principles.</li>",
        "about.myrole": "What exactly I did: research, UI, UI-kit, prototype.",
        "facts.role": "Product designer",
        "facts.timeline": "7 days, 2025",
        "facts.platform": "Mobile app",
        "facts.tools": "Figma"
      },
      ru: {
        "meta.title": "Echoes — дневник снов | Eliza EGM",
        "meta.description": "Мобильное приложение — дневник снов, которое помогает записывать сны, осмыслять их и находить в них закономерности.",
        "hero.title": "Echoes — дневник снов",
        "hero.desc": "Мобильное приложение — дневник снов, которое помогает записывать сны, осмыслять их и находить повторяющиеся паттерны.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Мобильное приложение",
        "hero.tag3": "Иммерсивный «стеклянный» интерфейс",
        "about.context": "Мне нужно было спроектировать мобильное приложение — дневник снов, которое помогает пользователям записывать сны, осмыслять их и находить в них закономерности. Проект во многом вдохновлён идеями Карла Юнга.",
        "about.problemList": "<li>— решить проблему быстрой и лёгкой записи сна сразу после пробуждения;</li><li>— решить проблему потери повторяющихся снов и символов;</li><li>— помочь пользователям замечать эмоциональные и символические паттерны в своих снах;</li><li>— повысить вовлечённость через мягкий, атмосферный пользовательский опыт;</li><li>— опираться на принципы человеко-ориентированного дизайна.</li>",
        "about.myrole": "Что именно я делала: исследование, UI, UI-кит, прототип.",
        "facts.role": "Продуктовый дизайнер",
        "facts.timeline": "7 дней, 2025",
        "facts.platform": "Мобильное приложение",
        "facts.tools": "Figma"
      }
    },

    cryptowallet: {
      en: {
        "meta.title": "JIS — Crypto Wallet | Eliza EGM",
        "meta.description": "Create a crypto wallet that is safe to use: a clear overview of assets, simple exchanges, and a sense of security.",
        "hero.title": "JIS — Crypto Wallet",
        "hero.desc": "Create a crypto wallet that is safe to use: a clear overview of assets, simple exchanges, and a sense of security.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Crypto",
        "hero.tag3": "Mobile app",
        "about.context": "Create a crypto wallet that is safe to use: a clear overview of assets, simple exchanges, and a sense of security.",
        "about.problem": "The wallet should feel secure even before the first action. Hence, the light and airy theme, large calm typography, soft shapes, and pastel colours serve as \"colours of trust\" — a language that alleviates anxiety.",
        "about.myrole": "UI/UX: structure, visual language, key screens, and design system.",
        "facts.role": "Product designer",
        "facts.timeline": "2 weeks, 2025",
        "facts.platform": "Mobile-first",
        "facts.tools": "Figma"
      },
      ru: {
        "meta.title": "JIS — крипто-кошелёк | Eliza EGM",
        "meta.description": "Крипто-кошелёк, которым безопасно и приятно пользоваться: понятный обзор активов, простой обмен и ощущение защищённости.",
        "hero.title": "JIS — крипто-кошелёк",
        "hero.desc": "Создать крипто-кошелёк, которым приятно и безопасно пользоваться: понятный обзор активов, простой обмен и ощущение защищённости.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Крипто",
        "hero.tag3": "Мобильное приложение",
        "about.context": "Создать крипто-кошелёк, которым приятно и безопасно пользоваться: понятный обзор активов, простой обмен и ощущение защищённости.",
        "about.problem": "Кошелёк должен внушать доверие ещё до первого действия. Отсюда — светлая, воздушная тема, крупная спокойная типографика, мягкие формы и пастельные цвета как «цвета доверия» — язык, который снижает тревожность.",
        "about.myrole": "UI/UX: структура, визуальный язык, ключевые экраны и дизайн-система.",
        "facts.role": "Продуктовый дизайнер",
        "facts.timeline": "2 недели, 2025",
        "facts.platform": "Мобильные устройства",
        "facts.tools": "Figma"
      }
    },

    tranq: {
      en: {
        "meta.title": "Tranq — Web-app for travel planning | Eliza EGM",
        "meta.description": "To combine all stages of travel planning into one service: selection, itinerary, payment, and monitoring.",
        "hero.title": "Tranq — Web-app for travel planning",
        "hero.desc": "To combine all stages of travel planning into one service: selection, itinerary, payment, and monitoring. Focus on making users feel safe and as comfortable as possible, never overstimulated.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Travel",
        "hero.tag3": "Web app",
        "about.context": "To combine all stages of travel planning into one service: selection, itinerary, payment, and monitoring.",
        "about.problem": "Had to make sure to focus on making users feel safe and as comfortable as possible, never overstimulated, since planning is rather stressful activity, and tickets, accommodation, and entertainment are all across different services.",
        "about.myrole": "I managed the project through two branches. In UX, I analysed scenarios, conducted and processed interviews, gathered user flows and prototypes; in UI, I developed search, plan selection, and daily schedules. Both areas converge in a unified service flow.",
        "facts.role": "Product designer",
        "facts.timeline": "3 weeks, 2026",
        "facts.platform": "Web app, desktop-first",
        "facts.tools": "Figma"
      },
      ru: {
        "meta.title": "Tranq — веб-приложение для планирования путешествий | Eliza EGM",
        "meta.description": "Объединить все этапы планирования путешествия в одном сервисе: выбор, маршрут, оплату и отслеживание.",
        "hero.title": "Tranq — веб-приложение для планирования путешествий",
        "hero.desc": "Объединить все этапы планирования путешествия в одном сервисе: выбор, маршрут, оплату и отслеживание. Главная задача — чтобы пользователь чувствовал себя в безопасности и максимально комфортно, без перегрузки впечатлениями.",
        "hero.tag1": "UX / UI",
        "hero.tag2": "Путешествия",
        "hero.tag3": "Веб-приложение",
        "about.context": "Объединить все этапы планирования путешествия в одном сервисе: выбор, маршрут, оплату и отслеживание.",
        "about.problem": "Нужно было сделать так, чтобы пользователь чувствовал себя в безопасности и максимально комфортно, без перегрузки — ведь планирование само по себе довольно стрессовое занятие, а билеты, проживание и развлечения разбросаны по разным сервисам.",
        "about.myrole": "Я вела проект по двум направлениям. В UX — анализировала сценарии, проводила и обрабатывала интервью, собирала пользовательские сценарии и прототипы; в UI — прорабатывала поиск, выбор плана и расписание на день. Оба направления сходятся в едином сценарии сервиса.",
        "facts.role": "Продуктовый дизайнер",
        "facts.timeline": "3 недели, 2026",
        "facts.platform": "Веб-приложение, desktop-first",
        "facts.tools": "Figma"
      }
    },

    followlight: {
      en: {
        "meta.title": "Follow the Light | Eliza EGM",
        "meta.description": "A 3D promo visual concept for a crypto/NFT product, using a claw machine filled with regular toys as the core metaphor.",
        "hero.title": "Follow the Light",
        "hero.desc": "Create a 3D promo visual concept for a crypto/NFT product, using a claw machine filled with regular toys as the core metaphor.",
        "hero.tag1": "3D",
        "about.context": "“Follow The Light” sits at the seam between two moods that don't usually share a frame: the soft, huggable cast of toys behind the glass, and the cold, red-lit corridor around them. Neither one wins — the comfort of the prize pool is what makes the hallway feel wrong.",
        "about.myrole": "Full 3D production: modelling, texturing, light setting, postproduction.",
        "facts.role": "3D Designer",
        "facts.timeline": "1 week, 2026",
        "facts.platform": "Web, mobile, banners",
        "facts.tools": "Blender, Photoshop"
      },
      ru: {
        "meta.title": "Follow the Light | Eliza EGM",
        "meta.description": "Концепция 3D-промо-визуала для крипто/NFT-продукта: в основе — автомат с игрушками как ключевая метафора.",
        "hero.title": "Follow the Light",
        "hero.desc": "Концепция 3D-промо-визуала для крипто/NFT-продукта: в основе — автомат с игрушками, наполненный обычными мягкими зверятами, как ключевая метафора.",
        "hero.tag1": "3D",
        "about.context": "«Follow The Light» существует на стыке двух настроений, которые редко уживаются в одном кадре: мягкие, «обнимашечные» игрушки за стеклом — и холодный, залитый красным светом коридор вокруг них. Ни одно из них не побеждает: именно уют игрушечного мира делает коридор пугающим.",
        "about.myrole": "Полное 3D-производство: моделирование, текстурирование, настройка света, постпродакшн.",
        "facts.role": "3D-дизайнер",
        "facts.timeline": "1 неделя, 2026",
        "facts.platform": "Web, мобильные устройства, баннеры",
        "facts.tools": "Blender, Photoshop"
      }
    },

    zombiehand: {
      en: {
        "meta.title": "3D Modeling for online cinema | Eliza EGM",
        "meta.description": "A 3D illustration based on a sketch by the FeelFactory agency for the online cinema Ivi.",
        "hero.title": "3D Modeling for online cinema",
        "hero.desc": "Create a 3D illustration based on a sketch by the FeelFactory agency for the online cinema Ivi.",
        "hero.tag1": "3D",
        "about.context": "Create a 3D illustration based on a sketch by the FeelFactory agency for the online cinema Ivi. The illustration promotes offline downloads: a zombie hand rising from the ground, holding the number 15.",
        "about.context2": "The tagline — 15 hours offline is enough to survive the apocalypse.",
        "about.myrole": "Full 3D production: modelling, texturing, light setting, postproduction.",
        "facts.role": "3D Designer",
        "facts.timeline": "1 week, 2026",
        "facts.platform": "Mobile-first",
        "facts.tools": "Blender, Photoshop"
      },
      ru: {
        "meta.title": "3D-моделирование для онлайн-кинотеатра | Eliza EGM",
        "meta.description": "3D-иллюстрация по эскизу агентства FeelFactory для онлайн-кинотеатра Ivi.",
        "hero.title": "3D-моделирование для онлайн-кинотеатра",
        "hero.desc": "3D-иллюстрация по эскизу агентства FeelFactory для онлайн-кинотеатра Ivi.",
        "hero.tag1": "3D",
        "about.context": "3D-иллюстрация по эскизу агентства FeelFactory для онлайн-кинотеатра Ivi. Иллюстрация продвигает офлайн-загрузки: рука зомби поднимается из-под земли, держа цифру 15.",
        "about.context2": "Слоган — 15 часов офлайн-доступа достаточно, чтобы пережить апокалипсис.",
        "about.myrole": "Полное 3D-производство: моделирование, текстурирование, настройка света, постпродакшн.",
        "facts.role": "3D-дизайнер",
        "facts.timeline": "1 неделя, 2026",
        "facts.platform": "Мобильные устройства",
        "facts.tools": "Blender, Photoshop"
      }
    }
  };

  /* ---------------------------------------------------------
     Engine
  --------------------------------------------------------- */
  function getSavedLang() {
    try {
      return localStorage.getItem("site-lang") || "en";
    } catch (e) {
      return "en";
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {
      /* ignore */
    }
  }

  function getDict(lang) {
    var page = document.body.getAttribute("data-page");
    var shared = SHARED[lang] || {};
    var pageDict = (PAGES[page] && PAGES[page][lang]) || {};
    var merged = {};
    var key;
    for (key in shared) merged[key] = shared[key];
    for (key in pageDict) merged[key] = pageDict[key];
    return merged;
  }

  function updateSwitcherUI(lang) {
    document.querySelectorAll(".lang-switch").forEach(function (widget) {
      var label = widget.querySelector("[data-lang-current]");
      if (label) label.textContent = lang === "ru" ? "RU" : "ENG";
      widget.querySelectorAll("[data-lang]").forEach(function (opt) {
        var selected = opt.getAttribute("data-lang") === lang;
        opt.setAttribute("aria-selected", String(selected));
      });
    });
  }

  function applyLanguage(lang) {
    lang = lang === "ru" ? "ru" : "en";
    var dict = getDict(lang);

    document.documentElement.setAttribute("lang", lang);

    if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
    if (dict["meta.description"]) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-href");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("href", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-hide]").forEach(function (el) {
      var hideForLangs = el.getAttribute("data-i18n-hide").split(",").map(function (s) {
        return s.trim();
      });
      el.hidden = hideForLangs.indexOf(lang) !== -1;
    });

    startWordRotation(lang);
    saveLang(lang);
    updateSwitcherUI(lang);
  }

  function closeAllMenus() {
    document.querySelectorAll(".lang-switch__menu").forEach(function (menu) {
      menu.hidden = true;
    });
    document.querySelectorAll(".lang-switch__button").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getSavedLang());

    document.querySelectorAll(".lang-switch").forEach(function (widget) {
      var button = widget.querySelector(".lang-switch__button");
      var menu = widget.querySelector(".lang-switch__menu");
      if (!button || !menu) return;

      button.addEventListener("click", function (event) {
        event.stopPropagation();
        var isOpen = !menu.hidden;
        closeAllMenus();
        menu.hidden = isOpen;
        button.setAttribute("aria-expanded", String(!isOpen));
      });

      menu.querySelectorAll("[data-lang]").forEach(function (option) {
        option.addEventListener("click", function (event) {
          event.stopPropagation();
          applyLanguage(option.getAttribute("data-lang"));
          closeAllMenus();
        });
      });
    });

    document.addEventListener("click", closeAllMenus);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeAllMenus();
    });
  });
})();
