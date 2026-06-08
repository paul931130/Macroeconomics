const chapters = [
  {
    id: "ch9",
    title: "CH9",
    name: "Economic Fluctuations",
    tagline: "先判斷短期還是長期",
    bullets: [
      "長期價格有彈性，產出由資本、勞動、技術決定。",
      "短期價格僵固，產出與就業會受總需求影響。",
      "AD 可用 MV = PY 理解：M 或 V 上升會讓 AD 右移。",
      "不利供給衝擊會造成 P 上升、Y 下降，也就是停滯性通膨。"
    ],
    formula: "Okun: 1 pp unemployment gap ≈ 2% GDP loss",
    exam: "AD-AS 圖、行動支付、油價衝擊、leading indicators。"
  },
  {
    id: "ch10",
    title: "CH10",
    name: "Building IS-LM",
    tagline: "先從支出線與貨幣市場推曲線",
    bullets: [
      "Keynesian cross：E = C(Y-T)+I+G，均衡條件 Y = E。",
      "G multiplier = 1/(1-MPC)，T multiplier = -MPC/(1-MPC)。",
      "IS 是 goods market equilibrium，r 下降會使 I 與 Y 上升。",
      "LM 是 money market equilibrium，Y 上升會提高 money demand，r 必須上升。"
    ],
    formula: "IS: Y=C(Y-T)+I(r)+G｜LM: M/P=L(r,Y)",
    exam: "Assignment 3 大量選擇題；balanced-budget multiplier 必背。"
  },
  {
    id: "ch11",
    title: "CH11",
    name: "Applying IS-LM",
    tagline: "曲線移動後要講 crowding out",
    bullets: [
      "G 上升或 T 下降使 IS 右移，Y 上升、r 上升。",
      "M 上升使 LM 右移，r 下降、I 上升、Y 上升。",
      "P 上升使 M/P 下降，LM 左移，因此 AD 向下傾斜。",
      "Great Depression 可用 IS 左移、貨幣收縮、通縮效果三組論點回答。"
    ],
    formula: "P↑ → M/P↓ → LM left → r↑ → I↓ → Y↓",
    exam: "赤字下降搭配央行擴張、Fed 升息、AD 推導。"
  },
  {
    id: "ch12",
    title: "CH12",
    name: "Mundell-Fleming",
    tagline: "先確認浮動或固定匯率",
    bullets: [
      "小型開放經濟且資本完全移動：r = r*。",
      "浮動匯率下，貨幣政策有效，財政政策無效。",
      "固定匯率下，財政政策有效，貨幣政策無法獨立。",
      "risk premium θ 上升通常造成資本外流與本幣貶值。"
    ],
    formula: "IS*: Y=C(Y-T)+I(r*)+G+NX(e)｜LM*: M/P=L(r*,Y)",
    exam: "政策矩陣、beggar-thy-neighbor、trade policy economic illiteracy。"
  },
  {
    id: "ch13",
    title: "CH13",
    name: "AS and Phillips Curve",
    tagline: "通膨預期是整章關鍵",
    bullets: [
      "三個 AS 模型共同得到：Y = Ybar + α(P - Pe)。",
      "Phillips curve：π = πe - β(u-un) + ν。",
      "adaptive expectations 造成 inflation inertia。",
      "可信政策可降低 πe，使 disinflation 的 sacrifice ratio 變小。"
    ],
    formula: "GDP loss = disinflation × sacrifice ratio",
    exam: "犧牲率、Volcker、credible announcement、hysteresis。"
  }
];

const formulas = [
  {
    title: "Keynesian Cross",
    code: "E = C(Y - T) + I + G\nY = E\nG multiplier = 1 / (1 - MPC)\nT multiplier = -MPC / (1 - MPC)"
  },
  {
    title: "IS-LM",
    code: "IS: Y = C(Y - T) + I(r) + G\nLM: M/P = L(r, Y)\nP↑ -> M/P↓ -> LM left -> r↑ -> I↓ -> Y↓"
  },
  {
    title: "Mundell-Fleming",
    code: "r = r*\nIS*: Y = C(Y-T) + I(r*) + G + NX(e)\nLM*: M/P = L(r*, Y)\ne↑ = 本幣升值, NX↓"
  },
  {
    title: "Aggregate Supply",
    code: "Y = Ybar + α(P - Pe)\nP > Pe -> Y > Ybar\nP < Pe -> Y < Ybar"
  },
  {
    title: "Phillips Curve",
    code: "π = πe - β(u - un) + ν\nπe↑ or ν↑ -> SRPC upward\nu < un -> inflation pressure"
  },
  {
    title: "Sacrifice Ratio",
    code: "GDP loss = disinflation × sacrifice ratio\nOkun: 1 pp unemployment gap ≈ 2% GDP loss"
  }
];

const policies = {
  floating: [
    {
      title: "財政擴張",
      movement: "IS* 右移",
      e: "e ↑ 升值",
      y: "Y 不變",
      notes: ["NX 被升值排擠", "小型開放經濟下財政政策無法改變產出"]
    },
    {
      title: "貨幣擴張",
      movement: "LM* 右移",
      e: "e ↓ 貶值",
      y: "Y ↑",
      notes: ["貶值提高 NX", "短期刺激產出的首選政策"]
    },
    {
      title: "進口限制",
      movement: "IS* 右移",
      e: "e ↑ 升值",
      y: "Y 不變",
      notes: ["NX 不改善", "進口與出口都下降，損失貿易利益"]
    }
  ],
  fixed: [
    {
      title: "財政擴張",
      movement: "IS* 右移",
      e: "e 固定",
      y: "Y ↑",
      notes: ["央行賣本幣/買外幣", "M 上升，LM* 右移"]
    },
    {
      title: "貨幣擴張",
      movement: "LM* 想右移",
      e: "e 固定",
      y: "Y 不變",
      notes: ["央行必須買本幣/賣外幣", "M 被回收，LM* 回原位"]
    },
    {
      title: "進口限制",
      movement: "IS* 右移",
      e: "e 固定",
      y: "Y ↑",
      notes: ["央行擴張 M 維持匯率", "以貿易夥伴損失為代價"]
    }
  ]
};

