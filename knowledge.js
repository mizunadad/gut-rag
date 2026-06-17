/**
 * gut-rag 知識文書ライブラリ  knowledge.js
 *
 * ─── スキーマ仕様 ───────────────────────────────
 * id        : 一意ID  category-prefix + 連番
 *             kotoba-   身体知（言葉・現象）
 *             nou-      神経科学（Layer1/2/3）
 *             tetsugaku 哲学・仏教
 *             hannya-   般若心経
 * title     : 概念名
 * category  : 'kotoba' | 'nou' | 'tetsugaku' | 'hannya'
 * layer     : 'L1' | 'L2' | 'L3' | null
 * summary   : 1〜2文。プロンプト注入の核
 * body      : 3〜5文。深い背景
 * etymology : 語源・字義（kotobaのみ）
 * tags      : 検索・関連タグ
 * socratic  : 関連Socraticカテゴリ ['hito','basho','mono','kokoro','all']
 * related   : 関連ドキュメントID
 * coaching_hint : { not_yet, ready }  コーチング用ヒント（任意）
 * ────────────────────────────────────────────────
 */

const KNOWLEDGE = [

  // ══════════════════════════════════════
  // 身体知（kotoba）― 言葉・現象
  // ══════════════════════════════════════

  {
    id: 'kotoba-001',
    title: '腑に落ちる',
    category: 'kotoba',
    layer: 'L2',
    summary: '論理と身体感覚が一致した瞬間。頭ではなく内臓で「そうだ」と感じる状態。',
    body: '島皮質が身体感覚・感情・認知を統合するハブとして機能する。「わかったつもり」は前頭前皮質だけの処理。「腑に落ちた」は島皮質が加わり、身体が同意した状態。言語化の前に起きることが多く、後から「そうだったんだ」と気づく形をとる。',
    etymology: '腑＝内臓。理解が体の中心（はらわた）に届く感覚。',
    tags: ['島皮質', '統合', '直感', '身体感覚'],
    socratic: ['kokoro', 'hito'],
    related: ['kotoba-002', 'nou-003'],
    coaching_hint: {
      not_yet: '「わかりました」が腑に落ちていない時は、問いを身体に向ける。「どこかに引っかかりはありますか？」',
      ready: '「腑に落ちた」と感じている時、その確信を一言で言語化させる。言葉になった瞬間が前進のタイミング。'
    }
  },

  {
    id: 'kotoba-002',
    title: '直感',
    category: 'kotoba',
    layer: 'L1',
    summary: '経験が圧縮されて瞬時に現れる身体知。論理より速い。',
    body: '基底核が長年の経験をパターンとして圧縮・保存し、意識的な推論より遥かに速く作動する。「なぜかわからないがそう感じる」の正体は、基底核が過去の膨大な経験から導いた答え。精度は経験量に比例し、記録と振り返りによって鍛えられる。',
    etymology: '直に感じる。迂回なしに身体が知ること。',
    tags: ['基底核', '速さ', '経験', 'パターン'],
    socratic: ['all'],
    related: ['kotoba-001', 'kotoba-005', 'nou-002'],
    coaching_hint: {
      not_yet: '直感が鈍い時は経験の蓄積不足か、ノイズが多い状態。まず記録から始める。',
      ready: '直感が冴えている時は、その根拠を問わず動いていい。記録だけ残す。'
    }
  },

  {
    id: 'kotoba-003',
    title: '気配を読む',
    category: 'kotoba',
    layer: 'L2',
    summary: '言語化される前の他者の状態や場の変化を身体で感知すること。',
    body: '上側頭溝と扁桃体が連携し、表情・声調・姿勢・空間の微細な変化を無意識に処理する。意識が気づく前に、身体はすでに反応している。「なんか様子がおかしい」はこの処理の結果。会議室に入った瞬間に感じる「今日は空気が違う」も同様の処理。',
    etymology: '気＝空気・雰囲気・エネルギー。配＝配られているもの。',
    tags: ['上側頭溝', '扁桃体', '他者', '場', '無意識'],
    socratic: ['hito', 'basho'],
    related: ['kotoba-008', 'nou-004'],
    coaching_hint: {
      not_yet: '気配が読めない時は頭で考えすぎている。まず身体の反応を先に聴く。',
      ready: '気配を読んでいる時、その感覚を言葉にせず行動に移せるかが問われる。'
    }
  },

  {
    id: 'kotoba-004',
    title: 'なんか違う',
    category: 'kotoba',
    layer: 'L2',
    summary: '言語化できないが確かにある違和感の信号。スルーしてはいけない腸の声。',
    body: '期待モデル（予測）と実際の入力のズレを、島皮質と扁桃体が先に検知する。論理的な言語化が追いつく前に身体が「合わない」と発信している状態。このシグナルを無視し続けると、後になって「あの時感じていたんだよな」となる。記録する価値が最も高い感覚のひとつ。',
    etymology: '違う＝予測と現実のズレ。身体が最初に知るズレ。',
    tags: ['違和感', '島皮質', '扁桃体', '予測誤差'],
    socratic: ['all'],
    related: ['kotoba-006', 'nou-003', 'nou-004'],
    coaching_hint: {
      not_yet: '「なんか違う」を言語化できない時は、違う対象を絞る。人か、場所か、内容か。',
      ready: '「なんか違う」を感じている時は、その感覚を行動の前に記録する。根拠は後でいい。'
    }
  },

  {
    id: 'kotoba-005',
    title: 'Gut never lies',
    category: 'kotoba',
    layer: 'L1',
    summary: '腸（直感）は嘘をつかない。解釈が間違えることはあっても、感知自体は正直。',
    body: '腸神経系（ENS）は脳から独立した神経系を持ち、情動・文脈・身体状態の変化を敏感に捉え迷走神経を通じて脳に信号を送る。「腸が反応した」事実は正直。「それが何を意味するか」の解釈は学習で精度が上がる。だからこそ記録と振り返りが重要になる。',
    etymology: 'Gut＝腸・直感（英）。never lies＝嘘をつかない。',
    tags: ['ENS', '腸神経系', '正直', '感知', '解釈'],
    socratic: ['all'],
    related: ['kotoba-001', 'kotoba-011', 'nou-001'],
    coaching_hint: {
      not_yet: '腸を信頼できない時は、まず記録から始める。当たり率が見えると信頼が生まれる。',
      ready: '腸を信頼している時は、解釈より行動を優先していい。'
    }
  },

  {
    id: 'kotoba-006',
    title: 'ざわっと',
    category: 'kotoba',
    layer: 'L2',
    summary: '何かが起きる予兆として感じる、胸や腹の小さな波紋。ヒヤッと・モヤッとも同系。',
    body: '扁桃体が危険・重要性・不整合を検知した際に発する初期アラーム。言葉より先に来る。「ざわっと」「ヒヤッと」「モヤッと」はいずれも扁桃体ベースの一次反応で、その後に島皮質が意味づけを行う。反射的にスルーされやすいが、最も記録価値が高い瞬間でもある。',
    etymology: 'ざわ＝波立ち。静かな水面に何かが触れた感触。',
    tags: ['扁桃体', '一次反応', '予兆', 'アラーム'],
    socratic: ['kokoro', 'hito'],
    related: ['kotoba-004', 'nou-004'],
    coaching_hint: {
      not_yet: 'ざわっとを感じた後にすぐ言語化しなくていい。まずその感覚の場所と強さだけ記録する。',
      ready: 'ざわっとの意味が見えている時は、その直感を信頼して次の行動を選んでいい。'
    }
  },

  {
    id: 'kotoba-007',
    title: '胆力',
    category: 'kotoba',
    layer: 'L3',
    summary: '不確実な状況でも身体感覚を信頼して行動し続ける力。',
    body: '前頭前皮質が不確実性を処理し、島皮質が身体的な確信を担保する。胆力は「怖くない」ではなく「怖いが動ける」状態。経験の蓄積により直感の精度が上がり、その信頼感が胆力の基盤になる。腸への信頼と胆力は比例する。',
    etymology: '胆＝胆嚢・肝っ玉。力＝動く力。',
    tags: ['PFC', '不確実性', '信頼', '行動', '経験'],
    socratic: ['kokoro', 'hito'],
    related: ['kotoba-002', 'kotoba-005', 'nou-005'],
    coaching_hint: {
      not_yet: '胆力が出ない時は、過去の当たり経験を振り返る。腸が正しかった回数を数える。',
      ready: '胆力がある状態では、迷わず動く。動いた後に記録する。'
    }
  },

  {
    id: 'kotoba-008',
    title: '間（ま）',
    category: 'kotoba',
    layer: 'L2',
    summary: '人と人の間、行動と行動の間に生まれる余白。身体が作り出す時間と空間。',
    body: '上側頭溝は時間的・空間的な「間」を処理する脳領域。日本語の「間」は英語に直訳できない概念で、沈黙・呼吸・視線の間合いを含む。コミュニケーションにおける「間」の読み違えは関係の齟齬を生む。身体が自然に作る間と、頭で計算した間は質が異なる。',
    etymology: '間＝空間と時間の両方を指す日本語固有の概念。',
    tags: ['上側頭溝', '時間', '空間', '沈黙', '対話'],
    socratic: ['hito', 'basho'],
    related: ['kotoba-003', 'nou-004'],
    coaching_hint: {
      not_yet: '間が掴めない時は、相手の呼吸を見る。言葉ではなく身体のリズムを合わせる。',
      ready: '間が読めている時、言葉は最小限でいい。'
    }
  },

  {
    id: 'kotoba-009',
    title: '千里眼',
    category: 'kotoba',
    layer: 'L3',
    summary: '遠くの状況や先の展開を身体感覚で先読みする力。',
    body: '前頭前皮質のシミュレーション能力と長期記憶（海馬）のパターン照合が組み合わさる。経験豊富な人が「なぜかそんな気がした」と言う現象の神経学的基盤。DMNが活性化するぼんやり・移動中などに浮かびやすい。意図的に考えるより、余白の中で現れる。',
    etymology: '千里＝遠い距離。眼＝見通す力。',
    tags: ['PFC', 'DMN', '海馬', '予測', '先読み'],
    socratic: ['hito', 'mono'],
    related: ['kotoba-002', 'nou-006'],
    coaching_hint: {
      not_yet: '先が読めない時は、情報を足すより立ち止まる時間を作る。',
      ready: '先が見えている時は、その見立てを早めに記録する。後で検証できる。'
    }
  },

  {
    id: 'kotoba-010',
    title: '人となり',
    category: 'kotoba',
    layer: 'L3',
    summary: 'その人の言語化されない核心。言葉ではなく身体が感知する相手の本質。',
    body: '継続的な観察の中で島皮質・扁桃体・上側頭溝が統合して形成される印象。「なんとなく信頼できる」「なんか嫌な感じ」はこの処理の出力。論理的な評価より先に身体が判断していることが多い。長い時間をかけた相互作用の中で更新され続ける。',
    etymology: '人＝他者。となり＝そのもののあり方・本来の姿。',
    tags: ['島皮質', '扁桃体', '上側頭溝', '信頼', '本質'],
    socratic: ['hito'],
    related: ['kotoba-003', 'kotoba-008'],
    coaching_hint: {
      not_yet: '人となりが見えない時は、言葉ではなくその人の行動パターンを見る。',
      ready: '人となりが見えている時は、その直感を大切にしながら対話を重ねる。'
    }
  },

  {
    id: 'kotoba-011',
    title: '腸で考える',
    category: 'kotoba',
    layer: 'L1',
    summary: '言語化より先に、身体（腸神経系・身体感覚）が処理する思考の形。このプロジェクトの核心。',
    body: '腸神経系（ENS）が実際に情報処理を行っていることを指す。脳と腸は迷走神経で双方向につながり、腸から脳への信号の方が圧倒的に多い。言語化できない身体知の多くはこの「腸→脳」の方向から来ている。意識的な思考が間に合わない場面ほど、腸で考えることが有効になる。',
    etymology: '腸＝内臓・第二の脳。考える＝処理する・感じ取る。',
    tags: ['ENS', '腸神経系', '迷走神経', '身体知', 'プロジェクト核心'],
    socratic: ['all'],
    related: ['kotoba-005', 'kotoba-012', 'nou-001'],
    plain_insight: '腸には5億個の神経細胞があります。脳より先に、世界を感じ取っています。\n「なんかそんな気がする」——それは根拠のない感覚ではなく、\n腸が既に出した答えです。\n頭が「なぜ？」と問う前に、体はもう知っている。',
    resonance_question: '言葉にする前のその感覚——体のどこで感じていましたか？',
    coaching_hint: {
      not_yet: null,
      ready: null
    }
  },

  {
    id: 'kotoba-012',
    title: '身体知',
    category: 'kotoba',
    layer: null,
    summary: '身体に蓄積された、言語化できない知の総体。経験が肉体に刻まれたもの。',
    body: 'メルロ＝ポンティが「身体は世界への入口」と論じたように、知覚は身体なしには成立しない。技術者の「手が覚えている」、職人の「感覚でわかる」、医師の「触るとわかる」はいずれも身体知。言語化されると別の何かになる知がある。身体知は使うことでしか育たない。',
    etymology: '身体で知ること。暗黙知（Polanyi）とも重なる概念。',
    tags: ['暗黙知', 'メルロ＝ポンティ', '経験', '言語化不可'],
    socratic: ['all'],
    related: ['kotoba-011', 'tetsugaku-001'],
    coaching_hint: {
      not_yet: null,
      ready: null
    }
  },

  {
    id: 'kotoba-013',
    title: 'ピンとくる',
    category: 'kotoba',
    layer: 'L3',
    summary: '突然の確信。論証なしに「これだ」とわかる瞬間。',
    body: 'DMN（デフォルトモードネットワーク）とPFCが連携し、無意識の処理が意識の表面に突き抜けてくる現象。ぼんやりしている時、移動中、入浴中などに起きやすい。「ひらめき」とも呼ばれるが、腸で考えるの文脈では「過去の経験パターンが臨界点を超えた瞬間」と理解する。',
    etymology: 'ピン＝針が刺さる感触。くる＝やってくる。受け身の確信。',
    tags: ['DMN', 'PFC', 'ひらめき', '確信', '無意識'],
    socratic: ['kokoro', 'mono'],
    related: ['kotoba-002', 'kotoba-009', 'nou-006'],
    coaching_hint: {
      not_yet: 'ピンとこない時は、頭で考えるのをやめてみる。散歩・入浴・休眠を挟む。',
      ready: 'ピンときた瞬間に即記録する。その感覚は揮発する。'
    }
  },

  {
    id: 'kotoba-014',
    title: 'なんとなく',
    category: 'kotoba',
    layer: 'L1',
    summary: '明確な理由はないが確かにある傾向や感覚。直感以前の微かな信号。',
    body: '「なんとなく」は曖昧さではなく、言語化の閾値に達していない身体知のシグナル。基底核や腸神経系が処理しているが、まだ意識に上がっていない状態。スルーすると消えるが、記録すると後から「あれはそういうことだったのか」になる。「なんとなく」を大切にする文化が身体知を育てる。',
    etymology: 'なん（何）＋となく（とは無しに）。説明できないままでいること。',
    tags: ['閾値', '微弱信号', '曖昧', '身体知'],
    socratic: ['all'],
    related: ['kotoba-004', 'kotoba-011'],
    coaching_hint: {
      not_yet: '「なんとなく」の先を問い詰めない。「それはどのあたりで感じますか？」と場所を聴く。',
      ready: '「なんとなくそう感じている」を行動の根拠にしていい。記録で検証する。'
    }
  },

  {
    id: 'kotoba-015',
    title: '腑に落ちない',
    category: 'kotoba',
    layer: 'L2',
    summary: '頭ではわかるが身体が同意していない状態。論理と身体感覚の不一致。',
    body: '前頭前皮質（論理）と島皮質（身体統合）が一致していない状態。「正しいとわかるが気乗りしない」「納得はしたが何か引っかかる」が典型。この状態で行動すると後から齟齬が生まれやすい。「腑に落ちない」を伝える文化が心理的安全性を生む。',
    etymology: '腑に落ちる（合致）の否定形。落ちない＝届いていない。',
    tags: ['島皮質', 'PFC', '不一致', '心理的安全性'],
    socratic: ['kokoro', 'hito'],
    related: ['kotoba-001', 'nou-003'],
    coaching_hint: {
      not_yet: '「腑に落ちない」を言えない環境では身体知は育たない。まず場の安全を作る。',
      ready: '「腑に落ちない」を口にできた瞬間が対話の本当の始まり。'
    }
  },

  // ══════════════════════════════════════
  // 神経科学（nou）― Layer1/2/3
  // ══════════════════════════════════════

  {
    id: 'nou-001',
    title: '腸神経系（ENS）',
    category: 'nou',
    layer: 'L1',
    summary: '腸に存在する、脳から独立した神経系。第二の脳とも呼ばれる。約5億個の神経細胞を持つ。',
    body: '迷走神経を通じた脳への信号は、脳から腸への信号の約9倍。情動状態を先に感知し、脳に通知する。「お腹が痛い」が不安の身体表現になるのはこのため。「Gut never lies」の神経学的根拠。意思決定の前に腸がすでに動いていることが多い。',
    tags: ['ENS', '第二の脳', '迷走神経', '自律神経'],
    socratic: ['all'],
    related: ['kotoba-005', 'kotoba-011', 'nou-007'],
    coaching_hint: null
  },

  {
    id: 'nou-002',
    title: '基底核・小脳（Layer 1）',
    category: 'nou',
    layer: 'L1',
    summary: '習慣・運動・パターン認識を担う古い脳。意識なしに動く。直感の蓄積場所。',
    body: '繰り返しの経験をパターンとして圧縮・保存する。熟練した動作が「考えなくてもできる」のは基底核の働き。直感の多くはここに蓄積された経験知が瞬時に出力される現象。意識的な思考（前頭前皮質）より処理速度が圧倒的に速い。小脳は身体の予測モデルを管理する。',
    tags: ['基底核', '小脳', '習慣', 'パターン', '速い思考'],
    socratic: ['all'],
    related: ['kotoba-002', 'nou-007'],
    coaching_hint: null
  },

  {
    id: 'nou-003',
    title: '島皮質（Layer 2）',
    category: 'nou',
    layer: 'L2',
    summary: '身体感覚・感情・認知を統合する脳の要。「腑に落ちる」の神経学的座。',
    body: '身体の内側状態（内受容感覚）をモニタリングし、感情・認知と統合する。「腸の違和感」を「なんかおかしい」という感覚に変換する役割を担う。島皮質の活性なしには「腑に落ちる」は起きない。生成AIが持てないとされる「体感」の神経学的実体がここにある。',
    tags: ['島皮質', '内受容感覚', '統合', '体感'],
    socratic: ['all'],
    related: ['kotoba-001', 'kotoba-004', 'nou-007'],
    coaching_hint: null
  },

  {
    id: 'nou-004',
    title: '扁桃体・上側頭溝（Layer 2）',
    category: 'nou',
    layer: 'L2',
    summary: '危険・重要性・他者の状態変化を高速検知する。気配を読む神経基盤。',
    body: '扁桃体は100ミリ秒以内に感情的重要性を判定する。上側頭溝は他者の意図・視線・声調の変化を処理する。「なんか様子がおかしい」「今日の会議は雰囲気が違う」はこの2領域の連携出力。意識が気づく前にすでに反応が始まっている。',
    tags: ['扁桃体', '上側頭溝', '気配', '他者', '高速検知'],
    socratic: ['hito', 'basho'],
    related: ['kotoba-003', 'kotoba-006', 'nou-007'],
    coaching_hint: null
  },

  {
    id: 'nou-005',
    title: '前頭前皮質（PFC）・mPFC（Layer 3）',
    category: 'nou',
    layer: 'L3',
    summary: '意味づけ・判断・抑制・統合を行う進化的に新しい脳。胆力・人となり・徳の座。',
    body: '身体・感情の信号を受け取り、言語化・社会的文脈への統合を行う。mPFC（内側前頭前野）は自己認識・他者理解・道徳判断を担う。Layer1・2からの信号を受け取り、最終的な「意味」を生成する。過剰な前頭前皮質への依存は身体知の声を遮断する。',
    tags: ['PFC', 'mPFC', '意味づけ', '判断', '統合'],
    socratic: ['all'],
    related: ['kotoba-007', 'nou-007'],
    coaching_hint: null
  },

  {
    id: 'nou-006',
    title: 'DMN（デフォルトモードネットワーク）',
    category: 'nou',
    layer: 'L3',
    summary: '脳が「何もしていない」時に活性化するネットワーク。ひらめき・千里眼の温床。',
    body: '意図的な課題がない時（ぼんやり・移動中・入浴中）に最も活性化する。過去の記憶と未来のシミュレーションを統合し、無意識の問題解決を行う。「移動中にひらめく」現象の神経基盤。過剰な集中・スクリーン時間の増加がDMNの活動を抑制するとされる。',
    tags: ['DMN', 'ぼんやり', 'ひらめき', 'デフォルト', '無意識'],
    socratic: ['kokoro', 'mono'],
    related: ['kotoba-009', 'kotoba-013', 'nou-005'],
    coaching_hint: null
  },

  {
    id: 'nou-007',
    title: '3層構造（全体）',
    category: 'nou',
    layer: null,
    summary: 'ENS・基底核→島皮質・扁桃体→PFC・DMNの3層で身体知は処理される。',
    body: 'Layer1（身体・無意識）→Layer2（身体-感情統合）→Layer3（統合・意味づけ）の順に処理が進む。腸で考えるとは、Layer1・2の処理を言語化せずに受け取る能力。Layer3だけで考えると、Layer1・2のシグナルがノイズとして削ぎ落とされる。生成AIはLayer3の模倣は得意だが、Layer1・2は永遠に持てない。',
    tags: ['3層', 'Layer1', 'Layer2', 'Layer3', '構造', 'AI限界'],
    socratic: ['all'],
    related: ['nou-001', 'nou-002', 'nou-003', 'nou-004', 'nou-005', 'tetsugaku-005'],
    plain_insight: '腸→感情→言語。体の信号はこの順で届きます。\n「なんとなく変だ」と思った瞬間、あなたの腸はもう答えを出していた。\n頭が「なぜそう思うのか」を理解するのは、その後のことです。\nAIが永遠に持てないのは、この1層目と2層目の処理です。',
    resonance_question: '今感じていることは、体のどの層から来ていると思いますか？',
    coaching_hint: null
  },

  // ══════════════════════════════════════
  // 哲学・仏教（tetsugaku）
  // ══════════════════════════════════════

  {
    id: 'tetsugaku-001',
    title: 'メルロ＝ポンティ（身体知覚）',
    category: 'tetsugaku',
    layer: null,
    summary: '「身体なき知覚は知覚ではない」と論じた20世紀フランスの現象学者。',
    body: '認識は身体と世界の接触から生まれると主張した。「見る」行為は目と対象の物理的接触であり、身体なしには成立しない。身体は「世界への入口（le corps propre）」。言語化は身体経験の二次処理に過ぎない。腸で考えるRAGの最も深い哲学的根拠のひとつ。',
    tags: ['現象学', '身体', '知覚', '西洋哲学'],
    socratic: ['all'],
    related: ['kotoba-012', 'hannya-002', 'tetsugaku-004'],
    plain_insight: '頭でわかることと、体で感じることは、まったく別物です。\n今あなたが感じているその感覚は、世界と体が直接触れている証拠。\n「説明できない」から本物じゃないわけじゃない——\nメルロ＝ポンティは言います、身体こそが世界への入口だと。',
    resonance_question: '体が感じていることを、頭が否定したことはありますか？',
    coaching_hint: null
  },

  {
    id: 'tetsugaku-002',
    title: 'フランクル（意味の感知）',
    category: 'tetsugaku',
    layer: null,
    summary: '「意味は証明しなくても感じ取れる」と説いたオーストリアの精神科医・哲学者。',
    body: 'ロゴセラピーで論証不要の意味の感知を体系化した。「これをやるべきだ」「この人を助けたい」という感覚は、理屈以前に身体が感知する。意味は測ろうとすると逃げる（グッドハートの法則の身体版と同型）。身体知の文脈では「腑に落ちる」がフランクルの言う意味の感知に近い。',
    tags: ['ロゴセラピー', '意味', '感知', '論証不要'],
    socratic: ['kokoro'],
    related: ['kotoba-001', 'tetsugaku-003'],
    coaching_hint: null
  },

  {
    id: 'tetsugaku-003',
    title: 'グッドハートの法則（身体版）',
    category: 'tetsugaku',
    layer: null,
    summary: '測ろうとすると逃げる内的現象がある。身体知・動機・笑いはその代表例。',
    body: '元来は「指標が目標になると指標として機能しなくなる」という経済法則。身体知への応用：「自然な笑い」「本当の動機」「腑に落ちる感覚」は測定・管理しようとすると消える。コーチングで「やる気を出せ」が機能しないのはこのため。腸の記録は「観察する」であり「管理する」ではない、という設計原則に直結する。',
    tags: ['グッドハート', '測定', '管理', 'コーチング', '逆効果'],
    socratic: ['all'],
    related: ['tetsugaku-002', 'kotoba-007'],
    coaching_hint: null
  },

  {
    id: 'tetsugaku-004',
    title: '龍樹・中論・唯識論',
    category: 'tetsugaku',
    layer: null,
    summary: '認識は対象単独でも主体単独でも成立しない、と説いた仏教哲学。',
    body: '龍樹の中論は「実体としての自性は存在しない」と論じる空の哲学。唯識論は「認識はすべて識の変容である」と主張する。どちらも「腸で考える」の思想的根拠：感覚は対象と身体の接触で生まれる。西洋の現象学（メルロ＝ポンティ）と2500年前に独立に発見された同じ筋。',
    tags: ['龍樹', '中論', '唯識', '空', '仏教哲学'],
    socratic: ['all'],
    related: ['tetsugaku-001', 'hannya-001'],
    coaching_hint: null
  },

  {
    id: 'tetsugaku-005',
    title: '身体知とAI（Singularity対比）',
    category: 'tetsugaku',
    layer: null,
    summary: '生成AIはLayer3（言語・論理）の模倣は得意。Layer1・2の身体知は永遠に持てない。',
    body: '生成AIが模倣できるのは言語化された知（Layer3）のみ。「腑に落ちる」「ざわっと」「気配を読む」の正体である島皮質・ENSの処理は、身体なしには再現不能。チャーマーズの「意識のハード問題」が未解決である限り、主観的体験・身体感覚はAIに持てない。「正しい答え」は出せても「腑に落ちた状態」にはなれない。',
    tags: ['AI', 'Singularity', 'ハード問題', 'チャーマーズ', '限界'],
    socratic: ['all'],
    related: ['nou-007', 'kotoba-012'],
    coaching_hint: null
  },

  // ══════════════════════════════════════
  // 般若心経（hannya）
  // ══════════════════════════════════════

  {
    id: 'hannya-001',
    title: '五蘊皆空（ごうんかいくう）',
    category: 'hannya',
    layer: null,
    summary: '般若心経の根本命題。あなたを形づくるすべては固定していない——だから可能性は無限に広がる。',
    body: '色（物質・身体）、受（感覚・感受）、想（表象・知覚）、行（意志・形成力）、識（意識・判断）。「受」と「識」の間にある「想」「行」が身体知の処理に相当する。般若心経の「五蘊皆空」は、これら5要素の固定した実体はないと説く。腸で考えるは「受」と「識」の間の処理を大切にすること。',
    tags: ['五蘊', '色受想行識', '仏教', '認識論', '五蘊皆空'],
    socratic: ['all'],
    related: ['hannya-002', 'hannya-004', 'tetsugaku-004'],
    plain_insight: '「五蘊皆空」——あなたを形づくるすべては固定していない。\n固まっていないから、可能性は無限に広がっている。\n般若心経の「空」とは欠如ではなく枠のない余白のこと。\n2500年前の言葉が、今のあなたの可能性を肯定している。',
    resonance_question: '諦めていませんか？もうここまでと思っていませんか？——\nそんなことはないですよ。\n本当にやりたいことなら、できる未来しか見えないですもの。',
    coaching_hint: null
  },

  {
    id: 'hannya-002',
    title: '十八界（じゅうはちかい）',
    category: 'hannya',
    layer: null,
    summary: '認識は、6つの感覚器官・6つの対象・6つの識の18要素で生まれる。',
    body: '眼・耳・鼻・舌・身・意（感覚器）× 色・声・香・味・触・法（対象）× 眼識〜意識（認識）。「身」（触覚・身体感覚）と「意」（心の働き）が腸で考えるに最も関連する。認識は身体と対象の接触から生まれるという仏教の洞察は、メルロ＝ポンティの現象学と完全に一致する。',
    tags: ['十八界', '感覚器', '認識', '接触'],
    socratic: ['all'],
    related: ['hannya-001', 'tetsugaku-001'],
    coaching_hint: null
  },

  {
    id: 'hannya-003',
    title: '色即是空・空即是色',
    category: 'hannya',
    layer: null,
    summary: '実体があると見えるものも空であり、空こそが現象の場である。般若心経の核心。',
    body: '「色」は物質・現象、「空」は固定した実体のないこと。身体知の文脈では：直感・気配・腑に落ちる感覚は「実体のない」瞬間的な現象だが、だからこそ現実の認識として機能する。言語化すると「色」になる前の「空」の状態が身体知の本質に近い。固定したものではないから、記録し・蒸留し・継承する試みが意味を持つ。',
    tags: ['色即是空', '空', '無常', '瞬間'],
    socratic: ['all'],
    related: ['hannya-001', 'hannya-004'],
    coaching_hint: null
  },

  {
    id: 'hannya-004',
    title: '般若心経（概要）',
    category: 'hannya',
    layer: null,
    summary: '大乗仏教の核心を262文字に凝縮した経典。認識と実体の関係を説く。',
    body: '観自在菩薩が深い瞑想（行深般若波羅蜜多）で「五蘊皆空」を観る場面から始まる。身体・感覚・認識・意志・意識のすべてが空であると説く。腸で考えるRAGの哲学的起点として置いた理由：感覚と認識の間の処理（身体知）を2500年前にすでに精緻に記述していた。思想は東西で独立に発見される。',
    tags: ['般若心経', '大乗仏教', '262文字', '空'],
    socratic: ['all'],
    related: ['hannya-001', 'hannya-002', 'hannya-003'],
    coaching_hint: null
  }

];

