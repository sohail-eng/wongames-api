import type { Struct, Schema } from '@strapi/strapi';

export interface PageSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    highlight: Schema.Attribute.Component<'page.highlight', false>;
  };
}

export interface PageRibbon extends Struct.ComponentSchema {
  collectionName: 'components_page_ribbons';
  info: {
    displayName: 'Ribbon';
    icon: 'stack';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    color: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    size: Schema.Attribute.Enumeration<['small', 'normal']> &
      Schema.Attribute.DefaultTo<'normal'>;
  };
}

export interface PagePopularGames extends Struct.ComponentSchema {
  collectionName: 'components_page_popular_games';
  info: {
    displayName: 'PopularGames';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    highlight: Schema.Attribute.Component<'page.highlight', false>;
    games: Schema.Attribute.Relation<'oneToMany', 'api::game.game'>;
  };
}

export interface PageHighlight extends Struct.ComponentSchema {
  collectionName: 'components_page_highlights';
  info: {
    displayName: 'Highlight';
    icon: 'star';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    floatImage: Schema.Attribute.Media<'images'>;
    buttonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    alignment: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
  };
}

export interface PageButton extends Struct.ComponentSchema {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Buy now'>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.section': PageSection;
      'page.ribbon': PageRibbon;
      'page.popular-games': PagePopularGames;
      'page.highlight': PageHighlight;
      'page.button': PageButton;
    }
  }
}
