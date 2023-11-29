import { siteConfig } from './lib/site-config';

export default siteConfig({
  rootNotionPageId: '53137c48fa9742ef8057c9171da952f5',
  rootNotionSpaceId: null,
  name: 'guesung blog',
  domain: 'blog.guesung.dev',
  author: 'guesung',
  description: 'guesung blog - developer blog',
  twitter: 'gueit214',
  github: 'guesung',
  linkedin: 'guesung',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  defaultPageIcon:
    null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: false,
  isRedisEnabled: false,
  pageUrlOverrides: null,
  includeNotionIdInUrls: true,
  navigationStyle: 'custom',
  navigationLinks: [
    {

      title: 'Personal Workspace',
      url: 'https://guesung.oopy.io'
    },
  ],

  dateformat: 'yyyy년 MM월 dd일',
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],
  contentPositionTextAlign: 'left',
  defaultTheme: 'system',
  enableComment: true,
});
