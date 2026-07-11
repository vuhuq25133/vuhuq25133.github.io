// FC Online Skills Guide - Database & Logic
const SKILLS_DATA = [
  // --- 1 STAR ---
  {
    id: "tung-bong-1",
    name: "Tung bóng",
    category: "1★",
    keyboard: "C + ấn Z",
    controller: "Giữ LT + Đẩy RB"
  },
  {
    id: "directional-nutmeg",
    name: "Directional nutmeg",
    category: "1★",
    keyboard: "Giữ Z Giữ X + ArrowKeys hoặc Giữ Z Giữ Q + SHIFT + ArrowKeys",
    controller: "Giữ RB + Giữ LB + RS[directions]"
  },
  // --- 2 STARS ---
  {
    id: "roll-ball",
    name: "Roll Ball",
    category: "2★",
    keyboard: "SHIFT + Giữ ← / →",
    controller: "Giữ RS ← / →"
  },
  {
    id: "hanh-dong-lua",
    name: "Hành động lừa",
    category: "2★",
    keyboard: "SHIFT + nhấn ← / →",
    controller: "RS nảy ← / →"
  },
  {
    id: "keo-lui-bong",
    name: "Drag Back (Giật Z)",
    category: "2★",
    keyboard: "Z + ↓",
    controller: "RB + LB + LS Gạt ↓"
  },
  {
    id: "reverse-stepover",
    name: "Reverse Stepover",
    category: "2★",
    keyboard: "SHIFT + → ↗ ↑ / ← ↖ ↑",
    controller: "RS → ↗ ↑ / ← ↖ ↑"
  },
  {
    id: "stepover",
    name: "Stepover",
    category: "2★",
    keyboard: "SHIFT + ↑ ↗ → / ↑ ↖ ←",
    controller: "RS ↑ ↗ → / ↑ ↖ ←"
  },
  {
    id: "feint-forward-and-turn",
    name: "Feint Forward and Turn (Quay đầu)",
    category: "2★",
    keyboard: "SHIFT + ↓ ↓",
    controller: "RS ↓ ↓"
  },
  {
    id: "drag-to-drag",
    name: "Drag to Drag",
    category: "2★",
    keyboard: "Giữ SHIFT + ↓",
    controller: "Giữ RS ↓"
  },
  {
    id: "side-heel-flick",
    name: "Side Heel Flick",
    category: "2★",
    keyboard: "Giữ X + ← → / → ← hoặc Giữ Q + SHIFT + ← → / → ←",
    controller: "Giữ LB + RS ← → / → ←"
  },
  {
    id: "feint-and-exit",
    name: "Feint and Exit",
    category: "2★",
    keyboard: "Giữ X + ← ↓ → / → ↓ ← hoặc Giữ Q + SHIFT + ← ↓ → / → ↓ ←",
    controller: "Giữ LB + RS ← ↓ → / → ↓ ←"
  },
  {
    id: "big-feint-trickster",
    name: "Big Feint (Trickster)",
    category: "2★",
    keyboard: "Giữ CAPS + → → / ← ← hoặc Giữ C + SHIFT + → → / ← ←",
    controller: "Giữ LT + RS → → / ← ←"
  },
  // --- 3 STARS ---
  {
    id: "di-chuyen-sau-lua",
    name: "Di chuyển sang sau hành động lừa",
    category: "3★",
    keyboard: "SHIFT + ← ↙ ↓ ↘ → / → ↘ ↓ ↙ ←",
    controller: "RS ← ↙ ↓ ↘ → / → ↘ ↓ ↙ ←"
  },
  {
    id: "nhich-bong-3",
    name: "Nhích bóng",
    category: "3★",
    keyboard: "SHIFT + gạt lên ↑ ↑ ↑",
    controller: "RS gạt lên ↑ ↑ ↑"
  },
  {
    id: "marseille-roulette",
    name: "Marseille Roulette",
    category: "3★",
    keyboard: "SHIFT + ↓ ↙ ← ↖ ↑ ↗ → / ↓ ↘ → ↗ ↑ ↖ ←",
    controller: "RS ↓ ↙ ← ↖ ↑ ↗ → / ↓ ↘ → ↗ ↑ ↖ ←"
  },
  {
    id: "stutter-feint",
    name: "Stutter Feint",
    category: "3★",
    keyboard: "Giữ CAPS + → ← hoặc Giữ C + SHIFT + → ←",
    controller: "Giữ LT + RS → ←"
  },
  {
    id: "one-foot-spin",
    name: "One Foot Spin",
    category: "3★",
    keyboard: "Giữ X + ↓ → / ↓ ← hoặc Giữ Q + SHIFT + ↓ → / ↓ ←",
    controller: "Giữ LB + RS ↓ → / ↓ ←"
  },
  {
    id: "three-touch-roulette",
    name: "Three Touch Roulette",
    category: "3★",
    keyboard: "Giữ CAPS + ↓ → / ↓ ← hoặc Giữ C + SHIFT + ↓ → / ↓ ←",
    controller: "Giữ LT + RS ↓ → / ↓ ←"
  },
  {
    id: "phantom-dribble",
    name: "Phantom Dribble",
    category: "3★",
    keyboard: "Giữ X + → (Giữ) / ← (Giữ) hoặc Giữ Q + SHIFT + → (Giữ) / ← (Giữ)",
    controller: "Giữ LB + RS → (Giữ) / ← (Giữ)"
  },
  {
    id: "ball-roll-turn",
    name: "Ball Roll Turn",
    category: "3★",
    keyboard: "Giữ X + ↓ → ↑ / ↓ ← ↑ hoặc Giữ Q + SHIFT + ↓ → ↑ / ↓ ← ↑",
    controller: "Giữ LB + RS ↓ → ↑ / ↓ ← ↑"
  },
  {
    id: "heel-flick-3",
    name: "Heel Flick",
    category: "3★",
    keyboard: "SHIFT + gạt ↑ ↓",
    controller: "RS gạt ↑ ↓"
  },
  {
    id: "explosive-stepover-trickster",
    name: "Explosive Stepover (Trickster)",
    category: "3★",
    keyboard: "Giữ X + ↑ ↗ → / ↑ ↖ ← hoặc Giữ Q + SHIFT + ↑ ↗ → / ↑ ↖ ←",
    controller: "Giữ LB + RS ↑ ↗ → / ↑ ↖ ←"
  },
  // --- 4 STARS ---
  {
    id: "tang-bong-qua-dau-4",
    name: "Tâng bóng qua đầu",
    category: "4★",
    keyboard: "SHIFT + Gạt ↓ Giữ ↑ Flick ↑",
    controller: "Gạt RS ↓ Giữ ↑ Gạt ↑"
  },
  {
    id: "blanco-dung",
    name: "Blanco (Dừng)",
    category: "4★",
    keyboard: "SHIFT + nhấn nhẹ `",
    controller: "RS click"
  },
  {
    id: "keo-bong",
    name: "Kéo bóng",
    category: "4★",
    keyboard: "SHIFT + Giữ ← Nhấn → / Giữ → Nhấn ←",
    controller: "RS Giữ ← LS Nẩy → / Giữ → LS Nẩy ←"
  },
  {
    id: "di-chuyen-sau-lua-4",
    name: "Dẫn banh sang sau khi lừa",
    category: "4★",
    keyboard: "SHIFT + ← ↙ ↓ ↘ → / → ↘ ↓ ↙ ←",
    controller: "RS ← ↙ ↓ ↘ → / → ↘ ↓ ↙ ←"
  },
  {
    id: "dao-got-running",
    name: "Đảo bóng bằng gót (đang chạy)",
    category: "4★",
    keyboard: "C + A + S / C + D + S",
    controller: "LT + X + A / LT + B + A"
  },
  {
    id: "rainbow-4",
    name: "Rainbow",
    category: "4★",
    keyboard: "SHIFT + ấn ↓ ↑ ↑",
    controller: "RS nháy ↓ ↑ ↑"
  },
  {
    id: "re",
    name: "Rẽ",
    category: "4★",
    keyboard: "Giữ Z + SHIFT + ↓ ← ↑ / ↑ → ↓",
    controller: "Giữ RB + RS ↓ ← ↑ / ↑ → ↓"
  },
  {
    id: "dung-be-huong-running",
    name: "Dừng và bẻ hướng (đang chạy)",
    category: "4★",
    keyboard: "SHIFT + ấn ↑ ← / ↑ →",
    controller: "RS ấn ↑ ấn ← / ấn →"
  },
  {
    id: "neymar-stepover-stop",
    name: "Neymar stepover (stop)",
    category: "4★",
    keyboard: "SHIFT + giữ ← / → sau đó bấm ↑",
    controller: "RS Giữ ← / → kế LS nẩy ↑"
  },
  {
    id: "v-drag-movement-stop",
    name: "V drag movement (stop state)",
    category: "4★",
    keyboard: "Giữ E + A + SHIFT + S + ↑ → / D + SHIFT + S + ↑ ←",
    controller: "Giữ RT + X + A + LS ↗ → / B + A + LS ↑ ←"
  },
  {
    id: "heel-chop-turn",
    name: "Heel Chop Turn",
    category: "4★",
    keyboard: "Giữ C + A / D + S + ↓",
    controller: "Giữ LT + X / B + A + LS ↓"
  },
  {
    id: "drag-to-heel",
    name: "Drag to Heel",
    category: "4★",
    keyboard: "Giữ X + ↑ + ← / → hoặc Giữ Q + SHIFT + ↑ + ← / →",
    controller: "Giữ LB + RS ↑ + ← / →"
  },
  {
    id: "four-touch-skill",
    name: "Four Touch Skill",
    category: "4★",
    keyboard: "Giữ CAPS + ↓ ↓ hoặc Giữ C + SHIFT + ↓ ↓",
    controller: "Giữ LT + RS ↓ ↓"
  },
  {
    id: "skill-bridge",
    name: "Skill Bridge",
    category: "4★",
    keyboard: "Giữ CAPS + ↑ ↓ hoặc Giữ C + SHIFT + ↑ ↓",
    controller: "Giữ LT + RS ↑ ↓"
  },
  {
    id: "heel-to-ball-roll",
    name: "Heel to Ball Roll",
    category: "4★",
    keyboard: "Giữ X + ↑ ↓ / ↓ ↑ hoặc Giữ Q + SHIFT + ↑ ↓ / ↓ ↑",
    controller: "Giữ LB + RS ↑ ↓ / ↓ ↑"
  },
  {
    id: "ball-roll-cut",
    name: "Ball roll cut",
    category: "4★",
    keyboard: "Giữ X + ↓ ↓ hoặc Giữ Q + SHIFT + ↓ ↓",
    controller: "Giữ LB + RS ↓ ↓"
  },
  {
    id: "stepover-ball-trickster",
    name: "Stepover Ball (Trickster)",
    category: "4★",
    keyboard: "Giữ Z + SHIFT + → → / ← ←",
    controller: "Giữ RB + RS → → / ← ←"
  },
  // --- 5 STARS ---
  {
    id: "quick-ball-roll",
    name: "Quick ball roll",
    category: "5★",
    keyboard: "SHIFT + bấm ↓",
    controller: "RS bấm ↓"
  },
  {
    id: "hocus-pocus",
    name: "Hocus Pocus",
    category: "5★",
    keyboard: "SHIFT + ↓ ↙ ← ↙ ↓ ↘ →",
    controller: "RS ↓ ↙ ← ↙ ↓ ↘ →"
  },
  {
    id: "triple-elastico",
    name: "Triple Elastico",
    category: "5★",
    keyboard: "SHIFT + ↓ ↘ → ↘ ↓ ↙ ←",
    controller: "RS ↓ ↘ → ↘ ↓ ↙ ←"
  },
  {
    id: "keo-bong-qua-lai",
    name: "Kéo quả bóng",
    category: "5★",
    keyboard: "SHIFT + Giữ ← Gạt ↗ / Giữ → nhấn ↖",
    controller: "Giữ RS ← Gạt ↑ / Giữ → gạt ↑"
  },
  {
    id: "huong-di-chuyen-keo-bong",
    name: "Hướng di chuyển kéo bóng",
    category: "5★",
    keyboard: "SHIFT + Giữ ← nhấn và nhấn → / Giữ → nhấn và nhấn ←",
    controller: "Giữ RS ← Nhấn và nháy → / Giữ RS → nhấn và gạt ←"
  },
  {
    id: "juggling-skill",
    name: "Juggling",
    category: "5★",
    keyboard: "C + Giữ Z",
    controller: "LT + giữ RB"
  },
  {
    id: "around-the-world-juggling",
    name: "Around the world (Juggling)",
    category: "5★",
    keyboard: "SHIFT + Hướng (theo / ngược chiều kim đồng hồ)",
    controller: "Xoay RS theo / ngược chiều kim đồng hồ"
  },
  {
    id: "in-air-elastico",
    name: "In Air Elastico (juggling)",
    category: "5★",
    keyboard: "SHIFT + gạt → gạt ←",
    controller: "RS gạt → gạt ←"
  },
  {
    id: "station-air-elastico",
    name: "The station's Air Elastico (juggling)",
    category: "5★",
    keyboard: "SHIFT + ấn ← ấn →",
    controller: "RS ấn ← ấn →"
  },
  {
    id: "tang-dau-chuan-bi-vole",
    name: "Tâng qua đầu và chuẩn bị cho cú vô lê",
    category: "5★",
    keyboard: "C + giữ ↑",
    controller: "Giữ LS ↑"
  },
  {
    id: "nhan-bong-nguc-tung-hung",
    name: "Nhận bóng trong ngực của bạn (tung hứng)",
    category: "5★",
    keyboard: "C + ↑ + R giữ + nhấn nhẹ ` x3",
    controller: "LS ↑ + LS giữ + nhấn nhẹ RS x3"
  },
  {
    id: "t-around-the-world",
    name: "T. Around the World (juggling)",
    category: "5★",
    keyboard: "SHIFT + ClockwiseArrow (Thuận chiều) sau đó SHIFT + gạt ↑",
    controller: "Xoay cần RS theo chiều kim đồng hồ và sau đó nhấn nhấn RS ↑"
  },
  {
    id: "waka-waka",
    name: "Waka Waka",
    category: "5★",
    keyboard: "SHIFT + → ↗ ↑ + ← hoặc SHIFT + ← ↖ ↑ + →",
    controller: "RS → ↗ ↑ + LS ← hoặc RS ← ↖ ↑ + LS →"
  },
  {
    id: "elastico-5",
    name: "Elastico",
    category: "5★",
    keyboard: "SHIFT + → ↘ ↓ ↙ ←",
    controller: "RS → ↘ ↓ ↙ ←"
  },
  {
    id: "inelastatico-5",
    name: "Inelastatico",
    category: "5★",
    keyboard: "SHIFT + ← ↙ ↓ ↘ →",
    controller: "RS ← ↙ ↓ ↘ →"
  },
  {
    id: "okocha-sombrero",
    name: "Okocha Sombrero (halt)",
    category: "5★",
    keyboard: "SHIFT + ấn ↑",
    controller: "RS gạt ↑"
  },
  {
    id: "bolasie-flick",
    name: "Bolasie Flick",
    category: "5★",
    keyboard: "SHIFT + Giữ Z + Đẩy ↑ , ← / →",
    controller: "Giữ RB + RS Nẩy ↑ , ← / →"
  },
  {
    id: "turn-spin",
    name: "Turn spin",
    category: "5★",
    keyboard: "SHIFT + ấn ↑ ← / ↑ →",
    controller: "RS ấn ↑ ấn ← / ấn →"
  },
  {
    id: "cancel-lifting-stop",
    name: "Cancel lifting (stop)",
    category: "5★",
    keyboard: "SHIFT + ấn ↑ ↑ ↓",
    controller: "RS ấn ↑ ↑ ↓"
  },
  {
    id: "fake-rabona",
    name: "Fake RABONA",
    category: "5★",
    keyboard: "C + D/A + S + ↓",
    controller: "Giữ LT + X/B + A + LS ↓"
  },
  {
    id: "scoop-turn-fake",
    name: "Scoop Turn Fake",
    category: "5★",
    keyboard: "AS / DS + ↗ ↘ / ↘ ↗",
    controller: "XA / BA + LS ↗ ↘ / ↘ ↗"
  },
  {
    id: "first-time-spin",
    name: "First Time Spin",
    category: "5★",
    keyboard: "Giữ Q + Giữ Z",
    controller: "Giữ LB + Giữ RB"
  },
  {
    id: "ball-roll-fake-turn",
    name: "Ball Roll Fake Turn",
    category: "5★",
    keyboard: "Giữ CAPS + ↑ ← → hoặc Giữ C + SHIFT + ↑ ← →",
    controller: "Giữ LT + RS ↑ ← →"
  },
  {
    id: "drag-back-sombrero",
    name: "Drag Back Sombrero",
    category: "5★",
    keyboard: "dragback(Giữ Z + ↓) + `",
    controller: "dragback(Giữ RB + LB + LS ↓) + RS click"
  },
  {
    id: "heel-fake-standing",
    name: "Heel Fake (Khi đứng)",
    category: "5★",
    keyboard: "Giữ CAPS + → ← hoặc Giữ C + SHIFT + → ←",
    controller: "Giữ LT + RS → ←"
  },
  {
    id: "ball-roll-drag",
    name: "Ball Roll Drag",
    category: "5★",
    keyboard: "SHIFT + ↓ ← / ↓ →",
    controller: "RS ↓ ← / ↓ →"
  },
  {
    id: "flair-nutmeg",
    name: "Flair Nutmeg",
    category: "5★",
    keyboard: "Giữ C + Z + Hướng",
    controller: "Giữ LT + RB + LS + Hướng"
  },
  {
    id: "elastico-variation",
    name: "Elastico Variation",
    category: "5★",
    keyboard: "Giữ Z + SHIFT + → ↘ ↓ ↙ ←",
    controller: "Giữ RB + RS → ↘ ↓ ↙ ←"
  },
  {
    id: "alternate-elastico-chop",
    name: "Alternate Elastico Chop",
    category: "5★",
    keyboard: "Giữ Z + SHIFT + ↓ → / ↓ ←",
    controller: "Giữ RB + RS ↓ → / ↓ ←"
  },
  {
    id: "toe-drag-stepover-trickster",
    name: "Toe Drag Stepover (Trickster)",
    category: "5★",
    keyboard: "Giữ X + → → / ← ← hoặc Giữ Q + SHIFT + → → / ← ←",
    controller: "Giữ LB + RS → → / ← ←"
  },
  // --- 6 STARS ---
  {
    id: "el-tornado",
    name: "El Tornado",
    category: "6★",
    keyboard: "Giữ X + ↑(Gạt nhẹ)← →(Giữ) hoặc Giữ Q + SHIFT + ↑(Gạt nhẹ)← →(Giữ)",
    controller: "Giữ LB + RS ↑(Gạt) ← →(Giữ)"
  },
  {
    id: "rainbow-neymar",
    name: "Rainbow Neymar",
    category: "6★",
    keyboard: "SHIFT + ↓ + ↑ + ↑(Búng)",
    controller: "RS ↓ + ↑ + ↑(Búng)"
  },
  // --- TÂNG BÓNG 3★ ---
  {
    id: "tb-co-ban-phia-truoc",
    name: "Tâng bóng cơ bản về phía trước",
    category: "Tâng Bóng 3★",
    keyboard: "` + ↑",
    controller: "RS click + ↑"
  },
  {
    id: "tb-phong-truoc-phai",
    name: "Tâng bóng phía trước bên phải",
    category: "Tâng Bóng 3★",
    keyboard: "` + ↗",
    controller: "RS click + ↗"
  },
  {
    id: "tb-ben-phai-typo",
    name: "Tâng bóng bên phải",
    category: "Tâng Bóng 3★",
    keyboard: "` + →",
    controller: "RS click + →"
  },
  {
    id: "tb-co-ban-ben-phai",
    name: "Tâng bóng cơ bản về bên phải",
    category: "Tâng Bóng 3★",
    keyboard: "` + ↘",
    controller: "RS click + ↘"
  },
  {
    id: "tb-co-ban-down",
    name: "Tâng bóng cơ bản",
    category: "Tâng Bóng 3★",
    keyboard: "` + ↓",
    controller: "RS click + ↓"
  },
  {
    id: "tb-co-ban-ben-trai",
    name: "Tâng bóng cơ bản về bên trái",
    category: "Tâng Bóng 3★",
    keyboard: "` + ↙",
    controller: "RS click + ↙"
  },
  {
    id: "tb-ben-trai",
    name: "Tâng bóng bên trái",
    category: "Tâng Bóng 3★",
    keyboard: "` + ←",
    controller: "RS click + ←"
  },
  {
    id: "tb-phia-truoc-ben-trai",
    name: "Tâng bóng phía trước bên trái",
    category: "Tâng Bóng 3★",
    keyboard: "` + ↖",
    controller: "RS click + ↖"
  },
  // --- TÂNG BÓNG 4★ ---
  {
    id: "tb-rainbow",
    name: "Rainbow",
    category: "Tâng Bóng 4★",
    keyboard: "` , ↑",
    controller: "RS click , ↑"
  },
  {
    id: "tb-drag-outside-foot",
    name: "Drag Outside Foot (Khi đứng yên)",
    category: "Tâng Bóng 4★",
    keyboard: "` + ↑ hoặc ↗",
    controller: "RS click + ↑ hoặc ↗"
  },
  {
    id: "tb-double-thigh-360",
    name: "Double Thigh 360 độ",
    category: "Tâng Bóng 4★",
    keyboard: "` + ← hoặc ↗",
    controller: "RS click + ← hoặc ↗"
  },
  {
    id: "tb-ball-roll",
    name: "Ball Roll",
    category: "Tâng Bóng 4★",
    keyboard: "` + → / ↖",
    controller: "RS click + → / ↖"
  },
  {
    id: "tb-sombrero",
    name: "Sombrero",
    category: "Tâng Bóng 4★",
    keyboard: "` + ↘ hoặc ↓ hoặc ↙",
    controller: "RS click + ↘ hoặc ↓ hoặc ↙"
  },
  // --- TÂNG BÓNG 5★+ ---
  {
    id: "tb-around-world-standing",
    name: "Around the world Flick (Standing)",
    category: "Tâng Bóng 5★+",
    keyboard: "` + ↑",
    controller: "RS click + ↑"
  },
  {
    id: "tb-drag-back-spin",
    name: "Drag Back Spin",
    category: "Tâng Bóng 5★+",
    keyboard: "` + ↑",
    controller: "RS click + ↑"
  },
  {
    id: "tb-ball-roll-spin",
    name: "Ball Roll Spin",
    category: "Tâng Bóng 5★+",
    keyboard: "` + → / ←",
    controller: "RS click + → / ←"
  },
];

