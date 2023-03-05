import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
};
export const Secondaty = Template.bind({});
Secondaty.args = {
    children: 'Secondaty',
    theme: AppLinkTheme.SECONDARY
};


export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'PrimaryDark',
    theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondatyDark = Template.bind({});
SecondatyDark.args = {
    children: 'SecondatyDark',
    theme: AppLinkTheme.SECONDARY
};
SecondatyDark.decorators = [ThemeDecorator(Theme.DARK)]
