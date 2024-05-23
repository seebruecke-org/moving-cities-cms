import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBrevoNewsletterForm extends Schema.Component {
  collectionName: 'components_blocks_brevo_newsletter_forms';
  info: {
    displayName: 'Brevo newsletter form';
    icon: 'cast';
    description: '';
  };
  attributes: {
    terms_label: Attribute.RichText & Attribute.Required;
    success_message: Attribute.RichText & Attribute.Required;
  };
}

export interface BlocksCollapsible extends Schema.Component {
  collectionName: 'components_blocks_collapsibles';
  info: {
    displayName: 'Collapsible';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
  };
}

export interface BlocksDownloadSection extends Schema.Component {
  collectionName: 'components_blocks_download_sections';
  info: {
    displayName: 'Download Section';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Component<'blocks.richtext'>;
    media: Attribute.Component<'helper.media', true>;
  };
}

export interface BlocksFollow extends Schema.Component {
  collectionName: 'components_blocks_follows';
  info: {
    icon: 'broadcast-tower';
    description: '';
    displayName: 'Follow';
  };
  attributes: {
    items: Attribute.Component<'follow.follower-item', true> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksIntro extends Schema.Component {
  collectionName: 'components_blocks_intros';
  info: {
    icon: 'align-center';
    displayName: 'Intro';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    align_left: Attribute.Boolean;
  };
}

export interface BlocksLogoGrid extends Schema.Component {
  collectionName: 'components_logo_grid_logo_grids';
  info: {
    icon: 'border-all';
    description: '';
    displayName: 'Logo Grid';
  };
  attributes: {
    item: Attribute.Component<'logo-grid.item', true> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface BlocksMedia extends Schema.Component {
  collectionName: 'components_blocks_media';
  info: {
    icon: 'images';
    description: '';
    displayName: 'Media';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
  };
}

export interface BlocksMultiCollapsible extends Schema.Component {
  collectionName: 'components_blocks_multi_collapsibles';
  info: {
    displayName: 'Multi Collapsible';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    collapsibles: Attribute.Component<'blocks.collapsible', true>;
  };
}

export interface BlocksNetworksSummary extends Schema.Component {
  collectionName: 'components_blocks_networks_summaries';
  info: {
    icon: 'democrat';
    description: '';
    displayName: 'NetworksSummary';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
  };
}

export interface BlocksPartner extends Schema.Component {
  collectionName: 'components_blocks_partners';
  info: {
    icon: 'glass-cheers';
    displayName: 'Partner';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    icon: 'comment-alt';
    displayName: 'Quote';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface BlocksRichtext extends Schema.Component {
  collectionName: 'components_blocks_richtexts';
  info: {
    icon: 'align-left';
    displayName: 'Richtext';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface BlocksSection extends Schema.Component {
  collectionName: 'components_blocks_sections';
  info: {
    icon: 'book';
    description: '';
    displayName: 'Section';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Component<'blocks.richtext'>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
  };
  attributes: {
    team_member: Attribute.Component<'team.team-member', true>;
  };
}

export interface BlocksVideoEmbed extends Schema.Component {
  collectionName: 'components_blocks_video_embeds';
  info: {
    displayName: 'Video Embed';
    icon: 'play';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface CityReport extends Schema.Component {
  collectionName: 'components_city_reports';
  info: {
    icon: 'book-open';
    description: '';
    displayName: 'report';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    intro: Attribute.RichText & Attribute.Required;
  };
}

export interface CityTakeaway extends Schema.Component {
  collectionName: 'components_city_takeaways';
  info: {
    icon: 'bolt';
    displayName: 'takeaway';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface FollowFollowerItem extends Schema.Component {
  collectionName: 'components_follow_follower_items';
  info: {
    icon: 'arrow-right';
    displayName: 'follower-item';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
    target: Attribute.String & Attribute.Required;
  };
}

export interface FooterPageItem extends Schema.Component {
  collectionName: 'components_footer_page_items';
  info: {
    displayName: 'Page item';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    about: Attribute.Relation<
      'footer.page-item',
      'oneToOne',
      'api::about.about'
    >;
  };
}

export interface HelperMedia extends Schema.Component {
  collectionName: 'components_helper_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface HelperSocialMetadata extends Schema.Component {
  collectionName: 'components_helper_social_metadata';
  info: {
    icon: 'book-reader';
    displayName: 'social-metadata';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    image: Attribute.Media;
  };
}

export interface HelperSummary extends Schema.Component {
  collectionName: 'components_helper_summaries';
  info: {
    icon: 'list';
    description: '';
    displayName: 'summary';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface IntroHighlightApproach extends Schema.Component {
  collectionName: 'components_intro_highlight_approaches';
  info: {
    displayName: 'Highlight - Approach';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    approach: Attribute.Relation<
      'intro.highlight-approach',
      'oneToOne',
      'api::approach.approach'
    >;
  };
}

export interface IntroHighlightCity extends Schema.Component {
  collectionName: 'components_intro_highlight_cities';
  info: {
    displayName: 'Highlight - City';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    city: Attribute.Relation<
      'intro.highlight-city',
      'oneToOne',
      'api::city.city'
    >;
  };
}

export interface IntroHighlightNetwork extends Schema.Component {
  collectionName: 'components_intro_highlight_networks';
  info: {
    displayName: 'Highlight - Network';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    network: Attribute.Relation<
      'intro.highlight-network',
      'oneToOne',
      'api::network.network'
    >;
  };
}

export interface IntroHighlightNewsEntry extends Schema.Component {
  collectionName: 'components_intro_highlight_news_entries';
  info: {
    displayName: 'Highlight - News Entry';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    news_entry: Attribute.Relation<
      'intro.highlight-news-entry',
      'oneToOne',
      'api::news-entry.news-entry'
    >;
  };
}

export interface LogoGridItem extends Schema.Component {
  collectionName: 'components_logo_grid_items';
  info: {
    icon: 'cannabis';
    displayName: 'item';
    description: '';
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    url: Attribute.String;
  };
}

export interface MenuItem extends Schema.Component {
  collectionName: 'components_menu_items';
  info: {
    icon: 'angle-right';
    displayName: 'item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    page: Attribute.Enumeration<
      [
        'cities',
        'featuredCities',
        'networks',
        'approaches',
        'search',
        'news',
        'about'
      ]
    > &
      Attribute.Required;
  };
}

export interface TeamTeamMember extends Schema.Component {
  collectionName: 'components_team_team_members';
  info: {
    displayName: 'Team-Member';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText;
    email: Attribute.Email;
    phone: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.brevo-newsletter-form': BlocksBrevoNewsletterForm;
      'blocks.collapsible': BlocksCollapsible;
      'blocks.download-section': BlocksDownloadSection;
      'blocks.follow': BlocksFollow;
      'blocks.intro': BlocksIntro;
      'blocks.logo-grid': BlocksLogoGrid;
      'blocks.media': BlocksMedia;
      'blocks.multi-collapsible': BlocksMultiCollapsible;
      'blocks.networks-summary': BlocksNetworksSummary;
      'blocks.partner': BlocksPartner;
      'blocks.quote': BlocksQuote;
      'blocks.richtext': BlocksRichtext;
      'blocks.section': BlocksSection;
      'blocks.team': BlocksTeam;
      'blocks.video-embed': BlocksVideoEmbed;
      'city.report': CityReport;
      'city.takeaway': CityTakeaway;
      'follow.follower-item': FollowFollowerItem;
      'footer.page-item': FooterPageItem;
      'helper.media': HelperMedia;
      'helper.social-metadata': HelperSocialMetadata;
      'helper.summary': HelperSummary;
      'intro.highlight-approach': IntroHighlightApproach;
      'intro.highlight-city': IntroHighlightCity;
      'intro.highlight-network': IntroHighlightNetwork;
      'intro.highlight-news-entry': IntroHighlightNewsEntry;
      'logo-grid.item': LogoGridItem;
      'menu.item': MenuItem;
      'team.team-member': TeamTeamMember;
    }
  }
}