const assignmentItems = [
  { no: 1, answer: "A", type: "IS-LM", question: "IS curve plots which relationship and from which market?", explanation: "IS curve 是 interest rate 與 national income 的關係，來自 goods and services market。", trap: "LM 才是 money market。" },
  { no: 2, answer: "C", type: "IS-LM", question: "Consumer saving increases at any income. What shifts?", explanation: "儲蓄增加代表消費下降，planned expenditure 下降，IS 向下/向左移。", trap: "不要選 LM；這不是貨幣市場變化。" },
  { no: 3, answer: "C", type: "IS-LM", question: "Money supply increases. What happens to LM and AD?", explanation: "M 上升使 M/P 上升，LM 右移；每個 P 下 Y 上升，因此 AD 右移。", trap: "M 影響 LM，不是 IS。" },
  { no: 4, answer: "A", type: "Concept", question: "In Keynesian cross, actual expenditure equals what?", explanation: "Actual expenditure 等於 GDP/output Y；planned expenditure 才是 E=C+I+G。", trap: "Unplanned inventory investment 是 Y 與 E 的差異，不是 actual expenditure。" },
  { no: 5, answer: "A", type: "Mundell-Fleming", question: "Floating exchange rates: money affects income through what?", explanation: "小型開放經濟 r=r*，貨幣政策透過 exchange rate 改變 NX 與 Y。", trap: "不是透過 G 或 T。" },
  { no: 6, answer: "B", type: "Concept", question: "If income exceeds planned expenditure, where is income and what happens to inventory?", explanation: "Y>E 表示在均衡右側，生產超過銷售，非計畫存貨累積。", trap: "Y>E 是 accumulation，不是 decumulation。" },
  { no: 7, answer: "B", type: "IS-LM", question: "IS-LM: government spending rises. What happens to r and Y?", explanation: "G 上升使 IS 右移，短期通常 r 上升、Y 上升。", trap: "r 上升會排擠投資，但 Y 仍上升。" },
  { no: 8, answer: "B", type: "Concept", question: "Keynesian cross: taxes reduced by 250. What happens to income?", explanation: "減稅提高可支配所得與消費，經乘數效果使所得上升；題庫答案為超過 250。", trap: "稅乘數為負；ΔT<0 時 ΔY>0。" },
  { no: 9, answer: "C", type: "Concept", question: "Unexpected deflation redistributes wealth from whom to whom?", explanation: "未預期通縮提高實質債務負擔，財富從 debtors 轉到 creditors；若 debtors MPC 高，C 下降。", trap: "方向是 debtors to creditors。" },
  { no: 10, answer: "D", type: "Mundell-Fleming", question: "In Mundell-Fleming model, does exchange-rate regime matter?", explanation: "政策效果取決於 floating 或 fixed exchange rate。", trap: "浮動與固定下財政/貨幣政策效果相反。" },
  { no: 11, answer: "A", type: "IS-LM", question: "Tax increase shifts IS how?", explanation: "T 上升降低可支配所得與消費，IS 向下/向左移。", trap: "不是 upward/right。" },
  { no: 12, answer: "A", type: "IS-LM", question: "Taxes initially affect planned expenditure through what?", explanation: "稅先改變 disposable income，因此先影響 consumption。", trap: "不是 investment；投資主要由 r 影響。" },
  { no: 13, answer: "B", type: "IS-LM", question: "When drawing LM, what is held fixed?", explanation: "LM 由 M/P=L(r,Y) 得出，固定 real money supply M/P。", trap: "不是 nominal M 本身，因 P 也重要。" },
  { no: 14, answer: "A", type: "Mundell-Fleming", question: "Risk premium includes what?", explanation: "Risk premium 包含 country risk 與 expected exchange-rate changes。", trap: "公式是 r=r*+θ。" },
  { no: 15, answer: "C", type: "Mundell-Fleming", question: "Argument for floating exchange rates?", explanation: "浮動匯率使 monetary policy 可用於穩定成長、通膨等其他目標。", trap: "固定匯率才較能降低匯率不確定性。" },
  { no: 16, answer: "A", type: "IS-LM", question: "Liquidity preference: as r rises, real money demand?", explanation: "r 上升使持有貨幣機會成本上升，real balances demand 下降。", trap: "Money demand 與 r 負相關。" },
  { no: 17, answer: "A", type: "IS-LM", question: "M fixed but P rises. What happens to r and Y?", explanation: "P 上升使 M/P 下降，LM 左移，r 上升、Y 下降。", trap: "注意是 M/P 下降，不是 M 下降。" },
  { no: 18, answer: "B", type: "IS-LM", question: "P decreases while M fixed. LM shifts how?", explanation: "P 下降使 M/P 上升，LM 向下/向右移。", trap: "downward/right 是同一方向描述。" },
  { no: 19, answer: "B", type: "Concept", question: "Classical theory vs Keynes on national income?", explanation: "Classical：income depends on aggregate supply；Keynes：short-run income determined by aggregate demand。", trap: "不要把供給與需求顛倒。" },
  { no: 20, answer: "50", type: "Calculation", question: "IS: Y=1700-100r; money demand Y-100r; M rises 1000 to 1200, P=2. How much does Y rise?", explanation: "原 M/P=500，解得 Y=1100；新 M/P=600，解得 Y=1150；增加 50。", trap: "要先除以 P，使用 real money supply。" },
  { no: 21, answer: "6", type: "Calculation", question: "Money demand = 2200-200r, M=2000, P=2. Equilibrium r?", explanation: "M/P=1000；1000=2200-200r；r=6。", trap: "r 是 percent，答案為 6%。" }
];

