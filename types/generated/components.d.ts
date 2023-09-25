import type { Schema, Attribute } from '@strapi/strapi';

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Attribute.DefaultTo<'Comprar'>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageConcepts extends Schema.Component {
  collectionName: 'components_page_concepts';
  info: {
    displayName: 'concepts';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'React Avan\u00E7ado'>;
    description: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'page.button'> & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PageModules extends Schema.Component {
  collectionName: 'components_page_modules';
  info: {
    displayName: 'modules';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface PagePricingBox extends Schema.Component {
  collectionName: 'components_page_pricing_boxes';
  info: {
    displayName: 'pricingBox';
    icon: 'shoppingCart';
  };
  attributes: {
    totalPrice: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<415>;
    numberInstallments: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<6>;
    priceInstallments: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<48>;
    benefits: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Create items as bullet list'>;
    button: Attribute.Component<'page.button'> & Attribute.Required;
  };
}

export interface PageQuestions extends Schema.Component {
  collectionName: 'components_page_questions';
  info: {
    displayName: 'questions';
    icon: 'seed';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.RichText & Attribute.Required;
  };
}

export interface PageReviews extends Schema.Component {
  collectionName: 'components_page_reviews';
  info: {
    displayName: 'reviews';
    icon: 'message';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    photo: Attribute.Media;
  };
}

export interface PageSectionAboutProject extends Schema.Component {
  collectionName: 'components_page_section_about_projects';
  info: {
    displayName: 'sectionAboutProject';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
  };
}

export interface PageSectionAboutUs extends Schema.Component {
  collectionName: 'components_page_section_aboutuses';
  info: {
    displayName: 'sectionAboutUs';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    authors: Attribute.Relation<
      'page.section-about-us',
      'oneToMany',
      'api::author.author'
    >;
  };
}

export interface PageSectionAgenda extends Schema.Component {
  collectionName: 'components_page_section_agenda';
  info: {
    displayName: 'sectionAgenda';
    icon: 'calendar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface PageSectionConcepts extends Schema.Component {
  collectionName: 'components_page_section_concepts';
  info: {
    displayName: 'sectionConcepts';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    concepts: Attribute.Component<'page.concepts', true> & Attribute.Required;
  };
}

export interface PageSectionFaq extends Schema.Component {
  collectionName: 'components_page_section_faqs';
  info: {
    displayName: 'sectionFaq';
    icon: 'shirt';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    questions: Attribute.Component<'page.questions', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
      }>;
  };
}

export interface PageSectionModules extends Schema.Component {
  collectionName: 'components_page_section_modules';
  info: {
    displayName: 'sectionModules';
    icon: 'server';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    modules: Attribute.Component<'page.modules', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
      }>;
  };
}

export interface PageSectionReviews extends Schema.Component {
  collectionName: 'components_page_section_reviews';
  info: {
    displayName: 'sectionReviews';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    reviews: Attribute.Component<'page.reviews', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 4;
      }>;
  };
}

export interface PageSectionTech extends Schema.Component {
  collectionName: 'components_page_section_teches';
  info: {
    displayName: 'sectionTech';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    techIcons: Attribute.Component<'page.tech-icons', true> &
      Attribute.Required;
  };
}

export interface PageSocialLinks extends Schema.Component {
  collectionName: 'components_page_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'manyToOne';
  };
  attributes: {
    title: Attribute.Enumeration<
      ['Github', 'Twitter(X)', 'Dribbble', 'LinkedIn', 'Facebook']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Github'>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageTechIcons extends Schema.Component {
  collectionName: 'components_page_tech_icons';
  info: {
    displayName: 'techIcons';
    icon: 'bulletList';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.concepts': PageConcepts;
      'page.header': PageHeader;
      'page.modules': PageModules;
      'page.pricing-box': PagePricingBox;
      'page.questions': PageQuestions;
      'page.reviews': PageReviews;
      'page.section-about-project': PageSectionAboutProject;
      'page.section-about-us': PageSectionAboutUs;
      'page.section-agenda': PageSectionAgenda;
      'page.section-concepts': PageSectionConcepts;
      'page.section-faq': PageSectionFaq;
      'page.section-modules': PageSectionModules;
      'page.section-reviews': PageSectionReviews;
      'page.section-tech': PageSectionTech;
      'page.social-links': PageSocialLinks;
      'page.tech-icons': PageTechIcons;
    }
  }
}
