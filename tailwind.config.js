/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === 神奈川沖浪裏 配色系統 ===

        // 普魯士藍 (Bero-ai) - 主要藍色，波浪深處
        'wave-deep': '#1A3A5C',
        'wave-deep-dark': '#0F2840',

        // 靛藍 (Ai-iro) - 海洋中層
        'wave-mid': '#2D5A7B',

        // 淺藍 (Hanada) - 波浪表面
        'wave-light': '#4A7C9B',

        // 天空藍 (Sora-iro) - 遠方天空
        'sky': '#7BA3B8',
        'sky-pale': '#B8CED8',

        // 浪花白 (Nami-shiro) - 波浪泡沫
        'foam': '#F0F5F7',
        'foam-cream': '#FDF9F3',

        // 和紙色 (Washi) - 背景底色
        'washi': '#F5F1E8',
        'washi-dark': '#E8E2D5',
        'washi-light': '#FDFBF7',

        // 墨色 (Sumi) - 文字與線條
        'sumi': '#1C1C1C',
        'sumi-light': '#3A3A3A',
        'sumi-faded': '#5C5C5C',

        // 朱紅 (Shu-iro) - 印章/強調色
        'vermilion': '#C53D2F',
        'vermilion-dark': '#A32E22',
        'vermilion-light': '#E25545',

        // 黃土 (Oudo) - 木船/次要色
        'ochre': '#C4956A',
        'ochre-light': '#D9B896',
        'ochre-dark': '#A67C52',

        // 山吹色 (Yamabuki) - 金色點綴
        'yamabuki': '#F5A623',
        'yamabuki-light': '#FFD700',

        // 松葉色 (Matsuba) - 綠色點綴
        'pine': '#3D5C3D',
        'pine-light': '#5A7A5A',
      },
      fontFamily: {
        'zen': ['"Zen Kurenaido"', '"Noto Sans JP"', 'sans-serif'],
        'mincho': ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        'noto': ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        // 波浪漸層
        'wave-gradient': 'linear-gradient(180deg, #7BA3B8 0%, #4A7C9B 30%, #2D5A7B 60%, #1A3A5C 100%)',
        // 天空漸層
        'sky-gradient': 'linear-gradient(180deg, #B8CED8 0%, #7BA3B8 100%)',
        // 和紙紋理漸層
        'washi-gradient': 'linear-gradient(135deg, #F5F1E8 0%, #FDF9F3 50%, #E8E2D5 100%)',
      },
      boxShadow: {
        // 浮世繪風格陰影 - 使用深藍色
        'ukiyo': '4px 4px 0px 0px rgba(26, 58, 92, 0.25)',
        'ukiyo-lg': '6px 6px 0px 0px rgba(26, 58, 92, 0.3)',
        'ukiyo-hover': '8px 8px 0px 0px rgba(26, 58, 92, 0.2)',
        // 朱紅印章陰影
        'hanko': '2px 2px 0px 0px rgba(197, 61, 47, 0.4)',
        'hanko-lg': '4px 4px 0px 0px rgba(197, 61, 47, 0.3)',
      },
      borderRadius: {
        'seal': '8px 4px 8px 4px', // 不規則印章形狀
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.3s ease-in-out',
        'bounce-in': 'bounceIn 0.4s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'correct-pulse': 'correctPulse 0.5s ease-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        correctPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.4)' },
          '100%': { boxShadow: '0 0 0 12px rgba(34, 197, 94, 0)' },
        },
      },
    },
  },
  plugins: [],
}
