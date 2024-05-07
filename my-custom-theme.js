import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "8px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #8FFF8C 
        "--color-primary-50": "238 255 238", // #eeffee
        "--color-primary-100": "233 255 232", // #e9ffe8
        "--color-primary-200": "227 255 226", // #e3ffe2
        "--color-primary-300": "210 255 209", // #d2ffd1
        "--color-primary-400": "177 255 175", // #b1ffaf
        "--color-primary-500": "143 255 140", // #8FFF8C
        "--color-primary-600": "129 230 126", // #81e67e
        "--color-primary-700": "107 191 105", // #6bbf69
        "--color-primary-800": "86 153 84", // #569954
        "--color-primary-900": "70 125 69", // #467d45
        // secondary | #FFD984 
        "--color-secondary-50": "255 249 237", // #fff9ed
        "--color-secondary-100": "255 247 230", // #fff7e6
        "--color-secondary-200": "255 246 224", // #fff6e0
        "--color-secondary-300": "255 240 206", // #fff0ce
        "--color-secondary-400": "255 228 169", // #ffe4a9
        "--color-secondary-500": "255 217 132", // #FFD984
        "--color-secondary-600": "230 195 119", // #e6c377
        "--color-secondary-700": "191 163 99", // #bfa363
        "--color-secondary-800": "153 130 79", // #99824f
        "--color-secondary-900": "125 106 65", // #7d6a41
        // tertiary | #9B6F1D 
        "--color-tertiary-50": "240 233 221", // #f0e9dd
        "--color-tertiary-100": "235 226 210", // #ebe2d2
        "--color-tertiary-200": "230 219 199", // #e6dbc7
        "--color-tertiary-300": "215 197 165", // #d7c5a5
        "--color-tertiary-400": "185 154 97", // #b99a61
        "--color-tertiary-500": "155 111 29", // #9B6F1D
        "--color-tertiary-600": "140 100 26", // #8c641a
        "--color-tertiary-700": "116 83 22", // #745316
        "--color-tertiary-800": "93 67 17", // #5d4311
        "--color-tertiary-900": "76 54 14", // #4c360e
        // success | #1de60f 
        "--color-success-50": "221 251 219", // #ddfbdb
        "--color-success-100": "210 250 207", // #d2facf
        "--color-success-200": "199 249 195", // #c7f9c3
        "--color-success-300": "165 245 159", // #a5f59f
        "--color-success-400": "97 238 87", // #61ee57
        "--color-success-500": "29 230 15", // #1de60f
        "--color-success-600": "26 207 14", // #1acf0e
        "--color-success-700": "22 173 11", // #16ad0b
        "--color-success-800": "17 138 9", // #118a09
        "--color-success-900": "14 113 7", // #0e7107
        // warning | #ecbf36 
        "--color-warning-50": "252 245 225", // #fcf5e1
        "--color-warning-100": "251 242 215", // #fbf2d7
        "--color-warning-200": "250 239 205", // #faefcd
        "--color-warning-300": "247 229 175", // #f7e5af
        "--color-warning-400": "242 210 114", // #f2d272
        "--color-warning-500": "236 191 54", // #ecbf36
        "--color-warning-600": "212 172 49", // #d4ac31
        "--color-warning-700": "177 143 41", // #b18f29
        "--color-warning-800": "142 115 32", // #8e7320
        "--color-warning-900": "116 94 26", // #745e1a
        // error | #d42b2b 
        "--color-error-50": "249 223 223", // #f9dfdf
        "--color-error-100": "246 213 213", // #f6d5d5
        "--color-error-200": "244 202 202", // #f4caca
        "--color-error-300": "238 170 170", // #eeaaaa
        "--color-error-400": "225 107 107", // #e16b6b
        "--color-error-500": "212 43 43", // #d42b2b
        "--color-error-600": "191 39 39", // #bf2727
        "--color-error-700": "159 32 32", // #9f2020
        "--color-error-800": "127 26 26", // #7f1a1a
        "--color-error-900": "104 21 21", // #681515
        // surface | #001824 
        "--color-surface-50": "217 220 222", // #d9dcde
        "--color-surface-100": "204 209 211", // #ccd1d3
        "--color-surface-200": "191 197 200", // #bfc5c8
        "--color-surface-300": "153 163 167", // #99a3a7
        "--color-surface-400": "77 93 102", // #4d5d66
        "--color-surface-500": "0 24 36", // #001824
        "--color-surface-600": "0 22 32", // #001620
        "--color-surface-700": "0 18 27", // #00121b
        "--color-surface-800": "0 14 22", // #000e16
        "--color-surface-900": "0 12 18", // #000c12

    }
}