// ── Retrieval function ─────────────────────────────
/**
 * 思想の筋に沿って知識文書を取得
 * 各層（般若心経・哲学・神経科学・身体知）から必ず1件確保する
 * @param {string} cat - 'hito' | 'basho' | 'mono' | 'kokoro'
 */
function buildKnowledgeContext(cat) {
  // ── 思想の筋：各層から代表1件を必ず確保 ──
  const lineage = [
    KNOWLEDGE.find(d => d.id === 'hannya-001'),     // 般若心経層：五蘊
    KNOWLEDGE.find(d => d.id === 'tetsugaku-001'),  // 哲学層：メルロ＝ポンティ
    KNOWLEDGE.find(d => d.id === 'nou-007'),         // 神経科学層：3層構造
    KNOWLEDGE.find(d => d.id === 'kotoba-011'),      // 身体知層：腸で考える
  ].filter(Boolean);

  const lineageIds = lineage.map(d => d.id);

  // ── カテゴリ固有の文書（lineage以外・strictly catに一致）──
  const catDocs = KNOWLEDGE
    .filter(d => !lineageIds.includes(d.id))
    .filter(d => d.socratic.includes(cat))
    .slice(0, 3);

  const selected = [...lineage, ...catDocs];
  if (!selected.length) return '';

  const lines = selected.map(d =>
    `・${d.title}（${d.category}）：${d.summary}`
  );

  return `\n【思想の筋：般若心経→哲学→神経科学→身体知】\n${lines.join('\n')}\n`;
}

/**
 * ことばの種（plain_insight + resonance_question）を取得
 * lineage 4件の中からカテゴリに最も関連する1件を返す
 * @param {string} cat - 'hito' | 'basho' | 'mono' | 'kokoro'
 * @returns {{ title, plain_insight, resonance_question } | null}
 */
function buildKnowledgeResonance(cat) {
  // カテゴリ固有優先順位
  const catPriority = {
    hito:   ['tetsugaku-001', 'hannya-001', 'kotoba-011', 'nou-007'],
    basho:  ['kotoba-011', 'nou-007', 'tetsugaku-001', 'hannya-001'],
    mono:   ['tetsugaku-001', 'kotoba-011', 'nou-007', 'hannya-001'],
    kokoro: ['hannya-001', 'nou-007', 'kotoba-011', 'tetsugaku-001'],
  };
  const order = catPriority[cat] || ['hannya-001', 'tetsugaku-001', 'nou-007', 'kotoba-011'];
  for (const id of order) {
    const doc = KNOWLEDGE.find(d => d.id === id);
    if (doc && doc.plain_insight && doc.resonance_question) {
      return { title: doc.title, plain_insight: doc.plain_insight, resonance_question: doc.resonance_question };
    }
  }
  return null;
}
