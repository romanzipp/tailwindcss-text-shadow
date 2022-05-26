const plugin = require('tailwindcss/plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const Color = require('color');

export default plugin(({ addUtilities, theme }) => {
    const rules = {};

    const iterateColors = (colors) => {
        Object.keys(colors).forEach((name) => {
            const colorData = colors[name];

            if (typeof colorData !== 'object') {
                return;
            }

            // Check if the color object keys only contain numbers (not nested object containing more color objects)
            const isNested = Object.keys(colorData).filter((key) => Number.isNaN(key)).length > 0;

            if (isNested) {
                iterateColors(colorData);
                return;
            }

            Object.keys(colorData).forEach((weight) => {
                if (typeof colorData[weight] !== 'string') {
                    return;
                }

                const parsedColor = Color(colorData[weight]).rgb().array();

                rules[`.text-shadow-${name}-${weight}`] = {
                    '--tw-text-shadow-color': `${parsedColor.join(' ')}`,
                };
            });
        });
    };

    const sizes = {
        DEFAULT: '5',
        sm: '3',
        md: '10',
        lg: '20',
        xl: '30',
    };

    const opacities = ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100'];

    rules['.text-shadow'] = {
        textShadow: 'rgba(var(--tw-text-shadow-color) / var(--tw-text-shadow-color-opacity)) 0 0 var(--tw-text-shadow-blur)',
        '--tw-text-shadow-blur': `${sizes.DEFAULT}px`,
        '--tw-text-shadow-color': '#000',
        '--tw-text-shadow-color-opacity': '1',
    };

    opacities.forEach((opacity) => {
        rules[`.text-shadow-opacity-${opacity}`] = {
            '--tw-text-shadow-color-opacity': `${opacity / 100}`,
        };
    });

    Object.keys(sizes).filter((size) => size !== 'DEFAULT').forEach((size) => {
        rules[`.text-shadow-${size}`] = {
            '--tw-text-shadow-blur': `${sizes[size]}px`,
        };
    });

    iterateColors(
        theme('colors'),
    );

    addUtilities(rules);
});