const cases = [
  {
    week: "W11",
    title: "台灣景氣連四紅，但領先指標下滑",
    model: "CH9 Business Cycle / AD-AS",
    shock: "正向需求支撐 + 未來轉弱訊號",
    tags: ["Business Cycle", "Leading Indicators", "AD"],
    points: [
      "AI 需求支撐出口、生產、股市與投資，短期總需求仍強。",
      "領先指標連二月滑落，表示 6-9 個月後景氣可能轉弱。",
      "中東衝突與油價不確定性會把需求熱絡轉成供給壓力。"
    ],
    modelSteps: [
      "AI 出口與投資增加：IS 或 AD 右移。",
      "若領先指標轉弱：未來信心下降，IS 可能左移。",
      "油價上升：SRAS 上移，產生通膨與產出下行壓力。"
    ],
    examAngles: [
      "用 leading indicators 解釋為何紅燈不等於未來一定持續擴張。",
      "用 AD-AS 畫 AI 需求擴張與油價衝擊的差異。",
      "說明政策制定者為何不能只看當期景氣燈號。"
    ],
    template: "此案例先呈現正向 AD shock：AI 需求使出口、投資與財富效果上升，AD/IS 右移。但領先指標下滑代表未來需求可能轉弱；若同時有油價上升，則是不利 AS shock，SRAS 上移，形成 P 上升與 Y 下降壓力。答案要分清楚當期景氣與未來預期。"
  },
  {
    week: "W11",
    title: "Fed 利率連三凍、FOMC 罕見分歧",
    model: "CH10 Liquidity Preference / CH13 Expectations",
    shock: "貨幣政策不確定 + 通膨預期管理",
    tags: ["Fed", "Interest Rate", "Expectations"],
    points: [
      "Fed 維持利率不變，但投票分歧顯示通膨與成長風險判斷不同。",
      "主席交接與政治壓力使央行獨立性成為市場焦點。",
      "若市場認為 Fed 不夠強硬，通膨預期可能上升。"
    ],
    modelSteps: [
      "若 Fed 緊縮：M 下降，LM 左移，短期 r 上升、Y 下降。",
      "若 Fed 維持利率：短期避免需求快速下滑，但通膨預期可能難降。",
      "可信反通膨政策：πe 下降，Phillips curve 下移。"
    ],
    examAngles: [
      "解釋央行獨立性如何影響政策可信度。",
      "比較短期 liquidity preference 與長期 Fisher effect。",
      "用 Phillips curve 說明可信宣示為何降低犧牲率。"
    ],
    template: "此案例核心不是單純利率不變，而是政策可信度。若 Fed 緊縮，LM 左移使 r 上升、Y 下降；若市場相信 Fed 會壓通膨，πe 下降，Phillips curve 下移，降低 disinflation 成本。若政治壓力削弱可信度，πe 可能上升，之後需要更高失業代價壓通膨。"
  },
  {
    week: "W12",
    title: "美國 M2 創新高、美元購買力受壓",
    model: "CH10-11 Money Supply / AD",
    shock: "貨幣供給擴張",
    tags: ["Money Supply", "LM", "AD", "Inflation"],
    points: [
      "M2 創高代表流動性上升，可能推升風險資產。",
      "若貨幣供給成長快於實質產出，長期會反映為物價上升。",
      "高利率與地緣政治風險可能抵銷流動性對投資的刺激。"
    ],
    modelSteps: [
      "短期：M 上升，M/P 上升，LM 右移，r 下降、Y 上升。",
      "AD 推導：M 上升使每個 P 下的均衡 Y 上升，AD 右移。",
      "長期：若 Y 回到自然產出，主要結果是 P 上升。"
    ],
    examAngles: [
      "用 IS-LM 說明 M2 上升如何影響 r 與 Y。",
      "用 MV=PY 解釋美元購買力下降。",
      "討論為何流動性充裕不必然造成投資與產出上升。"
    ],
    template: "M2 增加可視為 M 上升。短期在 P 固定下，M/P 上升使 LM 右移，利率下降、投資上升、產出上升；等價地，AD 右移。長期若產出回自然率，貨幣擴張主要推升價格水準，使美元購買力下降。"
  },
  {
    week: "W12",
    title: "穩定幣、金融監理與貨幣供給",
    model: "CH10 Money Definition / Central Banking",
    shock: "支付科技改變貨幣定義",
    tags: ["Stablecoin", "Money Supply", "Payment"],
    points: [
      "穩定幣若可日常交易，理應具備 M1 的交易媒介功能。",
      "若穩定幣發行以存款或現金作準備，貨幣統計需避免重複計算。",
      "監理越嚴，科技帶來的交易成本優勢可能下降。"
    ],
    modelSteps: [
      "若穩定幣提高支付效率：貨幣需求 L(r,Y) 下降，LM 右移。",
      "若被視為新貨幣：有效 M 上升，可能使 AD 右移。",
      "若央行重定義 M1/M2：政策指標與貨幣乘數需重新解釋。"
    ],
    examAngles: [
      "比較穩定幣與行動支付對貨幣需求的差異。",
      "說明穩定幣為何挑戰央行貨幣供給控制。",
      "用 LM 曲線描述支付效率提高的短期效果。"
    ],
    template: "穩定幣案例應分兩層：若只是提高支付效率，會降低交易性貨幣需求，使 LM 右移；若穩定幣本身被納入貨幣，則等同有效貨幣供給增加，可能使 AD 右移。央行問題在於如何定義 M1/M2 並避免準備資產與穩定幣重複計算。"
  },
  {
    week: "W13",
    title: "中國更積極財政與適度寬鬆貨幣",
    model: "CH11 IS-LM / Policy Mix",
    shock: "財政與貨幣同步擴張",
    tags: ["Fiscal Policy", "Monetary Policy", "Policy Mix"],
    points: [
      "赤字率提高、特別國債、地方債代表財政擴張。",
      "降準降息與流動性充裕代表貨幣擴張。",
      "政策目標是提振內需、投資與信心，但需避免通膨與債務風險。"
    ],
    modelSteps: [
      "財政擴張：IS 右移，Y 上升、r 上升。",
      "貨幣擴張：LM 右移，r 下降、Y 上升。",
      "兩者合併：Y 上升較明確，r 的方向取決於 IS 與 LM 移動幅度。"
    ],
    examAngles: [
      "用 IS-LM 畫政策組合，說明 Y 與 r。",
      "討論財政刺激長期副作用：公債、赤字、資源錯置。",
      "說明貨幣寬鬆若過度可能推升 AD 與通膨。"
    ],
    template: "中國政策組合可畫成 IS 右移加 LM 右移。財政擴張直接提高 planned expenditure，貨幣寬鬆降低利率並刺激投資，因此 Y 上升最明確；但 r 最終方向不一定，要看兩條曲線移動幅度。長期需評估債務與通膨壓力。"
  },
  {
    week: "W13",
    title: "美伊戰爭、油價與停滯性通膨",
    model: "CH9 AD-AS / CH13 Phillips Curve",
    shock: "不利供給衝擊",
    tags: ["Supply Shock", "Phillips", "Stagflation"],
    points: [
      "油價上升提高企業成本與運輸成本。",
      "若衝擊持續，通膨預期可能脫錨。",
      "產出下降與通膨上升同時出現，形成停滯性通膨。"
    ],
    modelSteps: [
      "AD-AS：SRAS 上移，P 上升、Y 下降。",
      "Phillips curve：ν > 0，短期 Phillips curve 上移。",
      "若央行 accommodation：AD 右移穩住 Y，但 P 更高。"
    ],
    examAngles: [
      "畫油價衝擊下的 AD-AS 短期與長期。",
      "說明央行面臨的 inflation-output tradeoff。",
      "用 Phillips curve 解釋 ν 與 πe 的角色。"
    ],
    template: "油價上升是典型 adverse supply shock。AD-AS 中 SRAS 上移，短期 P 上升、Y 下降；Phillips curve 中則是 ν 上升，使同一失業率下通膨更高。若央行擴張 AD 穩定產出，會讓價格水準更高，因此政策有取捨。"
  },
  {
    week: "W14",
    title: "印度盧比大跌與資本外流",
    model: "CH12 Risk Premium / Exchange Rate",
    shock: "油價上升 + 風險溢酬上升",
    tags: ["Exchange Rate", "Risk Premium", "Capital Flow"],
    points: [
      "印度依賴能源進口，油價上升惡化經常帳與通膨。",
      "外資流出使盧比貶值壓力上升。",
      "新興市場在全球風險升高時更容易承受資本流動衝擊。"
    ],
    modelSteps: [
      "風險溢酬 θ 上升，本國利率 r = r* + θ。",
      "投資下降使 IS* 左移，資本外流使本幣貶值。",
      "貶值提高進口價格，可能進一步推升通膨。"
    ],
    examAngles: [
      "用 Mundell-Fleming 加 θ 解釋貨幣貶值。",
      "說明油價上升如何同時造成 AS shock 與匯率壓力。",
      "討論新興市場央行是否應升息 defend currency。"
    ],
    template: "印度案例要連結 θ。中東戰事與油價上升提高外部風險與經常帳壓力，投資人要求更高風險溢酬並撤資，本幣貶值。貶值會提高進口物價，使通膨更嚴重；央行若升息防貶，又會壓抑 AD 與產出。"
  },
  {
    week: "W14",
    title: "土耳其里拉長期貶值",
    model: "CH12 Currency Crisis / CH13 Inflation",
    shock: "高通膨 + 政策可信度不足",
    tags: ["Exchange Rate", "Inflation", "Credibility"],
    points: [
      "高通膨下維持低利率使實質報酬偏低，資本外流。",
      "央行獨立性疑慮削弱反通膨可信度。",
      "外匯存底下降與經常帳逆差加劇貶值預期。"
    ],
    modelSteps: [
      "預期貶值提高 θ，投資人要求更高利率。",
      "πe 上升使 Phillips curve 上移，通膨更具慣性。",
      "央行可信度弱時，貨幣貶值與通膨形成循環。"
    ],
    examAngles: [
      "用 risk premium 說明預期貶值如何自我實現。",
      "說明央行獨立性與 πe 的關係。",
      "比較土耳其與 Volcker disinflation。"
    ],
    template: "土耳其案例核心是 credibility。若市場預期本幣會貶值，θ 上升，資本外流使貶值成為自我實現；同時高通膨使 πe 上升，Phillips curve 上移。若央行缺乏獨立性，反通膨政策不可信，會提高未來 disinflation 的成本。"
  },
  {
    week: "W15",
    title: "通膨高漲與美國家庭財務壓力",
    model: "CH13 Inflation / Distribution",
    shock: "通膨侵蝕實質所得",
    tags: ["Inflation", "Real Income", "Phillips"],
    points: [
      "生活用品與服務價格大幅上升，實質購買力下降。",
      "低收入家庭支出集中在食物、汽油、醫療，受通膨衝擊更重。",
      "若工資追不上物價，消費可能下降並拖累 AD。"
    ],
    modelSteps: [
      "通膨上升降低實質所得，可能使 C 下降、IS 左移。",
      "若 Fed 升息抗通膨，LM 左移，短期 Y 下降。",
      "可信政策可降低 πe，但短期可能需承受失業成本。"
    ],
    examAngles: [
      "用 Phillips curve 說明反通膨的失業代價。",
      "討論高通膨對不同所得家庭的分配效果。",
      "連結 Fed 升息、LM 左移與 AD 左移。"
    ],
    template: "此案例可從購買力切入。通膨使實質所得下降，尤其低收入家庭 MPC 高，消費受壓可能使 IS 左移。若 Fed 升息抗通膨，LM 左移、AD 左移，短期產出下降與失業上升；但若政策可信，可降低 πe 並減少長期通膨慣性。"
  },
  {
    week: "W15",
    title: "美債大量發行、殖利率與升息壓力",
    model: "CH10 Liquidity / CH12 Global Interest Rate",
    shock: "公債供給壓力 + 通膨預期",
    tags: ["Treasury", "Interest Rate", "Fed"],
    points: [
      "大量發債提高債券供給，若需求不足，殖利率上升。",
      "通膨高於 Fed 目標，市場預期升息。",
      "長債殖利率上升會降低既有債券價格並提高融資成本。"
    ],
    modelSteps: [
      "Fed 升息或貨幣緊縮：LM 左移，r 上升、Y 下降。",
      "全球 r* 上升：小型開放經濟面臨資本流動與匯率壓力。",
      "高利率壓低投資 I，可能使 AD 左移。"
    ],
    examAngles: [
      "用 IS-LM 解釋升息對投資與產出的影響。",
      "說明債券殖利率上升與價格下跌的關係。",
      "討論美國利率上升對新興市場匯率的外溢效果。"
    ],
    template: "美債案例可當作利率上升衝擊。若通膨高使 Fed 轉鷹，LM 左移、r 上升，投資下降並使 Y 下降。若美國長債殖利率上升，全球 r* 上升，新興市場可能面臨資本外流與本幣貶值壓力。"
  }
];

