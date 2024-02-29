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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.ribbon': PageRibbon;
    }
  }
}
