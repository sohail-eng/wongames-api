import type { Schema, Attribute } from '@strapi/strapi';

export interface PageSection extends Schema.Component {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    highlight: Attribute.Component<'page.highlight'>;
  };
}

export interface PageRibbon extends Schema.Component {
  collectionName: 'components_page_ribbons';
  info: {
    displayName: 'Ribbon';
    icon: 'stack';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    color: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['small', 'normal']> &
      Attribute.DefaultTo<'normal'>;
  };
}

export interface PagePopularGames extends Schema.Component {
  collectionName: 'components_page_popular_games';
  info: {
    displayName: 'PopularGames';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    highlight: Attribute.Component<'page.highlight'>;
    games: Attribute.Relation<
      'page.popular-games',
      'oneToMany',
      'api::game.game'
    >;
  };
}

export interface PageHighlight extends Schema.Component {
  collectionName: 'components_page_highlights';
  info: {
    displayName: 'Highlight';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.Text & Attribute.Required;
    background: Attribute.Media<'images'> & Attribute.Required;
    floatImage: Attribute.Media<'images'>;
    buttonLabel: Attribute.String & Attribute.Required;
    buttonLink: Attribute.String & Attribute.Required;
    alignment: Attribute.Enumeration<['right', 'left']> &
      Attribute.DefaultTo<'right'>;
  };
}

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Buy now'>;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.section': PageSection;
      'page.ribbon': PageRibbon;
      'page.popular-games': PagePopularGames;
      'page.highlight': PageHighlight;
      'page.button': PageButton;
    }
  }
}