const caseAssessments = {
  "台灣景氣連四紅，但領先指標下滑": {
    mcq: [
      "紅燈代表當期景氣熱絡，不代表未來一定持續擴張。",
      "領先指標是預測未來 6-9 個月，不是衡量當期產出。",
      "AI 需求強通常是 AD/IS 右移；油價上升是 SRAS 上移。"
    ],
    calc: [
      "若題目給 GDP 成長率與失業變化，用 Okun's law 判斷是否符合景氣擴張。",
      "若給 MPC 與 AI 投資增加額，可用 multiplier 算 AD/IS 初始位移。"
    ]
  },
  "Fed 利率連三凍、FOMC 罕見分歧": {
    mcq: [
      "維持利率不變不是貨幣緊縮；升息或 M 下降才是 LM 左移。",
      "短期貨幣緊縮使利率上升；長期若通膨預期下降，名目利率可能下降。",
      "央行可信度影響 πe，不是直接改變自然失業率。"
    ],
    calc: [
      "若給 sacrifice ratio 與通膨下降幅度，計算 GDP loss。",
      "若給 Okun's law，將 GDP loss 換算成 unemployment gap。"
    ]
  },
  "美國 M2 創新高、美元購買力受壓": {
    mcq: [
      "M 上升在短期使 LM 右移，不是左移。",
      "長期貨幣擴張主要推升 P，不會永久提高自然產出。",
      "M2 增加不必然等於實質 GDP 增加，還要看 V、P 與預期。"
    ],
    calc: [
      "MV=PY：若 M 增加、V 固定、Y 固定，可計算 P 的變化。",
      "若給 M/P 與 money demand function，可解均衡利率。"
    ]
  },
  "穩定幣、金融監理與貨幣供給": {
    mcq: [
      "支付效率提高通常降低貨幣需求，使 LM 右移。",
      "穩定幣若具交易媒介功能，可能納入 M1，而不只是金融資產。",
      "監理加強可能降低穩定幣交易成本優勢，不是一定擴大使用。"
    ],
    calc: [
      "若給穩定幣發行額與準備資產是否排除，可計算修正後貨幣供給。",
      "若給貨幣需求下降幅度，可判斷 LM 右移後利率/產出方向。"
    ]
  },
  "中國更積極財政與適度寬鬆貨幣": {
    mcq: [
      "財政擴張使 IS 右移；貨幣擴張使 LM 右移。",
      "兩者同時擴張時，Y 必然上升，但 r 方向不一定。",
      "赤字擴大短期可刺激需求，長期可能降低儲蓄或提高債務風險。"
    ],
    calc: [
      "若給 MPC 與政府支出增加額，可算 IS 水平位移。",
      "若給 IS 與 LM 方程式，可解政策前後的 Y 與 r。"
    ]
  },
  "美伊戰爭、油價與停滯性通膨": {
    mcq: [
      "油價上升是不利供給衝擊，SRAS 上移，不是 AD 右移。",
      "停滯性通膨是 P/π 上升且 Y 下降，不是單純通膨上升。",
      "央行 accommodation 可穩定 Y，但代價是更高 P。"
    ],
    calc: [
      "若給油價造成的 GDP loss 與 Okun's law，可算失業率變化。",
      "若給 Phillips curve 參數 β、ν、u-un，可計算通膨率。"
    ]
  },
  "印度盧比大跌與資本外流": {
    mcq: [
      "風險溢酬 θ 上升會使本國資產吸引力下降並造成本幣貶值壓力。",
      "油價上升對能源進口國同時是供給衝擊與外部收支壓力。",
      "升息防貶可能穩定匯率，但會壓低投資與產出。"
    ],
    calc: [
      "匯率貶值幅度：(新匯率 - 舊匯率) / 舊匯率。",
      "若給 r* 與 θ，計算本國利率 r = r* + θ。"
    ]
  },
  "土耳其里拉長期貶值": {
    mcq: [
      "高通膨下低利率會降低本幣實質報酬，容易造成資本外流。",
      "預期貶值會提高 risk premium，可能形成自我實現危機。",
      "央行獨立性不足會削弱反通膨可信度，使 πe 更難下降。"
    ],
    calc: [
      "若給名目利率與通膨率，可算實質利率 r ≈ i - π。",
      "若給累計貶值前後匯率，可算貨幣購買力或匯率跌幅。"
    ]
  },
  "通膨高漲與美國家庭財務壓力": {
    mcq: [
      "通膨上升會降低實質購買力，尤其衝擊必需品支出比重高的家庭。",
      "若 Fed 升息抗通膨，LM 左移、AD 左移，短期 Y 下降。",
      "低收入家庭 MPC 較高，實質所得下降可能更明顯壓低 C。"
    ],
    calc: [
      "實質購買力變化：約等於名目所得成長率 - 通膨率。",
      "若給 CPI 漲幅與薪資漲幅，可算 real wage growth。"
    ]
  },
  "美債大量發行、殖利率與升息壓力": {
    mcq: [
      "殖利率上升代表既有債券價格下降。",
      "Fed 升息或貨幣緊縮使 LM 左移，不是 IS 左移。",
      "美國 r* 上升會外溢到小型開放經濟的資本流動與匯率。"
    ],
    calc: [
      "近似債券價格變化：duration × 殖利率變化，可判斷價格下跌方向。",
      "若給 r* 變化與 θ，計算新興市場本國利率。"
    ]
  }
};