// Token definitions for rendering
const KEYBOARD_KEYS = ["SHIFT", "Z", "X", "C", "Q", "CAPS", "A", "S", "D", "E", "R", "`", "W", "F", "ArrowKeys"];
const CONTROLLER_KEYS = ["LT", "RT", "LB", "RB", "A", "B", "X", "Y", "LS", "RS", "RS click", "RS[directions]"];
const ARROWS = ["↑", "↓", "←", "→", "↖", "↗", "↘", "↙"];

// Parse raw string instruction into styled HTML elements
function parseInstructionToHTML(text, type) {
  if (!text) return `<span class="empty-action">Không có dữ liệu</span>`;

  // Check if we should split by "hoặc"
  const hasOr = text.toLowerCase().includes(" hoặc ");
  const shouldSplit = hasOr && (text.includes("+") || text.length > 20);

  if (shouldSplit) {
    const parts = text.split(/\shoặc\s/i);
    // Parse each part
    const htmlPart1 = parseSingleInstruction(parts[0], type);
    const htmlPart2 = parseSingleInstruction(parts[1], type);
    return `
      <div class="split-instruction-container">
        <div class="split-row row-upper">${htmlPart1}</div>
        <div class="split-row row-middle"><span class="or-keyword">hoặc</span></div>
        <div class="split-row row-lower">${htmlPart2}</div>
      </div>
    `;
  }

  return parseSingleInstruction(text, type);
}

