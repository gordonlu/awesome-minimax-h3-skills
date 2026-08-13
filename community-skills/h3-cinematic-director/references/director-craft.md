# Director Craft 手册

本手册是 h3-cinematic-director 的主体。全部条目来自已验证的生成轮次（鲸鱼/铁骑/战机）——带 ✅ 的措辞是已跑通的写法，带 ⚠️ 的是踩过的坑。

---

## 1. 节拍架构（Beat Architecture）

**定律：一段视频只有一个高潮。** 峰值拍放在全片 70–90% 处；峰值前节拍只能递进，不许提前泄劲。

- 每拍 ≥1.4s（模型可读的最小表达窗口）；7s 片 = 5 拍，10s 片 = 6 拍
- 速度三明治：慢拍必须被快拍夹住，任何一拍不得使用主体慢镜（慢镜=AI 感重灾区）
- 至少一拍是真实速度（full real-time speed / natural real-time speed ✅）——真实速度是 AI 感的解药
- 节奏概览行（素材/模式/时长/节奏）与正文必须一致，验收时逐项对

**叙事弧模板（已验证 ✅，铁骑版）**：
远景建立 → 侧面追拍 → 正面逼近 → 劈镜而过（峰值）→ 身后收束。

## 2. 机位阶梯与掩体换位（Camera Ladder & Mask Reframes）

I2VA/FL2VA 是**单段连续镜头**，没有剪辑点。多视角靠"掩体换位"：让一个视觉掩体（尘墙、光爆、水花、云雾）吞掉画框，镜头在掩体内完成位移，掩体散开后机位已在别处。观众无感知。

- 掩体必须由场景元素自然产生（骑兵尘墙 ✅、马蹄扬尘 ✅、太阳光爆 ✅），禁止黑场/白闪
- 每段机位换位至少 2 种视角差异（高度差 + 轴向差），否则形同抖动
- ⚠️ 最忌：镜头在同一高度同一轴向上匀速平移 7 秒（单调）；更忌：贴地横移突然拔成俯拍（跳切感）

**机位人格清单**（从低到高张力）：
1. 远景漂移——低速横移让主体在画框内变大（建立纵深）
2. 侧面追拍——与主体同速并行，锁定主体焦点、背景横移
3. 正面逼近——机位在主体路径前方，主体向镜头放大（压迫感峰值）
4. 劈镜而过——主体从镜头两侧穿过/绕开（包围感）
5. 身后收束——机位在主体后方，主体远去缩小（谢幕）

**运动表达规则**：
- 追拍防糊：镜头锁主体、背景横移（"the lens locking the riders in crisp focus as the plain streaks past" ✅）
- 机位永不悬空：贴地机位写"at ankle height / lens skims the sand / at saddle height" ✅
- 速度表达靠前景滚动：低机位让前景纹理/沙粒掠过画框底部 ✅

## 3. 接地五件套（Grounding Kit，防漂浮）

漂浮感根因：模型把高速运动渲染成滑行（无接触证据）+ 弱阴影 + 匀速镜头。五件套每拍至少命中两条：

1. **前景纹理滚动**：低机位 + 前景沙/水/草掠过画框底（"coarse foreground grain streaks past the bottom of the frame, pinning the speed to the ground" ✅）
2. **接触点显式化**：每步写落地动作与反作用（"hooves visibly striking and digging into the sand with every stride, each contact kicking a distinct puff of dust" ✅）
3. **手持抖动**：随接触节奏抖动（"with a handheld jolt, shaking with the hoofbeats" ✅）
4. **机位不悬空**：机位高度由场景锚定（踝高/鞍高/贴沙），不写"overlooking"一类悬空视角 ⚠️
5. **地面光影锚**：背光下地面长影与剪影（"long shadows streaming behind them in the low golden light" ✅）

## 4. 防模糊旋钮（Blur Levers）

高速横向运动的软化，一半是模型固有，一半可压：

- **锁定焦点追拍**：主体锐、背景横移——相对运动不叠加 ✅
- **前景粒子降密度**："sand and clods whipping past the lens" → "only light sand spray washing past the lens" ✅（高速前景粒子=模糊磁铁）
- **机速与主速解耦**：追拍不行就降机速让主体拉开距离（牺牲速度感，最后动）
- 模糊判别法：暂停帧主体清晰而运动中有拖影=模型动态软化；单帧就发肉=参考图软/分辨率不足，回查参考图

## 5. 光线纪律（Lighting Discipline）

- **光源先钉死再写画面**：太阳位置（"sun pinned to the right horizon"）、方向、颜色一次写死，全片不得漂移 ⚠️（光位漂移=强烈 AI 感）
- **背光/逆光优先**：史诗感=剪影+轮廓光+丁达尔（"silhouetted against the low sun" ✅、"haze-diffused diagonal shafts" ✅）
- 光效词（丁达尔/体积光）必须是"穿过某物自然弥散"，不得凭空冒光 ⚠️（凭空光柱=败笔）
- 坏词进 Constraints 段：glowing、magic、ethereal、dreamy 一类的空泛浪漫词删干净

## 6. 防 AI 滑行清单（Anti-Glide Checklist）

生成结果逐帧暂停检查，命中即返工：

- [ ] 主体全程有接触证据（无漂浮/悬空/滑动）
- [ ] 速度由环境表达（前景滚动/尘埃方向/水花），非主体匀速平移
- [ ] 无均匀运动：任何镜头移动都有动机（跟随、躲闪、被撞击）
- [ ] 无对称构图病（主体永远居中、双翼对称）
- [ ] 无面光均匀（全片正面光无阴影=塑料感）
- [ ] 峰值拍无 morph（拉伸/融化/多肢）
- [ ] 画面中每个元素都能在 prompt 中找到出处（无凭空物）

## 7. 物理自洽校对（Physics Self-Consistency）

图和视频同查，四向互验：

- **光向**：光源位置 → 受光面正确；同帧同景不得出现两套光影方向
- **阴影**：影长与光位角度一致（低角度光=长影）；阴影方向全片恒定
- **反射**：水面/金属/玻璃的高光点与光位一致
- **尘埃/粒子方向**：尘埃、烟、水花的运动方向与气流/行进方向一致（"dust trailing behind the column" ✅）

⚠️ 经典矛盾案例：P-IMG 写"云海为底"+"云顶裂口投下光柱"=两层云物理矛盾，模型必画成碎棉花；改为"低角度阳光穿过雾霭自然弥散"后一次通过。

**云层词汇纪律**：连续平滑云海=uniform stratus-like sheet / one continuous surface / smooth cloud ocean；禁词：stratocumulus（本身即细胞状纹理的学名）、cumulus、cauliflower、puffs、cells——这些词会把云海带成碎棉花。

## 8. 声音方向（Soundscape Taste）

- overall_soundscape：三层法——①主体层（马蹄雷动/气流呼啸）②环境层（旗帜裂响/金属碰撞）③峰值点缀（一声号角/一次爆鸣），峰值拍必须有声音顶点 ✅
- non_diegetic_music：只给方向和形状，不给具体曲目（"driving percussion and low brass accelerating to the pass-by, cutting into a low rumble on the wide reset" ✅）
- 声音与节拍同步：音乐加速段对应峰值拍，收束拍对应余音衰减
