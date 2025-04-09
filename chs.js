/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "Activities": "活动",
    "Close": "关闭",
    "Got it!": "知道了！",
    "Electro Shards:": "电子碎片：",
    "Help & Settings": "帮助 & 设置",
    "Electronics Clicker": "电子点击器",
    "News": "新闻",
    "Previous": "上一个",
    "Next": "下一个",
    "Money:": "金钱:",
    "Junktown Nexus": "旧城枢纽",
    "Join our Discord community to share feedback and suggestions!": "加入我们的Discord社区来分享反馈和建议吧！",
    "Notifications": "通知",
    "Open Credit Store": "打开信用商店",
    "Open Crafting Menu": "打开制作菜单",
    "Open Skills Center": "打开技能中心",
    "Open Automation Center": "打开自动化中心",
    "Open Junk Store": "打开旧货商店",
    "Credit Store": "信用商店",
    "Crafting Menu": "制作菜单",
    "Skills Center": "技能中心",
    "Automation Center": "自动化中心",
    "Junk Store": "旧货商店",
    "Quest Log": "任务日志",
    "Progress": "进度",
    "Show More": "显示更多",
    "Slot Machine": "抽奖机",
    "Click on the junk pile to collect some scrap": "点击垃圾堆收集一些废料",
    "The Scraptagon 🔒": "",
    "Trash Clicker": "垃圾点击器",
    "What's New:": "新内容:",
    "Check the Changelog for more Information or join the Discord!": "查看更新日志获取更多信息或加入Discord！",
    "Click the junk, kid. Scrap doesn't collect itself.": "点击垃圾，孩子。废料不会自己收集起来。",
    "Do you love playing in the trash?": "你喜欢在垃圾堆里玩吗？",
    "Game Tips": "游戏提示",
    "Join Discord": "加入 Discord",
    "Junk:": "垃圾:",
    "Junk/sec:": "垃圾/秒:",
    "Open Electro Store": "打开电子商店",
    "✨ Tons of Bugfixes": "✨ 大量的bug修复",
    "✨ Tons of System Reworks": "✨ 大量的系统重做",
    "🔧 A tiny bit of new content": "🔧 一点点的新内容",
    "Show Less": "显示更少",
    "First Steps": "第一步",
    "Begin Crafting": "开始制作",
    "Early Progression": "早期进度",
    "Passive Income": "被动收入",
    "In unrelated news, the vending machine is humming ominously again.": "另一条不相关的新闻是，自动售货机又开始发出不祥的嗡嗡声了。",
    "Pizza delivery drones under fire for 'accidental' toppings": "送披萨的无人机因“意外”配料而遭到抨击",
    "Reminder: Do not lick the glowing circuits. Again.": "提醒：不要舔发光电路。再一次。",
    "Rumor: A scrap trader found a functioning toaster. Experts remain skeptical.": "谣言：一个废品商人发现了一个能用的烤面包机。专家们仍持怀疑态度。",
    "Streetrat spotted stealing capacitors again. Local bots unimpressed.": "街头老鼠又被发现偷电容器了。本地机器人对此无动于衷。",
    "That's the spirit. Go hit the Store. Buy somethin' useful for once.": "就是这种精神。去商店看看吧。买一些有用的东西。",
    "Trash surge insurance now available. Terms may apply.": "垃圾狂热保险现在可用。条款可以申请。",
    "Virtual cat cafes explode in popularity": "虚拟猫咪咖啡馆大受欢迎",
    "Visit the store and buy your first upgrade": "访问商店，购买你的第一个升级",
    "You have no one that loves you in this world": "你在这个世界上没有一个爱你的人",
    "Junk)": "垃圾)",
    "Owned:": "拥有:",
    "Show Notifications": "显示通知",
    "+2 Automatic Clicks per second (Consumes 1 Auto Clicker Bot)": "+2自动点击每秒（消耗1自动点击机器人）",
    "+1 Automatic Click per second (generates Junk automatically as if clicked by the player)": "+1自动点击每秒（自动生成垃圾，如果玩家点击）",
    "s remaining)": " 剩余)",
    "⚡ TRASH SURGE ACTIVE! (": "⚡ 垃圾狂热活跃!（",
    "⋯ In Progress": "⋯ 进行中",
    "⏛ What Are Capacitors?": "⏛ 什么是电容器？",
    "🔌 Tronics Clicker": "🔌 电子点击器",
    "Click Enhancer": "点击强化器",
    "⚡ TRASH SURGE ACTIVE! (": "⚡垃圾狂热！（",
    "⚡ TRASH SURGE: Junk overflow detected — grab it while it lasts!": "⚡垃圾狂热：垃圾溢出检测-抓住它，而它持续！",
    "⚡ What Are Electro Shards?": "⚡什么是电子碎片？",
    "✨ What Is The Flying Crystal?": "✨飞行水晶是什么?",
    "💡 Tip: Appears once every 30 minutes.": "💡提示：每30分钟出现一次。",
    "💡 Tip: Keep an eye on rare pickups — they matter more than you think.": "💡提示：关注那些稀有的拾取物——它们比你想象的更重要。",
    "💡 Tip: Keep an eye on rare pickups and hidden quest rewards — they matter more than you think.": "💡提示：关注稀有拾取物和隐藏任务奖励——它们比你想象的更重要。",
    "💡 Tip: Time your prestige carefully - make sure you've maximized your current run's potential first!": "💡提示：仔细安排你的声望-确保你已经最大化了你当前跑步的潜力！",
    "💡 Tip: Unlock the First Node or you WILL be STUCK.": "💡提示：解锁第一个节点，否则你将被卡住。",
    "💡 Unlocks new tech, ElectroShop items, and advanced systems post-prestige": "💡解锁新技术，电子商店物品，和先进的系统后声望",
    "💡 What Is The Tech Tree?": "💡什么是科技树？",
    "📈 Benefits from Tronics per Click upgrades": "📈受益于电子每次点击升级",
    "🔁 How Prestige Works": "🔁声望如何运作",
    "🔌 Generates 1 Tronic per click": "🔌每次点击产生1 Tronic",
    "A glorified toaster tuned to the shard frequency. Hums when it works.": "一个调谐到碎片频率的烤面包机。工作时发出嗡嗡声。",
    "A massive holographic display that attracts more scrappers to your territory": "一个巨大的全息显示器，吸引更多的拳击手到你的领土",
    "A mysterious figure was seen whispering to a pile of wires.": "有人看见一个神秘的人影对着一堆电线耳语。",
    "A sturdy bag that helps you collect more junk with each click": "一个坚固的袋子，帮助你收集更多的垃圾与每点击",
    "Accumulate 10,000 Junk": "堆积1万件垃圾",
    "Ask about crystal shards": "询问水晶碎片",
    "Automated system that processes urban waste into valuable junk": "将城市垃圾加工成有价值的垃圾的自动化系统",
    "Autonomous drone that scans the area for valuable junk": "自动无人机扫描该区域寻找有价值的垃圾",
    "Average JPS:": "平均译本:",
    "Badges": "徽章",
    "Can be rarely found during normal Surges and more commonly in Tronics Surges.": "在正常狂热中很少发现，而在电子狂热中更常见。",
    "Channel unstable energy into the system — one click at a time.": "通道不稳定的能量进入系统-点击一次。",
    "Circuit Pulse Mastery": "电路脉冲掌握",
    "Click Upgrades": "点击升级",
    "Cogfather: If it's buzzing, it's working. If it's sparking, it's improving.": "教父：如果它嗡嗡作响，它就在工作。如果它有火花，它就在改善。",
    "Cogfather's First Secret": "教父的第一个秘密",
    "Cogfather's Tip: If it's buzzing, it's working. If it's sparking, it's improving.": "教父的建议：如果它嗡嗡作响，它就在工作。如果它有火花，它就在改善。",
    "Collect 1,000 Junk": "收集1000个垃圾",
    "Collect 10 Electro Shards": "收集10个电子碎片",
    "Collect 5 Electro Shards": "收集5个电子碎片",
    "Collect it before it vanishes to gain 1 Electro Shard.": "在它消失之前收集它可以获得1个电子碎片。",
    "Collect special resources": "收集特殊资源",
    "Complete the Ascension Questline": "完成转生任务线",
    "Cosmetic Badge": "化妆品的徽章",
    "Craft special quest items (like the Prestige Crystal)": "制作特殊任务道具（如声望水晶）",
    "Craft the Prestige Crystal": "制作声望水晶",
    "Crystal Time Reduction:": "晶体时间减少：",
    "Cybernetic finger enhancements for maximum clicking efficiency": "控制手指增强最大的点击效率",
    "Don't forget to oil your clicker. Rust is a liar.": "别忘了给遥控器上油。生锈是一个骗子。",
    "Electro Shard Milestones": "电子碎片里程碑",
    "Electro Shards are a rare, high-tier resource used to power advanced systems. They are primarily required to:": "电子碎片是一种稀有的高级资源，用于为高级系统提供动力。他们主要需要：",
    "Electro Shards can be acquired through:": "电子碎片可以通过以下方式获得：",
    "Electromagnetic device that attracts valuable junk automatically": "自动吸引贵重垃圾的电磁装置",
    "Electroshard miner v0.1 (Premium Junk Upgrade)": "电碎片矿工v0.1（高级垃圾升级）",
    "Enable HoloBillboard": "启用全息广告牌",
    "Ever felt the hum of the city? There's power in the ether, waiting to be harnessed.": "感受过城市的喧嚣吗？以太中有力量，等着被利用。",
    "First Ascension": "第一次转生",
    "Global JPS Multiplier:": "全局垃圾每秒产量（JPS）倍增器：",
    "Greasy Milestone": "油腻的里程碑",
    "Hide": "隐藏",
    "Hire a local to automatically collect junk for you": "雇一个当地人帮你自动收集垃圾",
    "Holo Billboard": "整体的广告牌",
    "How to Unlock Prestige:": "如何解锁声望：",
    "How's business?": "业务怎么样?",
    "Junk +": "垃圾+",
    "Junk futures hit an all-time high — economists baffled.": "垃圾期货创下历史新高，经济学家们感到困惑。",
    "Junk Magnet": "垃圾磁铁",
    "Junk Slots": "垃圾抽奖机",
    "Junkie Starter": "废品新手！",
    "Keep collecting and upgrading your tools": "继续收集和升级你的工具",
    "Large capacity cart that greatly increases automatic collection": "大容量推车，大大增加自动收集",
    "Local helper union demands one less bolt per day.": "当地帮工工会要求每天减少一个螺栓。",
    "m": "分钟",
    "Max Click Enhancers": "最大点击增强器",
    "Max Visible Drones": "最大可见无人机",
    "Most inventory items and crafting materials": "大多数库存物品和制作材料",
    "New study finds clicking improves morale. Source: the clicker industry.": "新研究发现，点击可以提高士气。来源：点击器行业。",
    "Next surge in:": "下一个狂热：",
    "Now you're hoarding like a real scavver.": "现在你像个真正的拾荒者一样囤东西了。",
    "Passive Upgrades": "被动的升级",
    "Passively generates 1 Electro Shard every 30 minutes, up to a max of 3 stored.": "被动地每30分钟产生1个电子碎片，最多可储存3个。",
    "Power outage in Sector 3 traced back to an overclocked potato battery.": "第三区停电是因为土豆电池超频。",
    "Pre-Prestige": "前声望",
    "Premium": "高级",
    "Premium Items": "高级物品",
    "Prestige-exclusive upgrades and bonuses": "声望专属升级和奖励",
    "Prestiging is a major reset that wipes most of your progress in exchange for unlocking permanent upgrades and access to powerful new systems.": "声望是一个主要的重置，抹去你的大部分进度，以换取永久升级和访问强大的新系统。",
    "Professional tool that triples your junk collection efficiency": "专业的工具，三倍你的垃圾收集效率",
    "Purchase powerful ElectroShop upgrades": "购买强大的电器商店升级",
    "Purchase something that generates passive income": "购买一些能产生被动收入的东西",
    "Rare floating pickups": "稀有浮动拾取物",
    "Reach 1 million Junk": "垃圾达到100万",
    "Reach 1 million junk to unlock the path to prestige": "达到100万个垃圾可以解锁通往声望的道路",
    "Reach 10 Junk/sec": "达到10垃圾/秒",
    "Required for advanced crafting and system upgrades.": "需要高级制作和系统升级。",
    "Requirement:": "要求:",
    "Reset All Progress": "重置所有进度",
    "Reset Progress": "重置进展",
    "Reward:": "奖励:",
    "Robot uprising delayed due to a firmware bug. Carry on.": "由于固件错误，机器人起义延迟。继续工作。",
    "Scrap Bag": "废料袋",
    "Scrap Cores)": "废料核心)",
    "Scrap Drone": "废无人机",
    "Select quests": "选择任务",
    "Shard Miner": "碎片矿工",
    "Shopping Cart": "购物车",
    "Shopping Time": "购物时间",
    "Show Click Enhancer Effect": "显示单击增强器效果",
    "Show Drones": "显示无人机",
    "Show Hover Drone": "显示悬停无人机",
    "Show News Ticker": "显示新闻",
    "Show Shard Beacon": "显示碎片信标",
    "Special crafting recipes Post Prestige": "特殊的工艺配方后声望",
    "Special resources unlocked post-prestige": "特殊资源解锁后声望",
    "Spend your first Ascension Token here to begin your tech evolution. More nodes unlock advanced upgrades and passive systems.": "在这里花费你的第一个提升令牌来开始你的技术进化。更多的节点解锁高级升级和被动系统。",
    "Spin (": "旋转(",
    "Start crafting items from your collected junk": "从你收集的垃圾中开始制作物品",
    "Stats": "统计数据",
    "Stay hydrated. Especially if you're 60% copper wiring.": "保持水分。特别是如果你60%是铜线。",
    "Stays visible for 5 minutes. Don’t blink — missing one slows your tech progress.": "保持可见5分钟。不要眨眼——错过一个会减慢你的科技进步。",
    "Streetrat": "街头老鼠",
    "Surge Rider": "骑手飙升",
    "Take advantage of the surge to collect extra junk": "利用狂热收集额外的垃圾",
    "Tell me about the city": "给我讲讲这个城市吧",
    "That mouse is starting to look worn...": "那只鼠标看起来有点破旧了……",
    "The city council votes to rename Junk Street to Slightly-Less-Junk Street.": "市议会投票将旧货街改名为稍少旧货街。",
    "The Cogfather": "齿轮之父",
    "The electro shard vanished into the void...": "电子碎片消失在虚空中……",
    "The First Clicks": "第一次点击",
    "The First Hoard": "第一批窖藏",
    "The first node is mandatory it unlocks the Tronics Clicker, which is core to late-game systems like ElectroShop, Credit Store, and more.": "第一个节点是强制性的，它可以解锁电子点击器，这是游戏后期系统的核心，如 电子商店、信用商店等。",
    "The flow of scrap never stops in this city. Always something to salvage, always something to trade.": "这个城市的废品源源不断。总有东西可以抢救，总有东西可以交易。",
    "The gears are turning smoothly now.": "齿轮现在运转得很顺利。",
    "The shards sing with electric potential.": "这些碎片带着电位歌唱。",
    "The system can't handle your power!": "系统无法承受你的力量！",
    "The truth lies in fragments of crystal and code.": "真相隐藏在水晶和密码的碎片中。",
    "Their availability increases after your first Prestige, but limited ways to earn them exist earlier in the game.": "在你获得第一个声望后，它们的可用性会增加，但在游戏早期获得它们的方式有限。",
    "This place... it's a living, breathing machine. Every piece of scrap has a story, every alley a secret.": "这个地方……它是一个活生生的呼吸机器。每一片废铁都有一个故事，每一条小巷都有一个秘密。",
    "Times Prestiged:": "声望次数:",
    "Tool Master": "工具大师",
    "Total Clicks:": "总点击:",
    "Trash bonus crashed and disappeared!": "垃圾奖励崩溃并消失了！",
    "Trash Picker": "垃圾选择器",
    "Trash Surges Completed:": "垃圾狂热完成：",
    "UI Breaker": "UI断路器",
    "Unlock Ascension Protocol": "解锁转生协议",
    "Unlock Cogfather's Lore Entry #001": "解锁齿轮之父的物语入口#001",
    "Unlocked systems (like the ElectroShop)": "已解锁的系统（如电子商店）",
    "Unlocks the Ascension Protocol Questline": "解锁转生协议任务线",
    "Urban Recycler": "城市的回收商",
    "Validate Achievements": "验证成就",
    "Warning: This will permanently delete all your progress!": "警告：这将永久删除您的所有进度！",
    "What Do You Keep?": "你会保留什么？",
    "What Does Prestige Reset?": "什么是声望重置？",
    "Your First Trash Surge": "第一次垃圾狂热",
    "Your Junk, upgrades, helpers, and quest progress": "你的垃圾，升级，助手和任务进度",
    "Your pile of junk is becoming impressive...": "你那堆垃圾越来越令人印象深刻了……",
    "Your scrap might be valuable. Somewhere. To someone. Probably.": "你的废料可能很值钱。在某处。的人。可能。",
    "+1 Junk/Click, +10% Cost per purchase": "+1垃圾/点击，+10%成本每次购买",
    "Tool Master - Received 1x Electro Shard!": "工具大师 - 收到 1x 电子碎片！",
    "Upgrades, huh? Shiny tools for dirty jobs.": "升级，是吧？干脏活的闪亮工具。",
    "A basic power core made from scrap": "一种由废料制成的基本动力核心",
    "UI Breaker!": "UI破坏者！",
    "Auto Toolkit": "汽车工具箱",
    "Basic conductive material": "基本导电材料",
    "Basic Materials": "基本材料",
    "Capacitor": "电容器",
    "Click Rig Mk": "点击钻机 Mk",
    "Compression Pack": "压缩包",
    "Cost:": "成本:",
    "Craftable Items": "可制作物品",
    "Crafting Station": "制作站",
    "Energy storage device": "能量储存装置",
    "Gear Bits": "齿轮钻头",
    "Increases Auto Click efficiency by 25%": "增加25%的自动点击效率",
    "Increases click power by 25%": "点击能力提升25%",
    "Increases Junk/sec by 25%": "每秒增加垃圾25%",
    "Increases Trash Surge duration from 5s → 10s": "垃圾潮持续时间从5秒→10秒",
    "Junk": "垃圾",
    "Mechanical components": "机械部件",
    "Metal Plates": "金属板",
    "owned)": "拥有的)",
    "Reduces cost scaling by 1% permanently": "永久降低成本比例1%",
    "Reinforced Backpack": "加固背包",
    "Requirements:": "要求:",
    "Scrap Core": "废弃的核心",
    "Sturdy metal sheets": "坚固的金属板",
    "Surge Capacitor Module": "狂热电容模块",
    "Wires": "电线",
    "Training": "训练",
    "Train": "训练",
    "XP": "经验值",
    "Sell": "出售",
    "Effect: +": "效果: +",
    "% Junk per Click": "% 垃圾每次点击",
    "💲 Basic Exchange": "💲 基础转换",
    "-10% crafting costs on basic recipes An efficient processing unit that optimizes your crafting operations. One-time purchase.": "一个有效的加工单位，可以优化你的制造操作。一次性购买。",
    "\"Eyes sharp, hands faster.\"": "“眼睛敏锐，手更快。”",
    "⚡ Electro Shard Beacon": "⚡电子碎片信标",
    "💲 Bulk Exchange (10x)": "💲大宗交易（10倍）",
    "💲 Mass Exchange (100x)": "💲海量交换（100x）",
    "🚁 Hover Drone Addon": "🚁悬停无人机插件",
    "A mysterious device that creates an electromagnetic field, attracting Electro Shards more frequently.": "一个能产生电磁场的神秘装置，能更频繁地吸引电子碎片。",
    "Ascension Reclaimer": "提升回收装置",
    "Crafting Booster Unit": "锻造助推器",
    "Current beacons:": "当前的信号:",
    "Floating Trash lasts +5s longer before disappearing A sleek aerial companion that helps extend the lifespan of floating trash bonuses. One-time purchase.": "一个光滑的空中伴侣，可以帮助延长漂浮垃圾加成的寿命。一次性购买。",
    "Junk for 1 Credit Convert your excess junk into valuable credits at the standard exchange rate. Perfect for small transactions.": "按标准汇率将你多余的垃圾转换成有价值的信用。非常适合小额交易。",
    "Junk for 10 Credits A more efficient way to exchange larger amounts of junk. Save time by converting in bulk!": "这是一种更有效的交换大量垃圾的方式。通过批量转换节省时间！",
    "Junk for 100 Credits The ultimate exchange option for serious junk collectors. Perfect for large-scale operations.": "这是严肃的垃圾收集者的终极交换选择。适合大规模操作。",
    "Keep 1 random helper or crafting bonus after Prestige. Energy shield technology that preserves automation through ascension. Can be purchased twice. (": "声望后保留1个随机助手或制造奖励。通过提升保存自动化的能量屏蔽技术。可以购买两次。（",
    "Reduces Electro Shard spawn cooldown by 1% (Max 10)": "减少电子碎片的冷却时间1%（最多10次）",
    "Scavenging Focus": "清除焦点",
    "Stack up to 10 beacons for a maximum 10% reduction in spawn time.": "最多堆叠10个信标，最多减少10%的刷出时间。",
    "Crystal shard collected!": "水晶碎片已收集！",
    "The Circuit Speaks": "巡回演讲",
    "The circuit's secrets are revealed. Received: 1x Voltage Node": "电路的秘密被揭开了。收到：1x 电压节点",
    "\"The pile works harder when you do.\"": "\“当你这样做的时候，那堆东西工作起来更努力。”",
    "Grease Discipline": "油脂纪律",
    "% Junk/sec": "% 垃圾/秒",
    "✨ 10x Purchase Option Junk Store only": "✨ 10x购买选项仅限垃圾商店",
    "✨ Code Refactoring": "✨ 代码重构",
    "🔧 Some Bugfixes": "🔧 一些错误修复",
    "Automation": "自动化",
    "Automation Upgrades": "自动化升级",
    "\"Built from a broken microwave and spite.\"": "“用坏了的微波炉和怨恨造出来的。”",
    " v2.0 – Upgraded to 2 clicks/sec. Now 12% less annoying.": " v2.0 -升级到2点击/秒。现在少了12%的烦恼。",
    "✓ Completed": "✓ 已完成",
    "🖥️ Big Slots": "🖥️ 大抽奖机",
    "Bigger reels. Bigger risks. Bigger... maybe wins?": "更大的卷。更大的风险。更大的……也许会赢？",
    "Now with 50% more screen real estate... and danger. Enlarges the slot machine window and improves visual feedback. Cost per spin: 1,000,000 Junk": "现在屏幕面积增加了50%…和危险。扩大抽奖机窗口，提升视觉效果。每次旋转消耗：1,000,000垃圾",
    "Luck Engine": "幸运引擎",
    "Glitched Scrap Core": "废铁芯故障",
    "Allows you to purchase Auto Slotter and Ultimate Slots": "允许您购买自动抽奖机和终极抽奖机",
    "Automation Punk": "自动化朋克",
    "Become a gambler": "成为一个赌徒",
    "Buy the Big Slot Machine": "购买一个大抽奖机",
    "Gambling Addiction": "抽奖成瘾",
    "Tired of clicking? Buy 10 Autoclickers!": "厌倦了点击？购买10个自动点击器！",
    "“A rare fragment pulsing with unstable energy.”": "“一个罕见的碎片带着不稳定的能量脉冲”",
    "“Stores unstable surge energy in a compact form.”": "“以紧凑型形式储存不稳定脉冲能量。”",
    "“Unlock the circuits of progression.”": "“解锁进程回路。”",
    "Appears once every 30 minutes.": "每30分钟出现一次。",
    "Keep an eye on rare pickups — they matter more than you think.": "留意稀有的拾取物——它们比你想象的更重要。",
    "Keep an eye on rare pickups and hidden quest rewards — they matter more than you think.": "留意稀有拾取物和隐藏任务奖励——它们比你想象的更重要。",
    "Time your prestige carefully - make sure you've maximized your current run's potential first!": "小心地给你的声望计时——首先要确保你最大限度地发挥了你当前的潜力！",
    "Unlock the First Node or you WILL be STUCK.": "解锁第一个节点，否则你将被卡住。",
    "Hire your first helper to collect junk for you": "佣你的第一个帮手来帮你收集垃圾",
    "Look at you, hiring help already. Streetrat's got your back… kinda.": "看看你，已经开始雇人了。街头老鼠是你的后盾……算是吧。",
    "Passive income, baby. That's how the old dogs roll.": "被动收入，宝贝。老狗就是这样打滚的。",
    "Streetrat hired!": "雇佣街头老鼠！",
    "Surge Overflow": "狂热溢流",
    "You got more junk than sense. Time to start makin' things.": "你的垃圾比理智还多。是时候开始做点什么了。",
    "🎮 UI Settings": "🎮 UI设置",
    "Clicking": "点击",
    "Counters": "计数器",
    "Multipliers": "乘数",
    "Others": "其他",
    "Enable Trash Pickup": "启用垃圾拾取",
    "Permanent AutoClicks:": "永久自动点击：",
    "Reset UI Positions": "重置UI位置",
    "Show Autoclickers": "显示自动点击器",
    "Show Changelog": "显示更新日志",
    "Total Tronics Clicks:": "总计电子点击：",
    "Greasy Milestone!": "油腻里程碑！",
    "Junkie Starter!": "废品新手!",
    "The First Clicks!": "初次点击!",
    "JUNK EMPIRE": "垃圾帝国",
    "Scrap Happens.": "废料发生。",
    "Upgrade now. Regret later.": "现在升级。以后会后悔的。",
    " v2.0 purchased! (Consumed 1 Auto Clicker Bot)": "V2.0已购买！（消耗1个自动点击机器人）",
    "Advertise Here—Or Don't, Nobody Reads Anyway.": "在这里做广告——或者不做，反正没人看。",
    "Breaking News: Everything Still Broken.": "突发新闻：一切仍然支离破碎。",
    "Cogfather Approved (Kinda).": "教父同意了（有点同意）。",
    "Eat. Sleep. Scrap. Repeat.": "吃。睡觉。废料。重复。",
    "Holo Billboard Online – City scrappers stare in awe (+10% Junk/sec globally)!": "全息广告牌上线-城市拾荒者肃然起敬（全球每秒增加10%垃圾）！",
    "Neon Dreams, Rusty Realities.": "霓虹的梦境，生锈的现实。",
    "Powered by Junk. Fueled by Regret.": "由垃圾驱动。以遗憾为动力。",
    "Robots Click Better.": "机器人的点击效果更好。",
    "Scrap Drone Deployed – +25 JPS": "报废无人机上阵 - +25 每秒垃圾产量（JPS）",
    "Touch grass? WE DON’T HAVE GRASS! Here, touch this junk instead.": "摸草？我们没有草！来，摸一下这个垃圾。",
    "Your Junk, Our Treasure.": "你的垃圾，我们的财富。",
    "Ascension Protocol": "转生协议",
    "Automation Punk - Received +1 Permanent AutoClick!": "自动化朋克 - 收到 +1 永久自动点击！",
    "Collect 10 Lore Logs or reach 12.5M Junk": "收集 10 传说日志 或达到 12.5M 垃圾",
    "Collect 4 Electro Shards": "收集4个电子碎片",
    "Forge the Future": "铸就未来",
    "Trigger 3 Trash Surges": "触发3次垃圾狂热",
    "Unlocks Ascension": "解锁转生",
    "Whispers in the Scrap": "废料中的低语",
    "Crafted Metal Plates!": "制作了金属板！",
    "Crafted Gear Bits!": "制作了齿轮钻头！",
    "Crafted Wires!": "制作了电线！",
    "Open Quest Log": "打开任务日志",
    "Prestige": "声望",
    "Prestige Ready": "声望就绪",
    "A million pieces of junk? Now that's what I call a beautiful mess. Check your quest log, kid - you're ready for bigger things.": "一百万件垃圾？现在这就是我所说的一个美丽的混乱。检查你的任务日志，孩子——你准备好迎接更大的任务了。",
    "Whoa! You feel that surge? The pile's gone wild!": "哇!你感觉到了吗？堆得乱七八糟！",
    "You've accumulated enough junk to attempt a Prestige!": "你已经积累了足够的垃圾，来尝试一次声望！",
    "Is there more to this life than collecting junk?": "除了收集垃圾，这辈子还有别的事吗？",
    "You've scraped the surface, kid… but there's a bigger circuit to plug into. I'll update your quest log with new information. Come back stronger — I'll be waiting.": "你只触及了表面，孩子……但还有更大的电路要插进去。我会用新的信息更新你的任务日志。回来的时候更强壮——我会等着你。",
    "Auto Click efficiency increased by 25%!": "自动点击效率提高了25%！",
    "Click power increased by 25%!": "点击力量提升25%！",
    "Crafted Auto Toolkit!": "制作了自动工具箱！",
    "Crafted Click Rig Mk I!": "制作了点击钻机Mk I！",
    "Crafted Compression Pack!": "制作了压缩包！",
    "Crafted Scrap Core!": "制作了废料核心！",
    "Crafted Prestige Crystal!": "制作了声望水晶！",
    "Open Item Inventory": "打开物品库存",
    "Passive income increased by 25%!": "被动收入增加了25%！",
    "A perfectly stabilized energy storage unit": "一个完全稳定的能量存储单元",
    "Advanced clicking mechanism": "高级点击机制",
    "Advanced storage solution": "高级存储解决方案",
    "Ascension Components": "提升组件",
    "Collection of automated tools": "自动化工具集合",
    "Components & Resources": "组件和资源",
    "Crafted Equipment": "制造装备",
    "Enhanced Gear": "强化齿轮",
    "Item Inventory": "物品库存",
    "Required for advanced tech progression": "需要高级技术进展",
    "Special Materials": "特殊材料",
    "Stabilized Capacitor": "稳定的电容器",
    "Used in advanced crafting": "用于高级制作",
    "Used in basic crafting": "用于基础制作",
    "- Junk:": "- 垃圾:",
    "💎 Prestige Crystal": "💎 声望水晶",
    "Mysterious": "神秘",
    "Mysterious Items": "神秘物品",
    "Maximum beacons reached!": "已达到信标上限！",
    "A mysterious crystal pulsing with otherworldly power": "一个神秘的水晶，有着超凡脱俗的力量",
    "The Prestige System has been unlocked!": "声望系统已解锁！",
    "/sec": "/秒",
    "• Access to the Tech Tree": "•科技树的使用权",
    "• All Junk": "•所有垃圾",
    "• All Store Items": "•所有商店物品",
    "• Auto Clickers": "•自动点击器",
    "• Click Enhancers": "•点击增强器",
    "• Click Power": "•点击威力",
    "• Item Costs": "•项目成本",
    "• Passive Income": "•被动收入",
    "Auto Clicks:": "自动点击:",
    "Click Enhancer Level:": "点击增强器等级：",
    "Click Power:": "点击力量:",
    "Confirm Prestige": "确认声望",
    "Current Progress": "当前进度",
    "Passive Income:": "被动收入:",
    "Prestige Confirmation": "声望确认",
    "The following will be reset:": "以下内容将被重置：",
    "You will receive:": "您将收到：",
    "Energy Shielded Helpers": "能源保护助手",
    "Preserved Helper": "保存助手",
    ", Auto Clicker Bot": ", 自动点击器机器人",
    "Circuit Pulse Mastery!": "电路脉冲精通！",
    "Heavy-duty storage pack": "重型储物包",
    "High-powered energy distributor": "高能能量分配器",
    "Mysterious technological artifact": "神秘的科技产物",
    "Purpose unknown": "目的不明",
    "Required for network upgrades": "网络升级需要",
    "Synthcore Fragment": "合成核心片段",
    "Voltage Node": "电压节点",
    "Tech Tree": "科技树",
    "Tronics:": "电子:",
    "Tronics/sec:": "电子/秒:",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "s": "秒",
    "🔒": "🔒",
    "🔓": "🔓",
    "(": "(",
    ")": ")",
    "×": "×",
    "🛡️": "🛡️",
    "🔧": "🔧",
    "⚡": "⚡",
    "⚙️": "⚙️",
    "💠": "💠",
    "📦": "📦",
    "🔋": "🔋",
    "🔌": "🔌",
    " 🔒": " 🔒",
    "🎒": "🎒",
    "💎": "💎",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Task: ": "任务: ",
    "The Scraptagon": "废料",
    "🎮 New Version Available: ": "🎮 新版本可用: ",
    "Quest Completed: ": "任务已完成: ",
    "Auto Clicker Bot": "自动点击机器人",
    "💡 Tip: ": "💡 提示: ",
    "🔧 IdlePunks – Update Log ": "🔧 朋克放置2077 – 更新日志 ",
    "Achievement Unlocked: ": "成就解锁：",
    "- Stabilized Capacitor: ": "- 稳定的电容器: ",
    "- Synthcore Fragment: ": "- 合成核心片段: ",
    "- Voltage Node: ": "- 电压节点: ",
    "⚡ x": "⚡ x",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    " Automatic Click per second (counts towards manual clicks)": " 自动点击每秒（计数到手动点击）",
    " Scrap Cores": " 废料核心",
    " purchased!": " 已购买!",
    " Permanent Autoclick": " 永久自动点击",
    " Junk)": " 垃圾)",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^v([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^✅ Added(.+)$/,
    /^✅ Fixed(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)mil$/,
    /^([\d\.]+) mil$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)b$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Collected (.+) bonus junk!$/, '收集 $1 奖励垃圾！'],
    [/^Click (.+) times$/, '点击 $1 次'],
    [/^Congratulations! You won (.+) Junk!$/, '恭喜! 你获得了 $1 垃圾!'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+([\d\.]+)\% Click Power$/, '\+$1\% 点击力量'],
    [/^\+([\d\.]+)\% global JPS$/, '\+$1\% 全局 垃圾每秒（JPS）'],
    [/^\+([\d\.]+)\% global Junk\/sec boost$/, '\+$1\% 全局 垃圾每秒 提升'],
    [/^\+([\d\.]+)\% JPS \(([\d\.,]+)s\)$/, '\+$1\% 垃圾每秒（JPS）($2 秒)'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Credits$/, '$1 信用点'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Credit$/, '$1 信用点'],
    [/^([\d\.,]+) Junk$/, '$1 垃圾'],
    [/^• ([\d\.,]+) Prestige Token$/, '• $1 声望代币'],
    [/^Collected ([\d\.,]+) Electro Shards!$/, '收集了 $1 电子碎片！'],
    [/^Sold ([\d\.,]+) junk for ([\d\.,]+) credits!$/, '出售 $1 垃圾换取 $2 信用点！'],
    [/^\+([\d\.,]+) Auto Click\/sec$/, '\+$1 自动点击/秒'],
    [/^\+([\d\.,]+) Junk$/, '\+$1 垃圾'],
    [/^\+([\d\.,]+) Junk\/Click, (.+) Cost$/, '\+$1 垃圾/点击, $2 成本'],
    [/^\+([\d\.,]+) Junk\/sec, (.+) Cost$/, '\+$1 垃圾/秒, $2 成本'],
    [/^([\d\.,]+)x Electro Shard$/, '$1x 电子碎片'],
    [/^([\d\.,]+)x Stabilized Capacitor$/, '$1x 稳定的电容器'],
    [/^([\d\.,]+)x Synthcore Fragment$/, '$1x 合成核心片段'],
    [/^([\d\.,]+)x Voltage Node$/, '$1x 电压节点'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Received: (.+) Stabilized Capacitor$/, '收到：$1 稳定的电容器'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);