const cards = [
  {
    tag: "2022 Q3",
    type: "計算",
    q: "MPC = 0.6，G 與 T 都增加 100，IS curve 會怎麼移？為何最後 Y 增加較小？",
    a: ["G effect = 100/(1-0.6)=250。", "T effect = -0.6×100/(1-0.6)=-150。", "IS 向右移 100。", "在 IS-LM 中 r 上升排擠 I，所以最後 Y 增加小於 100。"]
  },
  {
    tag: "2020 Q2",
    type: "計算",
    q: "犧牲率為 4，Fed 要把通膨從 10% 降到 5%，GDP 與失業代價是多少？",
    a: ["通膨下降 5 個百分點。", "GDP loss = 5×4 = 20% of one year's GDP。", "Okun：1 pp 失業缺口約 2% GDP loss，因此失業缺口為 10 percentage-point-years。", "若政策可信，πe 下降，Phillips curve 下移，代價可能較小。"]
  },
  {
    tag: "2020 Q5",
    type: "政策",
    q: "央行主席宣示會做任何必要措施降低通膨，政策與名目利率短長期如何變？",
    a: ["政策是貨幣緊縮，提高政策利率或降低貨幣供給成長。", "短期 liquidity preference：M 下降，LM 左移，名目利率上升。", "長期 Fisher effect：通膨與 πe 下降，名目利率下降。"]
  },
  {
    tag: "2022 Q8",
    type: "圖形",
    q: "小型開放經濟、浮動匯率，總統想短期提高產出，應建議哪種政策？",
    a: ["建議擴張性貨幣政策。", "LM* 右移，e 下降，本幣貶值。", "NX 上升，Y 上升。", "不建議財政政策，因為 e 升值會完全排擠 NX。"]
  },
  {
    tag: "2020 Q6",
    type: "圖形",
    q: "行動支付普及會如何影響 AD-AS 中的 Y 與 P？",
    a: ["行動支付降低貨幣需求或提高 V。", "AD 右移。", "短期 Y 上升；若用 Ch13 SRAS，P 也上升。", "長期 Pe 上升、SRAS 上移，Y 回 Ybar，P 更高。"]
  },
  {
    tag: "2022 Q7",
    type: "政策",
    q: "為何浮動匯率下貿易限制是 economic illiteracy？",
    a: ["關稅/配額在給定 e 下使 IS* 右移。", "但 e 上升，本幣升值，出口下降。", "Y 與 NX 不變。", "結果只是進口和出口都減少，損失 gains from trade。"]
  },
  {
    tag: "2022 Q1",
    type: "計算",
    q: "Solow：y=k^1/2，s=0.2，δ=2.5%，n=1%，g=1.5%，穩態 k 是多少？",
    a: ["穩態條件：s f(k) = (δ+n+g)k。", "0.2√k = 0.05k。", "令 x=√k，0.2x=0.05x²，所以 x=4。", "k*=16，y*=4。"]
  },
  {
    tag: "2020 Q11",
    type: "觀念",
    q: "Fed 為何把 2% 通膨目標改為平均 2%？",
    a: ["避免把 2% 當硬上限而過早升息。", "若過去通膨低於 2%，可允許未來一段時間高於 2%。", "在低利率下限環境，較高 πe 可降低實質利率。", "風險是市場可能認為 Fed 容忍高通膨，導致 πe 脫錨。"]
  },
  {
    tag: "CASE MCQ",
    type: "CASE選擇",
    q: "景氣燈號連四紅，但領先指標連二月下滑。下列何者最正確？",
    a: ["紅燈代表當期景氣熱絡。", "領先指標下滑代表未來 6-9 個月可能轉弱。", "不能直接推論未來一定持續擴張。", "若同時油價上升，還要考慮 SRAS 上移。"]
  },
  {
    tag: "CASE MCQ",
    type: "CASE選擇",
    q: "油價因戰爭上升，最適合用哪個模型變化描述？",
    a: ["這是 adverse supply shock。", "AD-AS 中 SRAS 上移，P 上升、Y 下降。", "Phillips curve 中 ν 上升，短期通膨上升。", "不是單純 AD 右移。"]
  },
  {
    tag: "CASE MCQ",
    type: "CASE選擇",
    q: "美債殖利率上升時，既有債券價格與投資通常如何變？",
    a: ["既有債券價格下降。", "融資成本上升。", "投資 I 下降。", "若 Fed 緊縮，可視為 LM 左移、AD 左移。"]
  },
  {
    tag: "CASE CALC",
    type: "CASE計算",
    q: "若盧比從 90 貶到 95.4，貶值幅度約多少？",
    a: ["用 (新匯率 - 舊匯率) / 舊匯率。", "(95.4 - 90) / 90 = 0.06。", "貶值幅度約 6%。"]
  },
  {
    tag: "CASE CALC",
    type: "CASE計算",
    q: "若名目薪資成長 3%，CPI 上升 6%，實質薪資成長約多少？",
    a: ["real wage growth ≈ nominal wage growth - inflation。", "3% - 6% = -3%。", "實質購買力下降約 3%。"]
  },
  {
    tag: "CASE CALC",
    type: "CASE計算",
    q: "若 r* = 4%，risk premium θ = 2.5%，本國利率是多少？",
    a: ["Mundell-Fleming with risk premium：r = r* + θ。", "r = 4% + 2.5% = 6.5%。", "θ 上升也代表本幣貶值與資本外流壓力增加。"]
  }
];

const sprintItems = [
  "背熟 Keynesian cross 三個乘數與存貨判斷。",
  "默畫 IS-LM 財政擴張與貨幣擴張，寫出 r/Y 方向。",
  "默畫 AD-AS：政府支出下降、行動支付普及、油價上升。",
  "背 Mundell-Fleming 浮動/固定匯率政策矩陣。",
  "重做 Assignment 3 第 20、21 題計算。",
  "練 2020/2022 考古題每題 6-10 句答案骨架。",
  "用 CASE 新聞判斷是 AD shock、AS shock、money shock 或 risk premium shock。"
];

let activeChapter = 0;
let activeRegime = "floating";
let activeCaseTag = "All";
let activeAssignmentFilter = "All";
let activeCard = 0;
let activeCardType = "All";
let answerVisible = false;

const chapterList = document.querySelector("#chapterList");
const chapterPanel = document.querySelector("#chapterPanel");
const policyBoard = document.querySelector("#policyBoard");
const assignmentGrid = document.querySelector("#assignmentGrid");
const caseFilters = document.querySelector("#caseFilters");
const caseGrid = document.querySelector("#caseGrid");
const globalSearch = document.querySelector("#globalSearch");
const searchCount = document.querySelector("#searchCount");
const searchResults = document.querySelector("#searchResults");
const cardFilters = document.querySelector("#cardFilters");
const cardTag = document.querySelector("#cardTag");
const cardCount = document.querySelector("#cardCount");
const cardQuestion = document.querySelector("#cardQuestion");
const cardAnswer = document.querySelector("#cardAnswer");
const checklist = document.querySelector("#checklist");
const progressNumber = document.querySelector("#progressNumber");
const progressRing = document.querySelector(".progress-ring");
const formulaDrawer = document.querySelector("#formulaDrawer");
const formulaGrid = document.querySelector("#formulaGrid");
const formulaBtn = document.querySelector("#formulaBtn");
const closeFormula = document.querySelector("#closeFormula");
const focusBtn = document.querySelector("#focusBtn");
const markMastered = document.querySelector("#markMastered");

function renderChapters() {
  chapterList.innerHTML = chapters
    .map((chapter, index) => `
      <button class="chapter-tab ${index === activeChapter ? "active" : ""}" data-chapter="${index}" role="tab" type="button">
        <strong>${chapter.title}</strong>
        <span>${chapter.name}</span>
      </button>
    `)
    .join("");

  const chapter = chapters[activeChapter];
  chapterPanel.innerHTML = `
    <span class="tagline">${chapter.tagline}</span>
    <h3>${chapter.title} ${chapter.name}</h3>
    <div class="chapter-columns">
      <div class="mini-box">
        <h4>必背觀念</h4>
        <ul>${chapter.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="mini-box">
        <h4>考試抓手</h4>
        <p><strong>公式：</strong>${chapter.formula}</p>
        <p><strong>常見題：</strong>${chapter.exam}</p>
      </div>
    </div>
  `;

  document.querySelectorAll(".chapter-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeChapter = Number(button.dataset.chapter);
      renderChapters();
    });
  });
}

function renderPolicies() {
  policyBoard.innerHTML = policies[activeRegime]
    .map((policy) => `
      <article class="policy-card">
        <p class="eyebrow">${policy.movement}</p>
        <h3>${policy.title}</h3>
        <div class="result">
          <span>${policy.e}</span>
          <span>${policy.y}</span>
        </div>
        <ul>${policy.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      </article>
    `)
    .join("");
}

