# 实战措辞库（Field Notes）

本文件是 h3-micro-cinematic-director 的配套附录：收录此前多轮真实生成迭代（鲸鱼/铁骑/战机）中**已跑通或已验证失效**的措辞与教训。主手册负责导演方法论，本库只负责"哪些词真的管用"。

## A. 接地措辞（防漂浮，已验证 ✅）

- 前景速度锚：`coarse foreground grain streaks past the bottom of the frame, pinning the speed to the ground`
- 接触点显式化：`hooves visibly striking and digging into the sand with every stride, each contact kicking a distinct puff of dust`
- 手持随动：`with a handheld jolt, shaking with the hoofbeats`
- 机位贴地：`at ankle height` / `lens skims the sand` / `at saddle height`
- 地面光影锚：`long shadows streaming behind them in the low golden light`

## B. 追拍防模糊（已验证 ✅）

- 锁定焦点：`the lens locking the riders in crisp focus as the plain streaks past`
- 前景粒子降密度：`only light sand spray washing past the lens`（"sand and clods whipping past the lens" 是模糊磁铁，禁）
- 判定法：暂停帧清晰+运动拖影=模型动态软化；单帧发肉=参考图软，回查参考图

## C. 光线纪律（已验证 ✅ / ⚠️）

- 光源先钉死：`sun pinned to the right horizon`——光位漂移是强 AI 感
- 背光剪影：`silhouetted against the low sun` ✅
- 体积光必须"穿过某物自然弥散"：`haze-diffused diagonal shafts` ✅；凭空光柱 ⚠️
- 坏词进 Constraints：glowing / magic / ethereal / dreamy

## D. 云层词汇纪律（图与视频同查，已验证 ⚠️→✅）

- 连续平滑云海：`uniform stratus-like sheet` / `one continuous surface` / `smooth cloud ocean`
- 禁词：**stratocumulus**（本身就是细胞状纹理的学名，写了必出碎棉花）、cumulus、cauliflower、puffs、cells
- 物理矛盾案例：云海为底+云顶裂口光柱=两层云，必崩；改"低角度阳光穿过雾霭弥散"一次通过

## E. 声音形状（已验证 ✅）

- 三层法：主体层（马蹄雷动）+ 环境层（旗帜裂响）+ 峰值点缀（一声号角）
- music 只给方向：`driving percussion and low brass accelerating to the pass-by, cutting into a low rumble on the wide reset`

## F. 教训（⚠️）

- 同一拍内堆多个机位行为（横向追拍+升空收束）会突兀——换位必须由掩体（尘/光/水）吞画完成，且全片遵守主手册 Rule 4（单一主导机位行为）
- 视频 prompt 与参考图必须零矛盾互查：光位、阴影方向、尘埃方向、云层结构四项
