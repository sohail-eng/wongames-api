import type { Schema, Attribute } from '@strapi/strapi';

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    Label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Buy now'>;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface PageHighlight extends Schema.Component {
  collectionName: 'components_page_highlights';
  info: {
    displayName: 'Highlight';
    icon: 'star';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SubTitle: Attribute.Text & Attribute.Required;
    Background: Attribute.Media & Attribute.Required;
    FloatImage: Attribute.Media;
    ButtonLabel: Attribute.String & Attribute.Required;
    ButtonLink: Attribute.String & Attribute.Required;
    Alignment: Attribute.Enumeration<['right', 'left']> &
      Attribute.DefaultTo<'right'>;
  };
}

export interface PagePopularGames extends Schema.Component {
  collectionName: 'components_page_popular_games';
  info: {
    displayName: 'PopularGames';
    icon: 'crown';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Highlight: Attribute.Component<'page.highlight', true>;
    games: Attribute.Relation<
      'page.popular-games',
      'oneToMany',
      'api::game.game'
    >;
  };
}

export interface PageRibbon extends Schema.Component {
  collectionName: 'components_page_ribbons';
  info: {
    displayName: 'Ribbon';
    icon: 'stack';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    Color: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
    Size: Attribute.Enumeration<['small', 'normal']> &
      Attribute.DefaultTo<'normal'>;
  };
}

export interface PageSection extends Schema.Component {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Highlight: Attribute.Component<'page.highlight'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.highlight': PageHighlight;
      'page.popular-games': PagePopularGames;
      'page.ribbon': PageRibbon;
      'page.section': PageSection;
    }
  }
}