function renderAssignment() {
  const visibleItems = activeAssignmentFilter === "All"
    ? assignmentItems
    : assignmentItems.filter((item) => item.type === activeAssignmentFilter);

  assignmentGrid.innerHTML = visibleItems
    .map((item) => `
      <article class="assignment-card">
        <div class="assignment-card-top">
          <span>Q${item.no}</span>
          <strong>${item.answer}</strong>
        </div>
        <p class="assignment-type">${item.type}</p>
        <h3>${item.question}</h3>
        <div class="assignment-answer">
          <h4>解析</h4>
          <p>${item.explanation}</p>
        </div>
        <div class="assignment-trap">
          <h4>陷阱</h4>
          <p>${item.trap}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderCaseFilters() {
  const tags = ["All", ...new Set(cases.flatMap((item) => item.tags))];
  caseFilters.innerHTML = tags
    .map((tag) => `<button class="pill ${tag === activeCaseTag ? "active" : ""}" data-case-tag="${tag}" type="button">${tag}</button>`)
    .join("");

  document.querySelectorAll("[data-case-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCaseTag = button.dataset.caseTag;
      renderCaseFilters();
      renderCases();
    });
  });
}

function renderCases() {
  const visibleCases = activeCaseTag === "All"
    ? cases
    : cases.filter((item) => item.tags.includes(activeCaseTag));

  caseGrid.innerHTML = visibleCases
    .map((item, idx) => {
      const assessment = caseAssessments[item.title] || { mcq: [], calc: [] };
      const cardId = `case-card-${idx}`;
      return `
        <article class="case-card" data-card-id="${cardId}">
          <p class="case-week">${item.week} · ${item.model}</p>
          <h3>${item.title}</h3>
          <div class="case-shock">${item.shock}</div>

          <div class="case-tabs">
            <button class="case-tab active" data-tab="points" data-card="${cardId}" type="button">新聞重點</button>
            <button class="case-tab" data-tab="model" data-card="${cardId}" type="button">模型步驟</button>
            <button class="case-tab" data-tab="exam" data-card="${cardId}" type="button">考試角度</button>
          </div>

          <div class="case-panel active" data-panel="points" data-card="${cardId}">
            <ul>${item.points.map((p) => `<li>${p}</li>`).join("")}</ul>
            <div class="case-tags">${item.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          </div>

          <div class="case-panel" data-panel="model" data-card="${cardId}">
            <ol>${item.modelSteps.map((s) => `<li>${s}</li>`).join("")}</ol>
            <div class="case-exam-grid">
              <div class="case-block compact">
                <h4>選擇題陷阱</h4>
                <ul>${assessment.mcq.map((t) => `<li>${t}</li>`).join("")}</ul>
              </div>
              <div class="case-block compact">
                <h4>計算題可能</h4>
                <ul>${assessment.calc.map((c) => `<li>${c}</li>`).join("")}</ul>
              </div>
            </div>
          </div>

          <div class="case-panel" data-panel="exam" data-card="${cardId}">
            <div class="case-block">
              <h4>申論可能考法</h4>
              <ul>${item.examAngles.map((a) => `<li>${a}</li>`).join("")}</ul>
            </div>
            <details class="case-template">
              <summary>作答模板</summary>
              <p>${item.template}</p>
            </details>
          </div>
        </article>
      `;
    })
    .join("");

  // Tab switching via event delegation
  caseGrid.querySelectorAll(".case-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const cardId = tab.dataset.card;
      const panelName = tab.dataset.tab;

      caseGrid.querySelectorAll(`.case-tab[data-card="${cardId}"]`).forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      caseGrid.querySelectorAll(`.case-panel[data-card="${cardId}"]`).forEach((p) => p.classList.remove("active"));
      const target = caseGrid.querySelector(`.case-panel[data-panel="${panelName}"][data-card="${cardId}"]`);
      if (target) target.classList.add("active");
    });
  });
}

function renderFormulaGrid() {
  formulaGrid.innerHTML = formulas
    .map((item) => `
      <article class="formula-card">
        <h3>${item.title}</h3>
        <code>${item.code}</code>
      </article>
    `)
    .join("");
}

function searchIndex() {
  return [
    ...chapters.map((item) => ({
      kind: "Chapter",
      title: `${item.title} ${item.name}`,
      text: [...item.bullets, item.formula, item.exam].join(" ")
    })),
    ...cases.map((item) => ({
      kind: `CASE ${item.week}`,
      title: item.title,
      text: [item.model, item.shock, ...item.points, ...item.modelSteps, ...item.examAngles, item.template, ...item.tags].join(" ")
    })),
    ...cards.map((item) => ({
      kind: `Exam ${item.type}`,
      title: `${item.tag} ${item.q}`,
      text: item.a.join(" ")
    })),
    ...formulas.map((item) => ({
      kind: "Formula",
      title: item.title,
      text: item.code
    }))
  ];
}

function renderSearch(query = "") {
  const q = query.trim().toLowerCase();
  if (q.length < 2) {
    searchCount.textContent = "輸入 2 個字開始搜尋";
    searchResults.innerHTML = "";
    return;
  }

  const results = searchIndex()
    .filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(q))
    .slice(0, 8);

  searchCount.textContent = `${results.length} 筆結果`;
  searchResults.innerHTML = results.length
    ? results.map((item) => `
        <div class="search-result">
          <small>${item.kind}</small>
          <strong>${item.title}</strong>
        </div>
      `).join("")
    : `<div class="search-result"><strong>沒有符合項目</strong><small>試試：通膨、匯率、IS、Fed、油價</small></div>`;
}

function visibleCards() {
  return activeCardType === "All"
    ? cards
    : cards.filter((card) => card.type === activeCardType);
}

function renderCardFilters() {
  const types = ["All", ...new Set(cards.map((card) => card.type))];
  cardFilters.innerHTML = types
    .map((type) => `<button class="pill ${type === activeCardType ? "active" : ""}" data-card-type="${type}" type="button">${type}</button>`)
    .join("");

  document.querySelectorAll("[data-card-type]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCardType = button.dataset.cardType;
      activeCard = 0;
      answerVisible = false;
      renderCardFilters();
      renderCard();
    });
  });
}

function masteredCards() {
  try {
    return JSON.parse(localStorage.getItem("macroMasteredCards") || "[]");
  } catch {
    return [];
  }
}

function setMastered(tag, isMastered) {
  const current = new Set(masteredCards());
  if (isMastered) current.add(tag);
  else current.delete(tag);
  localStorage.setItem("macroMasteredCards", JSON.stringify([...current]));
}

function renderCard() {
  const currentCards = visibleCards();
  if (activeCard >= currentCards.length) activeCard = 0;
  const card = currentCards[activeCard];
  const mastered = masteredCards().includes(card.tag);
  cardTag.textContent = card.tag;
  cardCount.textContent = `${activeCard + 1} / ${currentCards.length} · ${card.type}`;
  cardQuestion.textContent = card.q;
  cardAnswer.innerHTML = `<ul>${card.a.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  cardAnswer.classList.toggle("visible", answerVisible);
  document.querySelector("#toggleAnswer").textContent = answerVisible ? "隱藏答案" : "顯示答案";
  markMastered.textContent = mastered ? "取消熟練" : "標記熟練";
  markMastered.classList.toggle("is-on", mastered);
}

function savedChecks() {
  try {
    return JSON.parse(localStorage.getItem("macroSprintChecks") || "[]");
  } catch {
    return [];
  }
}

function renderChecklist() {
  const checked = savedChecks();
  checklist.innerHTML = sprintItems
    .map((item, index) => `
      <label class="check-item">
        <input type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""} />
        <span>${item}</span>
      </label>
    `)
    .join("");

  checklist.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const next = [...checklist.querySelectorAll("input")]
        .filter((box) => box.checked)
        .map((box) => Number(box.dataset.check));
      localStorage.setItem("macroSprintChecks", JSON.stringify(next));
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  const total = sprintItems.length;
  const done = savedChecks().length;
  const pct = Math.round((done / total) * 100);
  progressNumber.textContent = `${pct}%`;
  progressRing.style.setProperty("--progress", `${pct * 3.6}deg`);
}

document.querySelectorAll("[data-regime]").forEach((button) => {
  button.addEventListener("click", () => {
    activeRegime = button.dataset.regime;
    document.querySelectorAll("[data-regime]").forEach((item) => item.classList.toggle("active", item.dataset.regime === activeRegime));
    renderPolicies();
  });
});

document.querySelectorAll("[data-assignment-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeAssignmentFilter = button.dataset.assignmentFilter;
    document.querySelectorAll("[data-assignment-filter]").forEach((item) => {
      item.classList.toggle("active", item.dataset.assignmentFilter === activeAssignmentFilter);
    });
    renderAssignment();
  });
});

