import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Louder } from './Louder';

export default {
    title: 'shared/Louder',
    component: Louder,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Louder>;

const Template: ComponentStory<typeof Louder> = (args) => <Louder {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