function parseSingleInstruction(text, type) {
  // Pre-process common composite texts into simple clean text tokens (no HTML!)
  let processed = text;
  processed = processed.replace(/RS\[directions\]/g, "RS_DIRECTIONS");
  processed = processed.replace(/LS\(direction\)/g, "LS_DIRECTION");

  // Token splitting regex (added _ to support RS_DIRECTIONS and LS_DIRECTION)
  const regex = /(\+|,|hoặc|giữ|Giữ|ấn|Ấn|nhấn|Nhấn|sau khi nhấn|sau khi bấm|sau đó nhấn|rồi nhấn|nhấn tiếp tục|kế|nhấn nhẹ|nhấn và nhấn|nhấn và gạt|nhấn và nháy|gạt lên|gạt|Gạt|nẩy|Nẩy|nảy|Nảy|nháy|Nháy|bấm|Bấm|đẩy|Đẩy|xoay|Xoay|xoay cần|Xoay cần|x3|sau đó|đầu|và|chuẩn bị cho cú vô lê|Trong ngực của bạn \(tung hứng\)|Khi đứng yên|khi đứng yên|đang chạy|Đang chạy|đối với Trickster|Chỉ dành cho Trickster|Chỉ dành cho|Trickster|\(|\)|↑|↓|←|→|↖|↗|↘|↙|[\p{L}\p{N}_`\/]+)/gu;

  const tokens = processed.split(regex);
  let html = "";

  tokens.forEach(token => {
    if (!token || token.trim() === "") {
      if (token === " ") html += " ";
      return;
    }

    const cleanToken = token.trim();

    // Check if it is a basic connector or modifier word
    const isKeyword = [
      "giữ", "Giữ", "ấn", "Ấn", "nhấn", "Nhấn", "sau khi nhấn", "sau khi bấm", "sau đó nhấn",
      "rồi nhấn", "nhấn tiếp tục", "kế", "nhấn nhẹ", "nhấn và nhấn", "nhấn và gạt", "nhấn và nháy",
      "gạt lên", "gạt", "Gạt", "nẩy", "Nẩy", "nảy", "Nảy", "nháy", "Nháy", "bấm", "Bấm", "đẩy", "Đẩy",
      "xoay", "Xoay", "xoay cần", "Xoay cần", "x3", "sau đó", "đầu", "và",
      "chuẩn bị cho cú vô lê", "Trong ngực của bạn (tung hứng)", "Khi đứng yên",
      "khi đứng yên", "đang chạy", "Đang chạy", "đối với Trickster",
      "Chỉ dành cho Trickster", "Chỉ dành cho", "Trickster", "hoặc"
    ].includes(cleanToken);

    if (cleanToken === "+") {
      html += `<span class="connector plus">+</span>`;
    } else if (cleanToken === ",") {
      html += `<span class="connector comma">,</span>`;
    } else if (cleanToken === "/") {
      html += `<span class="connector slash">/</span>`;
    } else if (cleanToken === "(" || cleanToken === ")") {
      html += `<span class="parenthesis">${cleanToken}</span>`;
    } else if (cleanToken === "RS_DIRECTIONS") {
      html += `<span class="pad-stick stick-rs">RS</span> <span class="arrow-cluster">◀▲▼▶</span>`;
    } else if (cleanToken === "LS_DIRECTION") {
      html += `<span class="pad-stick stick-ls">LS</span> <span class="action-keyword">(hướng)</span>`;
    } else if (cleanToken === "ArrowKeys") {
      html += `<span class="arrow-cluster">◀▲▼▶</span>`;
    } else if (cleanToken === "dragback") {
      html += `<span class="action-keyword">dragback</span>`;
    } else if (isKeyword) {
      const klass = cleanToken === "hoặc" ? "or-keyword" : "action-keyword";
      html += `<span class="${klass}">${cleanToken}</span>`;
    } else if (ARROWS.includes(cleanToken)) {
      html += `<span class="arrow-key arrow-${getArrowClass(cleanToken)}">${cleanToken}</span>`;
    } else {
      // Check Keyboard vs Controller button mappings
      if (type === "keyboard") {
        if (KEYBOARD_KEYS.includes(cleanToken) || cleanToken.length === 1) {
          html += `<kbd class="keycap">${cleanToken}</kbd>`;
        } else {
          html += `<span class="normal-text">${cleanToken}</span>`;
        }
      } else {
        // Controller
        if (["LT", "RT", "LB", "RB"].includes(cleanToken)) {
          html += `<span class="pad-trigger trigger-${cleanToken.toLowerCase()}">${cleanToken}</span>`;
        } else if (["A", "B", "X", "Y"].includes(cleanToken)) {
          html += `<span class="pad-btn btn-${cleanToken.toLowerCase()}">${cleanToken}</span>`;
        } else if (cleanToken === "LS") {
          html += `<span class="pad-stick stick-ls">LS</span>`;
        } else if (cleanToken === "RS") {
          html += `<span class="pad-stick stick-rs">RS</span>`;
        } else if (cleanToken === "RS click") {
          html += `<span class="pad-stick stick-rs stick-click">RS Click</span>`;
        } else if (cleanToken === "x3") {
          html += `<span class="action-keyword badge-x3">x3</span>`;
        } else {
          html += `<span class="normal-text">${cleanToken}</span>`;
        }
      }
    }
  });

  return html;
}

function getArrowClass(arrow) {
  const mapping = {
    "↑": "up",
    "↓": "down",
    "←": "left",
    "→": "right",
    "↖": "up-left",
    "↗": "up-right",
    "↘": "down-right",
    "↙": "down-left"
  };
  return mapping[arrow] || "up";
}

// UI Elements & State management
let activeCategory = "1★";
let selectedSkill = null;

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  setupSearch();
  loadCategory(activeCategory);

  // Set default selection to first skill in the default category
  const defaultSkills = SKILLS_DATA.filter(s => s.category === activeCategory);
  if (defaultSkills.length > 0) {
    selectSkill(defaultSkills[0]);
  }

  // Enable mouse wheel horizontal scrolling on scrollable combinations and categories navbar
  document.addEventListener("wheel", (e) => {
    const scrollContainer = e.target.closest('.instruction-display, .split-row, .navbar-categories');
    if (scrollContainer) {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    }
  }, { passive: false });

  // Setup sidebar dragging resize functionality
  setupSidebarResizer();
});

// Setup Top Navbar Categories
function setupNavbar() {
  const navContainer = document.getElementById("navbar-categories");
  const categories = [...new Set(SKILLS_DATA.map(s => s.category))];

  // Custom sorting to match exact game menu order
  const categoryOrder = ["1★", "2★", "3★", "4★", "5★", "6★", "Tâng Bóng 3★", "Tâng Bóng 4★", "Tâng Bóng 5★+"];
  categories.sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

  navContainer.innerHTML = "";
  categories.forEach((cat, index) => {
    const tab = document.createElement("button");
    tab.className = `nav-tab ${cat === activeCategory ? "active" : ""}`;
    tab.innerText = cat;
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Update state and UI
      activeCategory = cat;
      loadCategory(activeCategory);
    });
    navContainer.appendChild(tab);
  });
}

// Load skills list in sidebar
function loadCategory(category) {
  const sidebar = document.getElementById("skills-sidebar");
  sidebar.innerHTML = "";

  const filteredSkills = SKILLS_DATA.filter(s => s.category === category);

  if (filteredSkills.length === 0) {
    sidebar.innerHTML = `<div class="empty-list">Không tìm thấy kỹ thuật nào</div>`;
    return;
  }

  filteredSkills.forEach((skill) => {
    const item = document.createElement("div");
    item.className = `skill-item ${selectedSkill && selectedSkill.id === skill.id ? "selected" : ""}`;
    item.dataset.id = skill.id;

    // Skill name & star/type badge
    item.innerHTML = `
      <div class="skill-item-info">
        <span class="skill-item-name">${skill.name}</span>
        <span class="skill-item-badge">${skill.category}</span>
      </div>
    `;

    item.addEventListener("click", () => {
      selectSkill(skill);
    });

    sidebar.appendChild(item);
  });

  // Automatically select first item in category if none is selected, or if selected is not in this category
  if (filteredSkills.length > 0) {
    const currentlySelectedInFiltered = filteredSkills.find(s => selectedSkill && s.id === selectedSkill.id);
    if (!currentlySelectedInFiltered) {
      selectSkill(filteredSkills[0]);
    }
  }
}

// Select a skill and display details
function selectSkill(skill) {
  selectedSkill = skill;

  // Highlight selected in sidebar
  document.querySelectorAll(".skill-item").forEach(item => {
    if (item.dataset.id === skill.id) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });

  // Populate detail section
  const detailName = document.getElementById("detail-skill-name");
  const detailCategory = document.getElementById("detail-skill-category");
  const detailKeyboard = document.getElementById("detail-keyboard-container");
  const detailController = document.getElementById("detail-controller-container");

  detailName.innerText = skill.name;
  detailCategory.innerText = skill.category;

  // Add neon glow border animation on change
  const detailPanel = document.querySelector(".detail-panel");
  detailPanel.classList.remove("fade-in");
  void detailPanel.offsetWidth; // Trigger reflow to restart animation
  detailPanel.classList.add("fade-in");

  // Parse HTML
  detailKeyboard.innerHTML = parseInstructionToHTML(skill.keyboard, "keyboard");
  detailController.innerHTML = parseInstructionToHTML(skill.controller, "controller");
}

// Setup Instant Search Filter
function setupSearch() {
  const searchInput = document.getElementById("skill-search");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query === "") {
      loadCategory(activeCategory);
      return;
    }
    const sidebar = document.getElementById("skills-sidebar");
    sidebar.innerHTML = "";

    // Search across all categories or current? Let's search all matching!
    // But if searching, show search result badge
    const matchedSkills = SKILLS_DATA.filter(skill =>
      skill.name.toLowerCase().includes(query) ||
      skill.category.toLowerCase().includes(query)
    );

    if (matchedSkills.length === 0) {
      sidebar.innerHTML = `<div class="empty-list">Không tìm thấy kỹ thuật phù hợp</div>`;
      return;
    }

    matchedSkills.forEach(skill => {
      const item = document.createElement("div");
      item.className = `skill-item ${selectedSkill && selectedSkill.id === skill.id ? "selected" : ""}`;
      item.dataset.id = skill.id;
      item.innerHTML = `
        <div class="skill-item-info">
          <span class="skill-item-name">${skill.name}</span>
          <span class="skill-item-badge">${skill.category}</span>
        </div>
      `;
      item.addEventListener("click", () => {
        selectSkill(skill);
      });
      sidebar.appendChild(item);
    });
  });
}

// Resizable Sidebar implementation
function setupSidebarResizer() {
  const container = document.querySelector(".app-container");
  const sidebar = document.querySelector(".sidebar");
  const resizer = document.querySelector(".sidebar-resizer");

  if (!resizer || !sidebar || !container) return;

  let isDragging = false;

  resizer.addEventListener("mousedown", (e) => {
    isDragging = true;
    resizer.classList.add("active");
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    let newWidth = e.clientX - containerRect.left;

    // Boundaries: min 180px, max 500px to ensure good proportion
    if (newWidth < 180) newWidth = 180;
    if (newWidth > 500) newWidth = 500;

    sidebar.style.width = `${newWidth}px`;
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      resizer.classList.remove("active");
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  });
}