document.querySelector("#toggleAnswer").addEventListener("click", () => {
  answerVisible = !answerVisible;
  renderCard();
});

document.querySelector("#nextCard").addEventListener("click", () => {
  activeCard = (activeCard + 1) % visibleCards().length;
  answerVisible = false;
  renderCard();
});

document.querySelector("#prevCard").addEventListener("click", () => {
  activeCard = (activeCard - 1 + visibleCards().length) % visibleCards().length;
  answerVisible = false;
  renderCard();
});

markMastered.addEventListener("click", () => {
  const card = visibleCards()[activeCard];
  setMastered(card.tag, !masteredCards().includes(card.tag));
  renderCard();
});

globalSearch.addEventListener("input", (event) => {
  renderSearch(event.target.value);
});

formulaBtn.addEventListener("click", () => {
  formulaDrawer.classList.add("open");
  formulaDrawer.setAttribute("aria-hidden", "false");
});

closeFormula.addEventListener("click", () => {
  formulaDrawer.classList.remove("open");
  formulaDrawer.setAttribute("aria-hidden", "true");
});

formulaDrawer.addEventListener("click", (event) => {
  if (event.target === formulaDrawer) closeFormula.click();
});

focusBtn.addEventListener("click", () => {
  document.body.classList.toggle("focus-mode");
  focusBtn.classList.toggle("is-on", document.body.classList.contains("focus-mode"));
});

document.querySelector("#printBtn").addEventListener("click", () => window.print());

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== globalSearch) {
    event.preventDefault();
    globalSearch.focus();
  }
  if (event.key === "ArrowRight") document.querySelector("#nextCard").click();
  if (event.key === "ArrowLeft") document.querySelector("#prevCard").click();
  if (event.code === "Space" && document.activeElement === document.body) {
    event.preventDefault();
    document.querySelector("#toggleAnswer").click();
  }
  if (event.key === "Escape" && formulaDrawer.classList.contains("open")) {
    closeFormula.click();
  }
});



/* ============================================================
   PAST EXAM DATA — 2020 & 2022 with cross-year flags
   ============================================================ */

const pastExams = [
  // ── CROSS-YEAR REPEATS ★★ highest priority ─────────────
  {
    id:"q-is-balanced-budget",years:["2020","2022"],
    refs:{"2020":"Q1 · 8pts","2022":"Q3 · 8pts"},
    chapter:"CH10/11",type:"計算＋申論",
    text:"According to Keynesian-cross analysis, MPC = 0.6, G and T both increased by 100. IS curve shifts to _____ by _____. Explain why eventual ΔY < IS shift.",
    answer:["G multiplier = 1/(1-0.6) = 2.5 → ΔY_G = +250","T multiplier = -0.6/(1-0.6) = -1.5 → ΔY_T = -150","Balanced-budget multiplier = 1 → IS 水平右移 100","IS-LM 中 r 上升排擠投資（crowding out）→ 最終 ΔY < 100"]
  },
  {
    id:"q-sacrifice-ratio",years:["2020","2022"],
    refs:{"2020":"Q2 · 8pts","2022":"Q4 · 8pts"},
    chapter:"CH13",type:"計算＋申論",
    text:"Sacrifice ratio = 4. Fed reduces inflation from 10% to 5%. GDP loss = ___% of GDP. Unemployment change = ___ (Okun's law). Why actual sacrifice ratio may be lower when announcements are credible?",
    answer:["通膨下降 5 pp，GDP loss = 5 × 4 = 20% of one year's GDP","Okun's law：1 pp 失業缺口 ≈ 2% GDP loss → 累積失業缺口 = 10 percentage-point-years","可信宣示 → 民眾降低 πe → Phillips curve 下移","相同通膨下降所需失業代價更小 → 犧牲率實際更低"]
  },
  {
    id:"q-trade-war",years:["2020","2022"],
    refs:{"2020":"Q3 · 8pts","2022":"Q5 · 10pts"},
    chapter:"CH12",type:"申論",
    text:"Why do some economists argue that the US-China trade war might harm the US more than China?",
    answer:["浮動匯率下：關稅使 IS* 右移，但 e↑（美元升值），出口↓抵銷 NX 改善","Y 最終不變，美國消費者承擔更高物價，出口商因升值受損","貿易夥伴可調整生產結構，長期損失未必更大","結論：保護主義在浮動匯率下無法提升 NX，反傷本國貿易利益"]
  },
  {
    id:"q-adas-g-reduction",years:["2020","2022"],
    refs:{"2020":"Q4 · 10pts","2022":"Q6 · 10pts"},
    chapter:"CH9/13",type:"圖形＋申論",
    text:"Economy at natural rate. G reduction produces budget surplus. Use AD-AS (Ch13 SRAS) to show short-run and long-run effects on P and Y. Label: axes, curves, initial eq., shift directions, terminal eq.",
    answer:["初始：均衡在 LRAS 上 (Ybar, P₀)","G↓ → AD 左移：短期 Y↓，P↓（E₁）","長期：P↓ 使 Pe↓，SRAS 下移（向右）","終點 E₂：Y 回 Ybar，P₂ < P₁ < P₀","五要素：Y/P 軸、LRAS 垂直、SRAS/AD 斜線、初/終均衡箭頭"]
  },
  {
    id:"q-beggar-illiteracy",years:["2020","2022"],
    refs:{"2020":"Q8 · 12pts","2022":"Q7 · 16pts"},
    chapter:"CH12",type:"申論",
    text:"Expansionary monetary (floating) and fiscal (fixed) are 'beggar-thy-neighbour'. Trade policy under both regimes is 'economic illiteracy'. Explain and illustrate.",
    answer:["浮動＋貨幣擴張：LM* 右移 → e↓ 貶值 → NX↑ Y↑，以貿易夥伴出口損失為代價","固定＋財政擴張：IS* 右移，央行買外幣維持 e → M↑ → Y↑，夥伴進口增加（有爭議性 beggar-thy-neighbour）","浮動關稅（illiteracy）：IS* 右移 → e↑ → NX 不改善，進出口雙降，損失貿易利益","固定關稅（illiteracy）：IS* 右移 → 央行擴張 M → Y↑ 但機制非 NX，貿易夥伴受損"]
  },
  {
    id:"q-small-open-reelection",years:["2020","2022"],
    refs:{"2020":"Q9 · 10pts","2022":"Q8 · 10pts"},
    chapter:"CH12",type:"申論＋圖形",
    text:"Small open economy, floating rate. President wants to raise output in short run to win reelection. (A) Recommend monetary or fiscal? Explain. (B) Illustrate with Mundell-Fleming graph.",
    answer:["建議：擴張性貨幣政策","浮動匯率下財政政策：IS* 右移 → e↑ 升值 → NX↓，Y 不變（被完全排擠）","貨幣政策：LM* 右移 → e↓ 貶值 → NX↑，Y↑（有效）","圖形：IS* 下傾；LM* 垂直；LM* 右移；均衡由 E₁ → E₂：e↓，Y↑"]
  },
  {
    id:"q-longrun-sideeffects",years:["2020","2022"],
    refs:{"2020":"Q10 · 8pts","2022":"Q9 · 10pts"},
    chapter:"CH8/9/13",type:"申論",
    text:"Policy makers use expansionary fiscal/monetary policy to combat recessions. Explain possible long-run side-effects of both interventions.",
    answer:["財政擴張：crowding out 排擠私人投資，儲蓄↓，Solow k*↓，長期每人產出降低","持續赤字：債務累積，利息支出擴大，可能削弱未來政策空間","貨幣擴張：長期主要推升 P，不永久提高 Y（古典二分法）","高貨幣成長易使 πe↑，Phillips curve 上移，未來抑制通膨需更高犧牲率"]
  },

  // ── 2020 ONLY ──────────────────────────────────────────────
  {
    id:"q-2020-cb-announcement",years:["2020"],
    refs:{"2020":"Q5 · 8pts"},
    chapter:"CH10/13",type:"申論",
    text:"When the CB chairman announces 'whatever necessary' to reduce inflation: (A) what policy? (B) What happens to nominal interest rate short-run vs long-run?",
    answer:["政策：貨幣緊縮，M↓ 或提高政策利率 → LM 左移","短期（liquidity preference）：M↓ → M/P↓ → LM 左移 → 名目利率 i↑","長期（Fisher effect）：可信政策使 πe↓；Fisher equation i = r + πe → i 最終下降","可信宣示讓 πe 快速下調，名目利率不必長期維持高位，降低緊縮成本"]
  },
  {
    id:"q-2020-mobile-payments",years:["2020"],
    refs:{"2020":"Q6 · 10pts"},
    chapter:"CH9/11",type:"圖形＋申論",
    text:"Use the AD-AS model (Ch9) to explain impacts of widespread mobile payments on Y and P in short-run and long-run.",
    answer:["機制：行動支付降低貨幣需求 L(r,Y) 或提高 V（MV=PY）→ LM 右移 → AD 右移","短期（Ch9 AD-AS）：AD 右移在固定 SRAS 下 → Y↑，P↑","長期（Ch13 SRAS）：P↑ → Pe↑ → SRAS 上移 → Y 回 Ybar，P 進一步上升","終點：Y = Ybar，P 更高（純貨幣現象，同 M↑ 長期效果）"]
  },
  {
    id:"q-2020-policy-mix",years:["2020"],
    refs:{"2020":"Q7 · 10pts"},
    chapter:"CH11",type:"圖形＋申論",
    text:"How can the CB keep economy from recession when budget deficit is reduced? Use IS-LM to show both policies. Label fully.",
    answer:["財政緊縮（G↓ or T↑）：IS 左移，Y 有下降壓力","央行貨幣擴張：M↑ → LM 右移，抵消 IS 左移對 Y 的影響","結果：Y ≈ 不變，r 明確下降（IS 左移 + LM 右移 → r 雙重下壓）","圖形：IS 左移 + LM 右移；新均衡 Y 維持，r 下降；標五項要素"]
  },
  {
    id:"q-2020-avg-inflation",years:["2020"],
    refs:{"2020":"Q11 · 8pts"},
    chapter:"CH13",type:"申論",
    text:"In 2020 the Fed changed its target from 2% to 'average of 2%'. What are possible reasons and arguments for this modification?",
    answer:["理由一：避免通膨未達 2% 就過早升息（2017-18 教訓），減少緊縮風險","理由二：零利率下限環境：較高 πe 可降低實質利率（r = i - πe），擴大政策空間","理由三：補償過去長期低於 2% 的通膨，重錨市場長期通膨預期","風險：若市場認為 Fed 容忍高通膨，πe 脫錨，未來成本更高"]
  },

  // ── 2022 ONLY ──────────────────────────────────────────────
  {
    id:"q-2022-solow-calc",years:["2022"],
    refs:{"2022":"Q1 · 8pts"},
    chapter:"CH8",type:"計算",
    text:"Solow model: y = k^(1/2), δ = 2.5%, n = 1%, g = 1.5%, s = 20%. Find steady-state capital per effective worker k*.",
    answer:["穩態：s·f(k) = (δ+n+g)·k → 0.2√k = 0.05k","令 x = √k：0.2x = 0.05x² → x = 4 → k* = 16","驗算：0.2×4 = 0.8 = 0.05×16 ✓；y* = √16 = 4","答：k* = 16，y* = 4"]
  },
  {
    id:"q-2022-solow-graph",years:["2022"],
    refs:{"2022":"Q2 · 10pts"},
    chapter:"CH8",type:"圖形＋申論",
    text:"Use Solow model to illustrate permanent government deficit reduction impact on steady-state k and y. Label fully and explain why growth rates of real wage and output per worker are equal at new steady state.",
    answer:["赤字↓ → 國民儲蓄率 s↑ → s·f(k) 曲線上移","(δ+n+g)k 不變；新穩態 k₂* > k₁*，y₂* > y₁*","過渡期：k 持續累積，y 上升；到達新穩態後停止","新穩態：每有效工人變數固定；每人產出 & real wage 成長率均 = g（技術進步率），因此相同"]
  },
  {
    id:"q-2022-fed-rates",years:["2022"],
    refs:{"2022":"Q10 · 10pts"},
    chapter:"CH11/13",type:"申論",
    text:"The Federal Reserve raised interest rates 3 times this year. Explain and illustrate the causes and effects of such action.",
    answer:["原因：通膨高於 2%，πe 有脫錨風險，就業市場過熱","機制（IS-LM）：政策利率↑ → LM 左移 → r↑，Y↓；AD 左移","短期效果：Y↓，P↓，失業可能上升，Phillips curve 上失業缺口打開","長期（若可信）：πe↓ → Phillips curve 下移；Fisher effect 使名目利率長期可能低於緊縮峰值"]
  }
];

