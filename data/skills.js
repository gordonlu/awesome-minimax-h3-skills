/* ============================================================
 * Awesome MiniMax H3 Skills — Site Data (v0.1, manually curated)
 * Source of truth: https://github.com/MiniMax-AI/MiniMax-H3
 * All official content is simplified faithfully; sources kept.
 * ============================================================ */

window.AMHS_DATA = {
  meta: {
    repo: "https://github.com/MiniMax-AI/MiniMax-H3",
    skillsReadme: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills",
    installList: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --list",
    installAll: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill '*'",
  },

  categories: [
    { id: "prompt",        en: "Prompt",        zh: "提示词",   color: "#FFD166" },
    { id: "animation",     en: "Animation",     zh: "动画",     color: "#8E7CFF" },
    { id: "commercial-ad", en: "Commercial Ad", zh: "商业广告", color: "#FF6C37" },
    { id: "creative",      en: "Creative",      zh: "创意实验", color: "#43C6E8" },
    { id: "education",     en: "Education",     zh: "教育",     color: "#62D187" },
    { id: "music",         en: "Music",         zh: "音频音乐", color: "#FF5C8A" },
    { id: "game",          en: "Game",          zh: "游戏",     color: "#5B9DFF" },
    { id: "e-commerce",    en: "E-Commerce",    zh: "电商",     color: "#FFB84D" },
  ],

  skills: [
    /* ----------------------------------------------------------
     * FOUNDATION SKILL
     * ---------------------------------------------------------- */
    {
      slug: "h3-prompt-writing",
      name: "H3 Prompt Writing",
      nameZh: "H3 提示词写作",
      sourceType: "official",
      author: { en: "MiniMax", zh: "MiniMax" },
      version: null,
      foundation: true,
      summary: {
        en: "Write structured MiniMax H3 video generation prompts for all five generation modes.",
        zh: "为全部五种 H3 生成模式撰写结构化视频生成提示词。",
      },
      description: {
        en: "The foundation skill shared by every H3 video workflow. It rewrites multimodal requests into H3's prompt structure — integrated_multimodal_description, overall_soundscape, and non_diegetic_music — aligns keyframes with exact timestamps, and defines consistent reference labels for images, videos, and audio. Portable to any agent that can read local files: no external API calls or proprietary runtime required.",
        zh: "所有 H3 视频工作流共用的基础 Skill。它将多模态需求改写为 H3 提示词结构 —— integrated_multimodal_description、overall_soundscape、non_diegetic_music —— 将关键帧与精确时间戳对齐，并为图片、视频、音频定义一致的参考标签。可移植到任何能读取本地文件的 Agent，无需外部 API 或专有运行时。",
      },
      categories: ["prompt"],
      tags: [
        { en: "Prompt Structure", zh: "提示词结构" },
        { en: "All Generation Modes", zh: "全部生成模式" },
        { en: "Agent-Portable", zh: "可移植" },
      ],
      languages: ["en"],
      languageNote: {
        en: "Ships in English only for now.",
        zh: "目前仅提供英文版本。",
      },
      preview: null,
      inputs: [
        { en: "Your video idea as text, with optional reference assets (images, video, audio)", zh: "视频需求文字描述，可选图片 / 视频 / 音频参考素材" },
        { en: "Target generation mode: T2VA, I2VA, FL2VA, L2VA, or Ref2VA", zh: "目标生成模式：T2VA / I2VA / FL2VA / L2VA / Ref2VA" },
        { en: "Requested duration, plus dialogue or lyrics kept in their original language", zh: "期望时长，以及对白、歌词等需保留原文的内容" },
      ],
      capabilities: [
        { en: "Rewrites multimodal requests into H3's prompt structure", zh: "将多模态需求改写为 H3 提示词结构" },
        { en: "Composes integrated_multimodal_description, overall_soundscape, and non_diegetic_music", zh: "组织 integrated_multimodal_description、overall_soundscape、non_diegetic_music 三大核心字段" },
        { en: "Aligns first / last keyframes with exact timestamps", zh: "将首尾关键帧与精确时间戳对齐" },
        { en: "Defines consistent reference labels (<Subject N>, <Picture N>, <Video N>, <Audio N>) for Ref2VA", zh: "为 Ref2VA 定义一致的参考标签（<Subject N>、<Picture N>、<Video N>、<Audio N>）" },
      ],
      workflow: [
        { id: "mode",    title: { en: "Identify the input mode", zh: "识别输入模式" }, desc: { en: "T2VA, I2VA, FL2VA, L2VA, or full-reference Ref2VA.", zh: "判断属于 T2VA、I2VA、FL2VA、L2VA 还是全参考 Ref2VA。" } },
        { id: "guide",   title: { en: "Read the matching prompt guide", zh: "读取对应 Prompt Guide" }, desc: { en: "base-en.txt for text/keyframe modes; ref-en.txt for Ref2VA.", zh: "文本/关键帧模式读 base-en.txt，Ref2VA 读 ref-en.txt。" } },
        { id: "rewrite", title: { en: "Rewrite into the H3 structure", zh: "按结构改写" }, desc: { en: "Preserve exact field names, section order, labels, and timing notation from the guide.", zh: "严格保留指南中的字段名、段落顺序、标签与计时记号。" } },
        { id: "output",  title: { en: "Deliver the structured prompt", zh: "输出结构化提示词" }, desc: { en: "Rewrite sections in English; dialogue, lyrics, and visible scene text stay in their original language.", zh: "改写段落使用英文；对白、歌词与画面文字保留原文。" } },
      ],
      outputs: [
        { en: "Structured H3 video generation prompt", zh: "结构化 H3 视频生成提示词" },
      ],
      modes: [
        { id: "T2VA",   en: "Builds the full audiovisual timeline from text.", zh: "从文本构建完整视听时间线。" },
        { id: "I2VA",   en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" },
        { id: "FL2VA",  en: "Describes the continuous path between the first and last frames.", zh: "描述首帧到尾帧之间的连续路径。" },
        { id: "L2VA",   en: "Infers a plausible opening and converges to the supplied last frame.", zh: "推断合理开场，收敛至给定尾帧。" },
        { id: "Ref2VA", en: "Full-reference rewrite: six sections with consistent labels for subjects, pictures, video, and audio.", zh: "全参考改写：六个段落，为人物、图片、视频、音频保持一致标签。" },
      ],
      promptStructures: [
        {
          label: { en: "Base modes · T2VA / I2VA / FL2VA / L2VA", zh: "基础模式 · T2VA / I2VA / FL2VA / L2VA" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
        {
          label: { en: "Full-reference mode · Ref2VA", zh: "全参考模式 · Ref2VA" },
          fields: ["subject_definitions", "summary", "retention_analysis", "detailed_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Any H3 generation request that needs a well-structured prompt", zh: "所有需要结构化提示词的 H3 生成需求" },
        { en: "The shared foundation under every other video skill on this site", zh: "本站其他视频 Skill 共用的底层能力" },
      ],
      notFor: [],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill h3-prompt-writing",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/h3-prompt-writing",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/h3-prompt-writing/SKILL.md",
        skillCnMd: null,
        docs: [
          { label: { en: "base-en.txt — text/keyframe modes guide", zh: "base-en.txt — 文本/关键帧模式指南" }, url: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/h3-prompt-writing/references/base-en.txt" },
          { label: { en: "ref-en.txt — full-reference (Ref2VA) guide", zh: "ref-en.txt — 全参考（Ref2VA）指南" }, url: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/h3-prompt-writing/references/ref-en.txt" },
        ],
      },
    },

    /* ----------------------------------------------------------
     * COMMUNITY SKILL (authored for this repo)
     * ---------------------------------------------------------- */
    {
      slug: "reference-motion-transfer",
      name: "Reference Motion Transfer",
      nameZh: "动作参考迁移",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Recreate a character or animal with the exact dance routine from a reference clip — lock the look with a reference image, lock the moves with a reference video.",
        zh: "让任意角色/动物完整复刻参考视频中的舞蹈动作——参考图锁形象，参考视频锁动作，节奏节拍级对齐。",
      },
      description: {
        en: "A practical companion to the official h3-prompt-writing foundation. It classifies the request into one of four transfer levels, extracts the beat map from the reference video (via zero-crossing BPM estimation), separates scene and camera decisions from the reference, then builds a six-section Ref2VA prompt where retention_analysis marks every preserved attribute explicitly and detailed_description carries only style, scene, and timing — never invented steps. Ships with a verified 7-second example: a fox in a cropped hoodie dancing to the full reference routine, generated end-to-end on the MiniMax H3 WebApp.",
        zh: "官方 h3-prompt-writing 基础 Skill 的实战配套。将需求划分为四级迁移，用零交点法从参考视频提取节拍表，把场景/相机决策与参考内容分离，再构建六段式 Ref2VA 提示词——retention_analysis 逐条标记保留属性，detailed_description 只承载风格、场景与节奏，绝不自行编造动作。附带一个已跑通的 7 秒示例：穿连帽衫的狐狸完整复刻参考舞步，全程在 MiniMax H3 WebApp 端到端生成。",
      },
      categories: ["creative"],
      tags: [
        { en: "Motion Transfer", zh: "动作迁移" },
        { en: "Ref2VA", zh: "Ref2VA" },
        { en: "Beat Map", zh: "节拍表" },
        { en: "Dance/Cinematic", zh: "舞蹈/影视" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/reference-motion-transfer/assets/poster.webp",
        video: "community-skills/reference-motion-transfer/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/reference-motion-transfer/assets/preview.gif",
        caption: { en: "Actual output: the fox dances the full reference routine, generated on the MiniMax H3 WebApp", zh: "实际成片：狐狸完整复刻参考舞蹈，由 MiniMax H3 WebApp 生成" },
      },
      inputs: [
        { en: "Target subject: a reference image of the character or animal", zh: "目标主体：角色/动物的参考图片" },
        { en: "Reference clip whose motion, routine, or vibe should be transferred", zh: "动作来源：承载动作、舞蹈或氛围的参考视频" },
        { en: "Transfer level: verbatim, keep-look-new-moves, partial, or beat-only rewrite", zh: "迁移等级：逐帧复刻 / 保形换动作 / 局部迁移 / 只借节拍重构" },
        { en: "Target duration, aspect ratio, scene and camera preferences", zh: "目标时长、画幅比例、场景与相机偏好" },
      ],
      capabilities: [
        { en: "Classifies the request into 4 transfer levels (verbatim / keep-look / partial / beat-only)", zh: "将需求划分为四级迁移（完整复刻 / 保形换动作 / 局部迁移 / 只借节拍）" },
        { en: "Extracts a beat map from the reference video via zero-crossing BPM estimation", zh: "通过零交点法从参考视频提取节拍表" },
        { en: "Builds a six-section Ref2VA prompt using the official reference guide", zh: "按官方参考指南构建六段式 Ref2VA 提示词" },
        { en: "Keeps detailed_description style-only: never invents steps, Never restates the moves", zh: "detailed_description 只写风格不写动作：绝不自行编造舞步" },
        { en: "Verifies the output against a 7-point acceptance checklist", zh: "按 7 项验收清单核验成片与提示词的对应关系" },
      ],
      workflow: [
        { id: "clarify", title: { en: "Identify the transfer level", zh: "判断迁移等级" }, desc: { en: "Verbatim full routine, keep-look-new-moves, partial transfer, or beat-only rebuild.", zh: "逐帧复刻 / 保形换动作 / 局部迁移 / 只借节拍重构。" } },
        { id: "beats",   title: { en: "Extract the beat map", zh: "提取节拍表" }, desc: { en: "Resample the clip, detect zero crossings, estimate BPM, and anchor key poses to timestamps.", zh: "重采样参考片段，用零交点法估 BPM，把关键姿态锚定到时间戳。" } },
        { id: "decouple", title: { en: "Separate scene from motion", zh: "场景与动作解耦" }, desc: { en: "Scene, camera and wardrobe decisions come from the user — never copied from the reference.", zh: "场景、相机、服装决策来自用户，不从参考视频搬运。" } },
        { id: "compose", title: { en: "Compose the Ref2VA prompt", zh: "构建 Ref2VA 提示词" }, desc: { en: "subject_definitions → summary → retention_analysis → detailed_description → overall_soundscape → non_diegetic_music, with consistent labels.", zh: "subject_definitions → summary → retention_analysis → detailed_description → overall_soundscape → non_diegetic_music，标签全程一致。" } },
        { id: "verify",  title: { en: "Generate and verify", zh: "生成并验收" }, desc: { en: "Run on the WebApp, then check identity, moves, timing, and audio against the 7-point list.", zh: "WebApp 生成后，对照 7 项清单核验形象、动作、节奏与音频。" } },
      ],
      outputs: [
        { en: "Final generation clip (MP4) with reference-locked identity and beats", zh: "最终生成成片（MP4），形象与节拍严格锁定参考" },
        { en: "Beat map with timestamped key poses", zh: "带时间戳关键姿态的节拍表" },
        { en: "The full six-section Ref2VA prompt for reuse", zh: "可复用的完整六段式 Ref2VA 提示词" },
      ],
      modes: [
        { id: "Ref2VA", en: "Full transfer: image locks the look, video locks the moves — the skill's primary mode.", zh: "完整迁移：图锁形象、视频锁动作——本 Skill 的主模式。" },
        { id: "I2VA",   en: "Lock the look only and start from the first frame.", zh: "只锁形象，从首帧向前推进。" },
        { id: "FL2VA",  en: "Emulate the reference's vibe along a described path between two keyframes.", zh: "只借氛围，沿首尾帧之间的描述路径做风格化。" },
        { id: "L2VA",   en: "Rebuild motion from the beat map, converging to the supplied last frame.", zh: "依据节拍表重构动作，收敛至给定尾帧。" },
      ],
      promptStructures: [
        {
          label: { en: "Full-transfer mode · Ref2VA", zh: "完整迁移 · Ref2VA" },
          fields: ["subject_definitions", "summary", "retention_analysis", "detailed_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Recreating a character / animal performing an existing dance or motion routine", zh: "让角色/动物复刻现有舞蹈或动作套路" },
        { en: "Keep-look-new-moves: same subject, choreography invented from a beat map", zh: "保形换动作：同一形象，依据节拍表新编舞" },
        { en: "Partial transfer: borrowing one motion motif into a new scene", zh: "局部迁移：把某个动作母题挪进新场景" },
      ],
      notFor: [
        { en: "Pure text description without any reference video or image", zh: "无任何参考视频/图片的纯文本描述" },
        { en: "Requests that demand a completely different scene and camera layout", zh: "场景与机位布局被要求完全不同的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill reference-motion-transfer",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/reference-motion-transfer",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/reference-motion-transfer/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/reference-motion-transfer/SKILL.cn.md",
        docs: [
          { label: { en: "prompt-library.md — one example per mode", zh: "prompt-library.md — 每模式一例" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/reference-motion-transfer/references/prompt-library.md" },
          { label: { en: "Official prompt anthology (curated from the H3 manual)", zh: "官方提示词合辑（精选自 H3 使用手册）" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/docs/official-prompt-anthology.md" },
        ],
      },
    },

    {
      slug: "suv-commercial",
      name: "SUV Commercial — Future Luxury Vehicle Ad",
      nameZh: "豪华 SUV 广告",
      sourceType: "community",
      author: { en: "Flkrstudio (packaged by gordonlu)", zh: "Flkrstudio（gordonlu 打包）" },
      version: "0.1.0",
      summary: {
        en: "Generate a top-tier future luxury SUV commercial as one continuous 15s 16:9 24fps film from a single vehicle reference image — elegant, restrained, real, with NO BGM.",
        zh: "从单张车辆参考图生成一段 15 秒 / 16:9 / 24fps 的顶级未来豪华 SUV 广告——优雅、克制、真实，无 BGM。",
      },
      description: {
        en: "For creators who want a future luxury SUV / car commercial that feels elegant, expensive, restrained and real — like an international luxury car brand spot. The Skill locks the vehicle to a single reference image (no redesign, no second interior), enforces LEFT-HAND DRIVE consistency in every interior shot, restricts the palette to a night Brutalist showroom look, allows only five typography lines with soft-fade motion, and uses NO BGM — pure cinematic SFX. Covers a continuous 12-CUT narrative: admire → caress → open the left front door → sit in → leather detail → ignition → instrument & console boot → deep-blue ambient light → headlight ignition → drive off. Original prompt by Flkrstudio; packaged with reference-locking rules, a Chinese localisation, and a verified 15s output.",
        zh: "面向想要未来豪华 SUV / 汽车广告、必须优雅昂贵克制真实、如国际豪华汽车品牌正式商业片的创作者。Skill 将车辆锁定单张参考图（禁止重新设计、禁止第二套内饰），全片强约束左舵一致性，配色限于夜间 Brutalist 展厅质感，只允许五组细字重文字的柔和淡入淡出动画，NO BGM——纯电影级 SFX。覆盖连续 12 CUT 叙事：欣赏车身 → 轻抚 → 开左前门 → 入座 → 皮革细节 → 启动 → 仪表与中控点亮 → 深蓝氛围灯 → 前灯点亮 → 驶离。原始 prompt 由 Flkrstudio 创作；打包了参考锁定规则、中文本地化与一条已跑通的 15 秒成片。",
      },
      categories: ["commercial-ad"],
      tags: [
        { en: "Luxury SUV", zh: "豪华 SUV" },
        { en: "Vehicle Reference Lock", zh: "车辆参考锁定" },
        { en: "Left-Hand Drive", zh: "左舵一致性" },
        { en: "No BGM", zh: "无 BGM" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/suv-commercial/assets/poster.webp",
        video: "community-skills/suv-commercial/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/suv-commercial/assets/preview.mp4",
        caption: { en: "Actual output: 15.08s / 1376×768 / 24fps generated on MiniMax H3 from the packaged prompt and reference", zh: "实际成片：15.08s / 1376×768 / 24fps，由打包 prompt + 参考图在 MiniMax H3 生成" },
      },
      inputs: [
        { en: "One vehicle reference image — the ONLY reference for the vehicle", zh: "一张车辆参考图——车辆的唯一参考" },
        { en: "Optional: female driver description (face, blue-gray eyes, dark long hair, black minimal outfit)", zh: "可选：女司机文字描述（脸、蓝灰色眼睛、深色长发、黑色极简服装）" },
        { en: "Target duration 15s, aspect 16:9, 24fps, cinematic 4K-grade look", zh: "目标时长 15s、画幅 16:9、24fps、电影级 4K 质感" },
      ],
      capabilities: [
        { en: "Locks the vehicle to the reference image: body, doors, glass, wheels, lights, bumpers, interior — no redesign, no second interior", zh: "车辆锁定参考图：车身、车门、玻璃、轮毂、灯组、保险杠、内饰——禁止重新设计、禁止第二套内饰" },
        { en: "Enforces LEFT-HAND DRIVE consistency in every interior shot (no mirroring / RHD / flipped interior)", zh: "全片强约束左舵一致性（禁止镜像 / 右舵 / 内饰翻转）" },
        { en: "Restricts the palette to a night Brutalist showroom look with a single deep-blue ambient-light accent", zh: "配色限于夜间 Brutalist 展厅质感，仅深蓝氛围灯点睛" },
        { en: "Allows only five soft-fade typography lines, NO BGM — pure cinematic SFX", zh: "只允许五组柔和淡入淡出文字，无 BGM——纯电影级 SFX" },
        { en: "Ships a verified 15s output with a continuous 12-CUT narrative", zh: "附带已跑通的 15 秒成片（连续 12 CUT 叙事）" },
      ],
      workflow: [
        { id: "assets", title: { en: "Confirm the vehicle reference", zh: "确认车辆参考图" }, desc: { en: "One vehicle image; confirm plate text (家越07) and optional driver description.", zh: "一张车辆图；确认车牌文案（家越07）与可选的女司机描述。" } },
        { id: "lock",    title: { en: "Lock the vehicle & LHD rules", zh: "锁定车辆与左舵规则" }, desc: { en: "Pin body/interior to the reference; steering fixed left, driver front-left, console centered.", zh: "车身与内饰钉死参考；方向盘固定左、司机左前、Console 居中。" } },
        { id: "compose", title: { en: "Compose the three-part prompt", zh: "构建三段式提示词" }, desc: { en: "Reference locking → core concept (environment, palette, typography) → 12-CUT timecoded shot list with negative rules and NO BGM.", zh: "参考锁定 → 核心创意（环境、配色、字体）→ 12 CUT 带时间码分镜表 + 反向约束 + NO BGM。" } },
        { id: "generate", title: { en: "Generate & verify", zh: "生成并验收" }, desc: { en: "I2VA on MiniMax H3; check vehicle lock, LHD consistency, lighting order (lights before motion), typography and SFX.", zh: "MiniMax H3 图生视频；核对车辆锁定、左舵一致、灯光顺序（先亮灯再移动）、文字与 SFX。" } },
      ],
      outputs: [
        { en: "One continuous 15s luxury SUV commercial (MP4) with native audio", zh: "一段连续 15 秒豪华 SUV 广告成片（MP4），原生音频" },
        { en: "The full three-part prompt for reuse", zh: "可复用的完整三段式提示词" },
      ],
      modes: [
        { id: "I2VA", en: "Image-to-video: the vehicle reference locks the vehicle; not used as the first frame unless explicitly requested.", zh: "图生视频：车辆参考图锁定车辆；除非明确要求，不作为首帧。" },
      ],
      promptStructures: [
        {
          label: { en: "I2VA · three-part structure", zh: "I2VA · 三段式结构" },
          fields: ["参考素材说明", "核心创意", "画面过程描述", "只允许文字", "音乐/音效", "不想要"],
        },
      ],
      bestFor: [
        { en: "Future luxury SUV / car brand commercials and showroom films", zh: "未来豪华 SUV / 汽车品牌广告与展厅电影" },
        { en: "Car launch / journey-begins films with interior detail and ambient lighting", zh: "新车发布 / 旅程开始的影片，含内饰细节与氛围灯" },
      ],
      notFor: [
        { en: "Tech-demo / sci-fi HUD overloaded car shots", zh: "科技 Demo / 科幻 HUD 堆满的车拍" },
        { en: "Racing-game style dynamic car chases", zh: "赛车游戏式动态追车" },
        { en: "Requests without a vehicle reference image", zh: "没有车辆参考图的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill suv-commercial",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/suv-commercial",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/suv-commercial/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/suv-commercial/SKILL.cn.md",
        docs: [
          { label: { en: "Original prompt — Flkrstudio on X", zh: "原始 prompt — Flkrstudio 的 X 帖" }, url: "https://x.com/Flkrstudio/status/2090230972851835104" },
        ],
      },
    },

    {
      slug: "link-skills-with-base-loop",
      name: "Link Skills with Base Loop — Character Showcase Sheet",
      nameZh: "技能联动 · 角色设定展示图",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Generate a magazine-grade character showcase sheet from one reference image as a near-static 4s shot.",
        zh: "从一张参考图生成杂志级角色设定展示图，近乎静止的 4 秒镜头。",
      },
      description: {
        en: "For creators who want a character setting / showcase board built from a single reference image: a hero key visual plus detail grid, three-view turnaround, palette board and nameplate, held as a near-static 4s shot with only the slightest living motion (fabric, hair, ink edges). The Skill locks the character's face, body, proportions, hairstyle, skin tone and outfit to the reference; no second character, no camera movement, no large motion. Cel-shaded 3D / semi-real CGI with print-grade detail.",
        zh: "面向想要从单张参考图构建角色设定展示板的创作者：英雄主视觉 + 细节网格 + 三视图 + 配色板 + 名牌，以近乎静止的 4 秒镜头呈现，仅衣摆、发丝与泼墨边缘有极轻微呼吸感动态。Skill 将角色脸、体型、比例、发型、肤色与服装锁死参考图；无第二人物、无镜头移动、无大幅运动。赛璐璐 3D / 半写实 CGI，印刷级细节。",
      },
      categories: ["creative"],
      tags: [
        { en: "Character Showcase", zh: "角色设定图" },
        { en: "Base Loop", zh: "基础循环" },
        { en: "Near-Static", zh: "近静态" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/link-skills-with-base-loop/assets/poster.webp",
        video: "community-skills/link-skills-with-base-loop/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/link-skills-with-base-loop/assets/preview.mp4",
        caption: { en: "Actual output: 4.46s / 1376×768 / 24fps generated on MiniMax H3", zh: "实际成片：4.46s / 1376×768 / 24fps，由 MiniMax H3 生成" },
      },
      inputs: [
        { en: "One character reference image — locks face, body, proportions, hairstyle, skin and outfit", zh: "一张角色参考图——锁定脸、体型、比例、发型、肤色与服装" },
        { en: "Optional: character name and copy lines for the nameplate and tagline", zh: "可选：角色名与名牌 / 标语文案" },
      ],
      capabilities: [
        { en: "Builds a hero key visual + detail grid + three-view turnaround + palette board from one image", zh: "从单张图构建英雄主视觉 + 细节网格 + 三视图 + 配色板" },
        { en: "Holds the frame near-static with only slight breathing motion on fabric/hair/ink edges", zh: "画面近静态，仅衣摆 / 发丝 / 泼墨边缘有极轻微呼吸感动态" },
        { en: "No second character, no camera movement, no large motion", zh: "无第二人物、无镜头移动、无大幅运动" },
      ],
      workflow: [
        { id: "lock",    title: { en: "Lock the character", zh: "锁定角色" }, desc: { en: "Pin face/body/proportions/hairstyle/skin/outfit to the reference.", zh: "将脸、体型、比例、发型、肤色、服装钉死参考图。" } },
        { id: "board",   title: { en: "Compose the board", zh: "构建版面" }, desc: { en: "Hero key visual + DETAILS insets + TURNAROUND three-view + PALETTE + nameplate.", zh: "英雄主视觉 + DETAILS 特写 + TURNAROUND 三视图 + PALETTE 配色板 + 名牌。" } },
        { id: "still",   title: { en: "Hold the frame", zh: "保持静止" }, desc: { en: "Near-static 4s shot, only slight breathing motion; no camera move, no second character.", zh: "近静态 4 秒镜头，仅轻微呼吸动态；无镜头移动、无第二人物。" } },
      ],
      outputs: [
        { en: "A near-static character showcase sheet MP4", zh: "近乎静止的角色设定展示图 MP4" },
      ],
      modes: [
        { id: "I2VA", en: "Image-to-video: the character reference locks the character; not used as the first frame unless explicitly requested.", zh: "图生视频：角色参考图锁定角色；除非明确要求，不作为首帧。" },
      ],
      promptStructures: [
        { label: { en: "I2VA · three-part structure", zh: "I2VA · 三段式结构" }, fields: ["参考素材说明", "核心创意", "画面过程描述", "不想要"] },
      ],
      bestFor: [
        { en: "Character setting / showcase boards for games, anime and series", zh: "游戏、动漫、系列作品的角色设定展示板" },
        { en: "Near-static character introduction cards", zh: "近乎静态的角色介绍卡" },
      ],
      notFor: [
        { en: "Animated scenes, fights or story sequences", zh: "动画场景、打斗或故事片段" },
        { en: "Real-photography looks (this is cel-shaded CGI)", zh: "真人摄影质感（本 Skill 是赛璐璐 CGI）" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill link-skills-with-base-loop",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/link-skills-with-base-loop",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/link-skills-with-base-loop/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/link-skills-with-base-loop/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "prove-product-through-first-person-test",
      name: "Prove Product Through First-Person Test — UGC Food Review",
      nameZh: "第一人称实测产品 · UGC 食品测评",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Generate an authentic first-person UGC food-tasting review (iPhone vlog style) from a single product reference image.",
        zh: "从一张产品参考图生成真实第一人称 UGC 食品试吃测评（iPhone vlog 质感）。",
      },
      description: {
        en: "For creators who want an authentic first-person UGC food review in iPhone selfie-vlog style — handheld, natural light, fast jump cuts, TikTok/Reels aesthetic. The Skill locks the food product (bun shape, filling thickness, juice state, toppings, proportions) to a single reference image in every shot across 8 fast shots, with Mandarin spoken lines. It keeps the review authentically casual: no commercial staging, no cinematic grade, no CGI food.",
        zh: "面向想要真实第一人称 UGC 食品测评的创作者：iPhone 自拍 vlog 质感、手持、自然光、快速跳切、抖音/Reels 审美。Skill 在 8 个快速分镜中把食品产品（白吉馍形状、卤肉厚度、腊汁状态、配菜、比例）锁死单张参考图，配普通话对白。保持测评的真实随意感：不做商业摆拍、不做电影感调色、不做 CGI 食品。",
      },
      categories: ["e-commerce"],
      tags: [
        { en: "UGC Food Review", zh: "UGC 食品测评" },
        { en: "First-Person Test", zh: "第一人称实测" },
        { en: "Mandarin", zh: "普通话" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/prove-product-through-first-person-test/assets/poster.webp",
        video: "community-skills/prove-product-through-first-person-test/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/prove-product-through-first-person-test/assets/preview.mp4",
        caption: { en: "Actual output: 15.08s / 1376×768 / 24fps generated on MiniMax H3", zh: "实际成片：15.08s / 1376×768 / 24fps，由 MiniMax H3 生成" },
      },
      inputs: [
        { en: "One food-product reference image — locks the product in every shot", zh: "一张食品产品参考图——每个镜头锁定产品" },
        { en: "Optional: reviewer description and spoken lines (Mandarin)", zh: "可选：测评者描述与普通话对白" },
      ],
      capabilities: [
        { en: "Builds an 8-shot first-person tasting review with Mandarin spoken lines", zh: "构建 8 分镜第一人称试吃测评，含普通话对白" },
        { en: "Locks the food product to the reference in every shot", zh: "每个镜头把食品产品锁死参考图" },
        { en: "Keeps authentic UGC style: handheld, natural light, fast jump cuts, no commercial staging", zh: "保持真实 UGC 质感：手持、自然光、快速跳切、无商业摆拍" },
      ],
      workflow: [
        { id: "lock",    title: { en: "Lock the product", zh: "锁定产品" }, desc: { en: "Pin bun/filling/juice/toppings/proportions to the reference in every shot.", zh: "每个镜头将白吉馍 / 卤肉 / 腊汁 / 配菜 / 比例钉死参考图。" } },
        { id: "shots",   title: { en: "Build 8 fast shots", zh: "构建 8 个快速分镜" }, desc: { en: "Bag → open → push-in → juice drip → bite & reaction → b-roll → toast → freeze with text.", zh: "纸袋 → 开袋 → 推近 → 淌汁 → 咬与反应 → b-roll → 干杯 → 定格加文字。" } },
        { id: "voice",   title: { en: "Write Mandarin lines", zh: "写普通话对白" }, desc: { en: "Authentic casual spoken lines, no commercial script tone.", zh: "真实随意的口语对白，无商业脚本腔。" } },
      ],
      outputs: [
        { en: "An 8-shot UGC food review MP4 with Mandarin voice", zh: "一段 8 分镜 UGC 食品测评 MP4，含普通话人声" },
      ],
      modes: [
        { id: "I2VA", en: "Image-to-video: the product reference locks the product; not used as the first frame unless explicitly requested.", zh: "图生视频：产品参考图锁定产品；除非明确要求，不作为首帧。" },
      ],
      promptStructures: [
        { label: { en: "I2VA · three-part structure", zh: "I2VA · 三段式结构" }, fields: ["参考素材说明", "核心创意", "画面过程描述", "不想要"] },
      ],
      bestFor: [
        { en: "UGC / KOC-style food reviews for e-commerce and social", zh: "电商 / 社交的 UGC、KOC 风食品测评" },
        { en: "First-person product-tasting shorts", zh: "第一人称产品试吃短视频" },
      ],
      notFor: [
        { en: "Cinematic commercial-grade food ads", zh: "电影级商业食品广告" },
        { en: "Professional studio talking-head content", zh: "专业影棚真人口播" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill prove-product-through-first-person-test",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/prove-product-through-first-person-test",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/prove-product-through-first-person-test/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/prove-product-through-first-person-test/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "use-material-as-progress-clock",
      name: "Use Material as Progress Clock — Heritage Craft Documentary Ad",
      nameZh: "材料即时间 · 非遗工艺纪录广告",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Generate a heritage-craft documentary ad where the material's own appearance is the clock of the film.",
        zh: "生成一支「材料自身外观就是影片时钟」的非遗工艺纪录广告。",
      },
      description: {
        en: "For creators who want an intangible-heritage craft documentary ad in which the material's own appearance is the film's clock — a 15s 9:16 vertical following a Miao silversmith forging an ornament through eight steps, with silver-white spreading from zero to everywhere as time passes. The Skill locks the finished silver piece to a single reference image, keeps silver-light from real metal and real light (no glow VFX), drives the story with a single restrained subtitle card, and uses on-site sound only (no music, no narration).",
        zh: "面向想要非遗工艺纪录广告、以材料自身外观作为影片时间指针的创作者——15 秒 9:16 竖版，跟随苗族银匠以八道工序锻造银饰，银白随时间从无到有、越来越多地占据画面。Skill 将最终银饰锁死单张参考图，银光必须来自真实金属与真实光线（无发光特效），用一块克制的字幕牌驱动叙事，仅现场原声（无音乐、无旁白）。",
      },
      categories: ["commercial-ad"],
      tags: [
        { en: "Heritage Craft", zh: "非遗工艺" },
        { en: "Material as Clock", zh: "材料即时间" },
        { en: "9:16 Vertical", zh: "9:16 竖版" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/use-material-as-progress-clock/assets/poster.webp",
        video: "community-skills/use-material-as-progress-clock/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/use-material-as-progress-clock/assets/preview.mp4",
        caption: { en: "Actual output: 15.08s / 768×1376 / 24fps generated on MiniMax H3", zh: "实际成片：15.08s / 768×1376 / 24fps，由 MiniMax H3 生成" },
      },
      inputs: [
        { en: "One reference image of the finished craft piece", zh: "一张最终工艺成物参考图" },
        { en: "Workshop & packaging scenes described in text", zh: "工坊与包装场景纯文字描述" },
      ],
      capabilities: [
        { en: "Uses the material's own transformation as the film's time marker (silver-white from zero to everywhere)", zh: "以材料自身转化为影片时间标记（银白从无到有、越来越多）" },
        { en: "Locks the finished piece to one reference image; silver-light from real metal, no glow VFX", zh: "成物锁死单张参考图；银光来自真实金属，无发光特效" },
        { en: "Subtitle-card-driven storytelling with on-site sound only (no music / narration)", zh: "字幕牌驱动叙事，仅现场原声（无音乐 / 无旁白）" },
      ],
      workflow: [
        { id: "lock",    title: { en: "Lock the finished piece", zh: "锁定成物" }, desc: { en: "Pin form/proportion/silver color/pattern to the reference; no added decorations.", zh: "将造型、比例、银面、纹样钉死参考图；不加不存在的装饰。" } },
        { id: "steps",   title: { en: "Eight timed steps", zh: "八道工序" }, desc: { en: "Beat → sheet → first pattern → chisel → finish → solder peak → polish reveal → box → shelf.", zh: "锤坯 → 成片 → 起纹 → 錾刻 → 成形 → 焊接高潮 → 擦亮显银 → 入盒 → 上架。" } },
        { id: "sound",   title: { en: "On-site sound design", zh: "现场声设计" }, desc: { en: "Material-real sounds only; the solder moment is the audio peak.", zh: "仅真实材料声；焊接瞬间为全片声音高潮。" } },
      ],
      outputs: [
        { en: "A 15s 9:16 heritage-craft documentary ad MP4", zh: "一段 15 秒 9:16 非遗工艺纪录广告 MP4" },
      ],
      modes: [
        { id: "I2VA", en: "Image-to-video: the finished-piece reference locks the piece; not used as the first frame unless explicitly requested.", zh: "图生视频：成物参考图锁定成物；除非明确要求，不作为首帧。" },
      ],
      promptStructures: [
        { label: { en: "I2VA · three-part structure", zh: "I2VA · 三段式结构" }, fields: ["参考素材说明", "核心创意", "画面过程描述", "字幕牌规则", "配色与光线", "声音", "不想要"] },
      ],
      bestFor: [
        { en: "Intangible-heritage craft ads and process documentaries", zh: "非遗工艺广告与工艺纪录" },
        { en: "From-nothing-to-finished-object brand films", zh: "从无到有成物的品牌片" },
      ],
      notFor: [
        { en: "Flashy national-style VFX shows or tourism promos", zh: "华丽国潮特效秀或旅游宣传片" },
        { en: "Museum-style exhibition films", zh: "博物馆式展览片" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill use-material-as-progress-clock",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/use-material-as-progress-clock",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/use-material-as-progress-clock/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/use-material-as-progress-clock/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "h3-promo-film",
      name: "H3 Promo Film Studio",
      nameZh: "文生宣传片",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Turn a text idea into a runnable MiniMax H3 promo or trailer prompt — food promos, product films, cinematic teasers, all from text alone.",
        zh: "纯文本写出可直接运行的 H3 宣传/预告片提示词——产品宣传、影视预告一条龙，风格句开头、时间码节拍、配乐一次写齐。",
      },
      description: {
        en: "Type-specific promo & trailer generation with zero reference assets: the prompt is the entire production. Decomposes the concept into 3–5 timecoded beats, writes the integrated_multimodal_description with a style sentence first and on-screen text placement, then overall_soundscape and non_diegetic_music per the official base-en.txt guide. Ships with runnable examples (Peking-duck food promo, space-opera teaser) in its prompt library.",
        zh: "宣传/预告片类型化文生、零参考素材——提示词就是全部制作。把创意拆成 3–5 个带时间码的节拍，风格句开头的 integrated_multimodal_description 配画面文字定位，再按官方 base-en.txt 指南写环境音与配乐。附可直接运行的示例（烤鸭美食宣传、太空史诗预告）。",
      },
      categories: ["prompt"],
      tags: [
        { en: "T2VA", zh: "T2VA" },
        { en: "Product Promo", zh: "产品宣传" },
        { en: "Timecoded Beats", zh: "时间码节拍" },
        { en: "Zero Assets", zh: "零素材" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/h3-promo-film/assets/poster.webp",
        video: "community-skills/h3-promo-film/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-promo-film/assets/preview.gif",
        caption: { en: "Actual output: Peking duck promo — steam in the oven, knife carving, perfect skin-to-meat fanning onto porcelain", zh: "实际成片：北京烤鸭宣传——炉中蒸汽、刀工片鸭、皮肉均匀铺上白瓷盘" },
      },
      inputs: [
        { en: "Concept & mood in one line", zh: "一句话概念与氛围" },
        { en: "Aspect ratio and duration (4–15s)", zh: "画幅比例与时长（4–15 秒）" },
        { en: "Visual style, on-screen text, audio policy", zh: "视觉风格、画面文字、音频策略" },
      ],
      capabilities: [
        { en: "Decomposes any concept into 3–5 timecoded beats that tile the full duration", zh: "把任意概念拆成 3–5 个铺满全程的时间码节拍" },
        { en: "Writes style-first integrated_multimodal_description with camera moves per beat", zh: "写风格句开头的描述，逐拍带运镜" },
        { en: "Places on-screen text with exact position and original language", zh: "画面文字按位置定位并保留原文语言" },
        { en: "Generates overall_soundscape and non_diegetic_music per the official guide", zh: "按官方指南生成环境音与配乐方向" },
      ],
      workflow: [
        { id: "clarify", title: { en: "Confirm intake", zh: "确认输入" }, desc: { en: "Concept, ratio, duration, style, on-screen text, audio policy.", zh: "概念、画幅、时长、风格、画面文字、音频策略。" } },
        { id: "beats",   title: { en: "Build the beat sheet", zh: "搭建节拍表" }, desc: { en: "3–5 readable actions, ≥1s each, tiling the full duration.", zh: "3–5 个可读动作，每个 ≥1 秒，铺满全程。" } },
        { id: "compose", title: { en: "Compose the T2VA prompt", zh: "构建 T2VA 提示词" }, desc: { en: "Style sentence → [Shot N] → timecoded beats → soundscape → music.", zh: "风格句 → [Shot N] → 时间码节拍 → 环境音 → 配乐。" } },
        { id: "verify",  title: { en: "Generate and review", zh: "生成并验收" }, desc: { en: "Check beat coverage, scene/subject consistency, camera, text, audio.", zh: "核对节拍覆盖、场景与主体一致性、运镜、文字、音频。" } },
      ],
      outputs: [
        { en: "Final generation clip (MP4)", zh: "最终生成成片（MP4）" },
        { en: "The full T2VA prompt for reuse", zh: "可复用的完整 T2VA 提示词" },
        { en: "Timecoded beat sheet", zh: "带时间码的节拍表" },
      ],
      modes: [
        { id: "T2VA", en: "Pure text-to-video. No reference assets — the prompt is the footage.", zh: "纯文生视频。零参考素材——提示词就是画面。" },
      ],
      promptStructures: [
        {
          label: { en: "T2VA", zh: "T2VA" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Food / product promos, teasers, cinematic one-shots from text alone", zh: "纯文字的美食/产品宣传、预告片、氛围单镜头" },
        { en: "Explainer-style clips and kinetic-type pieces", zh: "说明型短片与动态文字片" },
      ],
      notFor: [
        { en: "Requests that carry reference images or videos", zh: "携带参考图或参考视频的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill h3-promo-film",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/h3-promo-film",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-promo-film/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-promo-film/SKILL.md",
        docs: [
          { label: { en: "prompt-library.md — runnable T2VA examples", zh: "prompt-library.md — 可直接运行的文生示例" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-promo-film/references/prompt-library.md" },
        ],
      },
    },

    {
      slug: "h3-keyframe-film",
      name: "H3 Keyframe Film Studio",
      nameZh: "图生关键帧短片",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Keyframe-driven image-to-video shorts: multi-keyframe montages, first-last frame transitions, final-frame landings — images lock identity, text drives motion.",
        zh: "关键帧驱动的图生短片：多关键帧蒙太奇、首尾帧过渡、尾帧落定——图片锁形象，文字锁动作。",
      },
      description: {
        en: "Type-specific keyframe-film generation. Covers multi-keyframe montages (I2VA), first+last frame transitions (FL2VA), and last-frame landings (L2VA). Uses the exact keyframe-alignment instruction lines from base-en.txt, identity anchors that survive every frame, and timecoded motion paths that land on the locked end frame. Ships with runnable examples (telescope montage, sword-dance FL2VA, toast L2VA).",
        zh: "关键帧短片类型化图生。覆盖多关键帧蒙太奇（I2VA）、首尾帧过渡（FL2VA）、尾帧落定（L2VA）。使用 base-en.txt 的关键帧对齐指令固定句式，身份锚点贯穿全片，时间码动作路径精确落帧。附可直接运行的示例（望远镜蒙太奇、舞剑首尾帧、举杯尾帧）。",
      },
      categories: ["prompt"],
      tags: [
        { en: "I2VA", zh: "I2VA" },
        { en: "FL2VA / L2VA", zh: "FL2VA / L2VA" },
        { en: "Keyframes", zh: "关键帧" },
        { en: "Storyboard", zh: "分镜叙事" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/h3-keyframe-film/assets/poster.webp",
        video: "community-skills/h3-keyframe-film/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-keyframe-film/assets/preview.gif",
        caption: { en: "Actual output: wuxia swordsman FL2VA — opening stance flows through sweeps, leap, and turn, landing exactly on the closing pose", zh: "实际成片：剑客首尾帧——起势连贯平扫纵跃回旋，精确落到收势定格" },
      },
      inputs: [
        { en: "Reference image(s): start frame, end frame, or keyframe sequence", zh: "参考图：首帧 / 尾帧 / 关键帧序列" },
        { en: "Motion description with beats, in words", zh: "文字化的动作描述与节拍" },
        { en: "Aspect ratio, duration, style and audio policy", zh: "画幅、时长、风格与音频策略" },
      ],
      capabilities: [
        { en: "Selects the mode (I2VA / FL2VA / L2VA) from the available images", zh: "按可用图片选择模式（I2VA / FL2VA / L2VA）" },
        { en: "Writes the exact keyframe-alignment instruction lines from base-en.txt", zh: "写出与官方一致的 keyframe 对齐指令固定句式" },
        { en: "Keeps identity anchors consistent across every frame", zh: "身份锚点全程一致，多帧不漂移" },
        { en: "Lands the final beat exactly on the locked end frame", zh: "末拍精确落在锁定的尾帧" },
      ],
      workflow: [
        { id: "clarify", title: { en: "Confirm images and their roles", zh: "确认图片与角色" }, desc: { en: "Start frame / end frame / keyframe sequence.", zh: "首帧 / 尾帧 / 关键帧序列。" } },
        { id: "mode",    title: { en: "Pick the mode", zh: "选择模式" }, desc: { en: "I2VA for first frame, FL2VA for both frames, L2VA for the final frame only.", zh: "首帧用 I2VA，首尾双帧用 FL2VA，仅尾帧用 L2VA。" } },
        { id: "compose", title: { en: "Compose the prompt", zh: "构建提示词" }, desc: { en: "Alignment line → blank line → description with timecoded beats → soundscape → music.", zh: "对齐指令行 → 空行 → 带时间码节拍的描述 → 环境音 → 配乐。" } },
        { id: "verify",  title: { en: "Generate and review", zh: "生成并验收" }, desc: { en: "Identity, beat order, end-frame landing, camera, audio.", zh: "身份、节拍顺序、落帧、运镜、音频。" } },
      ],
      outputs: [
        { en: "Final generation clip (MP4)", zh: "最终生成成片（MP4）" },
        { en: "The full prompt with alignment line for reuse", zh: "含对齐指令行的完整提示词" },
      ],
      modes: [
        { id: "I2VA",  en: "First-frame locked; text drives the motion.", zh: "首帧锁定，文字驱动动作。" },
        { id: "FL2VA", en: "Start and end poses both locked; describe the path between.", zh: "首尾双帧锁定，描述其间路径。" },
        { id: "L2VA",  en: "Only the final frame; reverse-engineer the approach.", zh: "仅尾帧，倒推开场动作。" },
      ],
      promptStructures: [
        {
          label: { en: "I2VA / FL2VA / L2VA", zh: "I2VA / FL2VA / L2VA" },
          fields: ["keyframe-alignment line", "integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Animating character sheets, product shots, or keyframe montages", zh: "让角色设定图、产品图、关键帧序列动起来" },
        { en: "Pose-to-pose transitions and exact final-frame landing", zh: "姿态间过渡与精确落帧" },
      ],
      notFor: [
        { en: "Pure-text requests without any image", zh: "没有任何图片的纯文本需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill h3-keyframe-film",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/h3-keyframe-film",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-keyframe-film/SKILL.md",
        skillCnMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-keyframe-film/SKILL.md",
        docs: [
          { label: { en: "prompt-library.md — runnable I2VA/FL2VA/L2VA examples", zh: "prompt-library.md — 可直接运行的图生示例" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/h3-keyframe-film/references/prompt-library.md" },
        ],
      },
    },

    /* ----------------------------------------------------------
     * VIDEO STYLE SKILLS (order follows official README table)
     * ---------------------------------------------------------- */
    
      {
      slug: "cinematic-key-art-animator",
      name: "Cinematic Key Art Animator",
      nameZh: "影视级主视觉动画",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "One character key-art / illustration becomes a 7–8s moving-key-art clip — atmospheric Living Key Art or high-density Action Burst, identity locked.",
        zh: "一张角色主视觉/立绘变 7–8 秒动态主视觉——氛围化 Living Key Art 或高密度 Action Burst，身份全程锁定。",
      },
      description: {
        en: "Turns a single strong static character image into a short moving-key-art sequence without redesigning the character. Routes automatically between Living Key Art (portraits, emotional art, atmospheric poses) and Action Burst (mecha, weapons, combat poses), locks identity anchors (face, hairstyle, costume, weapon, silhouette), and enforces a causal action chain with escalating peaks — the character, never the camera, owns the motion. Ships with templates for both modes, a canonical mecha combat burst demo, per-failure recovery guidance, and a 17-point QC checklist.",
        zh: "把一张强静态角色图变成短动态主视觉序列，且不改动角色设计。自动在 Living Key Art（肖像、情绪艺术、氛围站姿）与 Action Burst（机甲、武器、战斗姿态）间路由，锁定身份锚点（脸、发型、服装、武器、剪影），强制因果动作链与逐级峰值——动作永远归角色不归镜头。附带两种模式的模板、机甲战斗 burst canonical demo、分故障恢复指南与 17 项 QC 清单。",
      },
      categories: ["animation", "game", "creative"],
      tags: [
        { en: "Key Art", zh: "主视觉" },
        { en: "I2VA", zh: "I2VA" },
        { en: "Character Animation", zh: "角色动画" },
        { en: "Action", zh: "动作" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/cinematic-key-art-animator/assets/poster.webp",
        video: "community-skills/cinematic-key-art-animator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/cinematic-key-art-animator/assets/preview.gif",
        caption: { en: "Actual output: a white/dark-navy mecha on a rain-soaked deck fires, sidesteps, dashes, and lands an energy-blade slash", zh: "实际成片：白蓝机甲雨夜甲板战斗连段——点射、侧闪、冲刺、光刃横斩收尾" },
      },
      inputs: [
        { en: "One character illustration / key art / mecha artwork", zh: "一张角色插画/主视觉/机甲原画" },
        { en: "Desired mode: Living Key Art or Action Burst (auto-routed by subject)", zh: "期望模式：Living Key Art 或 Action Burst（按题材自动路由）" },
        { en: "Duration (default 8s), aspect ratio, action budget, tempo", zh: "时长（默认 8s）、画幅、动作预算、节奏" },
      ],
      capabilities: [
        { en: "Routes between atmospheric Living Key Art and high-density Action Burst", zh: "在氛围化 Living Key Art 与高密度 Action Burst 之间路由" },
        { en: "Locks identity anchors and allows significant pose change", zh: "锁定身份锚点，允许大幅姿态变化" },
        { en: "Enforces causal action chains with 2–3 escalating peaks", zh: "强制因果动作链与 2–3 个逐级峰值" },
        { en: "Keeps character motion primary; camera/effects strictly supporting", zh: "角色动作为主，镜头/特效严格辅助" },
      ],
      workflow: [
        { id: "route", title: { en: "Route the mode", zh: "路由模式" }, desc: { en: "Combat subject → Action Burst; portrait/atmosphere → Living Key Art.", zh: "战斗题材 → Action Burst；肖像/氛围 → Living Key Art。" } },
        { id: "lock", title: { en: "Lock identity", zh: "锁定身份" }, desc: { en: "Face, hair, costume, weapon, silhouette, art direction.", zh: "脸、发型、服装、武器、剪影、美术方向。" } },
        { id: "chain", title: { en: "Build the causal action chain", zh: "构建因果动作链" }, desc: { en: "Each beat creates the reason for the next; escalate to peaks.", zh: "每个节拍为下一节拍制造理由，逐级抬升到峰值。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Verify beat count, causal continuity, identity, final pose.", zh: "核对节拍数、因果连续、身份一致、终局姿态。" } },
      ],
      outputs: [
        { en: "A polished 7–8s moving key-art clip (MP4)", zh: "一段 7–8 秒动态主视觉成片（MP4）" },
        { en: "Mode-specific prompt template filled for reuse", zh: "按模式填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "I2VA", en: "Primary mode: the supplied image is frame 0 of H3-Base-FL2VA.", zh: "主模式：图片作为 H3-Base-FL2VA 的第 0 帧。" },
      ],
      promptStructures: [
        {
          label: { en: "Living Key Art / Action Burst · I2VA", zh: "Living Key Art / Action Burst · I2VA" },
          fields: ["frame-0 reference line", "integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Animating game key art, character illustrations, mecha art", zh: "游戏主视觉、角色立绘、机甲原画动起来" },
        { en: "Dynamic posters / moving portrait showcases", zh: "动态海报 / 动态立绘展示" },
        { en: "Short combat micro-scenes from a single pose image", zh: "单张姿态图生成短战斗微场景" },
      ],
      notFor: [
        { en: "Pure-text requests without any image", zh: "无图的纯文本需求" },
        { en: "Reference-video motion transfer", zh: "参考视频动作迁移" },
        { en: "Real identifiable persons or copyrighted characters", zh: "真人或受版权保护的角色" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill cinematic-key-art-animator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/cinematic-key-art-animator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/cinematic-key-art-animator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — one example per mode", zh: "prompt-library.md — 每模式一例" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/cinematic-key-art-animator/references/prompt-library.md" },
        ],
      },
    },

      {
      slug: "construction-timelapse-video-generator",
      name: "Construction Timelapse Video Generator",
      nameZh: "建造延时摄影",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "A 7–8s accelerated build-from-zero timelapse with persistent build state — completed work never disappears, resets, or changes design.",
        zh: "7–8 秒从零建造的加速延时——强制「建造状态持续」，已完成部分绝不消失、重置或改设计。",
      },
      description: {
        en: "Satisfying construction and assembly clips for structures, machines, interiors, infrastructure, and miniature worlds. Routes between FL2VA / L2VA / T2VA / I2VA according to which start/end images you have, requires 4–5 readable build stages with plausible dependency order, and keeps the growing structure — not cranes, machinery, or camera — as the primary motion owner. Ships with a canonical empty-hillside-to-villa demo and stage-by-stage beat plans.",
        zh: "建筑、机械、室内、基础设施与微缩世界的满足感建造短片。按你拥有的首/尾图在 FL2VA / L2VA / T2VA / I2VA 间自动路由，要求至少 4–5 个可读建造阶段且依赖顺序合理，并让增长的建筑——而非吊车、机械或镜头——成为主要动作载体。内置「空地到现代别墅」canonical demo 与逐阶段节拍计划。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Timelapse", zh: "延时摄影" },
        { en: "Construction", zh: "建造" },
        { en: "FL2VA/L2VA", zh: "FL2VA/L2VA" },
        { en: "Satisfying Content", zh: "解压内容" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/construction-timelapse-video-generator/assets/poster.webp",
        video: "community-skills/construction-timelapse-video-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/construction-timelapse-video-generator/assets/preview.gif",
        caption: { en: "Actual output: an empty hillside builds into a modern glass-and-wood villa with pool and landscaping", zh: "实际成片：空山坡 8 秒建起现代玻璃木别墅——地基、框架、幕墙、泳池、景观逐层完成" },
      },
      inputs: [
        { en: "Start image (optional), final image (optional), or neither", zh: "起始图（可选）、完工图（可选），或都没有" },
        { en: "Construction type: building / machine / interior / infrastructure / miniature", zh: "建造类型：建筑/机械/室内/基础设施/微缩世界" },
        { en: "Duration (default 8s), aspect ratio, realistic vs stylized build", zh: "时长（默认 8s）、画幅、写实或风格化建造" },
      ],
      capabilities: [
        { en: "Routes between FL2VA / L2VA / T2VA / I2VA by available images", zh: "按可用图片在 FL2VA / L2VA / T2VA / I2VA 间路由" },
        { en: "Enforces persistent build state (no disappearing / resetting structures)", zh: "强制建造状态持续（结构不消失/不重置）" },
        { en: "Requires 4–5 readable build stages with plausible order", zh: "要求 4–5 个可读建造阶段且顺序合理" },
        { en: "Keeps the growing structure as primary motion owner", zh: "让增长中的建筑成为主要动作载体" },
      ],
      workflow: [
        { id: "route", title: { en: "Pick the mode", zh: "选择模式" }, desc: { en: "L2VA for fast iteration with a final image; FL2VA for exact before/after; T2VA for pure-text; I2VA to lock the start site.", zh: "有完工图快速迭代用 L2VA；前后对比严格用 FL2VA；纯文用 T2VA；锁定起始地用 I2VA。" } },
        { id: "stages", title: { en: "Name 4–5 build stages", zh: "列出 4–5 个建造阶段" }, desc: { en: "Foundation → structure → envelope → systems → finishing, in dependency order.", zh: "地基 → 结构 → 围护 → 系统 → 收尾，按依赖顺序。" } },
        { id: "persist", title: { en: "Enforce persistence", zh: "强制持续性" }, desc: { en: "Completed stages stay forever; nothing resets, relocates, or redesigns.", zh: "已完成阶段永久保留；不重置、不移位、不改设计。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Check progress throughout, stage count, persistence, convergence.", zh: "核对全程进度、阶段数、持续性与收敛。" } },
      ],
      outputs: [
        { en: "A 7–8s accelerated construction timelapse (MP4)", zh: "一段 7–8 秒加速建造延时（MP4）" },
        { en: "Mode-appropriate prompt template filled for reuse", zh: "按模式填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "L2VA", en: "Final image anchors the exact destination; start site inferred.", zh: "完工图锚定精确终点，起始地合理推断。" },
        { id: "FL2VA", en: "Exact before/after control with matched start and end frames.", zh: "首尾帧匹配，前后对比严格受控。" },
        { id: "T2VA", en: "Fastest pure-text concept exploration.", zh: "纯文字最快概念探索。" },
        { id: "I2VA", en: "Start-site controlled exploration with a described final design.", zh: "锁定起始场地，文字描述最终设计。" },
      ],
      promptStructures: [
        {
          label: { en: "FL2VA / T2VA construction · 4–5 stage chain", zh: "FL2VA / T2VA 建造 · 4–5 阶段链" },
          fields: ["frame references (FL2VA)", "integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Building / assembly timelapses from zero or a raw site", zh: "从零或毛坯场地开始的建造/组装延时" },
        { en: "Infrastructure, interiors, machines, miniature world builds", zh: "基础设施、室内、机械、微缩世界建造" },
        { en: "Before/after reveals with matched frames", zh: "首尾帧匹配的前后对比揭示" },
      ],
      notFor: [
        { en: "Non-construction timelapses (growth, weather, urban flow)", zh: "非建造类延时（生长、天气、城市流动）" },
        { en: "Real-time construction without time compression", zh: "不带时间压缩的实时施工" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill construction-timelapse-video-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/construction-timelapse-video-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/construction-timelapse-video-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — one example per mode", zh: "prompt-library.md — 每模式一例" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/construction-timelapse-video-generator/references/prompt-library.md" },
        ],
      },
    },

      {
      slug: "living-ink-painting-video-generator",
      name: "Living Ink Painting Video Generator",
      nameZh: "水墨活化",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "A painted ink-wash subject moves inside the painting, then accelerates and breaks free from the paper as living ink-and-water.",
        zh: "画中水墨主体先灵动游走，再骤然加速突破纸面，化作流动的水墨生灵。",
      },
      description: {
        en: "A 7–8s text-to-video shot where a traditional ink-wash subject on rice paper comes alive: it moves briskly within the flat painting, then breaks free as a translucent ink-and-water form. Enforces ink-material continuity (brush-textured edges, ink trails, pigment), keeps the ink subject as primary motion owner, and includes a canonical red-black koi demo prompt that runs as-is on the H3 WebApp in T2VA mode.",
        zh: "一个 7–8 秒文生视频镜头：宣纸上的传统水墨主体活了过来——先在平面画作内快速游走，再破纸而出化作流动的水墨生灵。强制水墨材质连续（笔触边缘、墨迹拖尾、颜料质感），水墨主体始终是主要动作载体，内置可直接运行的红黑锦鲤 canonical demo（H3 WebApp T2VA 模式）。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Ink Wash", zh: "水墨" },
        { en: "T2VA", zh: "T2VA" },
        { en: "Chinese Art", zh: "国画" },
        { en: "Material Continuity", zh: "材质连续" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/living-ink-painting-video-generator/assets/poster.webp",
        video: "community-skills/living-ink-painting-video-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/living-ink-painting-video-generator/assets/preview.gif",
        caption: { en: "Actual output: a red-black koi swims across the ink painting, then breaks free from the paper as living ink", zh: "实际成片：红黑锦鲤在宣纸上灵动游动，破纸而出化作水墨生灵" },
      },
      inputs: [
        { en: "The ink-wash subject (fish, bird, mountain, blossom, dragon…)", zh: "水墨主体（鱼、鸟、山、花、龙……）" },
        { en: "Accent pigment / palette, table setting, optional musical instrument", zh: "点缀颜料/配色、桌面陈设、可选配器" },
        { en: "Duration (default 8s), aspect ratio", zh: "时长（默认 8s）、画幅" },
      ],
      capabilities: [
        { en: "Builds the three-phase arc: painted motion → break-free → dimensional hero moment", zh: "构建三段弧线：画内游走 → 破纸而出 → 立体英雄瞬间" },
        { en: "Enforces ink-material continuity throughout", zh: "全程强制水墨材质连续" },
        { en: "Keeps the ink subject as primary motion owner", zh: "水墨主体作为主要动作载体" },
      ],
      workflow: [
        { id: "subject", title: { en: "Pick the ink subject", zh: "选择水墨主体" }, desc: { en: "One painted subject; one accent pigment.", zh: "一个画中主体；一种点缀颜料。" } },
        { id: "arc", title: { en: "Build the 8s arc", zh: "构建 8 秒弧线" }, desc: { en: "First motion ≤1s → brisk painting travel → sharp break-free → dimensional arc → settle.", zh: "首动 ≤1s → 画内疾行 → 骤然破出 → 立体弧线 → 收尾。" } },
        { id: "material", title: { en: "Enforce ink material", zh: "锁定水墨材质" }, desc: { en: "Brush edges, ink trails, pigment separation, droplets.", zh: "笔触边缘、墨迹拖尾、颜料分离、墨滴。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Check peak, travel distance, material, camera ownership.", zh: "核对峰值、行进距离、材质与镜头归属。" } },
      ],
      outputs: [
        { en: "A 7–8s living ink painting clip (MP4)", zh: "一段 7–8 秒水墨活化短片（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "T2VA", en: "Primary mode: pure text, no reference material.", zh: "主模式：纯文本，无参考素材。" },
      ],
      promptStructures: [
        {
          label: { en: "Living ink · T2VA three-phase arc", zh: "水墨活化 · T2VA 三段弧线" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Ink-wash subjects coming alive and breaking free of the paper", zh: "水墨主体活化并破纸而出" },
        { en: "Traditional Chinese art inspired satisfying clips", zh: "国画风格的解压短片" },
      ],
      notFor: [
        { en: "Realistic watercolor / oil-painting styles", zh: "写实水彩/油画风格" },
        { en: "Requests carrying reference images or videos", zh: "携带参考图或参考视频的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill living-ink-painting-video-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/living-ink-painting-video-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/living-ink-painting-video-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — canonical koi demo", zh: "prompt-library.md — 锦鲤 canonical demo" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/living-ink-painting-video-generator/references/prompt-library.md" },
        ],
      },
    },

      {
      slug: "miniature-creature-awakening-video-generator",
      name: "Miniature Creature Awakening Video Generator",
      nameZh: "微缩生物苏醒",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "A small creature image visibly wakes, performs a clear body action, interacts with its surroundings, and lands a final pose.",
        zh: "小生物图肉眼可见地苏醒，完成明确肢体动作，与周围互动，并以可读姿态收尾。",
      },
      description: {
        en: "One image of a small creature, mascot, fantasy pet, figurine-like character, or tiny animal becomes a stable 7–8s I2VA clip. The creature must visibly wake, perform at least one clear multi-joint body action, interact with one nearby object or effect, and finish in a readable pose — identity and anatomy locked, no slow motion, camera strictly supporting. Includes a canonical tiny-dragon beat chain and failure-recovery guidance.",
        zh: "一张小生物图（吉祥物、幻想宠物、手办感角色、小动物）变成一个稳定的 7–8 秒 I2VA 短片。生物必须肉眼可见地苏醒、至少完成一个清晰的多关节肢体动作、与附近一个物体或特效互动、并以可读姿态收尾——身份与解剖结构锁定、禁用慢动作、镜头严格辅助。内置「小飞龙」canonical 节拍链与故障恢复指南。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Creature", zh: "生物" },
        { en: "I2VA", zh: "I2VA" },
        { en: "Mascot", zh: "吉祥物" },
        { en: "Identity Lock", zh: "身份锁定" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/miniature-creature-awakening-video-generator/assets/poster.webp",
        video: "community-skills/miniature-creature-awakening-video-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/miniature-creature-awakening-video-generator/assets/preview.gif",
        caption: { en: "Actual output: a tiny dragon wakes, stretches, sneezes golden sparks, and lands a hero pose", zh: "实际成片：小飞龙苏醒、伸腰、打喷嚏喷出金色火花，hero 姿态收尾" },
      },
      inputs: [
        { en: "One small-creature image (mascot, fantasy pet, figurine, tiny animal)", zh: "一张小生物图（吉祥物/幻想宠物/手办/小动物）" },
        { en: "Desired awakening arc and interaction target", zh: "期望的苏醒弧线与互动对象" },
        { en: "Duration (default 8s), aspect ratio", zh: "时长（默认 8s）、画幅" },
      ],
      capabilities: [
        { en: "Enforces a core motion spine: wake → body action → interaction → final pose", zh: "强制核心动作脊柱：苏醒 → 肢体动作 → 互动 → 收尾姿态" },
        { en: "Requires at least one clear multi-joint body action (no blink-only output)", zh: "至少一个清晰多关节动作（禁止只眨眼）" },
        { en: "Locks identity and anatomy; keeps camera strictly supporting", zh: "锁定身份与解剖；镜头严格辅助" },
      ],
      workflow: [
        { id: "spine", title: { en: "Define the motion spine", zh: "定义动作脊柱" }, desc: { en: "Wake → primary action → interaction/peak → reaction → final pose.", zh: "苏醒 → 主动作 → 互动/峰值 → 反应 → 收尾姿态。" } },
        { id: "lock", title: { en: "Lock identity", zh: "锁定身份" }, desc: { en: "Colors, anatomy, environment, important objects.", zh: "配色、解剖、环境、重要物件。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Check visible motion, peak, interaction, anatomy stability.", zh: "核对可见动作、峰值、互动、解剖稳定。" } },
      ],
      outputs: [
        { en: "A stable 7–8s awakening clip (MP4)", zh: "一段稳定的 7–8 秒苏醒短片（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "I2VA", en: "Primary mode: the supplied image is frame 0 of H3-Base-FL2VA.", zh: "主模式：图片作为 H3-Base-FL2VA 的第 0 帧。" },
      ],
      promptStructures: [
        {
          label: { en: "Awakening · I2VA motion spine", zh: "苏醒 · I2VA 动作脊柱" },
          fields: ["frame-0 reference line", "integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Animating mascots, fantasy pets, figurines, and tiny animals", zh: "吉祥物、幻想宠物、手办与小动物动起来" },
        { en: "Come-to-life reveals from a single creature image", zh: "单张生物图的「活过来」揭示" },
      ],
      notFor: [
        { en: "Pure-text requests without an image", zh: "无图的纯文本需求" },
        { en: "Human characters or large-scale scenes", zh: "人类角色或大型场景" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill miniature-creature-awakening-video-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/miniature-creature-awakening-video-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/miniature-creature-awakening-video-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — canonical tiny dragon", zh: "prompt-library.md — 小飞龙 canonical demo" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/miniature-creature-awakening-video-generator/references/prompt-library.md" },
        ],
      },
    },

      {
      slug: "miniature-world-landscape-generator",
      name: "Miniature World Landscape Generator",
      nameZh: "微缩世界景观",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Cinematic miniature landscapes (natural / urban / historical / fantasy / terrarium) with one clearly visible hero effect each.",
        zh: "电影感微缩景观短片（自然/城市/历史/奇幻/生态缸），每片只选一个清晰可见的英雄特效。",
      },
      description: {
        en: "Richly detailed miniature landscapes across seven families; each clip combines one landscape family, one presentation mode, and one hero effect (storm, waterfall, volcano glow, autumn wind, colony power-up…) with strong scale cues and a tempo matched to the effect. Ships with a 40-entry effect library, five named presets (Storm Island, Alpine Morning, Volcano Cutaway, Autumn Railway, Mars Colony, Floating Island), and scale-anchor rules that keep the world visibly miniature. Runs as T2VA on H3-Base-FL2VA.",
        zh: "横跨七大景观家族的精致微缩世界短片：每片组合「一个景观家族 + 一种呈现模式 + 一个英雄特效」（风暴、瀑布、火山辉光、秋风、殖民地点亮……），带强比例尺提示，节奏与特效匹配。内置 40 条特效库、五个命名预设（风暴岛、晨雾山谷、火山剖面、秋日铁道、火星殖民地、浮空岛）与比例锚定规则，保证世界始终是微缩的。在 H3-Base-FL2VA 上以 T2VA 运行。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Miniature World", zh: "微缩世界" },
        { en: "Diorama", zh: "沙盘微缩" },
        { en: "T2VA", zh: "T2VA" },
        { en: "Hero Effect", zh: "英雄特效" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/miniature-world-landscape-generator/assets/poster.webp",
        video: "community-skills/miniature-world-landscape-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/miniature-world-landscape-generator/assets/preview.gif",
        caption: { en: "Actual output: a glass-sphere storm island — lightning strikes the sea inside the sphere", zh: "实际成片：玻璃球风暴岛——球内雷暴劈中海面" },
      },
      inputs: [
        { en: "Landscape family + presentation mode + one hero effect", zh: "景观家族 + 呈现模式 + 一个英雄特效" },
        { en: "Effect intensity (Gentle / Clear / Dramatic), tempo", zh: "特效强度（温和/清晰/戏剧化）、节奏" },
        { en: "Duration (default 8s), aspect ratio", zh: "时长（默认 8s）、画幅" },
      ],
      capabilities: [
        { en: "Combines landscape family, presentation mode, and one hero effect per clip", zh: "每片组合一个景观家族、一种呈现与一个英雄特效" },
        { en: "Provides a 40-entry effect library and five named presets", zh: "提供 40 条特效库与五个命名预设" },
        { en: "Keeps the world visibly miniature via scale anchors", zh: "用比例锚定保证世界始终是微缩的" },
      ],
      workflow: [
        { id: "pick", title: { en: "Pick the combination", zh: "选择组合" }, desc: { en: "Family + presentation + hero effect + intensity.", zh: "家族 + 呈现 + 英雄特效 + 强度。" } },
        { id: "scale", title: { en: "Anchor the scale", zh: "锚定比例" }, desc: { en: "First-second scale cues; terrain landmarks locked.", zh: "首秒建立比例提示；地形地标锁定。" } },
        { id: "effect", title: { en: "Own the effect", zh: "特效归位" }, desc: { en: "Hero effect is the primary motion owner; camera never substitutes.", zh: "英雄特效是主要动作载体，镜头绝不替代。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Check effect visibility, peak, scale, terrain stability.", zh: "核对特效可见性、峰值、比例与地形稳定。" } },
      ],
      outputs: [
        { en: "A 7–8s miniature landscape clip (MP4)", zh: "一段 7–8 秒微缩景观短片（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "T2VA", en: "Primary mode: pure text, no reference material.", zh: "主模式：纯文本，无参考素材。" },
      ],
      promptStructures: [
        {
          label: { en: "Miniature landscape · T2VA formula", zh: "微缩景观 · T2VA 公式" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Miniature world satisfying / cinematic clips across themes", zh: "多主题微缩世界的解压/电影感短片" },
        { en: "Diorama, terrarium, tabletop, and glass-sphere scenes", zh: "沙盘、生态缸、桌游与玻璃球场景" },
      ],
      notFor: [
        { en: "Full-scale (non-miniature) landscape shots", zh: "全尺寸（非微缩）景观镜头" },
        { en: "Requests carrying reference images or videos", zh: "携带参考图或参考视频的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill miniature-world-landscape-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/miniature-world-landscape-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/miniature-world-landscape-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — canonical Storm Island", zh: "prompt-library.md — 风暴岛 canonical demo" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/miniature-world-landscape-generator/references/prompt-library.md" },
        ],
      },
    },


      


      {
      slug: "natural-ambient-living-generator",
      name: "Natural Ambient Living Generator",
      nameZh: "自然微动治愈",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Full-scale natural environments living at real-world size — one environmental system is the declared motion owner.",
        zh: "真实尺度的自然场景「活着」——环境系统（风/光/水/云）是唯一主要动作载体。",
      },
      description: {
        en: "7–8s text-to-video clips of real-scale nature: mist breathing through a forest, waves collapsing on a shore, cloud sheets over a valley, rain streaking a window, grass rippling. Each clip declares one environmental system as the primary motion owner with visible change every 1–2 seconds and one soft physical peak — never a frozen wallpaper with a slow zoom. Ships with a canonical morning-forest demo prompt that runs as-is. T2VA, no reference material needed.",
        zh: "7–8 秒文生视频：真实尺度的大自然——林间雾息、浪涛崩岸、云海过谷、窗上雨痕、草浪起伏。每片声明一个环境系统（风/光/水/云）作为主要动作载体，每 1–2 秒可见变化，并含一个柔和物理峰值——绝不做只有慢推镜头的壁纸片。内置可直接运行的「晨雾森林」canonical demo。T2VA，无需参考素材。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Ambient", zh: "氛围" },
        { en: "Nature", zh: "自然" },
        { en: "T2VA", zh: "T2VA" },
        { en: "Relaxing", zh: "治愈" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/natural-ambient-living-generator/assets/poster.webp",
        video: "community-skills/natural-ambient-living-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/natural-ambient-living-generator/assets/preview.gif",
        caption: { en: "Actual output: morning forest — mist seeping between trunks and a light shaft sweeping (placeholder; richer motion planned)", zh: "实际成片：晨雾森林——雾涌林间、光柱扫过（占位；后续加强动效）" },
      },
      inputs: [
        { en: "Environment theme: forest / ocean / sky / river / desert / snow / window", zh: "环境主题：森林/海洋/天空/河流/沙漠/雪原/窗前" },
        { en: "One declared motion-owner system: wind, light, water, cloud, particles", zh: "一个声明的动作载体系统：风/光/水/云/粒子" },
        { en: "Duration (default 7–8s), aspect ratio, tempo (Natural / Calm / Energetic)", zh: "时长（默认 7–8s）、画幅、节奏（自然/平静/激烈）" },
      ],
      capabilities: [
        { en: "Declares one environmental system as primary motion owner per clip", zh: "每片声明一个环境系统作为主要动作载体" },
        { en: "Enforces visible change every 1–2 seconds with one soft peak beat", zh: "每 1–2 秒强制可见变化，含一个柔和峰值" },
        { en: "Keeps camera strictly supporting — no wallpaper-with-zoom output", zh: "镜头严格辅助——拒绝壁纸+慢推镜头" },
      ],
      workflow: [
        { id: "theme", title: { en: "Pick theme + system", zh: "选主题与系统" }, desc: { en: "One environment, one motion-owner system.", zh: "一个环境，一个动作载体系统。" } },
        { id: "beats", title: { en: "Plan 1–2s changes", zh: "规划 1–2s 变化" }, desc: { en: "Three readable changes + one soft physical peak + relaxation.", zh: "三拍可见变化 + 一个柔和物理峰值 + 收尾松弛。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "System visibly moves; peak exists; terrain stable; no camera-only shot.", zh: "系统可见运动；峰值存在；地形稳定；非镜头戏。" } },
      ],
      outputs: [
        { en: "A 7–8s natural ambient clip (MP4)", zh: "一段 7–8 秒自然氛围短片（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "T2VA", en: "Primary mode: pure text, no reference material.", zh: "主模式：纯文本，无参考素材。" },
      ],
      promptStructures: [
        {
          label: { en: "Ambient · T2VA system-driven beats", zh: "氛围 · T2VA 系统驱动节拍" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Relaxing real-scale nature shorts (forest, ocean, sky, rain window)", zh: "真实尺度自然治愈短片（森林/海洋/天空/窗雨）" },
        { en: "Ambient backgrounds that still visibly breathe", zh: "仍然「活着」的氛围背景" },
      ],
      notFor: [
        { en: "Miniature / diorama scenes (see miniature-world-landscape-generator)", zh: "微缩/沙盘场景（见 miniature-world-landscape-generator）" },
        { en: "Ink-paper subjects (see living-ink-painting-video-generator)", zh: "水墨纸面题材（见 living-ink-painting-video-generator）" },
        { en: "Requests carrying reference images or videos", zh: "携带参考图或参考视频的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill natural-ambient-living-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/natural-ambient-living-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/natural-ambient-living-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — canonical morning forest", zh: "prompt-library.md — 晨雾森林 canonical demo" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/natural-ambient-living-generator/references/prompt-library.md" },
        ],
      },
    },
    {
      slug: "mythic-cloud-whale-generator",
      name: "Mythic Cloud Whale Generator",
      nameZh: "云海巨鲸",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Epic 7s cloud-sea shorts of a colossal mythic whale rising out of an endless golden-hour cloud deck. Demo video included.",
        zh: "7 秒云海巨兽短片：黄昏金光之下，巨鲸从无尽云海中破云而出，附演示视频。",
      },
      description: {
        en: "7-second cloud-sea shorts of a colossal mythic whale rising out of an endless golden-hour cloud deck. Includes an I2VA canonical prompt (P-IMG reference) with a T2VA fallback, plus a demo video captured end-to-end.",
        zh: "7 秒云海巨兽短片：黄昏金光照耀下，巨鲸从无尽云海中破云而出。内置 I2VA canonical 提示词（配 P-IMG 参考图）与 T2VA 降级方案，附端到端出片演示视频。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Mythic", zh: "神话" },
        { en: "Epic", zh: "史诗" },
        { en: "Cloud Sea", zh: "云海" },
        { en: "I2VA", zh: "I2VA" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/mythic-cloud-whale-generator/assets/poster.webp",
        video: "community-skills/mythic-cloud-whale-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/mythic-cloud-whale-generator/assets/preview.gif",
      },
      inputs: [
        { en: "Mythic subject: cloud whale / sky leviathan / cloud dragon / manta", zh: "神话主体：云海巨鲸/天空利维坦/云龙/巨鳐" },
        { en: "Time of day & light system: golden hour / moonlit aurora / rose dawn", zh: "时段与光照系统：黄金时刻/月夜极光/日出玫瑰金" },
        { en: "Beat placement of the single Impact peak (first half: shock / second half: climax)", zh: "唯一冲击峰值的位置（前半=震撼 / 后半=高潮）" },
      ],
      capabilities: [
        { en: "One continuous emergence event at real-time surge — no slow motion, no montage", zh: "单一连续破出事件、真实速度上浮——无慢镜、无蒙太奇" },
        { en: "Single peak at 70–90%, then a back-uppermost descent into the closing deck", zh: "唯一峰值在 70–90%，随后背脊朝上沉入闭合云面" },
        { en: "Locked camera — the subject owns all motion (no orbit, no vertical moves)", zh: "镜头全程锁定——动作全部由主体完成（无环绕、无垂直运镜）" },
        { en: "Epic texture: scale cues, surface details, named light, atmosphere layers that respond", zh: "史诗质感：尺标、表面细节、命名光照、响应式大气层次" },
      ],
      workflow: [
        { id: "subject", title: { en: "Pick subject + time", zh: "选主体与时段" }, desc: { en: "One mythic subject, one light system, one temperature.", zh: "一个神话主体、一个光照系统、一个主色调。" } },
        { id: "beats", title: { en: "Choreograph the single event", zh: "编排单一事件" }, desc: { en: "Head lift → real-time break-clear → spine wave & breath column → tail crest peak → back-uppermost descent.", zh: "抬头 → 真实速度破出 → 脊波与呼吸雾柱 → 尾鳍扬空峰值 → 背脊朝上沉没。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Scale in 1st second; peak physical; textures lit; no cuts; 7s.", zh: "首秒见尺度；峰值真实；细节有光；单镜头；7s。" } },
      ],
      outputs: [
        { en: "A 7s epic mythic cloud-sea clip (MP4)", zh: "一段 7 秒史诗云海巨兽短片（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "I2VA", en: "Primary: reference image locks the whale's form and light; beats drive motion.", zh: "主模式：参考图锁定巨鲸形态与光照，节拍驱动动作。" },
        { id: "T2VA", en: "Fallback: pure text, no reference material.", zh: "降级方案：纯文本，无参考素材。" },
      ],
      promptStructures: [
        {
          label: { en: "Epic · I2VA single-event beats", zh: "史诗 · I2VA 单一事件节拍" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Colossal mythic beings crossing cloud seas (epic spectacle)", zh: "神话巨兽横渡云海的史诗奇观" },
        { en: "Fast-slow contrast rhythm with one hard peak", zh: "快慢对比节奏 + 单一硬峰值的短片" },
      ],
      notFor: [
        { en: "Miniature / diorama scenes (see miniature-world-landscape-generator)", zh: "微缩/沙盘场景（见 miniature-world-landscape-generator）" },
        { en: "Calm ambient-only content without a subject acting", zh: "无主体动作的纯氛围内容（见 natural-ambient-living-generator）" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill mythic-cloud-whale-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/mythic-cloud-whale-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/mythic-cloud-whale-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — P-IMG + I2VA canonical + T2VA fallback", zh: "prompt-library.md — P-IMG + I2VA canonical + T2VA 降级" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/mythic-cloud-whale-generator/references/prompt-library.md" },
        ],
      },
    },
    {
      slug: "cavalry-charge-generator",
      name: "Cavalry Charge Generator",
      nameZh: "沙暴铁骑",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Full-speed cavalry charges across a dust-scoured plain at golden dusk — real-time gallop. Demo video included.",
        zh: "金色黄昏尘土平原上的全速铁骑冲锋，附演示视频。",
      },
      description: {
        en: "7-second shorts of a full-speed cavalry charge across a dust-scoured plain at golden dusk. Includes a golden-dust I2VA canonical prompt (P-IMG reference), a T2VA fallback and an ember-night variant, plus a demo video captured end-to-end.",
        zh: "7 秒全速铁骑冲锋短片：金色黄昏的尘土平原上，马队全速掠阵而过。内置「金色尘暴」I2VA canonical（配 P-IMG 参考图）、T2VA 降级与「余烬之夜」变体，附端到端出片演示视频。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Action", zh: "动作" },
        { en: "Epic", zh: "史诗" },
        { en: "Cavalry", zh: "铁骑" },
        { en: "I2VA", zh: "I2VA" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/cavalry-charge-generator/assets/poster.webp",
        video: "community-skills/cavalry-charge-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/cavalry-charge-generator/assets/preview.gif",
      },
      inputs: [
        { en: "Era & unit: riders / samurai / mounted archers / war elephants", zh: "时代与兵种：骑兵/武士/弓骑/战象" },
        { en: "Light system: golden backlight / ember night / moonlit / storm flash", zh: "光照系统：金色逆光/余烬之夜/月光/雷闪" },
        { en: "Placement of the single pass-by Impact peak (70–90% of the clip)", zh: "越镜冲击峰值的位置（片长 70–90%）" },
      ],
      capabilities: [
        { en: "Prohibits subject slow motion — full-gallop real-time speed enforced", zh: "禁止主体慢镜——强制全速真实时间狂奔" },
        { en: "One continuously charged pass with a single silhouette pass-by peak (70–90%)", zh: "单一连续掠阵事件，唯一剪影越镜峰值（70–90%）" },
        { en: "One lateral track at saddle height, deliberately slower than the charge; no overhead, no cuts", zh: "唯一一次鞍高侧向追拍、机速刻意慢于冲锋；无俯瞰、无切换" },
        { en: "Anti-float grounding kit: foreground grain, hoof dust kicks, handheld jolt, ground shadows", zh: "接地五件套防漂浮：前景颗粒、蹄落扬尘、手持抖动、地面长影" },
      ],
      workflow: [
        { id: "unit", title: { en: "Pick unit + light", zh: "选兵种与光照" }, desc: { en: "One era, one light system, one temperature.", zh: "一个时代、一个光照系统、一个主色调。" } },
        { id: "speed", title: { en: "Build the single pass", zh: "构建单一掠阵" }, desc: { en: "Low locked establish → one slower lateral track → silhouette pass-by peak → dust-settle recede.", zh: "低机位锁定建立 → 唯一慢于冲锋的侧向追拍 → 剪影越镜峰值 → 尘落远去。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Real-time gallop; two acceleration events; one peak; dust responds.", zh: "真实速度狂奔；两个加速事件；单一峰值；尘埃响应。" } },
      ],
      outputs: [
        { en: "A 7s full-speed cavalry charge clip (MP4)", zh: "一段 7 秒全速铁骑冲锋短片（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "I2VA", en: "Primary: reference image locks riders, horses and light; beats drive the pass.", zh: "主模式：参考图锁定骑手/战马与光照，节拍驱动掠阵。" },
        { id: "T2VA", en: "Fallback: pure text, no reference material.", zh: "降级方案：纯文本，无参考素材。" },
      ],
      promptStructures: [
        {
          label: { en: "Action · I2VA single-pass beats", zh: "动作 · I2VA 单一掠阵节拍" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Epic full-speed charges with dust and low-backlight texture", zh: "尘暴逆光质感的史诗全速冲锋" },
        { en: "Real-time speed sequences where the camera chases the action", zh: "镜头追拍动作的真实速度序列" },
      ],
      notFor: [
        { en: "Miniature / diorama scenes (see miniature-world-landscape-generator)", zh: "微缩/沙盘场景（见 miniature-world-landscape-generator）" },
        { en: "Ambient-only content without a subject acting (see natural-ambient-living-generator)", zh: "无主体动作的纯氛围内容（见 natural-ambient-living-generator）" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill cavalry-charge-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/cavalry-charge-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/cavalry-charge-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — P-IMG + I2VA canonical + T2VA fallback + ember variant", zh: "prompt-library.md — P-IMG + I2VA canonical + T2VA 降级 + 余烬之夜" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/cavalry-charge-generator/references/prompt-library.md" },
        ],
      },
    },

      {
      slug: "kinetic-title-card-generator",
      name: "Kinetic Title Card Generator",
      nameZh: "片头字效",
      sourceType: "community",
      author: { en: "gordonlu", zh: "gordonlu" },
      version: "0.1.0",
      summary: {
        en: "Text is the hero — brand names, film or song titles, slogans as kinetic title cards with spell-perfect text.",
        zh: "文字当主角——品牌名、片名、歌名做成动态片头字卡，文字拼写必须一字不差。",
      },
      description: {
        en: "7–8s text-to-video clips where displayed words carry the whole shot: a title ignites into gold dust, slides out of fog, or punches in with a light flare. Text rules are first-class: one line of ≤6 characters, fixed position, one entrance and one resolution, original language preserved, spelling verified in QC. Distinct from music-video-subtitle-generator (lyric karaoke) and h3-promo-film (commercials with incidental text): here the words ARE the video. Ships with a canonical album-title demo 「黎明」.",
        zh: "7–8 秒文生视频：画面文字是整支片的主角——片名化作金尘、从雾中滑出、或随光爆弹入画面。文字规则是头等要求：每行 ≤6 字、位置固定、一种入场与一种收尾、保留原文、QC 逐字核拼写。区别于 music-video-subtitle-generator（歌词卡拉 OK）与 h3-promo-film（带点缀文字的广告片）：本 Skill 里字本身就是视频。内置「黎明」专辑片头 canonical demo。",
      },
      categories: ["animation", "creative"],
      tags: [
        { en: "Kinetic Type", zh: "动态字" },
        { en: "Title Card", zh: "片头字卡" },
        { en: "T2VA", zh: "T2VA" },
        { en: "Branding", zh: "品牌" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "community-skills/kinetic-title-card-generator/assets/poster.webp",
        video: "community-skills/kinetic-title-card-generator/assets/preview.mp4",
        sourceUrl: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/kinetic-title-card-generator/assets/preview.gif",
        caption: { en: "Actual output: title card 黎明 — punches in with a light flare and holds clean (placeholder; richer motion planned)", zh: "实际成片：片头字卡「黎明」——光爆弹入后干净定格（占位；后续加强动效）" },
      },
      inputs: [
        { en: "The exact text: brand name / film or song title / slogan (≤6 chars per line)", zh: "确切文字：品牌名/片名/歌名/口号（每行 ≤6 字）" },
        { en: "Font flavor, position, entrance and exit behaviors", zh: "字体气质、位置、入场与收尾方式" },
        { en: "Duration (default 7–8s), aspect ratio, music direction", zh: "时长（默认 7–8s）、画幅、配乐方向" },
      ],
      capabilities: [
        { en: "Treats text integrity as a first-class QC item (spelling, no morphing, no relocation)", zh: "把文字完整性列为头等 QC（拼写、不变形、不漂移）" },
        { en: "Fixes one entrance + one resolution per title", zh: "每个片头只有一次入场 + 一种收尾" },
        { en: "Keeps original language verbatim, never translates or splits words", zh: "保留原文，绝不翻译或拆词" },
      ],
      workflow: [
        { id: "text", title: { en: "Lock the text", zh: "锁定文字" }, desc: { en: "Exact wording, position, font flavor, one entrance.", zh: "确切用词、位置、字体气质、一次入场。" } },
        { id: "arc", title: { en: "Build the 7–8s arc", zh: "构建 7–8s 弧线" }, desc: { en: "Arrival → land/lock → ambient support → hold or exit.", zh: "入场 → 落定锁定 → 环境衬托 → 定格或退场。" } },
        { id: "qc", title: { en: "Generate and QC", zh: "生成并验收" }, desc: { en: "Spelling, position, entrance beat, clean hold ≥2s.", zh: "拼写、位置、入场节拍、干净定格 ≥2s。" } },
      ],
      outputs: [
        { en: "A 7–8s kinetic title card (MP4)", zh: "一段 7–8 秒动态片头字卡（MP4）" },
        { en: "Filled prompt template for reuse", zh: "填充好的可复用提示词模板" },
      ],
      modes: [
        { id: "T2VA", en: "Primary mode: pure text, no reference material.", zh: "主模式：纯文本，无参考素材。" },
      ],
      promptStructures: [
        {
          label: { en: "Title card · T2VA text-first beats", zh: "片头字卡 · T2VA 文字优先节拍" },
          fields: ["integrated_multimodal_description", "overall_soundscape", "non_diegetic_music"],
        },
      ],
      bestFor: [
        { en: "Brand-name opens, film/song title cards, event posters", zh: "品牌开场、片名/歌名字卡、活动海报" },
        { en: "Short-word kinetic type (≤6 chars per line)", zh: "短词动态字（每行 ≤6 字）" },
      ],
      notFor: [
        { en: "Lyric karaoke (see music-video-subtitle-generator)", zh: "歌词卡拉 OK（见 music-video-subtitle-generator）" },
        { en: "Full commercials with incidental text (see h3-promo-film)", zh: "带点缀文字的完整广告片（见 h3-promo-film）" },
        { en: "Requests carrying reference images or videos", zh: "携带参考图或参考视频的需求" },
      ],
      install: {
        command: "npx skills add https://github.com/gordonlu/awesome-minimax-h3-skills --skill kinetic-title-card-generator",
      },
      sources: {
        repository: "https://github.com/gordonlu/awesome-minimax-h3-skills",
        skillDir: "https://github.com/gordonlu/awesome-minimax-h3-skills/tree/main/community-skills/kinetic-title-card-generator",
        skillMd: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/kinetic-title-card-generator/SKILL.md",
        skillCnMd: "",
        docs: [
          { label: { en: "prompt-library.md — canonical 黎明 title card", zh: "prompt-library.md — 黎明片头 canonical demo" }, url: "https://github.com/gordonlu/awesome-minimax-h3-skills/blob/main/community-skills/kinetic-title-card-generator/references/prompt-library.md" },
        ],
      },
    },

{
      slug: "minimalist-product-ad-generator",
      modes: [ { id: "I2VA", en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" }, ],
      name: "Minimalist Product Ad Generator",
      nameZh: "极简产品广告生成器",
      sourceType: "official",
      author: { en: "Community user, shipped in the official repo", zh: "社区用户创作，收录于官方仓库" },
      version: "0.5.6",
      summary: {
        en: "Turn product images and ad requirements into minimalist product ad shorts for e-commerce promotion and product launches.",
        zh: "基于产品图片和广告需求，完成卖点提炼、英文文案与节拍分镜设计，输出极简产品广告短片。",
      },
      description: {
        en: "Based on product images and advertising requirements, extract selling points, write concise English ad copy, design product anchors and beat-synced storyboards, then generate a minimalist product advertising short. The skill focuses on clean product presentation, readable typography rhythm, premium camera language, and final video delivery.",
        zh: "基于产品图片和广告需求，完成卖点提炼、英文文案与节拍分镜设计，输出极简产品广告短片。Skill 专注于干净的产品呈现、可读的文字节奏、高级镜头语言与最终成片交付。",
      },
      categories: ["commercial-ad", "e-commerce"],
      tags: [
        { en: "Planning", zh: "策划" },
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Apple-Style", zh: "苹果风" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/minimalist-product-ad-generator.webp",
        video: "third_party/MiniMax-H3/previews/minimalist-product-ad-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/minimalist-product-ad-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "At least one product image — photos, packaging, renders, or detail shots", zh: "至少一张产品图片：产品图、包装图、渲染图或细节图" },
        { en: "Target duration: 5s / 10s / 15s (10s recommended)", zh: "目标时长：5s / 10s / 15s（推荐 10s）" },
        { en: "Aspect ratio: 16:9 / 9:16 / 1:1 / 4:3 / 3:4", zh: "画幅比例：16:9 / 9:16 / 1:1 / 4:3 / 3:4" },
        { en: "Apple-style template: white-tech, dark rim-light, brand color field, or light lifestyle", zh: "Apple 风格模板：白科技 / 暗色轮廓光 / 品牌色域 / 轻生活场景" },
        { en: "In-frame copy: your own, or Skill-written English copy", zh: "画面文案：自备，或由 Skill 生成英文文案" },
        { en: "Main variant confirmation for multi-variant products", zh: "多变体产品需确认主推变体" },
      ],
      capabilities: [
        { en: "Extracts product facts and key selling points", zh: "提炼产品事实与主推卖点" },
        { en: "Writes 3–5 word Apple-style English ad copy", zh: "撰写 3–5 词的苹果风英文广告文案" },
        { en: "Generates three independent anchor photos: hero, material detail, copy composition", zh: "生成三张独立产品锚定图：主视觉 / 材质细节 / 文案构图" },
        { en: "Plans a precise beat-synced storyboard table", zh: "规划精确到节的节拍分镜表" },
        { en: "Generates the film with MiniMax H3 native audio by default", zh: "默认使用 MiniMax H3 生成视频并开启原生音频" },
        { en: "Optional music-2.6 tech BGM with beat-synced editing", zh: "可选 music-2.6 科技 BGM 与节拍同步剪辑" },
      ],
      workflow: [
        { id: "gate",     title: { en: "Start Gate", zh: "启动门禁" }, desc: { en: "Confirm assets, variant, duration, ratio, style template, and copy mode in one pass.", zh: "一次性确认素材、变体、时长、画幅、风格模板与文案方式。" } },
        { id: "facts",    title: { en: "Product Fact Summary", zh: "产品事实摘要" }, desc: { en: "Analyze category, main color, showable structure, and image quality.", zh: "分析品类、主色、可展示结构与图片质量。" } },
        { id: "brief",    title: { en: "Production Brief", zh: "制作简报" }, desc: { en: "Turn the start-gate answers into an executable brief.", zh: "将启动门禁答案整理为可执行简报。" } },
        { id: "spine",    title: { en: "Narrative Spine", zh: "叙事脊柱" }, desc: { en: "Product Launch, Feature Touch, or Color Family.", zh: "从产品发布、功能触动、色彩家族中选择叙事结构。" } },
        { id: "motion",   title: { en: "Motion Language", zh: "动效语言" }, desc: { en: "Define transition logic, rhythm peaks, and braking moments.", zh: "定义转场逻辑、节奏峰值与刹车点。" } },
        { id: "copy",     title: { en: "English Copy", zh: "英文文案" }, desc: { en: "Generate or confirm 3–5 word Apple-style copy.", zh: "生成或确认 3–5 词苹果风英文文案。" } },
        { id: "anchors",  title: { en: "Three Anchor Photos", zh: "三张锚定图" }, desc: { en: "Hero view, material / functional detail, and final copy composition.", zh: "主视觉、材质/功能细节、最终文案构图。" } },
        { id: "beats",    title: { en: "Beat Storyboard Table", zh: "节拍分镜表" }, desc: { en: "The execution table that controls every beat, copy line, and transition.", zh: "控制每个节拍、文案与转场的执行表。" } },
        { id: "generate", title: { en: "H3 Video Generation", zh: "H3 视频生成" }, desc: { en: "One continuous full-frame product film with native audio.", zh: "生成一条连续全画幅产品影片，默认开启原生音频。" } },
        { id: "deliver",  title: { en: "Music & Beat-Synced Edit", zh: "音乐与节拍剪辑" }, desc: { en: "Music analysis, beat-synced assembly, and pre-delivery verification.", zh: "音乐分析、节拍同步合成与交付前验证。" } },
      ],
      outputs: [
        { en: "Minimalist product ad short", zh: "极简产品广告短片" },
        { en: "Apple-style English ad copy", zh: "苹果风英文广告文案" },
        { en: "Three product anchor photos", zh: "三张产品锚定图" },
        { en: "Precise beat storyboard table", zh: "精确节拍分镜表" },
      ],
      bestFor: [
        { en: "E-commerce promotion & product launches", zh: "电商推广与新品发布" },
        { en: "Small brand releases", zh: "小品牌上新" },
        { en: "Food, toys, gadgets, accessories & other physical goods", zh: "食品、潮玩、数码配件等实体产品" },
      ],
      notFor: [
        { en: "KOC talking-head ads", zh: "KOC 真人口播广告" },
        { en: "General video editing", zh: "通用视频剪辑" },
        { en: "Complex screen & UI demos", zh: "复杂屏幕与 UI 演示" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill minimalist-product-ad-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/minimalist-product-ad-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/minimalist-product-ad-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/minimalist-product-ad-generator/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "3d-animation-short-generator",
      modes: [ { id: "I2VA", en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" }, ],
      name: "3D Animation Short Generator",
      nameZh: "3D 动画短片生成器",
      sourceType: "official",
      author: { en: "Community user, shipped in the official repo", zh: "社区用户创作，收录于官方仓库" },
      version: "0.5.4",
      summary: {
        en: "Turn a story idea into a complete stylized 3D animated short.",
        zh: "根据故事创意，完成人物与场景设定、镜头规划、分镜生成和视频合成，输出风格统一的 3D 动画短片。",
      },
      description: {
        en: "Designed for creators who want to turn a story idea into a complete stylized 3D animated short. The skill creates a project brief and story outline, builds labeled character and environment-only scene cards, plans a shot table with per-second action, camera, audio, and continuity requirements, produces text storyboards or optional pencil boards, selects a video model, generates individual shots, assembles the film, matches BGM, and performs a final review.",
        zh: "面向希望将故事灵感制作成完整 3D 动画短片的创作者。Skill 会依次完成项目简报与故事大纲，生成角色卡和无人物场景卡，规划带每秒动作、镜头、音频与连续性要求的镜头表，制作文本分镜或可选铅笔分镜，再选择视频模型生成单镜头片段，完成全片拼接、BGM 匹配和成片复查。",
      },
      categories: ["animation"],
      tags: [
        { en: "Planning", zh: "计划制定" },
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Post-production", zh: "后期制作" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/3d-animation-short-generator.webp",
        video: "third_party/MiniMax-H3/previews/3d-animation-short-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/3d-animation-short-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "A one-line story idea or basic plot", zh: "一句故事创意或基础剧情" },
        { en: "Aspect ratio & total duration (confirmed via choice cards)", zh: "画面比例与总时长（通过选择卡确认）" },
        { en: "Dialogue needs and language", zh: "对白需求与语言" },
        { en: "Visual direction — Pixar-inspired stylized 3D by default", zh: "目标视觉风格（默认 Pixar 风 3D 卡通）" },
      ],
      capabilities: [
        { en: "Project brief & 8-beat causal story outline", zh: "项目简报与 8 拍因果故事大纲" },
        { en: "Labeled character cards & environment-only scene cards", zh: "带标注角色卡与无人物场景卡" },
        { en: "Six-column shot table with per-second directives, audio cues & spatial anchors", zh: "六列标准镜头表：每秒指令、音频提示与空间锚点" },
        { en: "Text storyboards, with optional pencil boards", zh: "文本分镜（可选铅笔分镜）" },
        { en: "Video-model choice: H3 default, Seedance 2.0 fallback", zh: "视频模型选择：H3 默认，Seedance 2.0 备选" },
        { en: "Single-shot generation, full-film assembly, BGM match & final review", zh: "单镜头生成、全片合成、BGM 匹配与成片复查" },
      ],
      workflow: [
        { id: "intake",     title: { en: "Intake & Format", zh: "需求采集与格式确认" }, desc: { en: "Capture the idea; confirm aspect ratio and duration with choice cards.", zh: "采集创意，用选择卡确认画幅与总时长。" } },
        { id: "brief",      title: { en: "Project Brief", zh: "项目简报" }, desc: { en: "Working title, what-if, emotional premise, and deliverables.", zh: "确定片名、假设句、情感前提与交付物。" } },
        { id: "outline",    title: { en: "Story Outline & Gates", zh: "故事大纲与门禁检查" }, desc: { en: "8-beat causal spine with red-line gate checks.", zh: "8 拍故事脊柱，并通过红线检查。" } },
        { id: "characters", title: { en: "Character Cards", zh: "角色卡" }, desc: { en: "Labeled multi-view production reference sheets.", zh: "带标注的多视角制作参考图。" } },
        { id: "scenes",     title: { en: "Scene Cards", zh: "场景卡" }, desc: { en: "Environment-only cards with continuity landmarks.", zh: "仅环境、含连续性地标的场景参考图。" } },
        { id: "shottable",  title: { en: "Standardized Shot Table", zh: "标准镜头表" }, desc: { en: "Six columns with per-second directives; self-check gate before continuing.", zh: "六列表格含每秒指令，通过自检门禁后继续。" } },
        { id: "storyboard", title: { en: "Storyboards", zh: "分镜" }, desc: { en: "One text storyboards document by default; pencil boards on opt-in.", zh: "默认一份文本分镜文档，可选铅笔分镜图。" } },
        { id: "model",      title: { en: "Video-Model Choice", zh: "视频模型选择" }, desc: { en: "H3 by default, Seedance 2.0 fallback, plus resolution choice.", zh: "默认 H3、Seedance 2.0 备选，并选择分辨率。" } },
        { id: "clips",      title: { en: "Single-Shot Clips", zh: "单镜头生成" }, desc: { en: "Each shot rendered by the chosen model, bound to its storyboard section.", zh: "逐镜头生成，绑定对应分镜段落。" } },
        { id: "assembly",   title: { en: "Assembly & BGM", zh: "全片合成与 BGM" }, desc: { en: "Assemble in approved shot order and match one continuous BGM.", zh: "按确认顺序合成，并匹配连续 BGM。" } },
        { id: "review",     title: { en: "Final Review", zh: "成片复查" }, desc: { en: "QC checklist; the final film contains no storyboard traces.", zh: "按审核清单复查，成片不含任何分镜痕迹。" } },
      ],
      outputs: [
        { en: "Complete stylized 3D animated short", zh: "完整 3D 动画短片" },
        { en: "Character & scene cards", zh: "角色卡与场景卡" },
        { en: "Shot table & storyboards", zh: "标准镜头表与分镜" },
        { en: "Final film with matched BGM", zh: "匹配 BGM 的成片" },
      ],
      bestFor: [
        { en: "Narrative animation", zh: "剧情动画短片" },
        { en: "Birthday keepsakes & brand stories", zh: "生日纪念与品牌故事" },
        { en: "Social shorts", zh: "社交媒体短片" },
      ],
      notFor: [
        { en: "Single images or simple retouching", zh: "单张图片或简单修图" },
        { en: "Photorealistic live action", zh: "真人写实视频" },
        { en: "One standalone clip", zh: "仅生成一个独立镜头" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill 3d-animation-short-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/3d-animation-short-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/3d-animation-short-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/3d-animation-short-generator/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "papercraft-stop-motion-explainer",
      modes: [ { id: "I2VA", en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" }, ],
      name: "Papercraft Stop-Motion Explainer",
      nameZh: "纸艺定格科普视频生成器",
      sourceType: "official",
      author: { en: "MiniMax Hub", zh: "MiniMax Hub" },
      version: "0.6.5",
      summary: {
        en: "Build a production-ready papercraft stop-motion explainer package from a knowledge topic.",
        zh: "根据知识主题，完成纸偶、分层布景、分镜与提示词设计，输出可执行的纸艺定格科普视频创作包。",
      },
      description: {
        en: "For creators explaining science, education, or general knowledge through tactile handmade papercraft visuals. The skill extracts the learning goal and visual metaphor, proposes creative directions, designs paper characters, layered diorama sets, and props, creates preview concepts plus image and video prompts, and plans storyboards, camera movement, transitions, and sound with staged approvals and review checklists.",
        zh: "面向希望用手工纸艺视觉讲解科学、教育或泛知识内容的创作者。Skill 会先提炼学习目标与视觉隐喻，提出创意方向，设计纸偶角色、分层纸雕布景和道具资产，制作预览概念、图像与视频提示词，规划分镜、运镜、转场和声音，并通过阶段确认与审核清单控制质量。",
      },
      categories: ["education", "animation"],
      tags: [
        { en: "Full Production", zh: "成片制作" },
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Stop-Motion", zh: "定格动画" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/papercraft-stop-motion-explainer.webp",
        video: "third_party/MiniMax-H3/previews/papercraft-stop-motion-explainer.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/papercraft-stop-motion-explainer.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "A topic, core knowledge points, or source material", zh: "主题、核心知识点或原始材料" },
        { en: "Audience: children, general, classroom, social media…", zh: "目标受众：儿童 / 大众 / 课堂 / 社媒等" },
        { en: "Duration (15s / 30s / 60s) and aspect ratio", zh: "时长（15s / 30s / 60s）与画幅" },
        { en: "Deliverable type: full package or selected assets", zh: "交付类型：完整创作包或单项资产" },
      ],
      capabilities: [
        { en: "Extracts the learning goal & visual metaphor", zh: "提炼学习目标与视觉隐喻" },
        { en: "Proposes 3–5 distinct creative directions", zh: "提出 3–5 个差异化创意方向" },
        { en: "Designs paper characters, layered diorama sets & prop library", zh: "设计纸偶角色、分层纸雕布景与道具资产库" },
        { en: "Creates visual previews plus single-image, image-series & video prompts", zh: "制作视觉预览与单图 / 系列图 / 图生视频提示词" },
        { en: "Plans storyboard, editing rhythm, camera rules, transitions & sound", zh: "规划分镜、剪辑节奏、运镜规则、转场与声音" },
        { en: "Staged approval cards & review checklists keep quality controlled", zh: "阶段确认卡与审核清单控制质量" },
      ],
      workflow: [
        { id: "input",      title: { en: "Understand the Input", zh: "理解输入" }, desc: { en: "Topic, audience, duration, and the core learning outcome.", zh: "明确主题、受众、时长与核心学习收获。" } },
        { id: "dna",        title: { en: "Style DNA", zh: "风格 DNA" }, desc: { en: "Lock the handmade papercraft stop-motion rules.", zh: "锁定手工纸艺定格的风格规则。" } },
        { id: "directions", title: { en: "3–5 Creative Directions", zh: "3–5 个创意方向" }, desc: { en: "Different metaphors for the same topic; pick one plus duration.", zh: "同一主题的多种隐喻方案，选定方向与时长。" } },
        { id: "characters", title: { en: "Paper Characters", zh: "纸偶角色" }, desc: { en: "Hosts, guides, or personified concepts built from paper parts.", zh: "由纸片部件构成的讲解员或拟人化角色。" } },
        { id: "scenes",     title: { en: "Paper Scenes & Diorama", zh: "纸艺场景与分层布景" }, desc: { en: "Multi-plane stages with real shadows and paper mechanisms.", zh: "多景别纸舞台，真实投影与可动纸机关。" } },
        { id: "assets",     title: { en: "Prop & Asset Library", zh: "道具资产库" }, desc: { en: "Grouped assets with materials, layers, and motion notes.", zh: "按功能分组，标注材质、层级与运动方式。" } },
        { id: "previews",   title: { en: "Visual Previews", zh: "视觉预览" }, desc: { en: "1–3 concept previews for style confirmation.", zh: "1–3 张概念预览图用于确认风格。" } },
        { id: "prompts",    title: { en: "Prompts", zh: "提示词" }, desc: { en: "Single-image, image-series, and 5-second image-to-video prompts.", zh: "单图、系列图与 5 秒图生视频提示词。" } },
        { id: "storyboard", title: { en: "Storyboard", zh: "分镜" }, desc: { en: "A compact shot table sized to the chosen duration.", zh: "按所选时长生成精简分镜表。" } },
        { id: "rhythm",     title: { en: "Rhythm, Camera & Transitions", zh: "节奏、运镜与转场" }, desc: { en: "Editing rhythm, miniature-filming camera rules, paper-physics transitions.", zh: "剪辑节奏、微缩拍摄运镜、遵守纸物理的转场。" } },
        { id: "sound",      title: { en: "Sound & Voiceover", zh: "声音与旁白" }, desc: { en: "Tactile paper SFX, topic-matched BGM, clean voiceover audio.", zh: "纸质音效、贴合主题的 BGM、干净的旁白音频。" } },
        { id: "review",     title: { en: "Negative Prompts & Review", zh: "负面提示词与审核" }, desc: { en: "Style-protection negatives and final checklists.", zh: "保护风格的负面提示词与最终审核清单。" } },
      ],
      outputs: [
        { en: "Production-ready papercraft explainer package", zh: "可直接进入制作的纸艺定格科普创作包" },
        { en: "Still, image-series & short-video prompts", zh: "单图 / 系列图 / 短视频提示词" },
        { en: "Storyboard & sound plan", zh: "分镜表与声音方案" },
      ],
      bestFor: [
        { en: "Cut-paper & pop-up-book explainers", zh: "剪纸、立体书风格讲解" },
        { en: "Layered dioramas & miniature stop-motion", zh: "分层透视模型与微缩定格" },
        { en: "Science, education & general knowledge content", zh: "科学、教育与泛知识内容" },
      ],
      notFor: [
        { en: "Standard 2D cartoons or line doodles", zh: "普通二维卡通或线稿涂鸦" },
        { en: "Live action", zh: "真人写实视频" },
        { en: "Explainers without a paper-art look", zh: "无纸艺质感的标准科普" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill papercraft-stop-motion-explainer",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/papercraft-stop-motion-explainer",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/papercraft-stop-motion-explainer/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/papercraft-stop-motion-explainer/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "brand-promo-video-generator",
      modes: [ { id: "I2VA", en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" }, { id: "T2VA", en: "Builds the full audiovisual timeline from text.", zh: "从文本构建完整视听时间线。" }, ],
      name: "Brand Promo Video Generator",
      nameZh: "品牌宣传短片生成器",
      sourceType: "official",
      author: { en: "MiniMax Hub", zh: "MiniMax Hub" },
      version: "0.1.9",
      summary: {
        en: "Turn verified brand assets and campaign goals into a polished promotional short video.",
        zh: "基于品牌素材与推广目标，完成事实核验、创意方向、分镜和音画合成，输出可展示的品牌宣传短片。",
      },
      description: {
        en: "For marketers and creators producing promotional content for brands, products, websites, apps, shops, or personal projects. The skill organizes brand facts and asset provenance, selects a narrative direction, plans precise beats and shots, generates needed imagery, video, voiceover, or music, and completes assembly and pre-delivery review.",
        zh: "面向需要为品牌、产品、网站、App、小店或个人项目制作宣传内容的运营与创作者。Skill 会整理品牌事实与素材来源，选择叙事方向，规划精确节拍和镜头，生成所需图像、视频、旁白或音乐，并完成合成与交付前检查。",
      },
      categories: ["commercial-ad"],
      tags: [
        { en: "Planning", zh: "计划制定" },
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Post-production", zh: "后期处理" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/brand-promo-video-generator.webp",
        video: "third_party/MiniMax-H3/previews/brand-promo-video-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/brand-promo-video-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "Verifiable assets: logos, product images, UI screenshots, official links", zh: "可核验素材：LOGO、产品图、界面截图、官网链接" },
        { en: "Target duration (normally 15–30s) and aspect ratio", zh: "目标时长（通常 15–30 秒）与画幅" },
        { en: "Audience, distribution channel & campaign focus", zh: "目标受众、投放渠道与推广重点" },
        { en: "Narration & on-screen copy language", zh: "旁白与画面文案语言" },
      ],
      capabilities: [
        { en: "Builds a brand truth sheet from authoritative sources", zh: "基于权威来源整理品牌事实表" },
        { en: "Records every identity-bearing asset in a provenance manifest", zh: "以来源清单记录每一份品牌识别素材" },
        { en: "Picks a story spine matched to the product category", zh: "按产品类型选择叙事脊柱" },
        { en: "Plans frame-aware beats & motion language", zh: "规划精确到帧的节拍与动效语言" },
        { en: "Generates imagery, video, voiceover or music, then assembles", zh: "生成图像、视频、旁白或音乐并完成合成" },
        { en: "Pre-delivery authenticity & quality verification", zh: "交付前真实性与质量检查" },
      ],
      workflow: [
        { id: "intake",    title: { en: "Intake & Brief", zh: "素材采集与需求确认" }, desc: { en: "Collect verifiable assets; confirm duration, ratio, audience, focus.", zh: "收集可核验素材，确认时长、画幅、受众与推广重点。" } },
        { id: "truth",     title: { en: "Brand Truth Sheet", zh: "品牌事实表" }, desc: { en: "Extract logos, fonts, colors, tone, product facts from strong sources.", zh: "从权威来源提取标识、字体、色彩、语调与产品事实。" } },
        { id: "provenance",title: { en: "Provenance Manifest", zh: "来源清单" }, desc: { en: "Record source, rights note, and authenticity status for every asset.", zh: "记录每份素材的来源、权利说明与真实性状态。" } },
        { id: "spine",     title: { en: "Story Spine", zh: "故事脊柱" }, desc: { en: "2–3 creative directions matched to the product category.", zh: "按产品品类给出 2–3 个创意方向。" } },
        { id: "beats",     title: { en: "Exact Beats", zh: "精确节拍" }, desc: { en: "Frame-aware timeline: 5–8 beats for 15s, 8–12 for 30s.", zh: "帧级时间线：15 秒 5–8 拍，30 秒 8–12 拍。" } },
        { id: "motion",    title: { en: "Motion Language", zh: "动效语言" }, desc: { en: "Controlled intensity, color states, readable silhouettes.", zh: "可控的节奏强度、色彩状态与清晰轮廓。" } },
        { id: "confirm",   title: { en: "Hard Confirmation", zh: "生成前确认" }, desc: { en: "Show the full pre-production package before generating anything.", zh: "生成前展示完整前期制作包并等待确认。" } },
        { id: "produce",   title: { en: "Asset Production", zh: "素材生产" }, desc: { en: "Generate stills, clips, and audio; never redraw identity assets.", zh: "生成静帧、视频与音频；绝不重绘品牌识别素材。" } },
        { id: "verify",    title: { en: "Verification", zh: "交付前验证" }, desc: { en: "Authenticity, claims, ratio, language, readability checks.", zh: "核验真实性、卖点表述、画幅、语言与可读性。" } },
        { id: "deliver",   title: { en: "Deliver", zh: "交付" }, desc: { en: "Final video with creative summary, manifest, and next-step suggestions.", zh: "交付成片、创意摘要、来源清单与迭代建议。" } },
      ],
      outputs: [
        { en: "Promotional short video", zh: "品牌宣传短片" },
        { en: "Provenance manifest & brand truth sheet", zh: "来源清单与品牌事实表" },
        { en: "Creative summary & iteration suggestions", zh: "创意摘要与迭代建议" },
      ],
      bestFor: [
        { en: "Product launches", zh: "新品发布" },
        { en: "Website & product showcases", zh: "官网与产品展示" },
        { en: "Social promotion", zh: "社交媒体推广" },
      ],
      notFor: [
        { en: "Imitating real brand marks without authorized assets", zh: "缺少授权素材时仿造真实品牌标识" },
        { en: "Inventing product claims", zh: "虚构产品功能与数据" },
        { en: "Long-form narrative films", zh: "长篇剧情影片" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill brand-promo-video-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/brand-promo-video-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/brand-promo-video-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/brand-promo-video-generator/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "music-video-subtitle-generator",
      modes: [ { id: "I2VA", en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" }, ],
      name: "Music Video Subtitle Generator",
      nameZh: "音乐 MV 动态字幕生成器",
      sourceType: "official",
      author: { en: "Community user, featured in the official repo", zh: "社区用户创作，官方仓库精选" },
      version: "0.6.6",
      summary: {
        en: "Create beat-synced MV prompts and lyric typography plans from music and lyrics.",
        zh: "基于音乐和歌词，完成节奏拆解、镜头设计与动态字幕方案，适用于 AI MV 创作。",
      },
      description: {
        en: "For musicians, video creators, and social-media editors producing AI music videos or emotional short films with lyric typography. The skill analyzes beat and vocal timing, separates character, scene, and text references, designs beat-reactive spatial typography, decomposes long works into connected shots, audits prompts, and routes generation for H3 or other video tools.",
        zh: "面向音乐人、视频创作者和社交媒体剪辑者，用于制作带歌词贴字的 AI MV 或情绪短片。Skill 会分析节拍与人声时序，区分人物、场景和文字参考，设计随节奏变化的空间字幕，拆解长视频为可衔接镜头，审查提示词并路由 H3 等视频生成工具。",
      },
      categories: ["music", "creative"],
      tags: [
        { en: "Planning", zh: "计划制定" },
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Lyric Typography", zh: "歌词贴字" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/music-video-subtitle-generator.webp",
        video: "third_party/MiniMax-H3/previews/music-video-subtitle-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/music-video-subtitle-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "Music — a song or beat; it becomes the master audio bed", zh: "音乐：歌曲或 Beat，将作为全局主音频" },
        { en: "Lyrics (or let the skill write original lyrics first)", zh: "歌词（或由 Skill 先创作原创歌词）" },
        { en: "Reference images: character, scene, typography cards", zh: "参考图：角色卡 / 场景卡 / 字体包装卡" },
        { en: "Mood, target platform, duration & music window", zh: "情绪意图、目标平台、时长与音乐选段" },
      ],
      capabilities: [
        { en: "Analyzes beat and vocal timing", zh: "分析节拍与人声时序" },
        { en: "Designs beat-reactive spatial lyric typography", zh: "设计随节拍变化的空间歌词字幕" },
        { en: "Decomposes >15s works into 4–8 connected shots", zh: "将超过 15 秒的作品拆解为 4–8 个可衔接镜头" },
        { en: "Head/tail-frame continuation with global master-audio alignment", zh: "首尾帧续接，并与全局 Master Audio 对齐拼接" },
        { en: "Audits prompts and routes generation to H3 or other video tools", zh: "审查提示词，并路由 H3 等视频生成工具" },
      ],
      workflow: [
        { id: "preflight", title: { en: "Pre-flight Lock", zh: "预检锁定" }, desc: { en: "Format, duration, music window, and lyric ownership.", zh: "锁定格式、时长、音乐选段与歌词归属。" } },
        { id: "contract",  title: { en: "Creative Contract", zh: "创意契约" }, desc: { en: "Genre, tempo, vocal mode, camera language, exclusions.", zh: "确定曲风、节奏、演唱方式、镜头语言与排除项。" } },
        { id: "refs",      title: { en: "Reference Roles", zh: "参考图分工" }, desc: { en: "Character, scene, and typography cards each get one narrow job.", zh: "角色、场景、字体包装卡各司其职。" } },
        { id: "grammar",   title: { en: "Style Grammar", zh: "风格语法" }, desc: { en: "Preset visual & editing language, e.g. Dark-pop / Trap hard-cut rules.", zh: "预设视觉与剪辑语法，如 Dark-pop / Trap 硬切规则。" } },
        { id: "script",    title: { en: "Multi-Shot Prompt Script", zh: "多镜头提示词脚本" }, desc: { en: "Per-shot vocal lines, typography, visuals, camera, transitions.", zh: "逐镜头填写歌词、字幕、画面、运镜与转场。" } },
        { id: "stitching", title: { en: "Continuity & Stitching", zh: "连续性与拼接" }, desc: { en: "Five continuity locks bound to one master audio track.", zh: "五条连续性锁定，全部对齐同一主音频。" } },
        { id: "checklist", title: { en: "Checklist", zh: "检查清单" }, desc: { en: "Beat alignment, lip continuity, hard cuts, card isolation.", zh: "校验节拍对齐、口型连续、硬切与参考卡隔离。" } },
        { id: "canvas",    title: { en: "Canvas Lock", zh: "画布锁定" }, desc: { en: "Write the complete MV prompt script to a canvas text node.", zh: "将完整 MV 提示词脚本写入画布文本节点。" } },
        { id: "generate",  title: { en: "Generation & Assembly", zh: "生成与合成" }, desc: { en: "Parallel shot generation, beat-grid editing, unified grade.", zh: "并行生成镜头，按节拍网格剪辑并统一调色。" } },
      ],
      outputs: [
        { en: "MV concept & creative contract", zh: "MV 概念与创意契约" },
        { en: "Multi-shot prompt script", zh: "多镜头分镜提示词脚本" },
        { en: "Lyric typography plan", zh: "歌词文字方案" },
        { en: "Stitching guidance & finished MV", zh: "拼接建议与完整 MV" },
      ],
      bestFor: [
        { en: "Stylized AI music videos", zh: "风格化 AI MV" },
        { en: "Subtitle-driven music visuals", zh: "字幕驱动的音乐视觉" },
        { en: "Fast-paced genres: Trap, Dark-pop, Cyber-grunge…", zh: "Trap / Dark-pop / Cyber-grunge 等快节奏 MV" },
      ],
      notFor: [
        { en: "Ordinary caption cleanup or burn-in", zh: "普通字幕校对与烧录" },
        { en: "Copying licensed IP", zh: "照搬已有 IP" },
        { en: "Fully manual post-production editing", zh: "完全手工后期剪辑" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill music-video-subtitle-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/music-video-subtitle-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/music-video-subtitle-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/music-video-subtitle-generator/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "co-op-game-intro-generator",
      modes: [ { id: "I2VA", en: "Starts from the first frame and develops forward.", zh: "从首帧出发，向前发展画面。" }, ],
      name: "Co-op Game Intro Generator",
      nameZh: "双人游戏开场视频生成器",
      sourceType: "official",
      author: { en: "MiniMax Hub", zh: "MiniMax Hub" },
      version: "0.1.5",
      summary: {
        en: "Create a co-op game intro from player details, character references, and an approved menu style.",
        zh: "根据玩家信息、角色参考图和视觉风格，完成首图确认与界面动效设计，输出双人游戏开场视频。",
      },
      description: {
        en: "For users creating a two-player co-op game menu or opening animation. The skill locks identity cues, generates an approval image from a fixed menu framework with coordinated color, buttons, icons, and typography, then uses the approved result to rebuild the character, UI-copy, and event timing instructions for the final video.",
        zh: "面向想制作双人合作游戏主菜单或开场动画的用户。Skill 会先锁定人物身份特征，基于固定菜单布局生成与色彩、按钮、图标和字体联动的确认首图；用户确认后，回填角色、界面文案和事件节奏，生成完整视频提示词并制作最终开场视频。",
      },
      categories: ["game", "creative"],
      tags: [
        { en: "Creative Generation", zh: "创作生成" },
        { en: "UI Motion", zh: "界面动效" },
        { en: "Character", zh: "角色" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/co-op-game-intro-generator.webp",
        video: "third_party/MiniMax-H3/previews/co-op-game-intro-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/co-op-game-intro-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "Two player names and a game title", zh: "两位玩家名称与游戏名称" },
        { en: "Target visual style: preset or custom", zh: "目标视觉风格：预设或自定义" },
        { en: "Optional character reference images — used for identity cues only", zh: "可选角色参考图（仅用于身份特征映射）" },
      ],
      capabilities: [
        { en: "Locks identity cues from reference images", zh: "从参考图锁定角色身份特征" },
        { en: "Generates an approval image from a fixed menu framework", zh: "基于固定菜单框架生成确认首图" },
        { en: "Coordinated color, buttons, icons & typography system", zh: "色彩、按钮、图标、字体联动的 UI 设计" },
        { en: "Refills character, UI copy & event timing into the final video prompt", zh: "确认后回填角色、界面文案与事件节奏" },
        { en: "Generates the final H3 video & repairs common failures", zh: "生成最终 H3 视频并修复常见失败" },
      ],
      workflow: [
        { id: "style",   title: { en: "Choose Visual Style", zh: "选择视觉风格" }, desc: { en: "Preset or custom; it drives palette, texture, character and UI language.", zh: "预设或自定义风格，驱动色彩、质感、角色与 UI 语言。" } },
        { id: "collect", title: { en: "Collect Player & Game Info", zh: "收集玩家与游戏信息" }, desc: { en: "Player names, game title, optional identity references.", zh: "玩家名称、游戏名称与可选身份参考图。" } },
        { id: "prompt",  title: { en: "Build Confirmation-Image Prompt", zh: "构建确认图提示词" }, desc: { en: "Fill the fixed framework template field by field.", zh: "按固定框架模板逐字段填充。" } },
        { id: "image",   title: { en: "Generate Confirmation Image", zh: "生成确认首图" }, desc: { en: "One image with the framework preserved and style dominant.", zh: "生成一张保留框架、风格鲜明的确认图。" } },
        { id: "approve", title: { en: "Approval Gate", zh: "用户确认" }, desc: { en: "No video until the image is approved.", zh: "首图通过前不生成视频。" } },
        { id: "video",   title: { en: "Refill Prompt & H3 Generation", zh: "回填提示词并 H3 生成" }, desc: { en: "Refill the video template with confirmed data and generate.", zh: "用确认数据回填视频模板并生成最终视频。" } },
        { id: "repair",  title: { en: "Repair Common Failures", zh: "修复常见失败" }, desc: { en: "Unreadable text, identity swaps, face drift, weak style.", zh: "处理文字不清、身份互换、面部漂移、风格偏弱等问题。" } },
      ],
      outputs: [
        { en: "Co-op game intro video with two characters, player cards & menu motion", zh: "含双人角色、玩家信息卡与菜单动效的开场视频" },
        { en: "Approval key image", zh: "确认首图" },
        { en: "Final video generation prompt", zh: "最终视频生成提示词" },
      ],
      bestFor: [
        { en: "Game concept showcases", zh: "游戏概念展示" },
        { en: "Character-led game menus", zh: "角色化游戏主菜单" },
        { en: "Social content", zh: "社交媒体内容" },
      ],
      notFor: [
        { en: "Playable game development", zh: "完整可玩游戏开发" },
        { en: "Complex multi-page UI", zh: "复杂多页面 UI" },
        { en: "Exact brand-logo replication", zh: "精确品牌标识复刻" },
        { en: "Generic character-free title sequences", zh: "无角色的通用片头" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill co-op-game-intro-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/co-op-game-intro-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/co-op-game-intro-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/co-op-game-intro-generator/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "paper-collage-explainer-generator",
      modes: [ { id: "L2VA", en: "Infers a plausible opening and converges to the supplied last frame.", zh: "推断合理开场，收敛至给定尾帧。" }, ],
      name: "Paper Collage Explainer Generator",
      nameZh: "纸拼贴讲解动画生成器",
      sourceType: "official",
      author: { en: "MiniMax Hub", zh: "MiniMax Hub" },
      version: "0.3.9",
      summary: {
        en: "Turn narration or abstract ideas into tactile paper-collage explainer animations.",
        zh: "基于文案或抽象概念，完成隐喻设计、拼贴分镜和动画生成，适用于讲解类内容。",
      },
      description: {
        en: "For creators, educators, and social-video editors who need a tactile visual language for narration, knowledge points, opinions, or abstract topics. The skill extracts meaning, proposes visual metaphors, prepares a production plan and storyboard, generates approval-ready halftone collage stills, then creates stop-motion clips with paper movement and tactile sound effects.",
        zh: "面向内容创作者、教育讲解者和社交视频编辑，用触感纸拼贴语言表现口播句、知识点、观点或抽象主题。Skill 会提炼含义与视觉隐喻，制定制作方案和分镜，生成可确认的半调纸拼贴静帧，再制作带纸片滑入、弹入、轻敲、压平和摩擦声的停格动画片段。",
      },
      categories: ["education", "creative"],
      tags: [
        { en: "Full Production", zh: "成片制作" },
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Collage", zh: "拼贴" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/paper-collage-explainer-generator.webp",
        video: "third_party/MiniMax-H3/previews/paper-collage-explainer-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/paper-collage-explainer-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "Source copy, story beats, or a core concept", zh: "短文案、故事节点或核心概念" },
        { en: "Optional aspect ratio, duration & palette", zh: "可选画幅、时长与色调" },
        { en: "Audio needs — tactile collage SFX kept by default", zh: "音频需求：默认保留拼贴触感音效" },
      ],
      capabilities: [
        { en: "Extracts meaning, emotion & visual metaphors", zh: "提炼含义、情绪与视觉隐喻" },
        { en: "Production plan with Gate-1 approval", zh: "制定制作方案（Gate 1 确认）" },
        { en: "Approval-ready halftone collage stills (Gate 2)", zh: "生成可确认的半调拼贴静帧（Gate 2）" },
        { en: "Stop-motion clips with tactile paper movement & SFX", zh: "制作带纸片运动与触感音效的定格片段" },
        { en: "No BGM / voiceover / subtitles unless explicitly requested", zh: "默认不加 BGM、旁白与字幕，除非明确要求" },
        { en: "Optional final assembly into a complete explainer", zh: "可选合成完整讲解视频" },
      ],
      workflow: [
        { id: "parse",   title: { en: "Parse the Input", zh: "解析输入" }, desc: { en: "Core meaning, emotion, action verb, metaphor, key objects.", zh: "提炼核心含义、情绪、动作动词、隐喻与关键物体。" } },
        { id: "plan",    title: { en: "Production Plan · Gate 1", zh: "制作方案 · Gate 1" }, desc: { en: "Brief, metaphors, beat track, storyboard — approved before any media.", zh: "简报、隐喻、节拍轨与分镜，确认后才生成媒体。" } },
        { id: "specs",   title: { en: "Still-Frame Specs", zh: "静帧规格" }, desc: { en: "Self-contained visual specification per segment.", zh: "为每个片段编写独立视觉规格。" } },
        { id: "stills",  title: { en: "Approve Stills · Gate 2", zh: "静帧确认 · Gate 2" }, desc: { en: "One final-frame still per approved segment.", zh: "每个片段生成一张未来成片最后一帧的静帧。" } },
        { id: "motion",  title: { en: "Stop-Motion Plan", zh: "定格组装计划" }, desc: { en: "Piece-by-piece assembly ending on the approved still.", zh: "逐片组装，最终停在确认静帧构图。" } },
        { id: "clips",   title: { en: "Generate Clips", zh: "生成片段" }, desc: { en: "≈4s clips with collage SFX; H3 is the default model.", zh: "约 4 秒片段，带拼贴音效，默认 H3 生成。" } },
        { id: "review",  title: { en: "Quality Review", zh: "质量审查" }, desc: { en: "Metaphor clarity, texture control, batch consistency.", zh: "检查隐喻可读性、质感控制与批次一致性。" } },
        { id: "deliver", title: { en: "Assembly & Delivery", zh: "合成与交付" }, desc: { en: "Optional multi-clip assembly; SFX preserved by default.", zh: "可选多片段合成，默认保留原拼贴音效。" } },
      ],
      outputs: [
        { en: "Paper-collage animation clips or assembled explainer", zh: "纸拼贴动画片段或完整讲解视频" },
        { en: "Approved still frames", zh: "确认静帧" },
        { en: "Production plan & storyboard", zh: "制作方案与分镜" },
      ],
      bestFor: [
        { en: "Explainers & viewpoints", zh: "讲解类与观点表达内容" },
        { en: "Story visuals & abstract topics", zh: "故事视觉与抽象主题" },
        { en: "Social B-roll", zh: "社交媒体 B-roll" },
      ],
      notFor: [
        { en: "Realistic presenter ads", zh: "真人口播广告" },
        { en: "Precisely editable layer files", zh: "精确可编辑图层文件" },
        { en: "Complex typography systems", zh: "复杂文字排版系统" },
        { en: "Prompt-only handoff", zh: "仅输出提示词的任务" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill paper-collage-explainer-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/paper-collage-explainer-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/paper-collage-explainer-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/paper-collage-explainer-generator/SKILL.cn.md",
        docs: [],
      },
    },

    {
      slug: "handdrawn-live-video-generator",
      modes: [ { id: "T2VA", en: "Builds the full audiovisual timeline from text.", zh: "从文本构建完整视听时间线。" }, ],
      name: "Handdrawn Live-Action Fusion Video Generator",
      nameZh: "手绘实拍融合视频生成器",
      sourceType: "official",
      author: { en: "Community user, featured in the official repo", zh: "社区用户创作，官方仓库精选" },
      version: "1.0.2",
      summary: {
        en: "Create H3-ready prompts for hand-drawn animation interacting with live-action scenes.",
        zh: "基于场景创意，生成手绘动画与实拍接触变形的 15 秒视频，适用于创意短片制作。",
      },
      description: {
        en: "For creators making surreal short videos that blend rough glowing hand-drawn animation with real-world footage. The skill clarifies the interaction, designs continuous morphing and chase action, writes a reusable 15-second 16:9 video prompt in the user's language, recommends MiniMax H3 after confirmation, and checks contact realism, camera delay, texture, and non-horror tone.",
        zh: "面向希望制作手绘动画与实拍空间融合短片的创作者。Skill 会明确触碰关系，设计连续变形、逃跑路线和慢半拍手持追拍，整理为用户输入语言的 15 秒 16:9 视频提示词；确认后建议使用 MiniMax H3 生成，并检查接触真实感、镜头延迟、笔触质感和非恐怖调性。",
      },
      categories: ["creative", "animation"],
      tags: [
        { en: "Creative Generation", zh: "创作生成" },
        { en: "Live-Action Fusion", zh: "实拍融合" },
        { en: "15s Format", zh: "15 秒格式" },
      ],
      languages: ["en", "zh"],
      preview: {
        poster: "third_party/MiniMax-H3/previews/handdrawn-live-video-generator.webp",
        video: "third_party/MiniMax-H3/previews/handdrawn-live-video-generator.mp4",
        sourceUrl: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/assets/handdrawn-live-video-generator.gif",
        caption: { en: "Official demo GIF from the MiniMax-H3 repository", zh: "来自 MiniMax-H3 官方仓库的演示 GIF" },
      },
      inputs: [
        { en: "A scene idea — an everyday, trackable live-action space", zh: "场景创意：生活化、可连续追踪的实拍空间" },
        { en: "Contact object or hand action", zh: "接触对象或手部动作" },
        { en: "Desired mood", zh: "情绪氛围" },
        { en: "Optional language or style constraints", zh: "可选语言与风格限制" },
      ],
      capabilities: [
        { en: "Clarifies the physical contact between animation and live action", zh: "明确手绘动画与实拍的触碰关系" },
        { en: "Designs continuous morphing chains, escape routes & delayed chase camera", zh: "设计连续变形链路、逃跑路线与慢半拍追拍" },
        { en: "Writes a structured 15s 16:9 prompt in the user's language", zh: "以用户语言输出结构化 15 秒 16:9 提示词" },
        { en: "Invents a fresh creative combination on every run", zh: "每次运行都创造全新的创意组合" },
        { en: "Recommends H3 generation after confirmation & checks tone and texture", zh: "确认后建议 H3 生成，并检查质感与调性" },
      ],
      workflow: [
        { id: "intent",  title: { en: "Understand Intent", zh: "理解意图" }, desc: { en: "Read the request as same-language workflow constraints.", zh: "将需求理解为同语言的工作流约束。" } },
        { id: "invent",  title: { en: "Invent the Creative Combo", zh: "创造全新创意组合" }, desc: { en: "New space, entity, color, morph chain, contact, route, reactions, ending.", zh: "全新空间、实体、色彩、变形链、接触方式、路线、反应与结尾。" } },
        { id: "format",  title: { en: "Structured 11-Part Prompt", zh: "结构化 11 段提示词" }, desc: { en: "Fixed paragraph order from opening sentence to ambient sound.", zh: "从开头句到环境音，按固定段落顺序输出。" } },
        { id: "confirm", title: { en: "User Confirmation", zh: "用户确认" }, desc: { en: "Deliver the prompt plus one next-step recommendation; wait.", zh: "交付提示词与一句下一步建议，等待确认。" } },
        { id: "generate",title: { en: "H3 Generation & Check", zh: "H3 生成与检查" }, desc: { en: "Generate with H3; verify contact, morphing, camera delay, texture.", zh: "用 H3 生成并验证接触、变形、镜头延迟与笔触质感。" } },
      ],
      outputs: [
        { en: "15s 16:9 video prompt in the user's language", zh: "用户语言的 15 秒 16:9 视频提示词" },
        { en: "Hand-drawn × live-action fusion video", zh: "手绘实拍融合视频" },
      ],
      bestFor: [
        { en: "Single-scene creative clips", zh: "单场景创意短片" },
        { en: "Surreal everyday moments", zh: "超现实的生活感瞬间" },
      ],
      notFor: [
        { en: "Polished CG", zh: "精致 CG" },
        { en: "Horror jump scares", zh: "恐怖跳吓" },
        { en: "Plush characters", zh: "毛绒角色" },
        { en: "Multi-scene editing", zh: "多场景剪辑" },
      ],
      install: {
        command: "npx skills add https://github.com/MiniMax-AI/MiniMax-H3 --skill handdrawn-live-video-generator",
      },
      sources: {
        repository: "https://github.com/MiniMax-AI/MiniMax-H3",
        skillDir: "https://github.com/MiniMax-AI/MiniMax-H3/tree/main/skills/handdrawn-live-video-generator",
        skillMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/handdrawn-live-video-generator/SKILL.md",
        skillCnMd: "https://github.com/MiniMax-AI/MiniMax-H3/blob/main/skills/handdrawn-live-video-generator/SKILL.cn.md",
        docs: [],
      },
    },
  ],
};