let activeExamFilter = "cross";

function renderExamFilters() {
  const examFilters = document.querySelector("#examFilters");
  if (!examFilters) return;
  const opts = [
    { key:"cross", label:"★★ 跨年重題" },
    { key:"all",   label:"全部" },
    { key:"2020",  label:"2020 完整" },
    { key:"2022",  label:"2022 完整" }
  ];
  examFilters.innerHTML = opts.map(({ key, label }) =>
    `<button class="pill ${key === activeExamFilter ? "active" : ""}" data-exam-filter="${key}" type="button">${label}</button>`
  ).join("");

  document.querySelectorAll("[data-exam-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeExamFilter = btn.dataset.examFilter;
      renderExamFilters();
      renderExams();
    });
  });
}

function renderExams() {
  const examGrid = document.querySelector("#examGrid");
  if (!examGrid) return;
  const visible = activeExamFilter === "cross"
    ? pastExams.filter((q) => q.years.length > 1)
    : activeExamFilter === "all"
      ? pastExams
      : pastExams.filter((q) => q.years.includes(activeExamFilter));

  examGrid.innerHTML = visible.map((q) => {
    const isRepeat = q.years.length > 1;
    const yearBadges = q.years.map((y) =>
      `<span class="exam-year-badge year-${y}">${q.refs[y]}</span>`
    ).join("");
    const answerItems = q.answer.map((a) => `<li>${a}</li>`).join("");
    return `
      <article class="exam-card${isRepeat ? " is-repeat" : " year-only-"+q.years[0]}">
        <div class="exam-header">
          <div class="exam-badges">
            ${isRepeat ? '<span class="repeat-badge">★★ 跨年重題</span>' : ""}
            ${yearBadges}
          </div>
          <div class="exam-meta">
            <span class="exam-ch">${q.chapter}</span>
            <span class="exam-type-tag">${q.type}</span>
          </div>
        </div>
        <p class="exam-q-text">${q.text}</p>
        <details class="exam-skeleton">
          <summary>作答骨架 ▾</summary>
          <ol>${answerItems}</ol>
        </details>
      </article>`;
  }).join("");
}

renderChapters();
renderPolicies();
renderAssignment();
renderCaseFilters();
renderCases();
renderFormulaGrid();
renderCardFilters();
renderCard();
renderChecklist();
renderExamFilters();
renderExams();
renderExamFilters();
renderExams();

// Scroll-spy: highlight active nav link as user scrolls
(function initScrollSpy() {
  const navLinks = document.querySelectorAll(".topbar a[href^='#']");
  const sectionIds = [...navLinks].map((a) => a.getAttribute("href").slice(1));
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  function updateActiveLink() {
    const scrollY = window.scrollY + 120;
    let currentId = sectionIds[0];
    sections.forEach((sec) => {
      if (sec && sec.offsetTop <= scrollY) currentId = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
})();
